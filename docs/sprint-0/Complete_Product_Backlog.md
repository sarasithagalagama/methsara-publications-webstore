# Complete Product Backlog

**Project**: Methsara Publications Webstore
**Version**: 3.0 (Expanded & Refined)
**Date**: February 10, 2026

## Overview

This backlog is structured around the **6 Core Components** defined in the system architecture.

---

# Epic 1 (E1): User & Admin Management Component

**Epic Description**: Customer self-registration with email verification, staff account management with location-specific assignments, authentication & session management, role-based access control, profile management, and admin support functions.

## Story E1.1: Customer Registration
**Priority**: Highest | **Points**: 5
**User Story**: As a new customer, I want to register for an account with email verification, so that I can access personalized features.
**Acceptance Criteria**:
- [ ] Registration form (Name, Email, Phone, Password, Type)
- [ ] Email verification link sent
- [ ] Account activation flow
- [ ] Password strength validation

## Story E1.2: Customer Login
**Priority**: Highest | **Points**: 3
**User Story**: As a registered user, I want to login securely, so that I can access my account.
**Acceptance Criteria**:
- [ ] Login screen (Email/Password)
- [ ] "Remember Me" option
- [ ] Account lockout after 5 failed attempts
- [ ] Session timeout handling

## Story E1.3: Forgot Password
**Priority**: High | **Points**: 3
**User Story**: As a user, I want to reset my password if I forget it, so that I can regain access.
**Acceptance Criteria**:
- [ ] "Forgot Password" link
- [ ] Email reset link generation
- [ ] Secure password reset page
- [ ] Confirmation email

## Story E1.4: Manage Profile
**Priority**: Medium | **Points**: 3
**User Story**: As a customer, I want to update my personal information, so that my details are current.
**Acceptance Criteria**:
- [ ] Edit Name and Phone Number
- [ ] Change Password
- [ ] Manage Email Preferences

## Story E1.5: Manage Delivery Addresses
**Priority**: High | **Points**: 5
**User Story**: As a customer, I want to manage multiple delivery addresses, so that I can choose where to ship.
**Acceptance Criteria**:
- [ ] Add new address (Street, City, Zip)
- [ ] Edit existing address
- [ ] Delete address
- [ ] Set default address

## Story E1.6: Admin - Manage Staff Accounts
**Priority**: High | **Points**: 5
**User Story**: As an Admin, I want to create and manage staff accounts, so that employees can access the system.
**Acceptance Criteria**:
- [ ] Create staff account (Name, Email, Role)
- [ ] Deactivate staff account
- [ ] Update staff details
- [ ] Assign initial temporary password

## Story E1.7: Admin - Staff Role Assignment
**Priority**: Highest | **Points**: 5
**User Story**: As an Admin, I want to assign specific roles to staff, so that they have appropriate access.
**Acceptance Criteria**:
- [ ] Assign roles: Inventory Manager, Product Manager, etc.
- [ ] Assign location (for Inventory Managers)
- [ ] Modify existing roles

## Story E1.8: RBAC Enforcement
**Priority**: Highest | **Points**: 8
**User Story**: As the System, I want to restrict access based on roles, so that data is secure.
**Acceptance Criteria**:
- [ ] Restrict menu items by role
- [ ] ID-based resource access (e.g., specific location stock)
- [ ] API endpoint protection

## Story E1.9: Admin - View Customer Accounts
**Priority**: Medium | **Points**: 3
**User Story**: As an Admin, I want to view customer lists, so that I can manage the user base.
**Acceptance Criteria**:
- [ ] List all customers with pagination
- [ ] Search by Name or Email
- [ ] View customer status (Active/Banned)


## Story E1.11: Security Logs
**Priority**: High | **Points**: 3
**User Story**: As an Admin, I want to view login logs, so that I can monitor security.
**Acceptance Criteria**:
- [ ] Log successful/failed logins
- [ ] View logs by user or date
- [ ] Export logs

---

# Epic 2 (E2): Product Catalog Component

**Epic Description**: Product CRUD, category management, advanced search & filtering, product display & sorting, reviews & ratings management, and product recommendations.

