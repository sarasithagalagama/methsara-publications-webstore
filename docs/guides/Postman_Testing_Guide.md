# 🧪 Postman Testing Guide - Complete Sample Data

## 📥 Step 1: Download & Install Postman

1. Go to: https://www.postman.com/downloads/
2. Download Postman for Windows
3. Install and open Postman
4. Create a free account (optional but recommended)

---

## 🚀 Step 2: Start Your Server

Open terminal and run:
```bash
npm run dev
```

Wait for:
```
✅ MongoDB Connected Successfully
🚀 Server running on port 5000
```

---

## 📋 Step 3: Create Postman Collection

1. Click **"New"** → **"Collection"**
2. Name it: **"Methsara Publications API"**
3. Add description: **"Sprint 1 - All 6 Epics"**

---

## 🎯 Step 4: Test Each Epic (In Order!)

### E1: User & Role Management (IT24100548)

#### 1️⃣ Register Admin User

**Request:**
- Method: `POST`
- URL: `http://localhost:5000/api/auth/register`
- Headers: `Content-Type: application/json`
- Body (raw JSON):

```json
{
  "name": "Admin User",
  "email": "admin@methsara.lk",
  "password": "admin123",
  "phone": "0771234567"
}
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Registration successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "65f1234567890abcdef12345",
    "name": "Admin User",
    "email": "admin@methsara.lk",
    "role": "customer"
  }
}
```

**⚠️ IMPORTANT:** Copy the `token` value! You'll need it for protected routes.

---

#### 2️⃣ Login

**Request:**
- Method: `POST`
- URL: `http://localhost:5000/api/auth/login`
- Body (raw JSON):

```json
{
  "email": "admin@methsara.lk",
  "password": "admin123"
}
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "65f1234567890abcdef12345",
    "name": "Admin User",
    "email": "admin@methsara.lk",
    "role": "customer"
  }
}
```

---

#### 3️⃣ Get Current User Profile

**Request:**
- Method: `GET`
- URL: `http://localhost:5000/api/auth/me`
- Headers:
  - `Authorization: Bearer YOUR_TOKEN_HERE`

**Expected Response:**
```json
{
  "success": true,
  "user": {
    "id": "65f1234567890abcdef12345",
    "name": "Admin User",
    "email": "admin@methsara.lk",
    "role": "customer"
  }
}
```

---

#### 4️⃣ Register More Users (Sample Data)

**Customer 1:**
```json
{
  "name": "Kasun Perera",
  "email": "kasun@gmail.com",
  "password": "kasun123",
  "phone": "0771111111"
}
```

**Customer 2:**
```json
{
  "name": "Nimal Silva",
  "email": "nimal@gmail.com",
  "password": "nimal123",
  "phone": "0772222222"
}
```

**Customer 3:**
```json
{
  "name": "Saman Fernando",
  "email": "saman@gmail.com",
  "password": "saman123",
  "phone": "0773333333"
}
```

---

### E2: Product Catalog (IT24101314)

#### 1️⃣ Create Products

**Product 1: Mathematics Grade 10**
- Method: `POST`
- URL: `http://localhost:5000/api/products`
- Headers:
  - `Authorization: Bearer YOUR_TOKEN_HERE`
  - `Content-Type: application/json`
- Body:

```json
{
  "name": "Mathematics Grade 10 - Complete Guide",
  "description": "Comprehensive mathematics guide for O/L students covering all topics including algebra, geometry, and trigonometry.",
  "sku": "MATH-G10-001",
  "price": 650,
  "grade": "Grade 10",
  "subject": "Mathematics",
  "examType": "O/L",
  "mainImage": "https://via.placeholder.com/300x400?text=Math+G10",
  "isFeatured": true
}
```

**Product 2: Science Grade 11**
```json
{
  "name": "Science Grade 11 - Theory & Practical",
  "description": "Complete science guide covering Physics, Chemistry, and Biology with practical experiments.",
  "sku": "SCI-G11-001",
  "price": 750,
  "grade": "Grade 11",
  "subject": "Science",
  "examType": "O/L",
  "mainImage": "https://via.placeholder.com/300x400?text=Science+G11",
  "isFeatured": true
}
```

