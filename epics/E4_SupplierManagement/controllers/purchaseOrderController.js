// ============================================
// Purchase Order Controller
// Epic: E4 - Supplier Management
// Owner: IT24100799 (Gawrawa G H Y)
// Purpose: PO CRUD and tracking (E4.2, E4.3, E4.7)
// ============================================

const PurchaseOrder = require("../models/PurchaseOrder");
const Product = require("../../E2_ProductCatalog/models/Product");
const Inventory = require("../../E5_InventoryManagement/models/Inventory");

// [E4.2] createPurchaseOrder: calculates item totals, generates poNumber, initialises statusHistory
exports.createPurchaseOrder = async (req, res) => {
  try {
    const { supplier, items, expectedDeliveryDate, location, notes } = req.body;

    // [E4.2] Calculate line-item totalPrice and sum to get order totalAmount
    let totalAmount = 0;
    const processedItems = items.map((item) => {
      const totalPrice = item.quantity * item.unitPrice;
      totalAmount += totalPrice;
      return {
        ...item,
        totalPrice,
      };
    });

    // [E4.2] Generate PO number explicitly in controller (duplicates pre-save hook for clarity)
    // Format: PO-YYMM-XXXX — e.g. PO-2402-0001; padStart(4,'0') ensures 4-digit sequence
    const count = await PurchaseOrder.countDocuments();
    const dateStr = new Date().toISOString().slice(2, 7).replace("-", ""); // YYMM
    const poNumber = `PO-${dateStr}-${String(count + 1).padStart(4, "0")}`;

    const purchaseOrder = await PurchaseOrder.create({
      poNumber,
      supplier,
      items: processedItems,
      totalAmount,
      expectedDeliveryDate,
      location,
      notes,
      createdBy: req.user.id,
      // [E4.3] Seed the statusHistory with the initial Pending entry for full audit trail from creation
      statusHistory: [
        {
          status: "Pending",
          changedBy: req.user.id,
          notes: "Purchase order created",
        },
      ],
    });

    await purchaseOrder.populate("supplier items.product");

    res.status(201).json({
      success: true,
      message: "Purchase order created successfully",
      purchaseOrder,
    });
  } catch (error) {
    console.error("Create PO error details:", error);
    res.status(500).json({
      success: false,
      message: "Error creating purchase order",
      details: error.message,
    });
  }
};

// [E4.3] getAllPurchaseOrders: filterable by status and location; populates supplier/product for full details
exports.getAllPurchaseOrders = async (req, res) => {
  try {
    const { status, location } = req.query;
    const filter = {};

    if (status) filter.status = status;
    if (location) filter.location = location;

    const purchaseOrders = await PurchaseOrder.find(filter)
      .populate("supplier createdBy items.product")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: purchaseOrders.length,
      purchaseOrders,
    });
  } catch (error) {
    console.error("Get POs error:", error);
    res
      .status(500)
      .json({ success: false, message: "Error fetching purchase orders" });
  }
};

// [E4.3] updatePOStatus: appends to statusHistory on each transition; Received/Dispatched triggers E5 inventory update
exports.updatePOStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;

    const po = await PurchaseOrder.findById(id);
    if (!po) {
      return res
        .status(404)
        .json({ success: false, message: "Purchase order not found" });
    }

    po.status = status;
    po.statusHistory.push({
      status,
      changedBy: req.user.id,
      notes,
    });

    // If status is Received or Dispatched, update inventory
    if (status === "Received" || status === "Dispatched") {
      po.actualDeliveryDate = Date.now();

      await po.populate("supplier");
      const isOutward =
        po.supplier &&
        (po.supplier.category === "Distributor" ||
          po.supplier.category === "Bookshop");

      // Update inventory for each item (E5.6)
      for (const item of po.items) {
        await Inventory.findOneAndUpdate(
          { product: item.product, location: po.location },
          {
            $inc: { quantity: isOutward ? -item.quantity : item.quantity },
            $push: {
              adjustments: {
                type: isOutward ? "Remove" : "Add",
                quantity: isOutward ? -item.quantity : item.quantity,
                reason: isOutward
                  ? `Dispatched to ${po.supplier.name}`
                  : `PO ${po.poNumber} received`,
                adjustedBy: req.user.id,
                timestamp: Date.now(),
              },
            },
          },
          { upsert: true },
        );
      }
    }

    await po.save();
    await po.populate("supplier items.product");

    res.status(200).json({
      success: true,
      message: "Purchase order updated successfully",
      purchaseOrder: po,
    });
  } catch (error) {
    console.error("Update PO error:", error);
    res
      .status(500)
      .json({ success: false, message: "Error updating purchase order" });
  }
};