## Story E2.1: Admin & Product Mgr - Create Product
**Priority**: High | **Points**: 5
**User Story**: As an Admin or Product Manager, I want to add new products, so that they are available for sale.
**Acceptance Criteria**:
- [ ] Enter Product Name, SKU, Price, Description
- [ ] Upload multiple images
- [ ] Assign Categories
- [ ] Set Specifications

## Story E2.2: Admin & Product Mgr - Update Product
**Priority**: High | **Points**: 3
**User Story**: As an Admin or Product Manager, I want to edit product details, so that information is accurate.
**Acceptance Criteria**:
- [ ] Edit all product fields
- [ ] Archive/Delete product
- [ ] Update prices

## Story E2.3: Admin & Product Mgr - Manage Categories
**Priority**: Medium | **Points**: 5
**User Story**: As an Admin or Product Manager, I want to manage categories, so that products are organized.
**Acceptance Criteria**:
- [ ] Create Category text/structure (Grade, Subject)
- [ ] Edit Category Name
- [ ] Delete Empty Categories

## Story E2.4: Search Products
**Priority**: Highest | **Points**: 5
**User Story**: As a Customer, I want to search for books, so that I can find what I need quickly.
**Acceptance Criteria**:
- [ ] Search by Title, Author, or ISBN
- [ ] Auto-suggestions drop-down

## Story E2.5: Filter Products
**Priority**: High | **Points**: 5
**User Story**: As a Customer, I want to filter search results, so that I can narrow down options.
**Acceptance Criteria**:
- [ ] Filter by Grade (1-13)
- [ ] Filter by Subject
- [ ] Filter by Price Range

## Story E2.6: View Product Details
**Priority**: Highest | **Points**: 5
**User Story**: As a Customer, I want to see detailed product info, so that I can make a buying decision.
**Acceptance Criteria**:
- [ ] View Title, Price, Description
- [ ] View Image Gallery
- [ ] View Specifications

## Story E2.7: Product Recommendations
**Priority**: Low | **Points**: 5
**User Story**: As a Customer, I want to see related products, so that I might find other useful items.
**Acceptance Criteria**:
- [ ] "Related Products" section
- [ ] "Customers Also Bought" section

## Story E2.8: Write Review
**Priority**: Low | **Points**: 3
**User Story**: As a Customer, I want to review products I bought, so that I can share my opinion.
**Acceptance Criteria**:
- [ ] Rate 1-5 Stars
- [ ] Write text review
- [ ] Verified Buyer check

## Story E2.9: Admin & Product Mgr - Moderate Reviews
**Priority**: Low | **Points**: 3
**User Story**: As an Admin or Product Manager, I want to moderate reviews, so that inappropriate content is removed.
**Acceptance Criteria**:
- [ ] List all recent reviews
- [ ] Delete offensive reviews
- [ ] Reply to reviews

---

# Epic 3 (E3): Order & Transaction Component

**Epic Description**: Shopping cart management, checkout process, payment options (Bank Receipt, COD), order tracking, and financial reporting.

## Story E3.1: Add to Cart
**Priority**: Highest | **Points**: 3
**User Story**: As a Customer, I want to add items to my cart, so that I can purchase them.
**Acceptance Criteria**:
- [ ] "Add to Cart" button on product page
- [ ] Update cart badge count
- [ ] Success notification

## Story E3.2: Manage Cart
**Priority**: Highest | **Points**: 3
**User Story**: As a Customer, I want to view and edit my cart, so that I can adjust my order.
**Acceptance Criteria**:
- [ ] View item list, prices, total
- [ ] Update quantities
- [ ] Remove items

## Story E3.3: Checkout - Address
**Priority**: Highest | **Points**: 3
**User Story**: As a Customer, I want to select a delivery address during checkout, so that I receive my order.
**Acceptance Criteria**:
- [ ] Select from saved addresses
- [ ] Enter new address
- [ ] Validate address fields

