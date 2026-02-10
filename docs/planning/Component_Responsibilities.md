# Component Responsibilities & Boundaries

## Overview
This document defines the **6 core components** of the Methsara Publications webstore, their responsibilities, and clear boundaries to avoid overlap.

---

## 1. User & Admin Management Component

### Primary Responsibility
Manage **customer self-registration**, **staff account management** (admin-created), authentication, authorization, and profile data.

### Core Functions
- **Customer Account CRUD Operations**:
  - **Create**: Self-registration for customers (Students, Teachers, Parents) with email verification
  - **Read**: View own profile, search functionality for admins to view all customer accounts
  - **Update**: Customers update their own profiles (name, address, phone, preferences)
  - **Delete**: Account deactivation (soft delete to maintain order history)
  - **Verify**: Email verification, account activation
- **Staff Account CRUD Operations** (Admin-only):
  - **Create**: Admins create staff accounts with assigned roles:
    - Master Inventory Manager (all locations)
    - Location-Specific Inventory Managers (Balangoda, Kottawa, Main Branch)
    - Finance Manager
    - Supplier Manager
    - Marketing Team
    - Product Manager
    - System Administrators
  - **Read**: View all staff accounts, search by role/name, view staff details
  - **Update**: Modify staff roles, permissions, contact information, location assignments
  - **Delete**: Deactivate staff accounts (soft delete to maintain audit trail)
  - **Verify**: Validate staff credentials and permissions
- **Authentication & Session Management**:
  - Login/Logout with JWT or session-based authentication
  - Session timeout and automatic logout
  - Remember me functionality
  - Login attempt tracking and account lockout after failed attempts
  - Device management (view active sessions, logout from all devices)
- **Password Management**:
  - Password reset via email
  - Change password (authenticated users)
  - Forced password change on first login (staff only)
  - Password strength validation
  - Password history (prevent reuse of recent passwords)
- **Role-Based Access Control (RBAC)**:
  - Define roles with specific permissions
  - Assign roles to staff members
  - Enforce permission checks across all components
  - Location-based access control (for inventory managers)
  - Role hierarchy (admin > manager > staff)
  - Permission inheritance and overrides
- **Profile Management**:
  - Customer self-service profile updates
  - Manage delivery addresses (multiple addresses)
  - Communication preferences (email, SMS notifications)
  - Order history access
  - Wishlist management
- **Admin Support Functions**:
  - View and search all customer accounts
  - Customer account status management (active, suspended, banned)
  - Bulk user operations (export)
- **Audit & Security**:
  - Track login history and activity logs
  - Generate security reports

### Data Owned
- Customer accounts (credentials, personal info, email verification status, account status)
- Staff accounts (credentials, assigned roles, permissions, location assignments)
- Role definitions and permission mappings
- Session/token data (active sessions, refresh tokens)
- Login history and activity logs
- Password reset tokens and history
- Customer delivery addresses
- Communication preferences
- Account status records (active, suspended, banned)
- Security audit logs

### Key Distinction
- **Customers**: Self-register and manage their own profiles
- **Staff**: Created by admins with specific roles and forced password change on first login

### Does NOT Handle
- Product browsing or purchasing (handled by Product Catalog and Order & Transaction components)
- Inventory or stock management (handled by Inventory Management component)
- Order processing and payment (handled by Order & Transaction component)
- Loyalty points calculation (handled by Promotion & Loyalty component)
- Actual permission enforcement in other components (provides authentication/authorization data)

---

## 2. Product Catalog Component

### Primary Responsibility
Manage product information and enable product discovery.

### Core Functions
- **Product CRUD Operations** (Admin/Product Manager only):
  - **Create**: Add new products with complete details (name, description, price, images, specifications)
  - **Read**: View all products, search by name/SKU, view detailed product information
  - **Update**: Modify product details, update pricing, change images, edit specifications
  - **Delete**: Deactivate/archive products (soft delete to maintain order history)
  - **Verify**: Validate product data completeness and accuracy
- **Category Management CRUD**:
  - **Create**: Add new categories (Grade, Subject, Exam type)
  - **Read**: View category hierarchy, browse products by category
  - **Update**: Modify category names, reorganize hierarchy
  - **Delete**: Remove unused categories (with product reassignment)
  - **Assign**: Link products to multiple categories