**Product 3: English Grade 9**
```json
{
  "name": "English Language Grade 9",
  "description": "English language workbook with grammar, vocabulary, and comprehension exercises.",
  "sku": "ENG-G09-001",
  "price": 450,
  "grade": "Grade 9",
  "subject": "English",
  "examType": "General",
  "mainImage": "https://via.placeholder.com/300x400?text=English+G9"
}
```

**Product 4: Sinhala Grade 8**
```json
{
  "name": "Sinhala Language Grade 8",
  "description": "Sinhala language guide with grammar and literature sections.",
  "sku": "SIN-G08-001",
  "price": 400,
  "grade": "Grade 8",
  "subject": "Sinhala",
  "examType": "General",
  "mainImage": "https://via.placeholder.com/300x400?text=Sinhala+G8"
}
```

**Product 5: History Grade 10**
```json
{
  "name": "History Grade 10 - Sri Lankan History",
  "description": "Complete history guide covering ancient to modern Sri Lankan history.",
  "sku": "HIS-G10-001",
  "price": 550,
  "grade": "Grade 10",
  "subject": "History",
  "examType": "O/L",
  "mainImage": "https://via.placeholder.com/300x400?text=History+G10"
}
```

**⚠️ IMPORTANT:** After creating each product, copy the `_id` from the response! You'll need these for orders and inventory.

---

#### 2️⃣ Get All Products

**Request:**
- Method: `GET`
- URL: `http://localhost:5000/api/products`

---

#### 3️⃣ Search Products

**Search by name:**
- URL: `http://localhost:5000/api/products?search=mathematics`

**Filter by grade:**
- URL: `http://localhost:5000/api/products?grade=Grade 10`

**Filter by subject:**
- URL: `http://localhost:5000/api/products?subject=Science`

**Sort by price (ascending):**
- URL: `http://localhost:5000/api/products?sort=price_asc`

**Combined filters:**
- URL: `http://localhost:5000/api/products?grade=Grade 10&subject=Mathematics&sort=price_desc`

---

### E4: Supplier Management (IT24100799)

#### Create Suppliers

**Supplier 1: ABC Printers**
- Method: `POST`
- URL: `http://localhost:5000/api/suppliers`
- Headers: `Authorization: Bearer YOUR_TOKEN_HERE`
- Body:

```json
{
  "name": "ABC Printers (Pvt) Ltd",
  "contactPerson": "Mr. Sunil Silva",
  "email": "abc@printers.lk",
  "phone": "0112345678",
  "address": {
    "street": "456 Printer Street",
    "city": "Colombo 05",
    "postalCode": "00500"
  },
  "businessRegistration": "PV12345",
  "taxId": "TAX-ABC-001",
  "paymentTerms": "Credit 30 days",
  "creditLimit": 500000,
  "isVerified": true
}
```

**Supplier 2: XYZ Publishers**
```json
{
  "name": "XYZ Publishers",
  "contactPerson": "Mrs. Kumari Perera",
  "email": "xyz@publishers.lk",
  "phone": "0117654321",
  "address": {
    "street": "789 Publisher Road",
    "city": "Nugegoda",
    "postalCode": "10250"
  },
  "businessRegistration": "PV67890",
  "taxId": "TAX-XYZ-002",
  "paymentTerms": "Credit 14 days",
  "creditLimit": 300000,
  "isVerified": true
}
```

**Supplier 3: Lanka Books**
```json
{
  "name": "Lanka Books Distributors",
  "contactPerson": "Mr. Ranjith Fernando",
  "email": "info@lankabooks.lk",
  "phone": "0115555555",
  "address": {
    "street": "123 Book Lane",
    "city": "Maharagama",
    "postalCode": "10280"
  },
  "businessRegistration": "PV11111",
  "taxId": "TAX-LB-003",
  "paymentTerms": "Cash",
  "creditLimit": 0,
  "isVerified": false
}
```

