const mongoose = require("mongoose");
require("dotenv").config();
const Inventory = require("./models/Inventory");
const Product = require("./models/Product");
const Location = require("./models/Location");

async function fixDataIntegrity() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected");

    const products = await Product.find({
      isActive: true,
      category: { $ne: "Gift Voucher" },
    });
    const locations = await Location.find();

    console.log(
      `Processing ${products.length} products across ${locations.length} locations...`,
    );

    for (const loc of locations) {
      for (const prod of products) {
        const existing = await Inventory.findOne({
          product: prod._id,
          location: loc.name,
        });

        if (!existing) {
          await Inventory.create({
            product: prod._id,
            productTitle: prod.title,
            productISBN: prod.isbn,
            location: loc.name,
            quantity: 0,
            availableQuantity: 0,
            reservedQuantity: 0,
          });
          console.log(
            `Created missing record for ${prod.title} at ${loc.name}`,
          );
        } else {
          // Update missing titles/ISBNs if they are undefined
          let needsUpdate = false;
          if (!existing.productTitle) {
            existing.productTitle = prod.title;
            needsUpdate = true;
          }
          if (!existing.productISBN) {
            existing.productISBN = prod.isbn;
            needsUpdate = true;
          }
          if (needsUpdate) {
            await existing.save();
            console.log(
              `Updated missing metadata for ${prod.title} at ${loc.name}`,
            );
          }
        }
      }
    }

    // Cleanup: Remove records for locations that don't exist anymore if you want (optional)

    console.log("Data integrity check complete");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

fixDataIntegrity();
