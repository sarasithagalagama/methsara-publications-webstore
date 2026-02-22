const mongoose = require("mongoose");
require("dotenv").config();
const Inventory = require("./models/Inventory");
const Product = require("./models/Product");

async function seedKottawa() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected");

    const products = await Product.find({ isActive: true }).limit(5);

    for (const p of products) {
      await Inventory.findOneAndUpdate(
        { product: p._id, location: "Kottawa" },
        {
          $set: {
            quantity: Math.floor(Math.random() * 50) + 10,
            productTitle: p.title,
            productISBN: p.isbn,
          },
        },
        { upsert: true },
      );
    }

    console.log("Seeded Kottawa with some stock");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seedKottawa();
