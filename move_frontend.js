const fs = require("fs");
const path = require("path");

const clientSrcDir = path.join(__dirname, "client", "src");
const epicsDir = path.join(clientSrcDir, "epics");

const mappings = [
  {
    epic: "E1_UserAndRoleManagement",
    match:
      /(components[\\/]Auth|profile|pages[\\/]Login|pages[\\/]Register|ForgotPassword|ResetPassword|Auth\.css|ChangePasswordModal|authService\.js|AuthContext\.js)/i,
  },
  {
    epic: "E2_ProductCatalog",
    match:
      /(components[\\/]Products|pages[\\/]ProductList|pages[\\/]ProductDetail|ManageProducts|ReviewModeration|productService\.js)/i,
  },
  {
    epic: "E3_OrderAndTransaction",
    match:
      /(components[\\/]Order[s]?|pages[\\/]Cart|pages[\\/]Checkout|OrderHistory|OrderDetail|orderService\.js)/i,
  },
  {
    epic: "E4_SupplierManagement",
    match: /(components[\\/]Suppliers|pages[\\/]supplier|supplierService\.js)/i,
  },
  {
    epic: "E5_InventoryManagement",
    match:
      /(components[\\/]Inventory|pages[\\/]LowStock|inventoryService\.js)/i,
  },
  {
    epic: "E6_PromotionAndLoyalty",
    match:
      /(components[\\/]Coupons|pages[\\/]GiftVouchers|pages[\\/]marketing|couponService\.js)/i,
  },
];

function getEpicForFile(relativePath) {
  for (let m of mappings) {
    if (m.match.test(relativePath)) {
      return m.epic;
    }
  }
  return null;
}

const fileMap = {}; // oldAbsolute -> newAbsolute
const allFiles = []; // all parsed js/jsx/css files

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fullPath.includes("node_modules") || fullPath === epicsDir) return;
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      walk(fullPath);
    } else {
      if (/\.(js|jsx|css)$/.test(fullPath)) {
        allFiles.push(fullPath);
        const relPath = path.relative(clientSrcDir, fullPath);
        const epic = getEpicForFile(relPath);
        if (epic) {
          fileMap[fullPath] = path.join(epicsDir, epic, relPath);
        } else {
          fileMap[fullPath] = fullPath; // stays same
        }
      }
    }
  });
}

walk(clientSrcDir);

const resolvedMap = {};
allFiles.forEach((f) => {
  resolvedMap[f] = f;
  const ext = path.extname(f);
  resolvedMap[f.substring(0, f.length - ext.length)] = f;
  if (path.basename(f) === "index.js" || path.basename(f) === "index.jsx") {
    const dir = path.dirname(f);
    resolvedMap[dir] = f;
  }
});

function mkDirByPathSync(targetDir) {
  const sep = path.sep;
  const initDir = path.isAbsolute(targetDir) ? sep : "";
  targetDir.split(sep).reduce((parentDir, childDir) => {
    const curDir = path.resolve(parentDir, childDir);
    try {
      fs.mkdirSync(curDir);
    } catch (e) {}
    return curDir;
  }, initDir);
}

const fileContents = {};

allFiles.forEach((f) => {
  let content = fs.readFileSync(f, "utf8");
  const dirName = path.dirname(f);
  const newF = fileMap[f];
  const newDir = path.dirname(newF);

  // Match: import ... from '...' OR import '...' OR require('...')
  const importRegex = /(import\s+(?:.*?\s+from\s+)?['"])([^'"]+)(['"])/g;
  const requireRegex = /(require\s*\(\s*['"])([^'"]+)(['"]\s*\))/g;

  const replacer = (match, prefix, importPath, suffix) => {
    if (!importPath.startsWith(".")) return match;

    // Resolve old import to check what file it mapped to
    const resolvedOldTarget = path.resolve(dirName, importPath);
    let targetPhysicalFile = null;

    if (resolvedMap[resolvedOldTarget]) {
      targetPhysicalFile = resolvedMap[resolvedOldTarget];
    } else if (resolvedMap[resolvedOldTarget + ".js"]) {
      targetPhysicalFile = resolvedMap[resolvedOldTarget + ".js"];
    } else if (resolvedMap[resolvedOldTarget + ".jsx"]) {
      targetPhysicalFile = resolvedMap[resolvedOldTarget + ".jsx"];
    } else if (resolvedMap[resolvedOldTarget + ".css"]) {
      targetPhysicalFile = resolvedMap[resolvedOldTarget + ".css"];
    } else if (resolvedMap[resolvedOldTarget + "/index.js"]) {
      targetPhysicalFile = resolvedMap[resolvedOldTarget + "/index.js"];
    } else if (resolvedMap[resolvedOldTarget + "/index.jsx"]) {
      targetPhysicalFile = resolvedMap[resolvedOldTarget + "/index.jsx"];
    }

    if (targetPhysicalFile) {
      let newRelative = path.relative(newDir, fileMap[targetPhysicalFile]);
      // keep same extension state as before
      if (!path.extname(importPath)) {
        newRelative = newRelative.replace(/\.(js|jsx|css)$/, "");
      }

      newRelative = newRelative.replace(/\\/g, "/");
      if (!newRelative.startsWith(".")) {
        newRelative = "./" + newRelative;
      }
      return prefix + newRelative + suffix;
    }
    return match;
  };

  content = content.replace(importRegex, replacer);
  content = content.replace(requireRegex, replacer);

  fileContents[newF] = content;
});

// Now apply all changes to disk
allFiles.forEach((oldPath) => {
  const newPath = fileMap[oldPath];
  if (oldPath !== newPath) {
    fs.unlinkSync(oldPath);
  }
});

Object.keys(fileContents).forEach((newPath) => {
  mkDirByPathSync(path.dirname(newPath));
  fs.writeFileSync(newPath, fileContents[newPath]);
});

console.log("Frontend files successfully restructured!");
