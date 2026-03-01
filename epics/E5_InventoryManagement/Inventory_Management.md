# E5 – Inventory Management

**Epic Owner:** IT24100264 – Bandara N W C D  
**Stack:** Node.js · Express · Mongoose · MongoDB  
**Base URL:** `/api/inventory` · `/api/locations` · `/api/stock-transfers`

---

## 1. Folder Structure

```
E5_InventoryManagement/
├── controllers/
│   ├── inventoryController.js      – Stock view, adjust, alerts, reports
│   ├── locationController.js       – Warehouse/branch location management
│   └── stockTransferController.js  – Inter-location stock movement
├── middleware/
│   └── (uses E1 auth middleware)
├── models/
│   ├── Inventory.js                – Stock record (product × location)
│   ├── Location.js                 – Warehouse / branch locations
│   └── StockTransfer.js            – Transfer request / approval records
└── routes/
    ├── inventoryRoutes.js
    ├── locationRoutes.js
    └── stockTransferRoutes.js
```

---

## 2. How the Backend / API Works

### Core Inventory Design

Every `Inventory` document represents the stock of **one product at one location**:
```
Inventory = { product: ObjectId, location: ObjectId, quantity, reserved, available }
```

This is a **many-to-many join table** pattern in a document database. To find all stock for a product:
```javascript
Inventory.find({ product: productId })  // one row per location
```
To find all stock at a location:
```javascript
Inventory.find({ location: locationId })  // one row per product
```

### Role-Scoped Access

```
master_inventory_manager
     ├── can see ALL locations
     └── can adjust stock at ANY location

location_inventory_manager
     ├── can only see THEIR assigned location (req.user.assignedLocation)
     └── can only request transfers (cannot approve their own)
```

### Stock Transfer Flow

```
location_inventory_manager OR master_inventory_manager
         │
         ▼  POST /api/stock-transfers/request
  StockTransfer created (status: Requested)
  Source location: availableStock decremented (held)
         │
         ▼  PUT /api/stock-transfers/:id/approve
  Master Inventory Manager approves
         │
    ┌────┴────┐
  Approve   Reject
    │          │
    ▼          ▼
 Stock        Held stock
 moved to     restored at
 destination  source
```

---

## 3. All Functions

### `inventoryController.js`

| Function | Purpose | Auth |
|---|---|---|
| `getStockByLocation(req, res)` | Returns all inventory records at a specific location. Location inventory managers can only query their assigned location (`authorizeLocation` check). Master managers see any. Also runs Dynamic Sync — queries each product's `stock` field and reconciles with Inventory doc if discrepancy found. | Inventory Mgr / Admin |
| `adjustStock(req, res)` | Manually add or subtract stock at a location. Only Master Inventory Manager can approve directly; regular adjustments by location managers create an `ApprovalRequest` (E1 maker-checker). Records the adjustment in `adjustments` history array. | MIM / Admin (direct); LIM (via approval) |
| `getLowStockAlerts(req, res)` | Returns all Inventory documents where `availableStock <= lowStockThreshold`. Sorted by severity (most critical first). | Inventory Mgr / Admin |
| `getStockMovements(req, res)` | Returns the `adjustments` history array from all Inventory documents, flattened and sorted by date. Shows who adjusted what and when. | Inventory Mgr / Admin |
| `getInventoryStats(req, res)` | Dashboard summary: total SKUs tracked, total units in stock, total locations, number of low-stock items, number of out-of-stock items. | Inventory Mgr / Admin |
| `syncAllStock(req, res)` | Utility: iterates every Product and every Inventory document. For each product, checks if the sum of `availableStock` across all location inventories matches `product.stock`. Corrects any discrepancies. | MIM / Admin |
| `updateInventorySettings(req, res)` | Update thresholds: `lowStockThreshold` and `reorderPoint` on a specific Inventory document. Used to configure when alerts trigger. | MIM / Admin |

### `locationController.js`

