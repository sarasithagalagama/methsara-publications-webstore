# E3 – Order & Transaction

**Epic Owner:** IT24100191 – Jayasinghe D.B.P  
**Stack:** Node.js · Express · Mongoose · MongoDB · PDFKit / csv-writer  
**Base URL:** `/api/orders` · `/api/cart` · `/api/financial`

---

## 1. Folder Structure

```
E3_OrderAndTransaction/
├── controllers/
│   ├── orderController.js      – Order lifecycle (create, update status/payment)
│   ├── cartController.js       – Shopping cart management
│   └── financialController.js  – Financial dashboard, transactions, reports
├── middleware/
│   └── (uses E1 auth middleware)
├── models/
│   ├── Order.js                – Order schema (guest + auth, dual discounts)
│   ├── Cart.js                 – Cart schema with auto-calculated total
│   └── FinancialTransaction.js – Income/expense ledger
└── routes/
    ├── orderRoutes.js
    ├── cartRoutes.js
    └── financialRoutes.js
```

---

## 2. How the Backend / API Works

### Order Creation Cross-Epic Flow

```
POST /api/orders
       │
       ▼
  orderController.createOrder()
       │
       ├──► E6: validate coupon / gift voucher → compute discounts
       │
       ├──► E2: verify products exist, get current price
       │
       ├──► E5: deduct stock (reservedStock++ / availableStock--)
       │
       ├──► Create Order document in MongoDB
       │
       ├──► Create FinancialTransaction (income) automatically
       │
       └──► Return { order, totalAfterDiscount, savingsAmount }
```

This is the most complex function in the project — a single order creation touches **4 epics** (E2 products, E3 order/financial, E5 inventory, E6 promotions).

### Cart Flow

```
Customer browses → addToCart → Cart.items[] updated
Customer views cart → getCart() recalculates all prices from
                       current Product documents (live price sync)
Customer checks out → createOrder() → Cart cleared
```

---

## 3. All Functions

### `orderController.js`

| Function | Purpose | Auth |
|---|---|---|
| `createOrder(req, res)` | Full order creation: validates cart items, applies coupon/voucher/campaign discounts, deducts inventory (E5), creates Order + FinancialTransaction, clears cart. Supports guest checkout. | Optional (guest or logged-in) |
| `getMyOrders(req, res)` | Returns all orders for the logged-in customer, paginated, sorted newest first. | Customer |
| `getOrder(req, res)` | Get single order by ID. Customers can only view their own orders; managers see any. | Yes |
| `getAllOrders(req, res)` | Admin/manager view of all orders with filters (status, date range, payment method) and pagination. | Admin / Finance / Inventory / Product Mgr |
| `updateOrderStatus(req, res)` | Change order lifecycle status (pending → processing → shipped → delivered). Validates status transition. | Admin / Inventory Mgr / Product Mgr |
| `updatePaymentStatus(req, res)` | Change payment status (pending → paid → refunded). Updates associated FinancialTransaction. | Admin / Finance Mgr |
| `getDashboardStats(req, res)` | Returns aggregate stats: total orders, revenue today/week/month, orders by status. | Admin |

### `cartController.js`

| Function | Purpose | Auth |
|---|---|---|
| `getCart(req, res)` | Fetch cart for logged-in user. For each item, re-fetches current price from Product collection (prevents stale prices). Recalculates cart total. | Yes |
| `addToCart(req, res)` | Add a product to cart. If product already in cart, increments quantity. Validates product exists and has sufficient stock before adding. | Yes |
| `updateCartItem(req, res)` | Change the quantity of a cart item. If quantity set to 0, removes the item. Validates stock availability. | Yes |
| `removeFromCart(req, res)` | Remove a specific product from cart by productId. | Yes |
| `clearCart(req, res)` | Removes all items from cart. Called automatically after successful order creation. | Yes |

### `financialController.js`

