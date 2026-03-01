# E4 – Supplier Management

**Epic Owner:** IT24100799 – Gawrawa G H Y  
**Stack:** Node.js · Express · Mongoose · MongoDB  
**Base URL:** `/api/suppliers` · `/api/purchase-orders`

---

## 1. Folder Structure

```
E4_SupplierManagement/
├── controllers/
│   ├── supplierController.js       – Supplier CRUD + verification + analytics
│   └── purchaseOrderController.js  – PO lifecycle, auto-numbering, inventory sync
├── middleware/
│   └── (uses E1 auth middleware)
├── models/
│   ├── Supplier.js                 – Supplier schema with payment terms
│   └── PurchaseOrder.js            – PO schema with status history audit trail
└── routes/
    ├── supplierRoutes.js
    └── purchaseOrderRoutes.js
```

---

## 2. How the Backend / API Works

```
Request → authenticate (protect) → authorize(supplier_manager / admin)
                  │
                  ▼
    supplierController  OR  purchaseOrderController
                  │
         Mongoose + MongoDB
                  │
                  ▼
          JSON Response
```

### Purchase Order Status Flow

```
Draft ──► Sent ──► Confirmed ──► Received ──► Completed
   │                                │
   └──── Cancelled ◄────────────────┘
                         (from any stage)
```

When a PO reaches **Received**, the controller automatically calls the **E5 Inventory** module to add the received stock to the warehouse (incrementing `quantity` and `availableStock` in the relevant `Inventory` document).

### Maker-Checker for Supplier Updates

```
supplier_manager requests update
          │
          ▼
ApprovalRequest created (E1 model)
          │
          ▼
Admin reviews at GET /api/approvals
          │
    ┌─────┴─────┐
  Approve      Reject
    │
    ▼
supplierController applies the actual change
```

---

## 3. All Functions

### `supplierController.js`

| Function | Purpose | Auth |
|---|---|---|
| `getAllSuppliers(req, res)` | Returns all suppliers with optional filters: `category`, `isVerified`, `search` (name / contactPerson). Supports pagination. | Supplier Mgr / Admin / Finance Mgr |
| `createSupplier(req, res)` | Create a new supplier record. Validates that supplier email is unique. | Supplier Mgr / Admin |
| `updateSupplier(req, res)` | If a `supplier_manager` requests an update, creates an `ApprovalRequest` (maker-checker). If `admin` requests, applies immediately. | Supplier Mgr / Admin |
| `deleteSupplier(req, res)` | Delete a supplier. Blocked if supplier has active (non-completed) purchase orders. | Supplier Mgr / Admin |
| `getSupplierAnalytics(req, res)` | Returns per-supplier spend totals, pending order counts, top suppliers by order volume. | Supplier Mgr / Admin / Finance Mgr |

### `purchaseOrderController.js`

| Function | Purpose | Auth |
|---|---|---|
| `createPurchaseOrder(req, res)` | Create a PO. Auto-generates `poNumber` (format: PO-YYMM-XXXX). Validates supplier exists, items have valid products and quantities. Sets initial status to `draft`. | Supplier Mgr / Admin |
| `getAllPurchaseOrders(req, res)` | List all POs with filters: `status`, `supplier`, `date range`. Paginated. | Supplier Mgr / Admin / Finance Mgr |
| `getPurchaseOrder(req, res)` | Get single PO with full supplier and item details populated. | Supplier Mgr / Admin / Finance Mgr |
| `updatePOStatus(req, res)` | Advance PO status. On transition to `Received`: triggers E5 inventory update (adds received quantities to warehouse stock). Appends entry to `statusHistory`. | Supplier Mgr / Admin |
| `requestPayment(req, res)` | Marks a PO as payment requested, attaches payment amount. | Supplier Mgr / Admin |
| `emailPurchaseOrder(req, res)` | Sends PO details to the supplier's email address (via nodemailer). | Supplier Mgr / Admin |
| `verifyDelivery(req, res)` | Records delivery confirmation (actual quantities received vs ordered). Triggers partial inventory update if quantities differ. | Supplier Mgr / Admin |

---

## 4. CRUD API Endpoints

### Supplier Routes — `/api/suppliers`

All routes require: `protect + authorize(supplier_manager | admin | finance_manager)`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | List all suppliers |
| GET | `/analytics` | Supplier spend analytics |
| POST | `/` | Create supplier |
| PUT | `/:id` | Update supplier (maker-checker for non-admin) |
| DELETE | `/:id` | Delete supplier |

### Purchase Order Routes — `/api/purchase-orders`