- **Product Discovery & Search**:
  - Full-text search by product name, description, SKU
  - Advanced filtering (by Grade, Subject, Exam type, price range)
  - Multi-criteria search (combine keywords with filters)
  - Search suggestions and autocomplete
  - Recently viewed products tracking
- **Product Display & Sorting**:
  - Display product details (descriptions, prices, images, specifications)
  - Multiple product images with zoom capability
  - Sort by price (low to high, high to low)
  - Sort by name (A-Z, Z-A)
  - Sort by popularity (best sellers, most reviewed)
  - Sort by newest arrivals
  - Featured products highlighting
- **Reviews & Ratings Management**:
  - **Create**: Customers submit reviews and ratings (1-5 stars)
  - **Read**: View all reviews for a product, calculate average ratings
  - **Update**: Customers edit their own reviews
  - **Delete**: Remove inappropriate reviews (admin moderation)
  - **Verify**: Verify purchase before allowing review (verified buyer badge)
  - Review helpfulness voting (helpful/not helpful)
  - Review sorting (most helpful, newest, highest/lowest rating)
- **Product Recommendations**:
  - Related products suggestions
  - "Customers also bought" recommendations
  - "Frequently bought together" bundles
- **Product Analytics**:
  - Identify best-selling products
  - Analyze rating distributions

### Data Owned
- Product information (name, description, SKU, price, images, specifications, status)
- Categories and taxonomies (Grade, Subject, Exam type, hierarchy)
- Product-category associations (many-to-many relationships)
- Product reviews and ratings (review text, star rating, reviewer, timestamp)
- Review helpfulness votes
- Product view counts and popularity metrics
- Featured product configurations
- Product images and media assets
- Search query logs and trends

### Does NOT Handle
- Stock quantities or availability (handled by Inventory Management component)
- Shopping cart or checkout (handled by Order & Transaction component)
- Supplier information or product sourcing (handled by Supplier Management component)
- Promotional pricing or discounts (handled by Promotion & Loyalty component)
- Order history or purchase verification (reads from Order & Transaction component for review verification)

---

## 3. Order & Transaction Component

### Primary Responsibility
Manage the customer purchasing journey from cart to order fulfillment, including payment processing and financial management.

### Core Functions
- **Shopping Cart**: Add, view, update, remove items
- **Checkout Process**: Payment method selection (COD, Bank Slip)
- **Guest Checkout**: Allow purchases without account
- **Order Placement**: Create and confirm orders
- **Order History**: View past orders
- **Order Tracking**: Monitor delivery status
- **Order Management (Admin)**: View, update, fulfill, cancel orders
- **Invoicing**: Generate and view invoices
- **Discount Application**: Apply coupons at checkout
- **Staff Payment Management**: Track and process employee salary payments
- **Supplier Payment Management**: Track and process supplier invoices linked to Purchase Orders
- **Customer Refund Management**: Process refunds for cancelled or returned orders
- **Payment Dashboard**: Real-time overview of all financial transactions for supervisors
- **Financial Reporting**: Generate payment reports for analysis and compliance

### Data Owned
- Shopping cart sessions
- Orders (status, items, totals, payment info)
- Invoices
- Order status history
- Staff payment records (salary, payment date, status)
- Supplier payment records (invoice, PO reference, payment status)
- Customer refund records (refund amount, reason, status)
- Payment transaction history

### Does NOT Handle
- Product information (reads from Catalog)
- Stock deduction (triggers Inventory updates)
- Coupon creation (handled by Promotions)
- Purchase order creation (handled by Supplier Management)
- User account management (handled by User & Admin Management)

---

## 4. Supplier Management Component

### Primary Responsibility
Manage supplier relationships and procurement.

### Core Functions
- **Supplier CRUD Operations**:
  - **Create**: Add new suppliers with complete details (name, contact, email, phone, address, payment terms)
  - **Read**: View supplier list, search by name/ID, view detailed supplier profiles
  - **Update**: Edit supplier information, update contact details, modify payment terms
  - **Delete**: Deactivate/archive suppliers (soft delete to maintain historical records)
  - **Verify**: Validate supplier credentials and business registration details
