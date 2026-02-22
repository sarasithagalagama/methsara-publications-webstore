const mongoose = require("mongoose");
require("dotenv").config();
const Inventory = require("./models/Inventory");
const Product = require("./models/Product");
const Location = require("./models/Location");

async function testStatsLogic() {
  await mongoose.connect(process.env.MONGODB_URI);

  const filterLocation = "Kottawa";
  let query = { location: filterLocation };

  const allInventory = await Inventory.find(query).populate({
    path: "product",
    match: { category: { $ne: "Gift Voucher" }, isActive: true },
  });

  const physicalInventory = allInventory.filter(
    (item) => item.product !== null,
  );
  console.log(
    "Physical Inventory Count for Kottawa:",
    physicalInventory.length,
  );

  const totalActiveProducts = await Product.countDocuments({
    isActive: true,
    category: { $ne: "Gift Voucher" },
  });
  console.log("Total Active Products (Global):", totalActiveProducts);

  const itemsWithStockCount = physicalInventory.filter(
    (item) => item.product && item.availableQuantity > 0,
  ).length;
  console.log("Items with positive stock in Kottawa:", itemsWithStockCount);

  const resultStats = {
    totalItems: totalActiveProducts,
    lowStock: physicalInventory.filter(
      (item) =>
        item.product &&
        item.availableQuantity > 0 &&
        item.availableQuantity <
          (item.reorderPoint || item.lowStockThreshold || 20),
    ).length,
    outOfStock: totalActiveProducts - itemsWithStockCount,
    locations: 1,
  };

  console.log("Resulting Stats:", resultStats);
  process.exit(0);
}

testStatsLogic();
