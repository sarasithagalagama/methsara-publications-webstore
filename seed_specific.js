const mongoose = require("mongoose");
require("dotenv").config();
require("./models/Product");
const Product = mongoose.model("Product");
const Inventory = require("./models/Inventory");

async function seedUserSpecificProducts() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const products = await Product.find({ title: /USAS PELA|6 SHRENIYA/i });
    console.log(`Found ${products.length} matching products.`);

    for (const p of products) {
      const qty = Math.floor(Math.random() * 80) + 20;
      await Inventory.findOneAndUpdate(
        { product: p._id, location: "Kottawa" },
        {
          $set: {
            quantity: qty,
            availableQuantity: qty,
            reservedQuantity: 0,
            productTitle: p.title,
            productISBN: p.isbn,
            isOutOfStock: false,
          },
        },
        { upsert: true },
      );
      console.log(`Updated ${p.title} to stock: ${qty}`);
    }
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
seedUserSpecificProducts();
