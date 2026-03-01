// ============================================
// Supplier Controller
// Epic: E4 - Supplier Management
// Owner: IT24100799 (Gawrawa G H Y)
// Purpose: Supplier and PO management (E4.1-E4.7)
// ============================================

const Supplier = require("../models/Supplier");

// [E4.1] getAllSuppliers: returns only active suppliers (soft-delete pattern)
exports.getAllSuppliers = async (req, res) => {
  try {
    // [E4.1] isActive filter hides deactivated suppliers without removing their PO history
    const suppliers = await Supplier.find({ isActive: true });

    res.status(200).json({
      success: true,
      count: suppliers.length,
      suppliers,
    });
  } catch (error) {
    console.error("Get suppliers error:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching suppliers",
      error: error.message,
    });
  }
};

// [E4.1] createSupplier: plain Supplier.create; no approval needed for creating new suppliers
exports.createSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.create(req.body);

    res.status(201).json({
      success: true,
      message: "Supplier created successfully",
      supplier,
    });
  } catch (error) {
    console.error("Create supplier error:", error);
    res.status(500).json({
      success: false,
      message: "Error creating supplier",
      error: error.message,
    });
  }
};

// [E4.1][E1.12] updateSupplier: maker-checker — non-admin edits route through ApprovalRequest (cross-epic E1)
exports.updateSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findById(req.params.id);

    if (!supplier) {
      return res.status(404).json({
        success: false,
        message: "Supplier not found",
      });
    }

    // [E1.12] Non-admin users cannot directly edit supplier data; creates an ApprovalRequest instead
    if (req.user.role !== "admin") {
      const ApprovalRequest = require("../../E1_UserAndRoleManagement/models/ApprovalRequest");

      const newRequest = await ApprovalRequest.create({
        module: "Supplier",
        action: "Update",
        documentId: req.params.id,
        targetData: req.body,
        requestedBy: req.user._id,
      });

      return res.status(202).json({
        success: true,
        pendingApproval: true,
        message: "Edit request submitted for Admin approval.",
        request: newRequest,
      });
    }

    const updatedSupplier = await Supplier.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    res.status(200).json({
      success: true,
      message: "Supplier updated successfully",
      supplier: updatedSupplier,
    });
  } catch (error) {
    console.error("Update supplier error:", error);
    res.status(500).json({
      success: false,
      message: "Error updating supplier",
      error: error.message,
    });
  }
};

// Delete supplier (E4.1)
exports.deleteSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true },
    );

    if (!supplier) {
      return res.status(404).json({
        success: false,
        message: "Supplier not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Supplier deleted successfully",
    });
  } catch (error) {
    console.error("Delete supplier error:", error);
    res.status(500).json({
      success: false,
      message: "Error deleting supplier",
      error: error.message,
    });
  }
};

// Get Supplier Analytics (E4.6)
exports.getSupplierAnalytics = async (req, res) => {
  try {
    const [suppliers, purchaseOrders] = await Promise.all([
      Supplier.find({ isActive: true }),
      PurchaseOrder.find({ status: "Received" }),
    ]);

    const totalSuppliers = suppliers.length;
    const bookshops = suppliers.filter((s) => s.category === "Bookshop").length;
    const distributors = suppliers.filter(
      (s) => s.category === "Distributor",
    ).length;

    // Calculate performance per supplier
    const performance = suppliers.map((supplier) => {
      const supplierPOs = purchaseOrders.filter(
        (po) => po.supplier.toString() === supplier._id.toString(),
      );

      const totalReceived = supplierPOs.length;
      const onTime = supplierPOs.filter(
        (po) =>
          po.actualDeliveryDate &&
          po.expectedDeliveryDate &&
          po.actualDeliveryDate <= po.expectedDeliveryDate,
      ).length;

      return {
        _id: supplier._id,
        name: supplier.name,
        category: supplier.category,
        totalOrders: totalReceived,
        onTimeRate: totalReceived > 0 ? (onTime / totalReceived) * 100 : 100,
        rating: supplier.rating || 0,
        defectRate: supplier.defectRate || 0, // Placeholder for defect rate
      };
    });

    // Aggregate stats
    const avgOnTime =
      performance.reduce((acc, p) => acc + p.onTimeRate, 0) /
        performance.length || 0;

    res.status(200).json({
      success: true,
      stats: {
        totalSuppliers,
        bookshops,
        distributors,
        avgOnTime: avgOnTime.toFixed(1),
        totalOrders: purchaseOrders.length,
      },
      performance,
    });
  } catch (error) {
    console.error("Get supplier analytics error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = exports;