- **Purchase Order (PO) Management**:
  - Create new purchase orders with product selection and quantities
  - Calculate total costs based on supplier pricing
  - Track PO status (Draft, Sent, Confirmed, In Transit, Received, Cancelled)
  - Send PO to suppliers via email
  - Receive and verify PO deliveries
  - Handle partial deliveries and backorders
  - Link POs to inventory receipts
- **Supplier Performance Tracking**:
  - Track delivery times and reliability
  - Monitor supplier quality ratings
  - Record supplier response times
- **Supplier-Product Linking**: Associate products with their suppliers and pricing
- **Payment Terms Management**: Define and track payment terms, credit limits, and payment schedules
- **Supplier Communication**: Maintain communication history and notes

### Data Owned
- Supplier profiles (name, contact info, address, business registration)
- Supplier payment terms and credit limits
- Purchase orders (status, items, quantities, costs, delivery dates)
- Supplier-product associations and pricing
- Supplier performance metrics (delivery time, quality ratings)
- Communication logs and notes
- PO delivery history and verification records

### Does NOT Handle
- Actual inventory stock updates (triggers Inventory component when PO is received)
- Supplier payment processing (handled by Order & Transaction component)
- Product catalog management (handled by Product Catalog component)
- User account creation for suppliers (handled by User & Admin Management)

---

## 5. Inventory Management Component

### Primary Responsibility
Track and manage stock across **multiple locations** (Main Branch, Balangoda, Kottawa, and other outlets).

### Location Structure
The system supports multiple inventory locations:
- **Main Branch** (Headquarters/Primary Warehouse)
- **Balangoda Branch** (Suburban outlet)
- **Kottawa Branch** (Suburban outlet)
- Additional branches can be added as needed

Each location has its own:
- Dedicated Inventory Manager with location-specific access
- Independent stock levels
- Location-specific alerts and thresholds
- Transfer capabilities to/from other locations

### Role-Based Access Control
- **Master Inventory Manager**: Full access to all locations, can view and manage stock across all branches
- **Location-Specific Inventory Managers**: 
  - Balangoda Inventory Manager: Access only to Balangoda branch stock
  - Kottawa Inventory Manager: Access only to Kottawa branch stock
  - Main Branch Inventory Manager: Access only to Main Branch stock
- Each manager can:
  - View and update stock for their assigned location(s)
  - Initiate transfer requests from their location
  - Approve incoming transfer requests to their location
  - Generate reports for their location(s)

### Core Functions
- **Stock CRUD Operations**:
  - **Create**: Add initial stock for new products at specific locations
  - **Read**: View real-time stock levels per product per location, search by product/location
  - **Update**: Adjust stock quantities (manual corrections, damage, loss, found items)
  - **Delete**: Remove discontinued products from inventory (archive historical data)
  - **Verify**: Conduct stock audits and reconcile discrepancies
- **Location CRUD Operations**:
  - **Create**: Add new warehouse/branch locations (Main Branch, Balangoda, Kottawa, etc.)
  - **Read**: View all locations, location details, and capacity information
  - **Update**: Modify location details, capacity, and operational status
  - **Delete**: Deactivate locations (soft delete to maintain historical records)
  - **Assign**: Assign Inventory Managers to specific locations
- **Multi-Location Stock Tracking**:
  - Real-time stock visibility across all locations (Main Branch, Balangoda, Kottawa)
  - Location-specific stock levels and availability
  - Total stock aggregation across all locations
  - Stock allocation by location
- **Stock Movement Management**:
  - Automatic stock deduction when orders are placed (from specific location)
  - Automatic stock restoration when orders are cancelled/returned
  - Inter-branch transfers with approval workflow (e.g., Balangoda → Kottawa)
  - Stock receipt from purchase orders
  - Track stock movement history
- **Stock Adjustment Operations**:
  - Manual adjustments for damaged goods
  - Record lost/stolen items
  - Add found items
  - Process customer returns
  - Maintain adjustment audit trail
- **Alerts & Notifications**:
  - Low stock alerts (configurable thresholds per product per location)
  - Out-of-stock notifications
  - Overstocking warnings
  - Location-specific alerts sent to respective location managers
