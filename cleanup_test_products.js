const mongoose = require("mongoose");
require("dotenv").config();

async function cleanup() {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost:27017/methsara-webstore",
    );
    console.log("Connected to MongoDB");

    const Product = require("./epics/E2_ProductCatalog/models/Product");
    const Inventory = require("./epics/E5_InventoryManagement/models/Inventory");

    const products = await Product.find({ title: /Archive/i });
    console.log(`Found ${products.length} products with "Archive" in title.`);

    for (const p of products) {
      console.log(`Processing: ${p.title} (${p._id})`);

      // 1. Delete inventory records
      const invResult = await Inventory.deleteMany({ product: p._id });
      console.log(` - Deleted ${invResult.deletedCount} inventory records.`);

      // 2. Soft-delete the product
      p.isActive = false;
      await p.save();
      console.log(` - Product marked as inactive.`);
    }

    console.log("\nCleanup COMPLETE.");
    await mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
}

cleanup();