---

### E5: Inventory Management (IT24100264)

#### Add Inventory for Products

**⚠️ Replace `PRODUCT_ID_HERE` with actual product IDs from Step E2!**

**Inventory 1: Math G10 - Main Location**
- Method: `POST`
- URL: `http://localhost:5000/api/inventory`
- Headers: `Authorization: Bearer YOUR_TOKEN_HERE`
- Body:

```json
{
  "product": "PRODUCT_ID_HERE",
  "location": "Main",
  "quantity": 150,
  "lowStockThreshold": 20,
  "reorderPoint": 40,
  "reason": "Initial stock"
}
```

**Inventory 2: Math G10 - Balangoda**
```json
{
  "product": "PRODUCT_ID_HERE",
  "location": "Balangoda",
  "quantity": 75,
  "lowStockThreshold": 15,
  "reorderPoint": 30,
  "reason": "Initial stock"
}
```

**Inventory 3: Science G11 - Main**
```json
{
  "product": "PRODUCT_ID_HERE",
  "location": "Main",
  "quantity": 120,
  "lowStockThreshold": 20,
  "reorderPoint": 40,
  "reason": "Initial stock"
}
```

**Inventory 4: English G9 - Kottawa**
```json
{
  "product": "PRODUCT_ID_HERE",
  "location": "Kottawa",
  "quantity": 50,
  "lowStockThreshold": 10,
  "reorderPoint": 20,
  "reason": "Initial stock"
}
```

---

#### Get Inventory by Location

**Main Location:**
- Method: `GET`
- URL: `http://localhost:5000/api/inventory/location/Main`
- Headers: `Authorization: Bearer YOUR_TOKEN_HERE`

**Balangoda Location:**
- URL: `http://localhost:5000/api/inventory/location/Balangoda`

**Kottawa Location:**
- URL: `http://localhost:5000/api/inventory/location/Kottawa`

---

### E6: Promotions & Coupons (IT24101266)

#### Create Coupons

**Coupon 1: WELCOME10**
- Method: `POST`
- URL: `http://localhost:5000/api/coupons`
- Headers: `Authorization: Bearer YOUR_TOKEN_HERE`
- Body:

```json
{
  "code": "WELCOME10",
  "discountType": "percentage",
  "discountValue": 10,
  "minPurchaseAmount": 1000,
  "maxUsageCount": 100,
  "usagePerUser": 1,
  "validFrom": "2026-02-12",
  "validUntil": "2026-03-31",
  "campaignName": "Welcome Discount",
  "description": "10% off for new customers on orders above Rs. 1000",
  "isActive": true
}
```

**Coupon 2: STUDENT50**
```json
{
  "code": "STUDENT50",
  "discountType": "fixed",
  "discountValue": 50,
  "minPurchaseAmount": 500,
  "maxUsageCount": 200,
  "usagePerUser": 3,
  "validFrom": "2026-02-12",
  "validUntil": "2026-12-31",
  "campaignName": "Student Discount",
  "description": "Rs. 50 off for students",
  "isActive": true
}
```

**Coupon 3: GRADE10SALE**
```json
{
  "code": "GRADE10SALE",
  "discountType": "percentage",
  "discountValue": 15,
  "maxDiscount": 200,
  "minPurchaseAmount": 1500,
  "applicableGrades": ["Grade 10"],
  "validFrom": "2026-02-12",
  "validUntil": "2026-04-30",
  "campaignName": "Grade 10 Special",
  "description": "15% off on Grade 10 books (max Rs. 200)",
  "isActive": true
}
```

---

#### Validate Coupon

**Request:**
- Method: `POST`
- URL: `http://localhost:5000/api/coupons/validate`
- Body:

```json
{
  "code": "WELCOME10",
  "orderTotal": 1500
}
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Coupon is valid",
  "coupon": {
    "code": "WELCOME10",
    "discountType": "percentage",
    "discountValue": 10,
    "discount": 150
  }
}
```

---

