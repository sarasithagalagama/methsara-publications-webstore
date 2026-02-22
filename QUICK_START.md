# 🚀 Quick Start Guide - Full Stack Application

## ✅ What You Have

- **Backend**: Node.js/Express + MongoDB (21 files)
- **Frontend**: React (30+ files)
- **Database**: MongoDB Atlas (connected)
- **All 6 Epics**: Fully implemented

---

## 🎯 Running the Application

### Step 1: Start Backend Server

Open **Terminal 1**:

```bash
# Make sure you're in the project root
cd c:\Users\ASUS\OneDrive\Desktop\methsara-publications-webstore

# Start backend
npm run dev
```

**Expected Output:**
```
✅ MongoDB Connected Successfully
📦 Database: methsara_publications
🚀 Server running on port 5000
📍 API URL: http://localhost:5000
```

**✅ Backend is ready when you see this!**

---

### Step 2: Install Frontend Dependencies (First Time Only)

Open **Terminal 2**:

```bash
# Navigate to client folder
cd c:\Users\ASUS\OneDrive\Desktop\methsara-publications-webstore\client

# Install dependencies
npm install
```

This will install:
- react
- react-dom
- react-router-dom
- axios
- react-scripts

**⏱️ This takes 1-2 minutes**

---

### Step 3: Start React Frontend

In the same **Terminal 2** (after npm install completes):

```bash
# Start React app
npm start
```

**Expected Output:**
```
Compiled successfully!

You can now view methsara-publications-client in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.x.x:3000
```

**✅ Frontend is ready!** Browser should open automatically.

---

## 🌐 Access the Application

### Main Application
**URL:** http://localhost:3000

### Backend API
**URL:** http://localhost:5000

### API Endpoints
- Auth: http://localhost:5000/api/auth
- Products: http://localhost:5000/api/products
- Orders: http://localhost:5000/api/orders
- Suppliers: http://localhost:5000/api/suppliers
- Inventory: http://localhost:5000/api/inventory
- Coupons: http://localhost:5000/api/coupons

---

## 🧪 Testing the Application

### 1. Register & Login (E1)

1. Go to http://localhost:3000
2. Click **"Register"**
3. Fill in the form:
   - Name: Your Name
   - Email: test@example.com
   - Phone: 0771234567
   - Password: test123
4. Click **"Register"**
5. You'll be auto-logged in and redirected to Products

### 2. Browse Products (E2)

1. You'll see the product list
2. Try the **search bar**: type "math"
3. Try **filters**: Select "Grade 10"
4. Try **sorting**: Select "Price (Low to High)"
5. Click on a product to see details

### 3. Shopping Cart (E3)

1. Click **"Add to Cart"** on any product
2. Click **"🛒 Cart"** in navigation
3. Update quantities with **+/-** buttons
4. Click **"Proceed to Checkout"**

### 4. Checkout with Coupon (E3 + E6)

1. Fill in delivery address
2. Select payment method
3. Enter coupon code: **WELCOME10**
4. Click **"Apply"** - should show discount
5. Click **"Place Order"**
6. Check **"My Orders"** to see your order

### 5. Admin Features (E4, E5, E6)

*Note: Need admin role - create via Postman*

- **Suppliers**: http://localhost:3000/suppliers
- **Inventory**: http://localhost:3000/inventory
- **Coupons**: http://localhost:3000/coupons

---

## 📊 Create Sample Data (Using Postman)

Before testing, add some products using Postman:

### Quick Sample Product

**POST** `http://localhost:5000/api/products`

**Headers:**
```
Authorization: Bearer YOUR_TOKEN_HERE
Content-Type: application/json
```

**Body:**
```json
{
  "name": "Mathematics Grade 10",
  "description": "Complete math guide for O/L students",
  "sku": "MATH-G10-001",
  "price": 650,
  "grade": "Grade 10",
  "subject": "Mathematics",
  "examType": "O/L",
  "mainImage": "https://via.placeholder.com/300x400?text=Math+G10",
  "isFeatured": true
}
```

**See full Postman guide:** `docs/guides/Postman_Testing_Guide.md`

---

## ⚠️ Troubleshooting

### Backend Won't Start