| Function | Purpose | Auth |
|---|---|---|
| `getLocations(req, res)` | List all warehouse/branch locations. Implements self-healing: if no `isMainWarehouse: true` location exists, it creates one automatically. | Inventory Mgr / Admin |
| `createLocation(req, res)` | Create a new warehouse or branch location. If `isMainWarehouse: true` is set, clears that flag from all other locations first. Only one main warehouse allowed. | MIM / Admin |
| `updateLocation(req, res)` | Update location details (name, address, manager assignment, `isMainWarehouse` flag). | MIM / Admin |
| `deleteLocation(req, res)` | Delete a location. Blocked if any Inventory documents still reference it. | MIM / Admin |

### `stockTransferController.js`

| Function | Purpose | Auth |
|---|---|---|
| `requestTransfer(req, res)` | Request stock movement from one location to another. Validates: source location has enough `availableStock`. Creates a `StockTransfer` document with `status: Requested`. Decrements `availableStock` at source (reserved for transfer). | Inventory Mgr / Admin |
| `approveTransfer(req, res)` | Approve or reject a pending transfer. If approved: decrements `quantity` at source, increments `quantity` and `availableStock` at destination. If rejected: restores held `availableStock` at source. Updates `StockTransfer.status`. Role check: cannot approve a transfer you requested. | MIM / Admin |
| `getAllTransfers(req, res)` | List all stock transfer requests with filters (status, from/to location, date range). | Inventory Mgr / Admin |

---

## 4. CRUD API Endpoints

### Inventory Routes — `/api/inventory`