| Function | Purpose | Auth |
|---|---|---|
| `getFinancialDashboard(req, res)` | Returns KPIs: total revenue, total expenses, net profit, revenue chart data (daily/weekly/monthly breakdown), top selling products by revenue. | Finance Mgr / Admin |
| `getTransactions(req, res)` | Paginated, filterable list of all FinancialTransaction records (filter: type, date range, status). | Finance Mgr / Admin |
| `createTransaction(req, res)` | Manually create a transaction (e.g., log an expense like rent, utilities). | Finance Mgr / Admin |
| `updateTransaction(req, res)` | Edit a manually created transaction. Cannot edit auto-generated order transactions. | Finance Mgr / Admin |
| `deleteTransaction(req, res)` | Delete a manual transaction. Protected — cannot delete auto-generated ones. | Finance Mgr / Admin |
| `generateInvoice(req, res)` | Generate a PDF invoice for a specific order (PDFKit). Returns downloadable PDF. | Finance Mgr / Admin |
| `processRefund(req, res)` | Mark an order as refunded, create a negative FinancialTransaction, update order payment status. | Finance Mgr / Admin |
| `generateFinancialPDF(req, res)` | Export full financial report as PDF for a date range. | Finance Mgr / Admin |
| `generateFinancialCSV(req, res)` | Export all transactions as CSV file. | Finance Mgr / Admin |
| `payPurchaseOrder(req, res)` | Record payment for a supplier Purchase Order (E4). Creates an expense FinancialTransaction. | Finance Mgr / Admin |

---

## 4. CRUD API Endpoints

### Order Routes — `/api/orders`

| Method | Endpoint | Auth | Role | Description |
|---|---|---|---|---|
| POST | `/` | Optional | Any / Guest | Create order |
| GET | `/my-orders` | Yes | Customer | My orders list |
| GET | `/stats` | Yes | Admin | Dashboard stats |
| GET | `/:id` | Yes | Any | Single order |
| GET | `/` | Yes | Admin / Finance / Inventory / Product Mgr | All orders |
| PUT | `/:id/status` | Yes | Admin / Inventory / Product Mgr | Update order status |
| PUT | `/:id/payment` | Yes | Admin / Finance Mgr | Update payment status |

