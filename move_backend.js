const fs = require("fs");
const path = require("path");

const epics = {
  E1_UserAndRoleManagement: {
    models: ["User.js", "Session.js", "ApprovalRequest.js"],
    controllers: [
      "authController.js",
      "authController_deactivation.js",
      "approvalController.js",
    ],
    routes: ["authRoutes.js", "approvalRoutes.js"],
    middleware: ["authMiddleware.js", "auth.js"],
  },
  E2_ProductCatalog: {
    models: ["Category.js", "Product.js", "Review.js"],
    controllers: ["productController.js", "reviewController.js"],
    routes: ["productRoutes.js", "reviewRoutes.js", "uploadRoutes.js"],
  },
  E3_OrderAndTransaction: {
    models: ["Cart.js", "Order.js", "FinancialTransaction.js"],
    controllers: [
      "cartController.js",
      "orderController.js",
      "financialController.js",
    ],
    routes: ["cartRoutes.js", "orderRoutes.js", "financialRoutes.js"],
  },
  E4_SupplierManagement: {
    models: ["PurchaseOrder.js", "Supplier.js"],
    controllers: ["purchaseOrderController.js", "supplierController.js"],
    routes: ["purchaseOrderRoutes.js", "supplierRoutes.js"],
  },
  E5_InventoryManagement: {
    models: ["Inventory.js", "Location.js", "StockTransfer.js"],
    controllers: [
      "inventoryController.js",
      "locationController.js",
      "stockTransferController.js",
    ],
    routes: [
      "inventoryRoutes.js",
      "locationRoutes.js",
      "stockTransferRoutes.js",
    ],
  },
  E6_PromotionAndLoyalty: {
    models: ["Campaign.js", "Coupon.js", "GiftVoucher.js"],
    controllers: ["couponController.js", "giftVoucherController.js"],
    routes: ["couponRoutes.js", "giftVoucherRoutes.js"],
  },
};

const basePath = __dirname;
const epicsDir = path.join(basePath, "epics");
const fileLocationMap = {}; // map clean name to new route

if (!fs.existsSync(epicsDir)) fs.mkdirSync(epicsDir);

Object.keys(epics).forEach((epic) => {
  const epicPath = path.join(epicsDir, epic);
  if (!fs.existsSync(epicPath)) fs.mkdirSync(epicPath);

  ["models", "controllers", "routes", "middleware"].forEach((folder) => {
    const folderPath = path.join(epicPath, folder);
    if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath);

    if (epics[epic][folder]) {
      epics[epic][folder].forEach((file) => {
        const oldFile = path.join(basePath, folder, file);
        if (fs.existsSync(oldFile)) {
          const newFile = path.join(folderPath, file);
          fs.renameSync(oldFile, newFile);
          fileLocationMap[file.replace(".js", "")] = { epic, folder };
        }
      });
    }
  });
});

function fixRequiresInFile(filePath, currentEpic) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, "utf8");

  // Update ../something to new paths
  const regex =
    /require\(['"]\.\.\/(models|controllers|routes|middleware)\/(.*?)['"]\)/g;

  content = content.replace(regex, (match, type, targetFile) => {
    const cleanTarget = targetFile.replace(".js", "");
    const location = fileLocationMap[cleanTarget];

    if (location) {
      if (location.epic === currentEpic) {
        return `require('../${location.folder}/${cleanTarget}')`;
      } else {
        return `require('../../${location.epic}/${location.folder}/${cleanTarget}')`;
      }
    }
    return match;
  });

  fs.writeFileSync(filePath, content);
}

// Fix require references inside moved files
Object.keys(epics).forEach((epic) => {
  ["models", "controllers", "routes", "middleware"].forEach((folder) => {
    if (epics[epic][folder]) {
      epics[epic][folder].forEach((file) => {
        const filePath = path.join(epicsDir, epic, folder, file);
        fixRequiresInFile(filePath, epic);
      });
    }
  });
});

// Fix server.js
const serverJsPath = path.join(basePath, "server.js");
let serverContent = fs.readFileSync(serverJsPath, "utf8");

const serverRegex =
  /require\(['"]\.\/?(models|controllers|routes|middleware)\/(.*?)['"]\)/g;
serverContent = serverContent.replace(
  serverRegex,
  (match, type, targetFile) => {
    const cleanTarget = targetFile.replace(".js", "");
    const location = fileLocationMap[cleanTarget];
    if (location) {
      return `require('./epics/${location.epic}/${location.folder}/${cleanTarget}')`;
    }
    return match;
  },
);

fs.writeFileSync(serverJsPath, serverContent);

console.log("Backend restructuring completed!");
