const mongoose = require("mongoose");
require("dotenv").config();
require("./models/Product");
const Inventory = require("./models/Inventory");

async function verify() {
  await mongoose.connect(process.env.MONGODB_URI);
  const docs = await Inventory.find({
    location: "Kottawa",
    quantity: { $gt: 0 },
  });
  console.log("Kottawa Positive Qty Count:", docs.length);
  docs.forEach((d) =>
    console.log(
      `Title: ${d.productTitle} | Qty: ${d.quantity} | Avail: ${d.availableQuantity}`,
    ),
  );
  process.exit(0);
}
verify();