### Cart Routes — `/api/cart`

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/` | Yes | Get cart with live prices |
| POST | `/add` | Yes | Add item to cart |
| PUT | `/update` | Yes | Update item quantity |
| DELETE | `/remove/:productId` | Yes | Remove item from cart |
| DELETE | `/clear` | Yes | Clear entire cart |

### Financial Routes — `/api/financial`

| Method | Endpoint | Auth | Role | Description |
|---|---|---|---|---|
| GET | `/dashboard` | Yes | Finance Mgr / Admin | KPIs and charts |
| GET | `/invoices/:orderId` | Yes | Finance Mgr / Admin | Download PDF invoice |
| GET | `/reports/pdf` | Yes | Finance Mgr / Admin | Full PDF report |
| GET | `/reports/csv` | Yes | Finance Mgr / Admin | CSV export |
| POST | `/refunds/:orderId` | Yes | Finance Mgr / Admin | Process refund |
| GET | `/transactions` | Yes | Finance Mgr / Admin | All transactions |
| POST | `/transactions` | Yes | Finance Mgr / Admin | Create manual transaction |
| PUT | `/transactions/:id` | Yes | Finance Mgr / Admin | Update transaction |
| DELETE | `/transactions/:id` | Yes | Finance Mgr / Admin | Delete transaction |
| PUT | `/purchase-orders/:id/pay` | Yes | Finance Mgr / Admin | Pay purchase order |

---

## 5. Database — How It Works & Where Data Is Saved

### MongoDB Collections

#### `orders` (model: `Order.js`)
```
{
  _id: ObjectId,
  orderNumber: String (auto-generated, e.g., ORD-241215-001),
  user: ObjectId (ref: User) | null    ← null for guest checkout
  guestInfo: { name, email, phone }    ← populated for guest checkout
  items: [{
    product: ObjectId (ref: Product),
    productType: String (refPath discriminator: 'Product' or 'VoucherProduct'),
    title: String (snapshot at order time),
    price: Number (snapshot at order time),
    quantity: Number,
    discount: Number
  }],
  subtotal: Number,
  couponDiscount: Number,
  voucherDiscount: Number,
  campaignDiscount: Number,
  totalAmount: Number,
  couponCode: String,
  giftVoucherCode: String,
  status: String (enum: pending | processing | shipped | delivered | cancelled),
  paymentMethod: String (enum: cash | card | online),
  paymentStatus: String (enum: pending | paid | refunded),
  shippingAddress: { street, city, state, zipCode, country },
  notes: String,
  createdAt: Date,
  updatedAt: Date
}
```

**Price Snapshot:** Item prices are copied into the order at creation time. Even if the product price changes later, the order record preserves the price that was actually charged.

**refPath Polymorphism:** `items.productType` tells Mongoose which collection to use when populating `items.product`. This allows both `Product` and `VoucherProduct` items in the same order.

**Guest Checkout:** If `optionalProtect` finds no JWT, `req.user` is null. The order is created with `user: null` and `guestInfo` populated from the request body.

#### `carts` (model: `Cart.js`)
```
{
  _id: ObjectId,
  user: ObjectId (ref: User, unique),  ← one cart per user
  items: [{
    product: ObjectId,
    productType: String (refPath),
    quantity: Number,
    price: Number (cached, refreshed on getCart)
  }],
  total: Number,
  updatedAt: Date
}
```

**Pre-save hook:** Before save, the total is recalculated as `sum(item.price * item.quantity)` for all items.

**Price Refresh:** `getCart` re-fetches each product's current price from `Product` collection before returning the cart. This prevents a customer from viewing a stale price in their cart if a product's price was changed.

#### `financialtransactions` (model: `FinancialTransaction.js`)
```
{
  _id: ObjectId,
  type: String (enum: order | refund | expense | supplier_payment | manual),
  description: String,
  amount: Number (required, > 0),
  isIncome: Boolean  ← true=revenue, false=expense
  referenceId: ObjectId (ref: Order or PurchaseOrder),
  referenceModel: String (refPath),
  status: String (enum: pending | completed | cancelled),
  createdBy: ObjectId (ref: User),
  date: Date,
  category: String (enum: sales | refund | expense | utilities | etc.),
  createdAt: Date
}
```

**Relationships:**
- `orders.user` → `users` (E1)
- `orders.items.product` → `products` (E2) or `voucherproducts` (E6)
- `carts.user` → `users` (E1)
- `financialtransactions.referenceId` → `orders` or `purchaseorders` (E4)

**Indexes:**
- `cart.user` — unique index (one cart per user)
- `orders.orderNumber` — unique index
- `financialtransactions.date` — for fast date-range queries on financial dashboard

---

## 6. Validations Used

### Mongoose Schema (Order.js)
```javascript
status: { enum: ['pending','processing','shipped','delivered','cancelled'] }
paymentStatus: { enum: ['pending','paid','refunded'] }
paymentMethod: { enum: ['cash','card','online'] }
totalAmount: { required: true, min: 0 }
items: { required: true }  // minimum 1 item validated in controller
```

### Mongoose Schema (FinancialTransaction.js)
```javascript
amount: { required: true, min: [0.01, 'Amount must be positive'] }
type:   { enum: ['order','refund','expense','supplier_payment','manual'] }
```

### Controller-Level Validations (orderController.js)
- **createOrder:** verifies each `productId` exists in DB and is not archived
- **createOrder:** checks each product's stock ≥ requested quantity (E5 sync)
- **createOrder:** validates coupon code via E6 `validateCoupon` logic (not expired, usage limit not reached, minimum order met)
- **createOrder:** validates gift voucher via E6 `validateVoucher` logic (active, sufficient balance)
- **updateOrderStatus:** prevents invalid status transitions (e.g., cannot go from `delivered` back to `pending`)

### Controller-Level Validations (cartController.js)
- **addToCart:** checks `Product.stock >= quantity` before adding
- **updateCartItem:** checks stock availability for new quantity

---

## 7. How to Change Colors (Frontend)

Cart and order pages are in `client/src/epics/E3_OrderAndTransaction/`.

### Cart Badge (item count in navbar)
Find the cart icon component and change the badge color:
```jsx
<span className="bg-red-500 text-white rounded-full">
// change bg-red-500 → bg-primary to match your theme
```

### Order Status Colors
Find the order status badge/pill component:
```jsx
// Map status to Tailwind color
const statusColors = {
  pending:    'bg-yellow-100 text-yellow-800',
  processing: 'bg-blue-100 text-blue-800',
  shipped:    'bg-indigo-100 text-indigo-800',
  delivered:  'bg-green-100 text-green-800',
  cancelled:  'bg-red-100 text-red-800',
};
// Change any of these Tailwind classes to customize
```

### Financial Dashboard Charts
Charts use a library (e.g., Chart.js / Recharts). Find the chart config:
```javascript
// Change bar/line colors in chart dataset config
backgroundColor: '#3B82F6',   // Tailwind blue-500
borderColor:     '#1D4ED8',   // Tailwind blue-700
```

---

## 8. Viva Q&A

**Q1: Why does `getCart` refresh prices from the database every time?**  
A: To prevent a price inconsistency scenario. If a customer adds an item at LKR 1000 and the product manager later changes the price to LKR 1200, the customer's cached cart price would be wrong. By re-fetching from the `Product` collection on every `getCart` call, we ensure the customer always sees the current price before checkout.

**Q2: How does guest checkout work technically?**  
A: The `/api/orders` endpoint uses the `optionalProtect` middleware instead of `protect`. If no JWT is in the `Authorization` header, `req.user` remains `null` and the middleware passes through. In `createOrder`, if `req.user` is null, the order is created with `user: null` and `guestInfo` (name, email, phone) from the request body. Guest orders can still be tracked by the guest's email.

**Q3: Why is the price snapshotted in the order instead of referencing the Product's price?**  
A: If we stored only a reference to the product, and the product's price changed or the product was deleted, looking up an old order would show the wrong price or fail entirely. The snapshot preserves the exact commercial record of what the customer was charged. This is standard e-commerce practice and is also required for accurate financial reporting.

**Q4: How does the order creation interact with the inventory system (E5)?**  
A: Inside `createOrder`, after validating items and discounts, the controller calls the E5 inventory update logic (either importing the function directly or via internal service). It increments `reservedStock` and decrements `availableStock` for each product at the relevant warehouse. If any stock deduction fails (insufficient stock), the entire order creation is rolled back.

**Q5: What is the `refPath` feature used in Order and Cart models?**  
A: `refPath` is a Mongoose feature for polymorphic references. `items.productType` stores either `'Product'` or `'VoucherProduct'`, and Mongoose uses this value to determine which collection to query when `.populate()` is called on `items.product`. This allows a single order to contain both regular books and gift voucher products.

**Q6: How are financial transactions created automatically?**  
A: Inside `createOrder`, after the order document is saved, `createTransaction` logic runs automatically to create a `FinancialTransaction` with `type: 'order'`, `isIncome: true`, and `amount: order.totalAmount`. This means every sale is automatically recorded in the financial ledger without requiring manual finance manager input.

**Q7: How does the refund process work?**  
A: `processRefund(orderId)` does three things: (1) creates a new `FinancialTransaction` with `type: 'refund'`, `isIncome: false`, `amount: order.totalAmount`; (2) updates the `Order.paymentStatus` to `'refunded'`; (3) updates the `Order.status` to `'cancelled'`. Stock is NOT automatically re-added on refund — a separate inventory adjustment would need to be made via E5.

**Q8: What does the financial dashboard return and how is it calculated?**  
A: It uses MongoDB aggregation pipelines. For example:
```javascript
FinancialTransaction.aggregate([
  { $match: { date: { $gte: startDate }, isIncome: true } },
  { $group: { _id: null, totalRevenue: { $sum: '$amount' } } }
])
```
Net profit = sum of all `isIncome: true` amounts minus sum of all `isIncome: false` amounts in the period.

**Q9: How does the CSV export work?**  
A: `generateFinancialCSV` queries all `FinancialTransaction` records in the date range, formats them as an array of objects, and uses the `csv-writer` (or similar) library to convert to CSV format. The response header is set to `Content-Type: text/csv` and `Content-Disposition: attachment; filename=report.csv` to trigger a browser download.

**Q10: What order status transitions are allowed?**  
A: The controller validates transitions:
- `pending` → `processing` or `cancelled`
- `processing` → `shipped` or `cancelled`
- `shipped` → `delivered`
- `delivered` → (final, no further change)
- `cancelled` → (final, no further change)

Attempting to set `delivered` → `pending` returns a 400 error with "Invalid status transition".

**Q11: Why does the cart have a `unique` index on `user`?**  
A: Each customer should have exactly one active cart. A unique index on `user` ensures this at the database level. When `addToCart` is called, it uses `Cart.findOneAndUpdate({ user: req.user._id }, ..., { upsert: true })` — creating a cart if one doesn't exist, updating if it does. Without the unique index, race conditions could create multiple carts for the same user.

**Q12: How does the coupon discount combine with the campaign discount?**  
A: They are applied sequentially. First, the Campaign discount is applied per-item (each item's price is reduced by the campaign percentage before being added to the subtotal). Then the coupon discount is applied to the post-campaign subtotal total (either a flat amount or percentage with a `maxDiscount` cap). Finally, the gift voucher amount is deducted from the remaining total. All three discount amounts are stored separately in the order document for transparency.