- **Stock Reporting & Analytics**:
  - Stock valuation reports (by location or aggregated)
  - Stock movement reports
  - Location performance analysis (Balangoda vs Kottawa vs Main Branch)
  - Slow-moving stock identification
  - Stock turnover metrics

### Data Owned
- Stock quantities per product per location (real-time for Main Branch, Balangoda, Kottawa, etc.)
- Location definitions (name, address, type, capacity, operational status, assigned manager)
- Stock adjustment records (type, reason, quantity, timestamp, user, location)
- Inter-branch transfer records (from/to location, products, quantities, status, approval)
- Stock movement history (receipts, deductions, adjustments, transfers)
- Low stock threshold configurations per product per location
- Stock audit records and reconciliation reports
- Location capacity and utilization metrics
- Manager-location assignments

### Does NOT Handle
- Product catalog management (reads from Product Catalog component)
- Order creation and processing (triggered by Order & Transaction component)
- Purchase order creation (handled by Supplier Management component)
- Pricing and product details (handled by Product Catalog component)
- Stock valuation for accounting (provides data to Order & Transaction component)
- User account creation for Inventory Managers (handled by User & Admin Management component)

### Key Distinction
**Inventory tracks "how many" and "where"**, not "what" (product details) or "who ordered" (order info).

---

## 6. Promotion & Loyalty Component

### Primary Responsibility
Manage marketing campaigns, discounts, and customer loyalty programs.

### Core Functions
- **Coupon CRUD Operations**:
  - **Create**: Generate discount codes with rules (percentage/fixed amount, min purchase, user restrictions)
  - **Read**: View all coupons, search by code, view usage statistics
  - **Update**: Modify coupon rules, extend validity, adjust discount amounts
  - **Delete**: Deactivate/expire coupons (soft delete to maintain usage history)
  - **Verify**: Validate coupon codes at checkout, check eligibility
- **Campaign Management**:
  - Create marketing campaigns (seasonal sales, flash sales, clearance)
  - Set campaign duration and target audience
  - Link multiple coupons to campaigns
  - Track campaign performance and ROI
  - Schedule automated campaign start/end
- **Loyalty Program Operations**:
  - Define loyalty point earning rules (points per purchase amount)
  - Set point redemption rates (points to currency conversion)
  - Track customer loyalty points balance
  - Award bonus points for special actions
- **Gift Voucher Management**:
  - Create and sell gift vouchers (fixed or custom amounts)
  - Generate unique voucher codes
  - Track voucher purchases and redemptions
  - Handle partial redemptions
  - Set voucher expiry dates
- **Promotion Rules Engine**:
  - Set conditions (minimum purchase amount, specific products, user roles)
  - Define usage limits (per user, total uses, one-time use)
  - Create product-specific or category-specific promotions
  - Implement "Buy X Get Y" offers
  - Set up bundle discounts
- **Usage Tracking & Analytics**:
  - Monitor coupon redemption rates
  - Track campaign effectiveness
  - Analyze customer engagement with promotions
  - Generate revenue impact reports
  - Identify most successful promotions
  - Track loyalty program participation

### Data Owned
- Coupon definitions (codes, discount type, amount, rules, validity dates)
- Campaign details (name, duration, target audience, linked coupons)
- Loyalty program configuration (earning rules, redemption rates, tiers)
- Customer loyalty points balances and transaction history
- Gift voucher records (codes, amounts, purchase/redemption dates, balance)
- Promotion usage history (who used, when, order value, discount applied)
- Campaign performance metrics (redemptions, revenue impact, ROI)
- Loyalty tier assignments and benefits

### Does NOT Handle
- Actual discount application at checkout (Order & Transaction component reads and applies coupon data)
- Product pricing management (handled by Product Catalog component)
- Order creation (handled by Order & Transaction component)
- Customer account management (handled by User & Admin Management component)

## Summary

The system is divided into **6 distinct components**, each with clear responsibilities:
1. **User & Admin Management**: 
   - Customer self-registration with email verification
   - Staff account management (admin-created) with location-specific assignments (Master Inventory Manager, Location-Specific Managers for Balangoda/Kottawa/Main Branch)
   - Authentication & session management with MFA
   - Role-Based Access Control (RBAC) with location-based permissions
   - Profile management, admin support functions, audit & security