### E3: Orders & Transactions (IT24100191)

#### Create Order (with Coupon)

**⚠️ Replace `PRODUCT_ID_HERE` with actual product IDs!**

**Order 1: Cash on Delivery**
- Method: `POST`
- URL: `http://localhost:5000/api/orders`
- Headers: `Authorization: Bearer YOUR_TOKEN_HERE`
- Body:

```json
{
  "items": [
    {
      "product": "PRODUCT_ID_HERE",
      "quantity": 2
    },
    {
      "product": "PRODUCT_ID_HERE",
      "quantity": 1
    }
  ],
  "deliveryAddress": {
    "name": "Kasun Perera",
    "phone": "0771111111",
    "street": "123 Main Street",
    "city": "Colombo 07",
    "postalCode": "00700"
  },
  "paymentMethod": "COD",
  "couponCode": "WELCOME10",
  "fulfillmentLocation": "Main"
}
```

**Order 2: Bank Transfer**
```json
{
  "items": [
    {
      "product": "PRODUCT_ID_HERE",
      "quantity": 3
    }
  ],
  "deliveryAddress": {
    "name": "Nimal Silva",
    "phone": "0772222222",
    "street": "456 School Road",
    "city": "Kandy",
    "postalCode": "20000"
  },
  "paymentMethod": "Bank Transfer",
  "bankSlipUrl": "https://example.com/bank-slip-001.jpg",
  "couponCode": "STUDENT50",
  "fulfillmentLocation": "Main"
}
```

**Guest Order (No Login):**
```json
{
  "guestEmail": "guest@example.com",
  "guestName": "Guest Customer",
  "items": [
    {
      "product": "PRODUCT_ID_HERE",
      "quantity": 1
    }
  ],
  "deliveryAddress": {
    "name": "Guest Customer",
    "phone": "0779999999",
    "street": "789 Guest Street",
    "city": "Galle",
    "postalCode": "80000"
  },
  "paymentMethod": "COD",
  "fulfillmentLocation": "Main"
}
```

---

#### Get My Orders

**Request:**
- Method: `GET`
- URL: `http://localhost:5000/api/orders/my-orders`
- Headers: `Authorization: Bearer YOUR_TOKEN_HERE`

---

#### Update Order Status (Admin)

**Request:**
- Method: `PUT`
- URL: `http://localhost:5000/api/orders/ORDER_ID_HERE/status`
- Headers: `Authorization: Bearer YOUR_TOKEN_HERE`
- Body:

```json
{
  "orderStatus": "Processing",
  "note": "Order is being prepared for shipment"
}
```

**Status Options:**
- `Pending`
- `Processing`
- `Shipped`
- `Delivered`
- `Cancelled`

---

## 📊 Testing Workflow Summary

### Complete Test Flow:
1. ✅ Register Admin → Get Token
2. ✅ Create 5 Products → Save Product IDs
3. ✅ Create 3 Suppliers
4. ✅ Add Inventory for Products (3 locations)
5. ✅ Create 3 Coupons
6. ✅ Validate Coupon
7. ✅ Create Order with Coupon
8. ✅ Check Inventory (should be deducted)
9. ✅ Get My Orders
10. ✅ Update Order Status

---

## 🎯 Quick Test Checklist

- [ ] Server running on port 5000
- [ ] Admin user registered
- [ ] Login successful (token received)
- [ ] 5 products created
- [ ] Products searchable
- [ ] 3 suppliers created
- [ ] Inventory added (3 locations)
- [ ] 3 coupons created
- [ ] Coupon validation working
- [ ] Order created successfully
- [ ] Inventory auto-deducted
- [ ] Order status updated

---

## 💡 Pro Tips

1. **Save Tokens:** Create Postman environment variables for tokens
2. **Save IDs:** Keep a notepad with product/order IDs
3. **Test in Order:** Follow the sequence above
4. **Check Responses:** Verify `success: true` in all responses
5. **Test Errors:** Try invalid data to test validation

---

**Your API is fully functional! 🎉**
