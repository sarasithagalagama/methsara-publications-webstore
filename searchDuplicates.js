const mongoose = require("mongoose");
const fs = require("fs");
require("dotenv").config();

require("./models/Product");
const Product = mongoose.model("Product");

const searchDuplicates = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const products = await Product.find({
      title: { $regex: "JEEWA VIDYAWA", $options: "i" },
    });
    const result = products.map((p) => ({
      id: p._id,
      title: p.title,
      isbn: p.isbn,
      stock: p.stock,
    }));
    fs.writeFileSync("duplicates_out.txt", JSON.stringify(result, null, 2));
    process.exit(0);
  } catch (err) {
    fs.writeFileSync("duplicates_out.txt", "Error: " + err.message);
    process.exit(1);
  }
};

searchDuplicates();