2. **Product Catalog**: 
   - Product CRUD with complete details (name, SKU, price, images, specifications)
   - Category management (Grade, Subject, Exam type)
   - Advanced search & filtering with autocomplete
   - Product display & sorting (price, popularity, newest)
   - Reviews & ratings management with verified buyer badges
   - Product recommendations and analytics
3. **Order & Transaction**: Cart, checkout, payment, order processing, tracking, and financial management (staff/supplier payments, refunds, reporting)
4. **Supplier Management**: 
   - Supplier CRUD with verification
   - Purchase Order (PO) management with status tracking and partial deliveries
   - Supplier performance tracking
   - Payment terms management and communication logs
5. **Inventory Management**: 
   - Multi-location stock tracking (Main Branch, Balangoda, Kottawa)
   - Location-specific inventory managers with role-based access
   - Stock CRUD and location CRUD operations
   - Inter-branch transfers with approval workflow
   - Low stock alerts, stock movement history, and analytics
6. **Promotion & Loyalty**: 
   - Coupon CRUD with validation
   - Campaign management with ROI tracking
   - Loyalty program operations with tier management (Bronze, Silver, Gold)
   - Gift voucher management and promotion rules engine

This structure ensures:
- **Clear separation of concerns**
- **No overlapping responsibilities**
- **Scalable and maintainable architecture**
- **Easier team collaboration and development**

```
┌─────────────────────────────────────────────────────────────┐
│                    USER & ROLE MANAGEMENT                   │
│         (Authentication, Authorization, Profiles)           │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
        ┌─────────────────────────────────────────┐
        │         PRODUCT CATALOG                 │
        │    (Products, Categories, Search)       │
        └─────────────────────────────────────────┘
                 │                        │
                 ▼                        ▼
    ┌────────────────────┐    ┌────────────────────────┐
    │  ORDER & TRANSACTION│◄───│  PROMOTION & LOYALTY   │
    │  (Cart, Checkout)   │    │  (Coupons, Vouchers)   │
    └────────────────────┘    └────────────────────────┘
                 │
                 ▼
    ┌────────────────────────────────────────────┐
    │       INVENTORY MANAGEMENT                 │
    │  (Stock Levels, Locations, Transfers)      │
    └────────────────────────────────────────────┘
                 ▲
                 │
    ┌────────────────────────┐
    │  SUPPLIER MANAGEMENT   │
    │  (Suppliers, POs)      │
    └────────────────────────┘
```

---

## Cross-Component Data Flow Examples

### Example 1: Customer Places Order
1. **User & Role**: Authenticates customer
2. **Catalog**: Provides product details and prices
3. **Promotions**: Validates and applies coupon discount
4. **Orders**: Creates order, calculates total
5. **Inventory**: Deducts stock from appropriate location

### Example 2: Inventory Manager Restocks
1. **User & Role**: Authenticates Inventory Manager
2. **Supplier**: Creates Purchase Order
3. **Inventory**: Receives stock, updates quantities at Main Branch

### Example 3: Transfer Stock to Suburb
1. **User & Role**: Authenticates Inventory Manager
2. **Inventory**: Creates transfer request (Main → Suburb A)
3. **Inventory**: Updates stock levels when transfer is received

---

## Summary Table

| Component | Primary Data | Key Actions | Does NOT Handle |
|-----------|-------------|-------------|-----------------|
| **User & Role** | Users, Roles, Sessions | Login, Register, RBAC | Products, Orders |
| **Catalog** | Products, Categories | Browse, Search, CRUD | Stock levels, Cart |
| **Orders** | Cart, Orders, Invoices, Payments | Checkout, Track, Fulfill, Process Payments | Product details, Stock |
| **Suppliers** | Suppliers, POs | Manage suppliers, Restock | Stock tracking |
| **Inventory** | Stock, Locations, Transfers | Track, Adjust, Transfer | Product info, Orders |
| **Promotions** | Coupons, Vouchers | Create campaigns, Track usage | Checkout process |

---

**Document Version**: 1.0  
**Last Updated**: February 10, 2026  
**Purpose**: Define clear component boundaries for development
