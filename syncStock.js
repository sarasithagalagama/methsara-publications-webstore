const mongoose = require("mongoose");
require("dotenv").config();

const Inventory = require("./models/Inventory");
require("./models/Product");
require("./models/Location");

const syncAll = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    const productIds = await Inventory.distinct("product");
    console.log(`Found ${productIds.length} products in inventory records`);

    for (const productId of productIds) {
      await Inventory.syncProductStock(productId);
      console.log(`Synced stock for product: ${productId}`);
    }

    console.log("Stock synchronization complete");
    process.exit(0);
  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  }
};

syncAll();