All routes require: `protect + authorize(master_inventory_manager | location_inventory_manager | admin)`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/location/:location` | View stock at a location |
| POST | `/adjust` | Adjust stock quantity |
| GET | `/alerts` | Low stock alerts |
| GET | `/movements` | Stock movement history |
| GET | `/stats` | Inventory dashboard stats |
| GET | `/sync-all` | Manual stock sync utility |
| PUT | `/:id` | Update inventory thresholds |

### Location Routes — `/api/locations`

| Method | Endpoint | Auth (Role) | Description |
|---|---|---|---|
| GET | `/` | Inventory Mgr / Admin | List all locations |
| POST | `/` | MIM / Admin | Create location |
| PUT | `/:id` | MIM / Admin | Update location |
| DELETE | `/:id` | MIM / Admin | Delete location |

### Stock Transfer Routes — `/api/stock-transfers`

| Method | Endpoint | Auth (Role) | Description |
|---|---|---|---|
| POST | `/request` | Inventory Mgr / Admin | Request a transfer |
| PUT | `/:id/approve` | MIM / Admin | Approve or reject |
| GET | `/` | Inventory Mgr / Admin | List all transfers |

---

## 5. Database — How It Works & Where Data Is Saved

### MongoDB Collections

#### `inventories` (model: `Inventory.js`)
```
{
  _id: ObjectId,
  product: ObjectId (ref: Product, required),
  location: ObjectId (ref: Location, required),

  // Three stock fields:
  quantity: Number (default: 0),        ← total physical units
  reservedStock: Number (default: 0),   ← units held for pending orders / transfers
  availableStock: Number (default: 0),  ← quantity - reservedStock (what can be sold)

  lowStockThreshold: Number (default: 10),  ← alert if availableStock <= this
  reorderPoint: Number (default: 20),        ← suggested reorder level

  adjustments: [{
    type: String (enum: add | subtract | transfer_in | transfer_out | order_deduction),
    quantity: Number,
    reason: String,
    adjustedBy: ObjectId (ref: User),
    adjustedAt: Date
  }],

  createdAt: Date,
  updatedAt: Date
}
```

**Compound Unique Index:** `{ product: 1, location: 1 }` ensures only one Inventory document per product-location pair. Attempting to create a duplicate throws a MongoDB unique key error.

**The Three Stock Fields Explained:**
- `quantity` — The total number of physical units at this location (including reserved)
- `reservedStock` — Units in pending orders or pending transfers (cannot be sold)
- `availableStock` — What customers can actually order = `quantity - reservedStock`

When an order is placed: `reservedStock += quantity`, `availableStock -= quantity`  
When an order is shipped: `quantity -= quantity`, `reservedStock -= quantity` (no change to available)  
When stock is added (PO received): `quantity += received`, `availableStock += received`

#### `locations` (model: `Location.js`)
```
{
  _id: ObjectId,
  name: String (required, unique),
  address: { street, city, state, zipCode },
  isMainWarehouse: Boolean (default: false),
  manager: ObjectId (ref: User),
  phone: String,
  email: String,
  isActive: Boolean (default: true),
  createdAt: Date
}
```

**Self-Healing Main Warehouse:** `getLocations` checks if any location has `isMainWarehouse: true`. If none exists (e.g., during initial setup or if it was accidentally removed), the controller automatically creates a default "Main Warehouse" location. This prevents the system from entering an invalid state.

#### `stocktransfers` (model: `StockTransfer.js`)
```
{
  _id: ObjectId,
  product: ObjectId (ref: Product),
  fromLocation: ObjectId (ref: Location),
  toLocation: ObjectId (ref: Location),
  quantity: Number (required, min: 1),
  status: String (enum: Requested | Approved | Rejected | Completed),
  requestedBy: ObjectId (ref: User),
  approvedBy: ObjectId (ref: User),
  requestedAt: Date,
  approvedAt: Date,
  notes: String
}
```

**Relationships:**
- `inventories.product` → `products` (E2)
- `inventories.location` → `locations`
- `stocktransfers.fromLocation` / `toLocation` → `locations`
- `stocktransfers.requestedBy` / `approvedBy` → `users` (E1)
- `inventories.adjustments.adjustedBy` → `users` (E1)

**Indexes:**
- `inventories.{ product, location }` — unique compound index
- `inventories.availableStock` — for fast low-stock queries
- `locations.name` — unique index
- `stocktransfers.status` — for filtering by transfer status

---

## 6. Validations Used

### Mongoose Schema (Inventory.js)
```javascript
quantity:      { default: 0, min: [0, 'Stock cannot be negative'] }
reservedStock: { default: 0, min: 0 }
availableStock:{ default: 0, min: 0 }
// compound unique: { product: 1, location: 1 }
adjustments.type: { enum: ['add','subtract','transfer_in','transfer_out','order_deduction'] }
```

### Mongoose Schema (StockTransfer.js)
```javascript
quantity: { required: true, min: [1, 'Transfer quantity must be at least 1'] }
status:   { enum: ['Requested','Approved','Rejected','Completed'] }
fromLocation: { required: true }
toLocation:   { required: true }
```

### Controller-Level Validations
- **requestTransfer:** checks `fromLocation !== toLocation` (cannot transfer to same location)
- **requestTransfer:** verifies `Inventory.availableStock >= requested quantity` at source
- **adjustStock:** negative adjustments checked — cannot subtract more than current `quantity`
- **approveTransfer:** verifies `status === 'Requested'` before allowing approval
- **deleteLocation:** checks `Inventory.countDocuments({ location: id }) === 0` before allowing delete

---

## 7. How to Change Colors (Frontend)

Inventory pages are in `client/src/epics/E5_InventoryManagement/`.

### Low Stock Alert Colors
```jsx
// Alert severity indicators
const stockColor = (available, threshold) => {
  if (available === 0)          return 'bg-red-100 text-red-700';    // Out of Stock
  if (available <= threshold)   return 'bg-yellow-100 text-yellow-700'; // Low Stock
  return 'bg-green-100 text-green-700';                              // In Stock
};
// Change these Tailwind classes to customize alert badge colors
```

### Stock Level Progress Bar
```jsx
<div className="bg-gray-200 rounded-full h-2">
  <div
    className="bg-green-500 h-2 rounded-full"
    style={{ width: `${Math.min((available / capacity) * 100, 100)}%` }}
  />
