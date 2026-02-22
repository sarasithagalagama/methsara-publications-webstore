const mongoose = require("mongoose");
require("dotenv").config();
const Inventory = require("./models/Inventory");
require("./models/Product");

async function checkKottawaStock() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const docs = await Inventory.find({ location: "Kottawa" });
    console.log("Kottawa Inventory Count:", docs.length);
    console.log(
      docs.map((d) => ({
        title: d.productTitle,
        qty: d.quantity,
        avail: d.availableQuantity,
      })),
    );
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

checkKottawaStock();