**Error:** `EADDRINUSE: address already in use :::5000`

**Solution:**
```bash
# Kill existing node process
taskkill /F /IM node.exe

# Start again
npm run dev
```

### Frontend Won't Start

**Error:** `Cannot find module 'react'`

**Solution:**
```bash
cd client
npm install
npm start
```

### MongoDB Connection Failed

**Error:** `MongoServerError: Authentication failed`

**Solution:**
- Check `.env` file has correct MongoDB URI
- Verify MongoDB Atlas is accessible
- Check network connection

### CORS Errors

**Error:** `Access to XMLHttpRequest blocked by CORS`

**Solution:**
- Ensure backend is running on port 5000
- Check `client/package.json` has: `"proxy": "http://localhost:5000"`

### Components Not Found

**Error:** `Module not found: Can't resolve './components/...'`

**Solution:**
- Verify all component files are created
- Check file names match imports (case-sensitive)
- Restart React dev server

---

## 📝 Development Workflow

### Daily Development

1. **Start Backend** (Terminal 1):
   ```bash
   npm run dev
   ```

2. **Start Frontend** (Terminal 2):
   ```bash
   cd client
   npm start
   ```

3. **Make Changes**:
   - Backend: Edit files → Server auto-restarts
   - Frontend: Edit files → Browser auto-refreshes

4. **Stop Servers**:
   - Press `Ctrl + C` in both terminals

### Making Changes

**Backend Changes:**
- Models: `models/`
- Controllers: `controllers/`
- Routes: `routes/`
- Server restarts automatically

**Frontend Changes:**
- Components: `client/src/components/`
- Styles: `client/src/components/*/**.css`
- Services: `client/src/services/`
- Browser refreshes automatically

---

## 🎨 Customization Guide

### Change Colors

Edit `client/src/index.css`:

```css
:root {
  --primary-color: #2563eb;      /* Main brand color */
  --secondary-color: #10b981;    /* Secondary color */
  --success-color: #10b981;      /* Success messages */
  --error-color: #ef4444;        /* Error messages */
}
```

### Modify Components

Each component has **DEMO markers**:

```javascript
// DEMO MARKER: Login Component
// Epic: E1 - User & Role Management
// Owner: IT24100548
// EASY TO MODIFY: Change text, colors, validation
```

Search for your ID to find your components!

---

## 📦 Project Structure

```
methsara-publications-webstore/
├── server.js                 # Backend entry
├── package.json             # Backend dependencies
├── .env                     # Environment variables
├── models/                  # Database models
├── controllers/             # Business logic
├── routes/                  # API routes
├── middleware/              # Auth middleware
└── client/                  # Frontend
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/      # React components
    │   ├── services/        # API services
    │   ├── App.js          # Main app
    │   └── index.css       # Global styles
    └── package.json        # Frontend dependencies
```

---

## ✅ Verification Checklist

Before demo/submission:

- [ ] Backend starts without errors
- [ ] Frontend starts without errors
- [ ] Can register new user
- [ ] Can login
- [ ] Can browse products
- [ ] Can add to cart
- [ ] Can checkout
- [ ] Can apply coupon
- [ ] Can view orders
- [ ] All 6 Epics accessible

---

## 🎯 Next Steps

1. ✅ **Test Everything** - Go through all features
2. ✅ **Add Sample Data** - Use Postman to create products
3. ✅ **Train Team** - Show members their components
4. ✅ **Prepare Demo** - Practice showing features
5. ✅ **Git Commits** - Each member commits their files

---

## 🆘 Need Help?

### Common Questions

**Q: How do I add more products?**
A: Use Postman with the guide in `docs/guides/Postman_Testing_Guide.md`

**Q: How do I make a user admin?**
A: Update user role directly in MongoDB Atlas

**Q: Can I change the port?**
A: Yes, edit `PORT=5001` in `.env` file

**Q: How do I deploy this?**
A: Backend → Heroku/Railway, Frontend → Vercel/Netlify

---

**Your Sprint 1 application is ready to run! 🚀**

**Quick Start:**
```bash
# Terminal 1
npm run dev

# Terminal 2
cd client
npm start
```

**Then open:** http://localhost:3000
