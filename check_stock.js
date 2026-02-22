const mongoose = require("mongoose");
require("dotenv").config();
const Inventory = require("./models/Inventory");

async function checkStock() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const docs = await Inventory.find({ quantity: { $gt: 0 } });
    console.log(
      docs.map((d) => ({
        title: d.productTitle,
        location: d.location,
        quantity: d.quantity,
        available: d.availableQuantity,
      })),
    );
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

checkStock();