## Story E3.4: Checkout - Payment Method
**Priority**: Highest | **Points**: 8
**User Story**: As a Customer, I want to choose a payment method, so that I can pay for my order.
**Acceptance Criteria**:
- [ ] Option: Cash on Delivery (COD)
- [ ] Option: Bank Deposit Upload
- [ ] Upload payment receipt image

## Story E3.5: Order Confirmation
**Priority**: High | **Points**: 3
**User Story**: As a Customer, I want to receive an order confirmation, so that I know my order was placed.
**Acceptance Criteria**:
- [ ] Show Order Success page with Order ID
- [ ] Send Confirmation Email
- [ ] Deduct stock (provisional)

## Story E3.6: Guest Checkout
**Priority**: Medium | **Points**: 5
**User Story**: As a Guest, I want to checkout without creating an account, so that I can buy quickly.
**Acceptance Criteria**:
- [ ] Checkout flow without login
- [ ] Option to register after checkout

## Story E3.7: Admin - List Orders
**Priority**: High | **Points**: 5
**User Story**: As an Admin, I want to view all orders, so that I can process them.
**Acceptance Criteria**:
- [ ] List orders with status (Pending, Processing, Completed)
- [ ] Filter by Date or Status
- [ ] View Order Details

## Story E3.8: Admin - Update Order Status
**Priority**: High | **Points**: 3
**User Story**: As an Admin, I want to update order status, so that customers are informed.
**Acceptance Criteria**:
- [ ] Change status (e.g., Pending -> Shipped)
- [ ] Trigger email notification on change

## Story E3.9: Customer Order History
**Priority**: Medium | **Points**: 3
**User Story**: As a Customer, I want to view my past orders, so that I can track my purchases.
**Acceptance Criteria**:
- [ ] List past orders
- [ ] View order status and details
- [ ] Re-order option

## Story E3.10: Sales Dashboard
**Priority**: High | **Points**: 5
**User Story**: As a Supervisor, I want to see a sales dashboard, so that I can monitor performance.
**Acceptance Criteria**:
- [ ] View Total Revenue (Daily/Weekly)
- [ ] View Order Counts
- [ ] Visual charts/graphs

## Story E3.11: Financial Reports
**Priority**: Medium | **Points**: 5
**User Story**: As a Supervisor, I want to generate financial reports, so that I can audit revenue.
**Acceptance Criteria**:
- [ ] Export sales data to CSV/PDF
- [ ] Filter by date range

---

# Epic 4 (E4): Supplier Management Component

**Epic Description**: Supplier CRUD with verification, Purchase Order (PO) management with status tracking, and supplier performance.

## Story E4.1: Add Supplier
**Priority**: Medium | **Points**: 3
**User Story**: As an Inventory Mgr, I want to add new suppliers, so that I can order stock.
**Acceptance Criteria**:
- [ ] Enter Supplier Name, Contact, Address
- [ ] Save Supplier details

## Story E4.2: Verify Supplier
**Priority**: Medium | **Points**: 3
**User Story**: As an Inventory Mgr, I want to mark suppliers as verified, so that I ensure quality.
**Acceptance Criteria**:
- [ ] Verification status toggle
- [ ] Upload business registration doc

## Story E4.3: Create Purchase Order
**Priority**: High | **Points**: 8
**User Story**: As an Inventory Mgr, I want to create a PO, so that I can request stock.
**Acceptance Criteria**:
- [ ] Select Supplier
- [ ] Add Products and Quantities
- [ ] Calculate Cost
- [ ] Generate PO PDF

## Story E4.4: Receive Purchase Order
**Priority**: High | **Points**: 5
**User Story**: As an Inventory Mgr, I want to mark a PO as received, so that stock is updated.
**Acceptance Criteria**:
- [ ] View Sent POs
- [ ] Mark as Received (Full/Partial)
- [ ] Update Inventory automatically

---

# Epic 5 (E5): Inventory Management Component

**Epic Description**: Multi-location stock tracking (Main, Balangoda, Kottawa), transfers with approval workflow, stock CRUD, and low stock alerts.

