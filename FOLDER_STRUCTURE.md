# Methsara Publications Webstore - Project Structure

This is the **actual** folder structure of the built project.

---

## 📁 Full Folder Tree

```
methsara-publications-webstore/
│
├── server.js                           # Express entry point — registers all routes
├── package.json                        # Root dependencies + npm scripts
├── package-lock.json
├── .env                                # Environment vars (not committed)
├── README.md                           # Project overview
├── QUICK_START.md                      # How to run the project
├── ONE_COMMAND_START.md                # Single-command startup guide
├── FOLDER_STRUCTURE.md                 # This file
│
├── epics/                              # BACKEND — all API logic, organized by epic
│   ├── E1_UserAndRoleManagement/       # Auth, JWT, sessions, roles, approvals
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── authController_deactivation.js
│   │   │   └── approvalController.js
│   │   ├── middleware/
│   │   │   └── auth.js                 # protect, authorize, generateToken
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Session.js
│   │   │   └── ApprovalRequest.js      # Maker-checker pattern
│   │   ├── routes/
│   │   │   ├── authRoutes.js           # /api/auth
│   │   │   └── approvalRoutes.js       # /api/approvals
│   │   └── README.md
│   │
│   ├── E2_ProductCatalog/              # Products, reviews, categories, image upload
│   │   ├── controllers/
│   │   │   ├── productController.js
│   │   │   └── reviewController.js
│   │   ├── models/
│   │   │   ├── Product.js
│   │   │   ├── Review.js
│   │   │   └── Category.js
│   │   ├── routes/
│   │   │   ├── productRoutes.js        # /api/products
│   │   │   ├── reviewRoutes.js         # /api/reviews
│   │   │   └── uploadRoutes.js         # /api/upload
│   │   ├── uploads/                    # Product images stored here
│   │   └── README.md
│   │
│   ├── E3_OrderAndTransaction/         # Orders, cart, financial reports
│   │   ├── controllers/
│   │   │   ├── orderController.js      # Cross-epic: uses E2, E5, E6
│   │   │   ├── cartController.js
│   │   │   └── financialController.js
│   │   ├── models/
│   │   │   ├── Order.js
│   │   │   ├── Cart.js
│   │   │   └── FinancialTransaction.js
│   │   ├── routes/
│   │   │   ├── orderRoutes.js          # /api/orders
│   │   │   ├── cartRoutes.js           # /api/cart
│   │   │   └── financialRoutes.js      # /api/financial
│   │   └── README.md
│   │
│   ├── E4_SupplierManagement/          # Suppliers, purchase orders
│   │   ├── controllers/
│   │   │   ├── supplierController.js
│   │   │   └── purchaseOrderController.js
│   │   ├── models/
│   │   │   ├── Supplier.js
│   │   │   └── PurchaseOrder.js
│   │   ├── routes/
│   │   │   ├── supplierRoutes.js       # /api/suppliers
│   │   │   └── purchaseOrderRoutes.js  # /api/purchase-orders
│   │   └── README.md
│   │
│   ├── E5_InventoryManagement/         # Stock (product × location), transfers
│   │   ├── controllers/
│   │   │   ├── inventoryController.js
│   │   │   ├── locationController.js
│   │   │   └── stockTransferController.js
│   │   ├── models/
│   │   │   ├── Inventory.js
│   │   │   ├── Location.js
│   │   │   └── StockTransfer.js
│   │   ├── routes/
│   │   │   ├── inventoryRoutes.js      # /api/inventory
│   │   │   ├── locationRoutes.js       # /api/locations
│   │   │   └── stockTransferRoutes.js  # /api/stock-transfers
│   │   └── README.md
│   │
│   └── E6_PromotionAndLoyalty/         # Coupons, campaigns, gift vouchers
│       ├── controllers/
│       │   ├── couponController.js     # Also handles campaigns
│       │   └── giftVoucherController.js
│       ├── models/
│       │   ├── Coupon.js
│       │   ├── Campaign.js
│       │   ├── GiftVoucher.js
│       │   └── VoucherProduct.js
│       ├── routes/
│       │   ├── couponRoutes.js         # /api/coupons  (also /api/coupons/campaigns)
│       │   └── giftVoucherRoutes.js    # /api/gift-vouchers
│       └── README.md
│
├── client/                             # FRONTEND — React application
│   ├── package.json                    # Frontend dependencies
│   ├── public/
│   │   └── index.html
│   ├── build/                          # Production build output
│   └── src/
│       ├── index.js                    # React entry point
│       ├── index.css                   # Global base styles
│       ├── App.js                      # Router + layout
│       ├── App.css
│       ├── api/
│       │   └── config.js               # Axios base URL config
│       ├── assets/                     # Images, fonts
│       ├── components/
│       │   ├── common/                 # Shared UI (Navbar, Footer, etc.)
│       │   ├── dashboard/              # Dashboard layout components
│       │   └── Layouts/                # Page layout wrappers
│       ├── context/                    # React Context (AuthContext, CartContext)
│       ├── epics/                      # Feature components, one folder per epic
│       │   ├── E1_UserAndRoleManagement/
│       │   ├── E2_ProductCatalog/
│       │   ├── E3_OrderAndTransaction/
│       │   ├── E4_SupplierManagement/
│       │   ├── E5_InventoryManagement/
│       │   └── E6_PromotionAndLoyalty/
│       ├── pages/                      # Public pages (Home, About, Contact)
│       └── services/                   # Axios API service functions
│
├── docs/                               # Documentation
│   ├── database_design.md
│   ├── database_er_diagrams.md
│   ├── guides/
│   │   └── Postman_Testing_Guide.md
│   ├── planning/
│   ├── presentations/
│   ├── re-assignment/
│   └── sprint-0/
│
├── scripts/                            # One-off utility / migration scripts
└── uploads/                            # Root uploads fallback folder
```

