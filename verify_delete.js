const mongoose = require("mongoose");
require("dotenv").config();
const Product = require("./epics/E2_ProductCatalog/models/Product");
const Inventory = require("./epics/E5_InventoryManagement/models/Inventory");
const {
  deleteProduct,
} = require("./epics/E2_ProductCatalog/controllers/productController");

async function test() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    // 1. Find a product with stock
    const inventoryWithStock = await Inventory.findOne({
      availableQuantity: { $gt: 0 },
    }).populate("product");

    if (inventoryWithStock && inventoryWithStock.product) {
      console.log(
        `🔍 Testing Product WITH Stock: "${inventoryWithStock.product.title}" (ID: ${inventoryWithStock.product._id})`,
      );
      console.log(
        `📦 Available Stock: ${inventoryWithStock.availableQuantity}`,
      );

      const res = {
        statusCode: 0,
        responseData: null,
        status: function (code) {
          this.statusCode = code;
          return this;
        },
        json: function (data) {
          this.responseData = data;
          console.log(
            `📥 Response [Code ${this.statusCode}]:`,
            JSON.stringify(data, null, 2),
          );
        },
      };

      const req = { params: { id: inventoryWithStock.product._id } };
      await deleteProduct(req, res);

      if (
        res.statusCode === 400 &&
        res.responseData &&
        !res.responseData.success
      ) {
        console.log("✅ PASS: Deletion blocked as expected.");
      } else {
        console.log(
          "❌ FAIL: Deletion was not blocked correctly for product with stock.",
        );
      }
    } else {
      console.log("⚠️ No product with stock found for testing.");
    }

    console.log("\n-------------------\n");

    // 2. Test with 0 stock
    const testProduct = await Product.create({
      title: "Test Delete Product",
      isbn: "TEST-" + Date.now(),
      price: 100,
      category: "Others",
      subject: "Test",
      description: "Testing product deletion logic with 0 stock.",
      isActive: true,
    });

    console.log(
      `🔍 Testing Product WITHOUT Stock: "${testProduct.title}" (ID: ${testProduct._id})`,
    );

    // Ensure no inventory exists or quantity is 0
    await Inventory.deleteMany({ product: testProduct._id });
    console.log("📦 Stock ensured at 0.");

    const res2 = {
      statusCode: 0,
      responseData: null,
      status: function (code) {
        this.statusCode = code;
        return this;
      },
      json: function (data) {
        this.responseData = data;
        console.log(
          `📥 Response [Code ${this.statusCode}]:`,
          JSON.stringify(data, null, 2),
        );
      },
    };

    const req2 = { params: { id: testProduct._id } };
    await deleteProduct(req2, res2);

    if (
      res2.statusCode === 200 &&
      res2.responseData &&
      res2.responseData.success
    ) {
      console.log("✅ PASS: Deletion allowed as expected.");
    } else {
      console.log("❌ FAIL: Deletion was blocked for product with 0 stock.");
    }

    // Cleanup
    await Product.findByIdAndDelete(testProduct._id);
    console.log("🧹 Cleaned up test product.");

    await mongoose.disconnect();
    console.log("👋 Disconnected");
  } catch (err) {
    console.error("❌ Test failed:", err);
    process.exit(1);
  }
}

test();
