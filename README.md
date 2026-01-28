# 📚 Methsara Publications Web Store

## � Project Information

**Course**: Information Systems - 2nd Year, 2nd Semester  
**Project Type**: Group Project  
**Client**: Methsara Publications (Real Client)

## 👥 Team Members

| Student ID | Name |
|------------|------|
| IT24100799 | Gawrawa G H Y |
| IT24100548 | Galagama S.T |
| IT24101314 | Appuhami H A P L |
| IT24100191 | Jayasinghe D.B.P |
| IT24100264 | Bandara N W C D |
| IT24101266 | Perera M.U.E |

## 📋 Project Planning

### Phase 1: Requirements & Planning
- [ ] Meet with client to gather requirements
- [ ] Define project scope and objectives
- [ ] Identify key features and functionalities
- [ ] Create user stories
- [ ] Define technical requirements

### Phase 2: Design
- [ ] Design database schema
- [ ] Create wireframes and mockups
- [ ] Design system architecture
- [ ] Plan API endpoints
- [ ] Design user interface

### Phase 3: Development
- [ ] Set up development environment
- [ ] Initialize project structure
- [ ] Backend development
- [ ] Frontend development
- [ ] Integration

### Phase 4: Testing & Deployment
- [ ] Unit testing
- [ ] Integration testing
- [ ] User acceptance testing
- [ ] Deployment
- [ ] Documentation

## 🎯 System Components

### 1. User & Authentication Management System
**Assigned to:** _TBD_

**Features:**
- User registration and login (JWT authentication)
- Multi-role management (Customer, Staff, Manager, Super Admin) - CRUD
- Profile management (personal info, password, preferences) - CRUD
- Role-based access control and permissions
- Activity logs and security audit trails
- Password reset and email verification

**Database Tables:**
- Users
- Roles
- Permissions
- Activity Logs

---

### 2. Order & Transaction Management System
**Assigned to:** _TBD_

**Features:**
- Order placement and processing - CRUD
- Order status workflow (Pending → Processing → Shipped → Delivered)
- Payment processing and transaction logs - CRUD
- Return/refund management - CRUD
- Invoice and receipt generation (PDF)
- Order tracking and notifications
- Bulk order handling (institutional sales)

**Database Tables:**
- Orders
- Order Items
- Transactions
- Returns/Refunds
- Invoices

---

### 3. Publication & Catalog Management System
**Assigned to:** _TBD_

**Features:**
- Book management (title, ISBN, price, description) - CRUD
- Author profiles and management - CRUD
- Publisher and series management - CRUD
- Category/genre hierarchy - CRUD
- Book formats (hardcover, paperback, ebook) - CRUD
- Pre-order and new release management - CRUD
- Book cover and media uploads

**Database Tables:**
- Books
- Authors
- Publishers
- Categories
- Book Formats
- Pre-orders

---

### 4. Inventory & Supplier Management System
**Assigned to:** _TBD_

**Features:**
- Stock tracking and management - CRUD
- Warehouse/location management - CRUD
- Stock alerts (low stock, out of stock, overstock)
- Supplier/printer management - CRUD
- Purchase orders to suppliers - CRUD
- Stock receiving and batch tracking - CRUD
- Damaged/defective stock handling - CRUD
- Inventory valuation reports

**Database Tables:**
- Inventory
- Warehouses
- Suppliers
- Purchase Orders
- Stock Movements
- Batches

---

### 5. Shopping Cart & Checkout System
**Assigned to:** _TBD_

**Features:**
- Shopping cart management - CRUD
- Cart persistence (session and database)
- Wishlist functionality - CRUD
- Checkout workflow (shipping, billing, payment)
- Multiple shipping address management - CRUD
- Payment method integration (Stripe/PayPal/COD)
- Order summary and confirmation
- Coupon/discount code application
- Guest checkout option
- Save cart for later

**Database Tables:**
- Shopping Carts
- Cart Items
- Wishlists
- Shipping Addresses
- Payment Methods

---

### 6. Promotion & Gift Voucher Management System
**Assigned to:** _TBD_

**Features:**
- Coupon code management - CRUD
- Discount rules (percentage, fixed amount, free shipping) - CRUD
- Promotional campaigns - CRUD
- Flash sales and limited-time offers - CRUD
- Banner and advertisement management - CRUD
- Gift voucher generation and management - CRUD
- Gift voucher purchase (digital/physical) - CRUD
- Gift voucher redemption tracking
- Gift voucher balance management
- Gift voucher expiry and validity rules - CRUD
- Gift voucher email delivery
- Loyalty points system - CRUD
- Referral program - CRUD
- Promotion usage tracking and analytics
- Automatic discount application rules

**Database Tables:**
- Coupons
- Promotions
- Gift Vouchers
- Loyalty Points
- Referrals
- Banners
- Campaign Analytics

## 🎯 Project Objectives

*To be defined after client meeting*

## 🛠️ Tech Stack - MERN

### Frontend
- **React.js** - UI library for building user interfaces
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **Redux / Context API** - State management
- **CSS Modules / Styled Components** - Styling
- **React Hook Form** - Form handling and validation
- **Chart.js / Recharts** - Data visualization for analytics

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling (ODM)
- **JWT (jsonwebtoken)** - Authentication and authorization
- **bcrypt.js** - Password hashing
- **Multer** - File upload handling
- **Nodemailer** - Email notifications
- **Express Validator** - Input validation

### Payment Integration
- **Stripe / PayPal** - Payment gateway (or simulation for academic purposes)
- **Cash on Delivery (COD)** - Alternative payment method

### Additional Tools & Libraries
- **dotenv** - Environment variable management
- **cors** - Cross-origin resource sharing
- **morgan** - HTTP request logger
- **helmet** - Security headers
- **express-rate-limit** - Rate limiting for APIs
- **pdfkit / jsPDF** - PDF generation for invoices
- **nodemon** - Development server auto-restart

### Additional Tools
- Version Control: Git & GitHub
- Deployment: TBD

## 📅 Timeline

*To be created based on project requirements*

## � Notes

This is a new project. All planning and implementation details will be added as we progress.

---

**Last Updated**: January 28, 2026
