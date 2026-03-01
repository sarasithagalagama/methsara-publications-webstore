# Quick Start Guide — Full Stack Application

## What You Have

- **Backend**: Node.js/Express + Mongoose (6 epics, 18 MongoDB collections)
- **Frontend**: React + Tailwind CSS
- **Database**: MongoDB Atlas (cloud)
- **All 6 Epics**: Fully implemented and wired

---

## Prerequisites

- Node.js v18+ installed
- MongoDB Atlas cluster running (or local MongoDB)
- `.env` file configured (see below)

### `.env` file (create in project root)
```env
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/methsara_publications
JWT_SECRET=your_super_secret_key_here
PORT=5000
NODE_ENV=development
```

---

## Option A — One Command (Recommended)

```bash
# From project root
npm install
cd client && npm install && cd ..
npm start
```

This starts both backend and frontend simultaneously (uses `concurrently`).

| Output prefix | Service | URL |
|---|---|---|
| `[0]` | Backend (Express) | http://localhost:5000 |
| `[1]` | Frontend (React) | http://localhost:3000 |

---

## Option B — Two Terminals

**Terminal 1 — Backend:**
```bash
npm run dev
```

Expected output:
```
✅ MongoDB Connected Successfully
📦 Database: methsara_publications
🚀 Server running on port 5000
```

**Terminal 2 — Frontend:**
```bash
cd client
npm start
```

Expected output:
```
Compiled successfully!
Local: http://localhost:3000
```

---

## All API Endpoints

| Epic | Base URL |
|---|---|
| E1 — Auth / Users | `http://localhost:5000/api/auth` |
| E1 — Approvals | `http://localhost:5000/api/approvals` |
| E2 — Products | `http://localhost:5000/api/products` |
| E2 — Reviews | `http://localhost:5000/api/reviews` |
| E2 — Upload | `http://localhost:5000/api/upload` |
| E3 — Orders | `http://localhost:5000/api/orders` |
| E3 — Cart | `http://localhost:5000/api/cart` |
| E3 — Financial | `http://localhost:5000/api/financial` |
| E4 — Suppliers | `http://localhost:5000/api/suppliers` |
| E4 — Purchase Orders | `http://localhost:5000/api/purchase-orders` |
| E5 — Inventory | `http://localhost:5000/api/inventory` |
| E5 — Locations | `http://localhost:5000/api/locations` |
| E5 — Stock Transfers | `http://localhost:5000/api/stock-transfers` |
| E6 — Coupons / Campaigns | `http://localhost:5000/api/coupons` |
| E6 — Gift Vouchers | `http://localhost:5000/api/gift-vouchers` |

## Testing the Application

### 1. Register & Login (E1)
1. Go to http://localhost:3000
2. Click **Register**
3. Fill in: Name, Email, Phone, Password (min 8 chars)
4. You'll be auto-logged in and redirected to Products

### 2. Browse Products (E2)
- Use the search bar (searches by title, author, ISBN)
- Filter by **Grade**, **Exam Type**, **Category**
- Sort by price or rating
- Click a product to see details and reviews

### 3. Shopping Cart & Checkout (E3)
1. Click **Add to Cart** on any product
2. Click the cart icon — update quantities or remove items
3. At checkout: enter delivery address, select payment method
4. Optionally enter a coupon code (e.g. `WELCOME10`)
5. Click **Place Order** — order appears in **My Orders**

### 4. Staff / Admin Features (E4, E5, E6)
These require a non-customer role. Create a staff account via Postman:

**POST** `http://localhost:5000/api/auth/create-staff` (with admin JWT)
```json
{
  "name": "Test Manager",
  "email": "manager@test.com",
  "password": "password123",
  "role": "supplier_manager"
}
```

Available roles: `admin | product_manager | finance_manager | supplier_manager | master_inventory_manager | location_inventory_manager | marketing_manager`

See full Postman guide: [`docs/guides/Postman_Testing_Guide.md`](docs/guides/Postman_Testing_Guide.md)

---

## How to Change Colors (Frontend)

### Global CSS Variables
Edit `client/src/index.css`:
```css
:root {
  --primary-color: #2563eb;      /* Main brand color (buttons, links) */
  --secondary-color: #10b981;    /* Accent color */
  --success-color: #10b981;      /* Success messages / badges */
  --error-color:   #ef4444;      /* Error states */
}
```

### Tailwind Config
Edit `client/tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary:   '#2563EB',   // maps to bg-primary, text-primary
      secondary: '#10B981',
      accent:    '#F59E0B',   // star ratings, highlights
    }
  }
}
```

Each epic also has color customization notes — see the `## How to Change Colors` section in each epic's README.

---

## Development Workflow

### Making Backend Changes
- Edit files in `epics/E*/controllers/`, `epics/E*/models/`, `epics/E*/routes/`
- `nodemon` auto-restarts the server on save

### Making Frontend Changes
- Edit files in `client/src/epics/E*/`
- React hot-reloads the browser on save

### Daily Workflow
```bash
# Start everything
npm start

# Make changes, save files
# Both servers auto-reload

# Stop both servers
Ctrl + C
```

---

## Troubleshooting

**Backend won't start — port in use:**
```bash
taskkill /F /IM node.exe
npm run dev
```

**Frontend — module not found:**
```bash
cd client
npm install
npm start
```

**MongoDB connection failed:**
- Check your `.env` file has the correct `MONGO_URI`
- Verify MongoDB Atlas IP whitelist includes your current IP

**CORS errors in browser:**
- Ensure backend is on port 5000
- Verify `client/package.json` has: `"proxy": "http://localhost:5000"`

**JWT errors (401 Unauthorized):**
- Token may be expired (7-day TTL) — log out and log in again
- Check that `JWT_SECRET` in `.env` matches what was used to generate tokens

---

## Actual Project Structure

```
methsara-publications-webstore/
├── server.js                 # Backend entry point
├── package.json             # Root scripts + backend deps
├── .env                     # Environment variables
├── epics/                   # All backend logic (controllers, models, routes)
│   ├── E1_UserAndRoleManagement/
│   ├── E2_ProductCatalog/
│   ├── E3_OrderAndTransaction/
│   ├── E4_SupplierManagement/
│   ├── E5_InventoryManagement/
│   └── E6_PromotionAndLoyalty/
└── client/                  # React frontend
    └── src/
        ├── epics/           # Frontend components per epic
        ├── components/      # Shared UI components
        ├── context/         # Auth + Cart context
        ├── services/        # Axios API calls
        ├── pages/           # Home, About, Contact
        └── api/config.js    # Base URL config
```

Full tree: [FOLDER_STRUCTURE.md](FOLDER_STRUCTURE.md)

---

## Pre-Demo Checklist

- [ ] Backend starts without errors
- [ ] Frontend starts without errors
- [ ] Can register a new customer
- [ ] Can log in and see profile
- [ ] Can browse and search products
- [ ] Can add to cart and checkout
- [ ] Can apply coupon code
- [ ] Can view order in My Orders
- [ ] Admin can view financial dashboard
- [ ] Inventory manager can view stock levels
- [ ] All 6 epic dashboards accessible with correct roles
