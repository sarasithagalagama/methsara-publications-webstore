# 🎓 VIVA & Code Contribution Map

> **Purpose:** This document clearly defines code ownership for the VIVA. Each member has a dedicated "module" spanning Database, Backend, and Frontend. During the evaluation, open ONLY the files listed under your name to demonstrate your individual contribution.

---

## 🏗️ Member 1: User & Authentication System
**Student:** IT24100548 - Galagama S.T  
**Focus:** Login, Registration, Roles, Profile Security

### 📂 Your Code Files to Show:
**Backend (Server):**
- `server/models/User.js` (Schema for users/roles)
- `server/controllers/authController.js` (Logic for login/register/JWT)
- `server/controllers/userController.js` (Profile updates)
- `server/routes/authRoutes.js`
- `server/middleware/authMiddleware.js` (JWT verification logic)

**Frontend (Client):**
- `client/src/pages/auth/LoginPage.jsx`
- `client/src/pages/auth/RegisterPage.jsx`
- `client/src/pages/profile/UserProfile.jsx`
- `client/src/context/AuthContext.js` (Global auth state)
- `client/src/components/auth/ProtectedRoute.jsx`

---

## 📦 Member 2: Publication & Catalog Manager
**Student:** IT24101314 - Appuhami H A P L  
**Focus:** Books, Categories, Search, Exam metadata

### 📂 Your Code Files to Show:
**Backend (Server):**
- `server/models/Book.js` (Schema with Grade/Exam fields)
- `server/models/Category.js`
- `server/controllers/bookController.js` (CRUD + Filtering logic)
- `server/routes/bookRoutes.js`

**Frontend (Client):**
- `client/src/pages/books/BookListPage.jsx` (Catalog view)
- `client/src/pages/books/BookDetailPage.jsx`
- `client/src/components/books/BookCard.jsx`
- `client/src/components/books/FilterSidebar.jsx`
- `client/src/pages/admin/ManageBooks.jsx` (Admin form)

---

## 🛒 Member 3: Shopping Cart & Checkout
**Student:** IT24100799 - Gawrawa G H Y  
**Focus:** Cart logic, Checkout flow, Payment Integration

### 📂 Your Code Files to Show:
**Backend (Server):**
- `server/models/Cart.js`
- `server/models/Order.js` (Initial creation logic)
- `server/controllers/cartController.js`
- `server/controllers/paymentController.js`
- `server/routes/cartRoutes.js`

**Frontend (Client):**
- `client/src/pages/cart/CartPage.jsx`
- `client/src/pages/checkout/CheckoutPage.jsx`
- `client/src/components/cart/CartItem.jsx`
- `client/src/context/CartContext.js` (Logic for add/remove items)
- `client/src/components/checkout/PaymentForm.jsx`

---

## 🚚 Member 4: Order & Transaction Management
**Student:** IT24100191 - Jayasinghe D.B.P  
**Focus:** Order processing, Status updates, Invoices, Delivery

### 📂 Your Code Files to Show:
**Backend (Server):**
- `server/models/Transaction.js`
- `server/controllers/orderController.js` (Admin status updates)
- `server/routes/orderRoutes.js`
- `server/utils/invoiceGenerator.js` (PDF generation logic)

**Frontend (Client):**
- `client/src/pages/orders/OrderHistory.jsx` (Customer view)
- `client/src/pages/admin/AdminOrders.jsx` (Admin dashboard view)
- `client/src/pages/orders/OrderDetail.jsx`
- `client/src/components/orders/StatusBadge.jsx`

---

## 🏭 Member 5: Inventory & Supplier System
**Student:** IT24100264 - Bandara N W C D  
**Focus:** Stock levels, Suppliers, Warehouses, GRN

### 📂 Your Code Files to Show:
**Backend (Server):**
- `server/models/Inventory.js`
- `server/models/Supplier.js`
- `server/controllers/inventoryController.js`
- `server/controllers/supplierController.js`
- `server/routes/inventoryRoutes.js`

**Frontend (Client):**
- `client/src/pages/admin/InventoryDashboard.jsx`
- `client/src/pages/admin/SupplierList.jsx`
- `client/src/components/inventory/LowStockAlert.jsx`
- `client/src/pages/admin/StockEntryForm.jsx`

---

## 🎁 Member 6: Promotion & Gift Vouchers
**Student:** IT24101266 - Perera M.U.E  
**Focus:** Coupons, Gift Cards, Discounts, Loyalty

### 📂 Your Code Files to Show:
**Backend (Server):**
- `server/models/Coupon.js`
- `server/models/GiftCard.js`
- `server/controllers/promoController.js`
- `server/routes/promoRoutes.js`

**Frontend (Client):**
- `client/src/pages/admin/ManageCoupons.jsx`
- `client/src/pages/promotions/GiftCardPage.jsx`
- `client/src/components/checkout/CouponInput.jsx`
- `client/src/components/marketing/PromoBanner.jsx`

---

## 💡 VIVA Presentation Tips

1. **Open ONLY your files**: Close all other tabs in VS Code.
2. **Explain the Flow**: "Data starts here in the Model -> moves to Controller logic -> exposed via Route -> consumed by Frontend API -> displayed in Component."
3. **Highlight Complexity**: Point out specific lines where you did validation, calculation (e.g., cart total), or security checks.
4. **Demonstrate Functionality**: Have your feature ready to demo in the browser immediately.

