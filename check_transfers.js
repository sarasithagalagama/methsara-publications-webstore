const mongoose = require("mongoose");
require("dotenv").config();
require("./models/Product");
require("./models/User"); // Ensure User model is loaded if referenced
const StockTransfer = require("./models/StockTransfer");

const checkDuplicates = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    // Check by transferNumber
    const duplicates = await StockTransfer.aggregate([
      {
        $group: {
          _id: { transferNumber: "$transferNumber" },
          count: { $sum: 1 },
          ids: { $push: "$_id" },
        },
      },
      { $match: { count: { $gt: 1 } } },
    ]);
    console.log(
      "Duplicates by transferNumber:",
      JSON.stringify(duplicates, null, 2),
    );

    // Check by logical fields
    const logicalDuplicates = await StockTransfer.aggregate([
      {
        $group: {
          _id: {
            product: "$product",
            fromLocation: "$fromLocation",
            toLocation: "$toLocation",
            quantity: "$quantity",
            // Group by requestedDate up to minute (approx)
            requestedDate: {
              $dateToString: {
                format: "%Y-%m-%d %H:%M",
                date: "$requestedDate",
              },
            },
          },
          count: { $sum: 1 },
          ids: { $push: "$_id" },
        },
      },
      { $match: { count: { $gt: 1 } } },
    ]);
    console.log(
      "Potential logical duplicates:",
      JSON.stringify(logicalDuplicates, null, 2),
    );

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

checkDuplicates();