// Get Single PO (E4.3)
exports.getPurchaseOrder = async (req, res) => {
  try {
    const { id } = req.params;

    const po = await PurchaseOrder.findById(id).populate(
      "supplier createdBy items.product statusHistory.changedBy",
    );

    if (!po) {
      return res
        .status(404)
        .json({ success: false, message: "Purchase order not found" });
    }

    res.status(200).json({
      success: true,
      purchaseOrder: po,
    });
  } catch (error) {
    console.error("Get PO error:", error);
    res
      .status(500)
      .json({ success: false, message: "Error fetching purchase order" });
  }
};

// Request Payment for PO (E4.7)
exports.requestPayment = async (req, res) => {
  try {
    const { id } = req.params;
    const po = await PurchaseOrder.findById(id);

    if (!po) {
      return res
        .status(404)
        .json({ success: false, message: "Purchase order not found" });
    }

    if (po.status !== "Received") {
      return res.status(400).json({
        success: false,
        message: "Can only request payment for received orders",
      });
    }

    po.paymentRequested = true;
    po.statusHistory.push({
      status: po.status,
      changedBy: req.user.id,
      notes: "Payment requested from Finance",
    });

    await po.save();

    res.status(200).json({
      success: true,
      message: "Payment request sent to finance",
      purchaseOrder: po,
    });
  } catch (error) {
    console.error("Request payment error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
// Email PO to supplier (E4.4)
exports.emailPurchaseOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const po = await PurchaseOrder.findById(id).populate("supplier");

    if (!po) {
      return res
        .status(404)
        .json({ success: false, message: "Purchase order not found" });
    }

    // Logic for sending actual email would go here (e.g., node-mailer)
    // For demo, we mark it as emailed
    po.isEmailed = true;
    po.statusHistory.push({
      status: po.status,
      changedBy: req.user.id,
      notes: "Purchase order emailed to supplier",
    });

    await po.save();

    res.status(200).json({
      success: true,
      message: "PO emailed to supplier successfully",
      purchaseOrder: po,
    });
  } catch (error) {
    console.error("Email PO error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Verify delivery against PO (E4.7)
exports.verifyDelivery = async (req, res) => {
  try {
    const { id } = req.params;
    const { items } = req.body; // Array of { product, quantity, receivedQty, verified }

    const po = await PurchaseOrder.findById(id);
    if (!po) {
      return res
        .status(404)
        .json({ success: false, message: "Purchase order not found" });
    }

    if (po.status !== "Approved") {
      return res.status(400).json({
        success: false,
        message: "Can only verify delivery for approved orders",
      });
    }

    // Update PO items with received quantities
    po.items = items.map((item) => ({
      product: item.product._id || item.product,
      quantity: item.quantity,
      unitPrice: item.unitPrice,
      totalPrice: item.receivedQty * item.unitPrice,
      receivedQty: item.receivedQty,
      isVerified: item.verified,
    }));

    // Re-calculate total based on received items
    po.totalAmount = po.items.reduce((sum, item) => sum + item.totalPrice, 0);
    po.status = "Received";
    po.actualDeliveryDate = Date.now();

    po.statusHistory.push({
      status: "Received",
      changedBy: req.user.id,
      notes: "Delivery verified and items received",
    });

    // Update Inventory (similar to updatePOStatus but uses verified quantities)
    // We already have logic in updatePOStatus, but here we explicitly mark it as Received
    // The current updatePOStatus logic triggers on Received.
    // However, it uses po.items which we just updated.

    // To ensure consistency, we'll re-populate and save,
    // but the inventory logic in PO controller is a bit redundant if we do it here too.
    // Let's rely on the existing logic if we can, or just implement it here for clarity.

    for (const item of po.items) {
      await Inventory.findOneAndUpdate(
        { product: item.product, location: po.location },
        {
          $inc: { quantity: item.receivedQty || item.quantity },
          $push: {
            adjustments: {
              type: "Add",
              quantity: item.receivedQty || item.quantity,
              reason: `PO ${po.poNumber} verified and received`,
              adjustedBy: req.user.id,
              timestamp: Date.now(),
            },
          },
        },
        { upsert: true },
      );
    }

    await po.save();
    await po.populate("supplier items.product");

    res.status(200).json({
      success: true,
      message: "Delivery verified and stock updated",
      purchaseOrder: po,
    });
  } catch (error) {
    console.error("Verify delivery error:", error);
    res.status(500).json({
      success: false,
      message: "Error verifying delivery",
      details: error.message,
    });
  }
};
