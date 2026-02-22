const mongoose = require("mongoose");
require("dotenv").config();
const Product = require("./models/Product");

async function checkCount() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const count = await Product.countDocuments({
      isActive: true,
      category: { $ne: "Gift Voucher" },
    });
    console.log("Physical Products:", count);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

checkCount();
