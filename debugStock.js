const mongoose = require("mongoose");
const fs = require("fs");
require("dotenv").config();

const Inventory = require("./models/Inventory");
const Product = require("./models/Product");

const debug = async () => {
  let log = "";
  const print = (msg) => {
    console.log(msg);
    log += msg + "\n";
  };

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    print("Connected to MongoDB");

    const isbn = "9789555435406";
    const product = await Product.findOne({ isbn });

    if (!product) {
      print(`Product with ISBN ${isbn} not found`);
      fs.writeFileSync("debug_out.txt", log);
      process.exit(0);
    }

    print("Product Found:");
    print(`- ID: ${product._id}`);
    print(`- Title: ${product.title}`);
    print(`- Stock (in Product model): ${product.stock}`);

    const inventoryRecords = await Inventory.find({ product: product._id });
    print(`\nInventory Records for this product (${inventoryRecords.length}):`);
    inventoryRecords.forEach((rec) => {
      print(
        `- Location: ${rec.location}, Quantity: ${rec.quantity}, Available: ${rec.availableQuantity}`,
      );
    });

    const stats = await Inventory.aggregate([
      { $match: { product: product._id } },
      {
        $group: {
          _id: "$product",
          totalStock: { $sum: "$quantity" },
        },
      },
    ]);

    print("\nAggregation Result:");
    print(JSON.stringify(stats, null, 2));

    fs.writeFileSync("debug_out.txt", log);
    process.exit(0);
  } catch (err) {
    print("Error: " + err.message);
    fs.writeFileSync("debug_out.txt", log);
    process.exit(1);
  }
};

debug();
