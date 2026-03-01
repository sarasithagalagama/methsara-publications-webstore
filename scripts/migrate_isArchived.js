const mongoose = require("mongoose");
const Product = require("../epics/E2_ProductCatalog/models/Product");
require("dotenv").config();

async function migrate() {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      console.error("ERROR: MONGODB_URI not found in environment");
      process.exit(1);
    }

    console.log("Connecting to MongoDB...");
    await mongoose.connect(mongoUri);
    console.log("Connected.");

    const query = { isArchived: { $exists: false } };
    const productsToUpdate = await Product.find(query);

    console.log(`Found ${productsToUpdate.length} products to migrate.`);

    if (productsToUpdate.length > 0) {
      const result = await Product.updateMany(query, {
        $set: { isArchived: false },
      });
      console.log(`Successfully updated ${result.modifiedCount} products.`);
    } else {
      console.log("No products need migration.");
    }

    await mongoose.disconnect();
    console.log("Migration completed successfully.");
  } catch (err) {
    console.error("Migration failed with error:", err.message);
    process.exit(1);
  }
}

migrate();
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
