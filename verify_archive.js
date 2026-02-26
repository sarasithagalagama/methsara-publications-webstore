const mongoose = require("mongoose");
require("dotenv").config();
const Product = require("./epics/E2_ProductCatalog/models/Product");
const Inventory = require("./epics/E5_InventoryManagement/models/Inventory");
const {
  archiveProduct,
  unarchiveProduct,
} = require("./epics/E2_ProductCatalog/controllers/productController");

async function test() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    // Create a fresh test product with ALL required fields
    const testProduct = await Product.create({
      title: "Archive Test Product",
      titleSinhala: "ටෙස්ට් පොත",
      author: "Test Author",
      isbn: "ARCHIVE-" + Date.now(),
      price: 500,
      category: "Others",
      subject: "Test",
      grade: "Other",
      description:
        "Comprehensive testing for archiving logic and inventory validation.",
      isActive: true,
    });
    console.log(
      `🔍 Created Test Product: "${testProduct.title}" (ID: ${testProduct._id})`,
    );

    const res = {
      statusCode: 0,
      status: function (code) {
        this.statusCode = code;
        return this;
      },
      json: function (data) {
        this.data = data;
      },
    };

    // 1. Try to Archive with stock (should fail)
    await Inventory.create({
      product: testProduct._id,
      location: "Main",
      quantity: 10,
      availableQuantity: 10,
    });
    console.log("📦 Added stock of 10.");

    console.log("🧪 Testing: Archive with stock...");
    await archiveProduct({ params: { id: testProduct._id } }, res);
    if (res.statusCode === 400) {
      console.log("✅ PASS: Archive blocked when stock > 0.");
      console.log("📥 Response:", JSON.stringify(res.data, null, 2));
    } else {
      console.log(
        "❌ FAIL: Archive was NOT blocked for product with stock. Status:",
        res.statusCode,
      );
    }

    // 2. Try to Archive with 0 stock (should pass)
    await Inventory.deleteMany({ product: testProduct._id });
    console.log("📦 Removed stock.");

    console.log("🧪 Testing: Archive with 0 stock...");
    await archiveProduct({ params: { id: testProduct._id } }, res);
    if (res.statusCode === 200 && res.data.product.isArchived === true) {
      console.log("✅ PASS: Archive successful when stock is 0.");
    } else {
      console.log("❌ FAIL: Archive failed. Status:", res.statusCode);
    }

    // 3. Try to Unarchive (should pass)
    console.log("🧪 Testing: Unarchive...");
    await unarchiveProduct({ params: { id: testProduct._id } }, res);
    if (res.statusCode === 200 && res.data.product.isArchived === false) {
      console.log("✅ PASS: Unarchive successful.");
    } else {
      console.log("❌ FAIL: Unarchive failed. Status:", res.statusCode);
    }

    // Cleanup
    await Product.findByIdAndDelete(testProduct._id);
    await Inventory.deleteMany({ product: testProduct._id });
    console.log("🧹 Cleaned up.");

    await mongoose.disconnect();
    console.log("👋 Disconnected");
  } catch (err) {
    console.error("❌ Test failed:", err);
    if (err.errors) {
      Object.keys(err.errors).forEach((key) => {
        console.error(`Field: ${key}, Error: ${err.errors[key].message}`);
      });
    }
    process.exit(1);
  }
}

test();
