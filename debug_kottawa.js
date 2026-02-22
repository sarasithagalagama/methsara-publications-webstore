const mongoose = require("mongoose");
require("dotenv").config();
require("./models/Product");
const Inventory = require("./models/Inventory");

async function debugKottawa() {
  await mongoose.connect(process.env.MONGODB_URI);
  const docs = await Inventory.find({ location: "Kottawa" }).populate(
    "product",
  );
  console.log("Total Kottawa records:", docs.length);
  docs.forEach((d) => {
    console.log(
      `Product: ${d.product?.title || d.productTitle} | Qty: ${d.quantity} | Avail: ${d.availableQuantity} | ID: ${d._id}`,
    );
  });

  // Group by product ID
  const groups = {};
  docs.forEach((d) => {
    const pid = d.product?._id?.toString() || d.productTitle;
    if (!groups[pid]) groups[pid] = [];
    groups[pid].push(d);
  });

  for (const pid in groups) {
    if (groups[pid].length > 1) {
      console.log(`--- Duplicates found for ${pid} ---`);
      groups[pid].forEach((d) =>
        console.log(`  ID: ${d._id} | Qty: ${d.quantity}`),
      );
    }
  }
  process.exit(0);
}
debugKottawa();