---

## 🔗 How the Backend is Wired Together

`server.js` imports and mounts all route files:

```javascript
// E1
app.use('/api/auth',      authRoutes);
app.use('/api/approvals', approvalRoutes);

// E2
app.use('/api/products',  productRoutes);
app.use('/api/reviews',   reviewRoutes);
app.use('/api/upload',    uploadRoutes);

// E3
app.use('/api/orders',    orderRoutes);
app.use('/api/cart',      cartRoutes);
app.use('/api/financial', financialRoutes);

// E4
app.use('/api/suppliers',       supplierRoutes);
app.use('/api/purchase-orders', purchaseOrderRoutes);

// E5
app.use('/api/inventory',       inventoryRoutes);
app.use('/api/locations',       locationRoutes);
app.use('/api/stock-transfers', stockTransferRoutes);

// E6
app.use('/api/coupons',        couponRoutes);
app.use('/api/gift-vouchers',  giftVoucherRoutes);
```

All middleware (auth, authorize) lives in `epics/E1_UserAndRoleManagement/middleware/auth.js` and is **imported by all other epics**.

---

## 🗄️ MongoDB Collections

| Collection | Model File | Epic |
|---|---|---|
| `users` | E1/models/User.js | E1 |
| `sessions` | E1/models/Session.js | E1 |
| `approvalrequests` | E1/models/ApprovalRequest.js | E1 |
| `products` | E2/models/Product.js | E2 |
| `reviews` | E2/models/Review.js | E2 |
| `categories` | E2/models/Category.js | E2 |
| `orders` | E3/models/Order.js | E3 |
| `carts` | E3/models/Cart.js | E3 |
| `financialtransactions` | E3/models/FinancialTransaction.js | E3 |
| `suppliers` | E4/models/Supplier.js | E4 |
| `purchaseorders` | E4/models/PurchaseOrder.js | E4 |
| `inventories` | E5/models/Inventory.js | E5 |
| `locations` | E5/models/Location.js | E5 |
| `stocktransfers` | E5/models/StockTransfer.js | E5 |
| `coupons` | E6/models/Coupon.js | E6 |
| `campaigns` | E6/models/Campaign.js | E6 |
| `giftvouchers` | E6/models/GiftVoucher.js | E6 |
| `voucherproducts` | E6/models/VoucherProduct.js | E6 |

---

**Note**: This structure follows MERN stack best practices and Agile project organization standards.