| Method | Endpoint | Auth (Role) | Description |
|---|---|---|---|
| POST | `/` | Supplier Mgr / Admin | Create PO |
| GET | `/` | Supplier Mgr / Admin / Finance Mgr | List all POs |
| GET | `/:id` | Supplier Mgr / Admin / Finance Mgr | Get single PO |
| PUT | `/:id/status` | Supplier Mgr / Admin | Update PO status |
| PUT | `/:id/payment` | Finance Mgr / Admin | Request/record payment |
| POST | `/:id/email` | Supplier Mgr / Admin | Email PO to supplier |
| PUT | `/:id/verify-delivery` | Supplier Mgr / Admin | Confirm delivery |

---

## 5. Database — How It Works & Where Data Is Saved

### MongoDB Collections

#### `suppliers` (model: `Supplier.js`)
```
{
  _id: ObjectId,
  name: String (required, unique),
  contactPerson: String (required),
  email: String (required, unique),
  phone: String (required),
  address: { street, city, state, zipCode, country },
  category: String (enum: Books | Stationery | Digital | Accessories | Other),
  paymentTerms: String (enum: Net 30 | Net 60 | Net 90 | Immediate),
  bankDetails: {
    bankName: String,
    accountNumber: String,
    branchCode: String
  },
  taxNumber: String,
  isVerified: Boolean (default: false),
  isActive: Boolean (default: true),
  outstandingBalance: Number (default: 0),
  notes: String,
  rating: Number (1–5, computed from PO history),
  createdAt: Date,
  updatedAt: Date
}
```

#### `purchaseorders` (model: `PurchaseOrder.js`)
```
{
  _id: ObjectId,
  poNumber: String (unique, auto-generated: PO-YYMM-XXXX),
  supplier: ObjectId (ref: Supplier, required),
  items: [{
    product: ObjectId (ref: Product),
    productName: String (snapshot),
    quantity: Number (required, min: 1),
    unitPrice: Number (required, min: 0),
    receivedQuantity: Number (default: 0),
    totalPrice: Number (computed)
  }],
  subtotal: Number,
  taxAmount: Number,
  totalAmount: Number (required),
  status: String (enum: draft | sent | confirmed | received | completed | cancelled),
  statusHistory: [{
    status: String,
    changedBy: ObjectId (ref: User),
    changedAt: Date,
    notes: String
  }],
  expectedDeliveryDate: Date,
  actualDeliveryDate: Date,
  paymentStatus: String (enum: unpaid | partial | paid),
  paymentDueDate: Date,
  notes: String,
  createdBy: ObjectId (ref: User),
  createdAt: Date,
  updatedAt: Date
}
```

**Pre-save hook (PurchaseOrder.js):** If `poNumber` is not set (new document), generates it:
```javascript
// Format: PO-YYMM-XXXX where XXXX is zero-padded sequence
const count = await PurchaseOrder.countDocuments();
this.poNumber = `PO-${yy}${mm}-${String(count + 1).padStart(4, '0')}`;
```

**statusHistory audit trail:** Every call to `updatePOStatus` does NOT replace the status alone — it pushes a new entry to `statusHistory` array: `{ status, changedBy: req.user._id, changedAt: new Date(), notes }`. This creates a full chronological audit log of every status change, who made it, and when.

**Inventory sync on Received:** When `updatePOStatus` sets status to `received`, it iterates over `PO.items[]` and for each item calls the E5 inventory `adjustStock` equivalent:
```javascript
await Inventory.findOneAndUpdate(
  { product: item.product, location: mainWarehouse },
  { $inc: { quantity: item.receivedQuantity, availableStock: item.receivedQuantity } }
);
```

**Relationships:**
- `purchaseorders.supplier` → `suppliers`
- `purchaseorders.items.product` → `products` (E2)
- `purchaseorders.statusHistory.changedBy` → `users` (E1)
- `purchaseorders.createdBy` → `users` (E1)
- `suppliers` ← `approvalrequests` (E1, maker-checker for updates)

**Indexes:**
- `suppliers.email` — unique
- `suppliers.name` — unique
- `purchaseorders.poNumber` — unique
- `purchaseorders.supplier` — for filtering POs by supplier
- `purchaseorders.status` — for filtering by status

---

## 6. Validations Used

### Mongoose Schema (Supplier.js)
```javascript
name:          { required: true, unique: true, trim: true }
email:         { required: true, unique: true, lowercase: true }
phone:         { required: true }
contactPerson: { required: true }
category:      { enum: ['Books','Stationery','Digital','Accessories','Other'] }
paymentTerms:  { enum: ['Net 30','Net 60','Net 90','Immediate'] }
```

### Mongoose Schema (PurchaseOrder.js)
```javascript
supplier:    { required: true, ref: 'Supplier' }
totalAmount: { required: true, min: 0 }
status:      { enum: ['draft','sent','confirmed','received','completed','cancelled'] }
items:       { validate: arr => arr.length > 0 }  // must have at least 1 item
```