## Story E5.1: View Stock Levels
**Priority**: Highest | **Points**: 5
**User Story**: As an Inventory Mgr, I want to view stock levels across locations, so that I know what is available.
**Acceptance Criteria**:
- [ ] List products with stock count
- [ ] Filter by Location (Main, Balangoda, Kottawa)
- [ ] Search by SKU

## Story E5.2: Adjust Stock
**Priority**: High | **Points**: 3
**User Story**: As an Inventory Mgr, I want to manually adjust stock, so that records match reality.
**Acceptance Criteria**:
- [ ] Update quantity (+/-)
- [ ] Select Reason (Damage, Loss, Correction)

## Story E5.3: Request Stock Transfer
**Priority**: High | **Points**: 5
**User Story**: As a Branch Mgr, I want to request stock from Main Branch, so that I can replenish my store.
**Acceptance Criteria**:
- [ ] Select Products and Quantity
- [ ] Select Destination Location
- [ ] Submit Request

## Story E5.4: Approve Stock Transfer
**Priority**: High | **Points**: 5
**User Story**: As a Master Inventory Mgr, I want to approve transfers, so that stock movement is controlled.
**Acceptance Criteria**:
- [ ] List Step pending requests
- [ ] Approve or Reject
- [ ] Initiate Transfer

## Story E5.5: Low Stock Alerts
**Priority**: Medium | **Points**: 3
**User Story**: As an Inventory Mgr, I want to receive low stock alerts, so that I reorder in time.
**Acceptance Criteria**:
- [ ] Visual indicator for low stock
- [ ] Dashboard notification

## Story E5.6: Manage Locations
**Priority**: Medium | **Points**: 3
**User Story**: As an Admin, I want to manage warehouse locations, so that I can track inventory accurately.
**Acceptance Criteria**:
- [ ] Add/Edit Location (Name, Address)
- [ ] Assign Manager to Location

---

# Epic 6 (E6): Promotion & Loyalty Component

**Epic Description**: Coupon CRUD, campaign management, loyalty program operations (points), and gift voucher management.

## Story E6.1: Create Coupons
**Priority**: Medium | **Points**: 5
**User Story**: As a Marketing Mgr, I want to create coupons, so that I can offer discounts.
**Acceptance Criteria**:
- [ ] Set Code, Discount %, Expiry Date
- [ ] Set Usage Limit

## Story E6.2: Validate Coupons
**Priority**: High | **Points**: 3
**User Story**: As the System, I want to validate coupons at checkout, so that discounts are applied correctly.
**Acceptance Criteria**:
- [ ] Check expiry date
- [ ] Check min purchase amount
- [ ] Apply discount to total

## Story E6.3: Loyalty Points - Earning
**Priority**: Medium | **Points**: 5
**User Story**: As the System, I want to award points for purchases, so that customers are rewarded.
**Acceptance Criteria**:
- [ ] Calculate points based on order value
- [ ] Add points to user account on complete

## Story E6.4: Loyalty Points - Redemption
**Priority**: Medium | **Points**: 5
**User Story**: As a Customer, I want to redeem points for discounts, so that I can save money.
**Acceptance Criteria**:
- [ ] View points balance
- [ ] Convert points to currency discount at checkout

## Story E6.5: Create Gift Vouchers
**Priority**: Low | **Points**: 3
**User Story**: As a Marketing Mgr, I want to generate gift vouchers, so that they can be sold.
**Acceptance Criteria**:
- [ ] Generate unique code
- [ ] Set Amount and Expiry

## Story E6.6: Redeem Gift Vouchers
**Priority**: Low | **Points**: 3
**User Story**: As a Customer, I want to use a gift voucher, so that I can pay for my order.
**Acceptance Criteria**:
- [ ] Enter Voucher Code at checkout
- [ ] Deduct amount from total

## Story E6.7: Marketing Campaigns
**Priority**: Low | **Points**: 5
**User Story**: As a Marketing Mgr, I want to create campaigns, so that I can track promotion performance.
**Acceptance Criteria**:
- [ ] Define Campaign Name and Dates
- [ ] Link Coupons to Campaign
- [ ] Track usage stats
