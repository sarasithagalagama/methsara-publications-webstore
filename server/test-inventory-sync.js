const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load env vars
dotenv.config({ path: "./.env" });

const Product = require("./models/Product");
const Inventory = require("./models/Inventory");
const inventoryController = require("./controllers/inventoryController");

// Mock request and response
const mockReq = (options = {}) => {
  return {
    params: { location: options.location || "Main" },
    query: { search: options.search || "" },
  };
};

const mockRes = () => {
  const res = {};
  res.status = (code) => {
    res.statusCode = code;
    return res;
  };
  res.json = (data) => {
    console.log(`Status: ${res.statusCode}`);
    console.log(`Success: ${data.success}`);
    console.log(`Count: ${data.count}`);
    const productsInInventory = data.inventory.map((inv) =>
      inv.product ? inv.product.title : "Unknown",
    );
    console.log("Products in Inventory:", productsInInventory);
    return res;
  };
  return res;
};

const runTest = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");

    console.log("\n--- Fetching stock for Main ---");
    const req = mockReq({ location: "Main" });
    const res = mockRes();

    await inventoryController.getStockByLocation(req, res);
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.disconnect();
  }
};

runTest();
