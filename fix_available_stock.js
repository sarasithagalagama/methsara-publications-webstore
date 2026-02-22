const mongoose = require("mongoose");
require("dotenv").config();
require("./models/Product"); // Register Product model
const Inventory = require("./models/Inventory");

async function fixAvailableQuantity() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    const records = await Inventory.find({});
    console.log(`Checking ${records.length} records...`);

    let updatedCount = 0;
    for (const doc of records) {
      const reserved = doc.reservedQuantity || 0;
      const expectedAvailable = doc.quantity - reserved;

      if (doc.availableQuantity !== expectedAvailable) {
        doc.availableQuantity = expectedAvailable;
        doc.isOutOfStock = expectedAvailable === 0;
        doc.isLowStock =
          expectedAvailable > 0 && expectedAvailable <= doc.lowStockThreshold;

        // Use updateOne to avoid some validation issues if models are tricky,
        // but save() is better for triggering hooks if we needed them.
        // We actually want to bypass hooks if they are the problem, but here we are fixing the result of a bypass.
        await Inventory.updateOne(
          { _id: doc._id },
          {
            $set: {
              availableQuantity: expectedAvailable,
              isOutOfStock: expectedAvailable === 0,
              isLowStock:
                expectedAvailable > 0 &&
                expectedAvailable <= (doc.lowStockThreshold || 10),
            },
          },
        );
        updatedCount++;
      }
    }

    console.log(
      `Successfully recalculated availableQuantity for ${updatedCount} records.`,
    );
    process.exit(0);
  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  }
}

fixAvailableQuantity();