### Controller-Level Validations
- **createSupplier:** checks `email` uniqueness (MongoDB unique index error caught + re-thrown as 400)
- **deleteSupplier:** queries `PurchaseOrder.find({ supplier: id, status: { $nin: ['completed','cancelled'] } })` — rejects if any active POs exist
- **updatePOStatus:** validates against allowed transition map (cannot skip from `draft` directly to `received`)
- **createPurchaseOrder:** validates each `item.product` ObjectId exists in `Product` collection
- **createPurchaseOrder:** checks `item.quantity > 0` and `item.unitPrice >= 0` for each item

---

## 7. How to Change Colors (Frontend)

Supplier and PO management pages are in `client/src/epics/E4_SupplierManagement/`.

### PO Status Badge Colors
```jsx
const poStatusColors = {
  draft:     'bg-gray-100 text-gray-700',
  sent:      'bg-blue-100 text-blue-700',
  confirmed: 'bg-indigo-100 text-indigo-700',
  received:  'bg-green-100 text-green-700',
  completed: 'bg-emerald-100 text-emerald-700',
  cancelled: 'bg-red-100 text-red-700',
};
// Modify any of these Tailwind classes to change status colors
```

### Supplier Table Row Colors
```jsx
// Verified suppliers — green indicator
<span className={`w-2 h-2 rounded-full ${supplier.isVerified ? 'bg-green-500' : 'bg-gray-400'}`} />
// Change bg-green-500 for the verified dot color
```

### Button Colors
```jsx
<button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
  Create Supplier
</button>
// Change bg-blue-600 and hover:bg-blue-700 to any Tailwind color
```

---

## 8. Viva Q&A

**Q1: Why is the maker-checker pattern applied to supplier updates but not to creation?**  
A: Creating a new supplier is a relatively low-risk action. However, updating a supplier's bank details or payment terms could result in payments going to the wrong account. The maker-checker ensures a second person (admin) reviews sensitive changes before they take effect, reducing fraud risk.

**Q2: How is the PO number (poNumber) generated?**  
A: A Mongoose pre-save hook runs before the document is inserted. It counts existing PurchaseOrder documents and generates `PO-YYMM-XXXX` where YY = 2-digit year, MM = 2-digit month, XXXX = zero-padded sequential count. For example, the 12th PO created in December 2024 would be `PO-2412-0012`.

**Q3: What happens to inventory when a PO status changes to `received`?**  
A: The `updatePOStatus` controller detects the transition to `received` and loops through each PO item. It calls an E5 inventory update that increments `quantity` and `availableStock` in the `Inventory` collection for the main warehouse. If `verifyDelivery` is used and quantities differ from the ordered amount, only the actual received quantities are added.

**Q4: Why can't a supplier be deleted if it has active purchase orders?**  
A: Referential integrity. If a supplier is deleted while a PO referencing them is still active (status: draft/sent/confirmed), the PO would have a dangling reference. The manager would lose track of which company they ordered from. The system blocks deletion and requires resolving all active POs first.

**Q5: What is the `statusHistory` audit trail used for?**  
A: Accountability. If a PO was incorrectly marked as received, the `statusHistory` shows exactly which user changed the status and when. This is critical for financial audits — if a payment was made based on a received PO, the audit trail proves the payment was authorized.

**Q6: What is `outstandingBalance` on a Supplier?**  
A: It tracks the total amount owed to the supplier (sum of unpaid PO amounts). When a PO is created, `outstandingBalance` increases by `totalAmount`. When Finance marks it paid via `PUT /api/financial/purchase-orders/:id/pay`, `outstandingBalance` decreases. This gives a quick view of total financial exposure to each supplier.

**Q7: How does the `getSupplierAnalytics` function work?**  
A: It runs MongoDB aggregation on the `PurchaseOrder` collection:
```javascript
PurchaseOrder.aggregate([
  { $group: {
    _id: '$supplier',
    totalSpend: { $sum: '$totalAmount' },
    orderCount: { $sum: 1 },
    avgOrderValue: { $avg: '$totalAmount' }
  }},
  { $sort: { totalSpend: -1 } }  // top suppliers first
])
```
Results are joined with Supplier data using `$lookup`.

**Q8: Why are the PO line items' product names snapshotted as strings?**  
A: For the same reason order item prices are snapshotted in E3. If a product is renamed or deleted after a PO is created, the PO's record should still show what was originally ordered. The `productName` string in each item is copied at PO creation time from the Product document.

**Q9: What does `emailPurchaseOrder` actually do?**  
A: It compiles the PO details (supplier info, items, quantities, prices, expected delivery date) and sends an HTML email to the supplier's registered email address using `nodemailer`. The email serves as the official order document sent to the supplier.

**Q10: How is supplier `isVerified` different from `isActive`?**  
A: `isVerified` means the supplier's business credentials have been checked and approved (a human verification step). `isActive` means the supplier is currently operational and can receive new orders. A supplier can be verified but inactive (e.g., temporarily paused). Unverified suppliers may still exist in the system but should not receive large orders.