</div>
// Change bg-green-500 → bg-primary for consistent theme
```

### Transfer Status Colors
```jsx
const transferColors = {
  Requested: 'bg-yellow-100 text-yellow-700',
  Approved:  'bg-green-100 text-green-700',
  Rejected:  'bg-red-100 text-red-700',
  Completed: 'bg-blue-100 text-blue-700',
};
```

---

## 8. Viva Q&A

**Q1: Why are there three stock fields (`quantity`, `reservedStock`, `availableStock`) instead of just one?**  
A: A single stock number would cause overselling. When a customer places an order, we need to hold those units (reservedStock) immediately so they cannot be sold to another customer — even before the order is shipped. `availableStock = quantity - reservedStock` gives the real number of units that can still be ordered. This three-field approach is standard in warehouse management systems.

**Q2: What does the compound unique index on `{ product, location }` prevent?**  
A: It prevents creating two inventory records for the same product at the same location. Without it, a race condition could create duplicate inventory docs and lead to incorrect stock totals. With the index, MongoDB rejects the second insert at the database level.

**Q3: What is the "Dynamic Sync" in `getStockByLocation`?**  
A: When stock data is returned, the controller cross-checks that `product.stock` equals the sum of `availableStock` across all Inventory documents for that product. If a discrepancy is found (e.g., manual DB edit or sync failure), the Inventory document is updated to match the canonical `product.stock` value. This self-correcting behavior prevents data drift.

**Q4: Why can't a location inventory manager approve a transfer they requested?**  
A: Separation of duties / four-eyes principle. If one person could both request and approve their own transfers, they could move stock to any location without oversight. The system requires that stock transfers be reviewed by a Master Inventory Manager or Admin — a different person.

**Q5: What happens to the source stock when a transfer is REQUESTED?**  
A: `availableStock` at the source is immediately decremented (units are held). This prevents the same units from being sold to a customer while they are "in transit" for a transfer. If the transfer is rejected, the held units are restored (`availableStock` incremented back).

**Q6: How does the low stock alert system work?**  
A: `getLowStockAlerts` queries:
```javascript
Inventory.find({ availableStock: { $lte: '$lowStockThreshold' } })
```
Using MongoDB's expression query `$lte: '$lowStockThreshold'` compares the `availableStock` field against the `lowStockThreshold` **field on the same document** — no hardcoded threshold. This allows each product-location combination to have its own configured threshold.

**Q7: What is the "self-healing main warehouse" in `getLocations`?**  
A: The system requires exactly one location with `isMainWarehouse: true` because E4 Purchase Order receiving always stocks to the main warehouse. If this location disappears (e.g., accidentally deleted), the next `getLocations` call detects the missing record and auto-creates a default "Main Warehouse" document. This prevents the E4→E5 inventory sync from failing.

**Q8: How does `adjustStock` use the maker-checker pattern?**  
A: If the requester is a `location_inventory_manager`, the controller does NOT immediately update the Inventory document. Instead, it creates an `ApprovalRequest` document (E1 model) with the proposed adjustment. An admin or master inventory manager then reviews and approves it via `PUT /api/approvals/:id`. Only on approval does the actual stock adjustment occur. This prevents unauthorized stock manipulations.

**Q9: What does the `adjustments` array in the Inventory model record?**  
A: Every stock change (add, subtract, transfer in/out, order deduction) appends an entry to this array: type, quantity changed, reason text, who made the change (`adjustedBy`), and when (`adjustedAt`). This is a full audit trail. `getStockMovements` flattens these arrays across all inventory documents to show a complete history.

**Q10: How does stock deduction work when a customer places an order (E3 integration)?**  
A: When E3 `createOrder` runs, it calls E5 inventory logic for each ordered item:
```javascript
await Inventory.findOneAndUpdate(
  { product: item.productId, location: mainWarehouseId },
  { $inc: { reservedStock: item.quantity, availableStock: -item.quantity } }
);
```
The `adjustments` array also gets a new entry with `type: 'order_deduction'`. If the order is cancelled later, these amounts are reversed.

**Q11: Why is `syncAllStock` needed if automatic deductions are already tracked?**  
A: In a distributed system with multiple concurrent requests, edge cases can cause drift. For example: a server crash mid-transaction, a manual database fix, or a bug in the previous version. `syncAllStock` is a recovery utility — it authoritatively recalculates all inventory totals from order history and corrects any discrepancies. It should be run during maintenance windows, not in normal operation.

**Q12: How does `createLocation` ensure only one main warehouse exists?**  
A: Before saving:
```javascript
if (req.body.isMainWarehouse) {
  await Location.updateMany({}, { $set: { isMainWarehouse: false } });
}
```
This clears the `isMainWarehouse` flag from ALL existing locations before setting it on the new one. This guarantees the uniqueness constraint at the application level.
