# Complete Product Backlog - Methsara Publications Webstore
## User Stories for 6-Epic Structure

---

## 🎯 Project Overview

**Project Name**: Methsara Publications Webstore  
**Project Key**: MPW  
**Product Owner**: Methsara Publications  
**Total User Stories**: 37  
**Total Epics**: 6

**Epic Structure**:
- **E1: User & Identity** - Registration, login, role-based access, and security
- **E2: Catalog Discovery** - Book listings, grade/exam filtering, and search
- **E3: Shopping, Checkout & Orders** - Cart, checkout, payment, order processing, and tracking
- **E4: Supplier Management** - Supplier relations and purchase orders
- **E5: Inventory Management** - Stock tracking, alerts, and adjustments
- **E6: Promotions** - Coupons, campaigns, and loyalty rewards

---

# Epic 1 (E1): User & Identity

**Epic Description**: Registration, login, role-based access, and security  
**Priority**: Highest  
**Story Count**: 6  
**Assigned To**: Galagama S.T (IT24100548)

---

## Story E1.1: User Registration
**Priority**: High  
**Story Points**: 5

**User Story**:
```
As a new customer,
I want to create an account on the Methsara Publications webstore,
So that I can track my orders and save my preferences.
```

**Acceptance Criteria**:
- [ ] Registration form includes: Full Name, Email, Password, Confirm Password, Phone Number
- [ ] Email validation ensures proper format
- [ ] Password minimum 8 characters with 1 uppercase, 1 lowercase, 1 number
- [ ] Phone number validation for Sri Lankan format (+94 or 0)
- [ ] Email verification link sent to user's email
- [ ] User cannot log in until email is verified
- [ ] Terms and conditions checkbox required
- [ ] Success message displayed after registration

**Labels**: `frontend`, `backend`, `authentication`, `must-have`

---

## Story E1.2: User Login
**Priority**: High  
**Story Points**: 3

**User Story**:
```
As a registered customer,
I want to log in to my account,
So that I can access my personalized features and order history.
```

**Acceptance Criteria**:
- [ ] Login form with Email and Password fields
- [ ] "Remember Me" checkbox to persist session
- [ ] Error message for invalid credentials
- [ ] Error message for unverified email accounts
- [ ] Successful login redirects to previous page or home page
- [ ] Session expires after 24 hours (or 7 days if "Remember Me" checked)
- [ ] Login attempt limit: 5 failed attempts lock account for 15 minutes

**Labels**: `frontend`, `backend`, `authentication`, `must-have`

---

## Story E1.3: Password Reset
**Priority**: Medium  
**Story Points**: 5

**User Story**:
```
As a customer who forgot my password,
I want to reset my password securely,
So that I can regain access to my account.
```

**Acceptance Criteria**:
- [ ] "Forgot Password" link visible on login page
- [ ] Password reset form requests email address
- [ ] Reset link sent to email (valid for 1 hour)
- [ ] Reset link opens password reset page
- [ ] New password form with password and confirm password fields
- [ ] Same password validation rules as registration
- [ ] Success message after password reset
- [ ] Email notification sent confirming password change

**Labels**: `frontend`, `backend`, `authentication`, `should-have`

---

## Story E1.4: User Logout
**Priority**: Medium  
**Story Points**: 2

**User Story**:
```
As a logged-in customer,
I want to log out of my account,
So that I can secure my account when using shared devices.
```

**Acceptance Criteria**:
- [ ] Logout button visible in user menu/header
- [ ] Clicking logout clears session
- [ ] Redirect to home page after logout
- [ ] Confirmation message displayed
- [ ] Shopping cart saved for logged-in users (not cleared)
- [ ] Cannot access protected pages after logout

**Labels**: `frontend`, `backend`, `authentication`, `must-have`

---

## Story E1.5: Role-Based Access Control
**Priority**: High  
**Story Points**: 5

**User Story**:
```
As a system administrator,
I want different user roles with specific permissions,
So that I can control access to admin features and protect sensitive data.
```

**Acceptance Criteria**:
- [ ] Three user roles: Customer, Admin, Super Admin
- [ ] Customers can: browse, purchase, view own orders
- [ ] Admins can: manage products, view all orders, generate reports
- [ ] Super Admins can: manage users, manage admins, system settings
- [ ] Unauthorized access attempts redirect to login or show 403 error
- [ ] Role displayed in user profile
- [ ] Admin panel only accessible to Admin and Super Admin roles

**Labels**: `backend`, `authentication`, `authorization`, `must-have`

---

## Story E1.6: User Profile Management
**Priority**: Medium  
**Story Points**: 3

**User Story**:
```
As a registered user,
I want to update my profile information,
So that my account details remain current.
```

**Acceptance Criteria**:
- [ ] Profile page displays: name, email, phone, address
- [ ] Edit profile form with all fields editable except email
- [ ] Email change requires verification
- [ ] Phone number validation
- [ ] Success message after profile update
- [ ] Profile picture upload (optional)

**Labels**: `frontend`, `backend`, `profile`, `should-have`

---

# Epic 2 (E2): Catalog Discovery

**Epic Description**: Book listings, grade/exam filtering, and search  
**Priority**: Highest  
**Story Count**: 8  
**Assigned To**: Appuhami H A P L (IT24101314)

---

## Story E2.1: Browse Products by Category
**Priority**: High  
**Story Points**: 5

**User Story**:
```
As a teacher,
I want to browse educational materials by category,
So that I can quickly find relevant resources for my students.
```

**Acceptance Criteria**:
- [ ] Categories: Textbooks, Workbooks, Past Papers, Teacher Guides, Revision Materials
- [ ] Category navigation visible in header/sidebar
- [ ] Clicking category shows all products in that category
- [ ] Product grid displays: image, title, grade, subject, price
- [ ] Pagination with 20 products per page
- [ ] Product count displayed for each category
- [ ] Breadcrumb navigation showing current category
- [ ] Mobile-responsive grid layout

**Labels**: `frontend`, `backend`, `catalog`, `must-have`

---

## Story E2.2: Filter Products by Grade Level
**Priority**: High  
**Story Points**: 5

**User Story**:
```
As a parent,
I want to filter products by grade level,
So that I can find materials appropriate for my child's education level.
```

**Acceptance Criteria**:
- [ ] Filter sidebar with grade checkboxes (Grade 6-13)
- [ ] Multiple grade selection allowed
- [ ] Product list updates dynamically when filters applied
- [ ] Selected filters clearly displayed
- [ ] "Clear all filters" button available
- [ ] Filter count shows number of products matching criteria
- [ ] Filters persist when navigating between pages
- [ ] URL updates to reflect filter selections

**Labels**: `frontend`, `backend`, `catalog`, `must-have`

---

## Story E2.3: Filter Products by Subject
**Priority**: High  
**Story Points**: 3

**User Story**:
```
As a student,
I want to filter products by subject,
So that I can find materials for specific subjects I'm studying.
```

**Acceptance Criteria**:
- [ ] Subject filter: Mathematics, Science, English, Sinhala, Tamil, History, Geography, ICT, Commerce, Arts
- [ ] Multiple subject selection allowed
- [ ] Combine with grade level filters
- [ ] Product count updates with filter changes
- [ ] Mobile-friendly filter interface
- [ ] Filters can be collapsed/expanded on mobile

**Labels**: `frontend`, `backend`, `catalog`, `must-have`

---

## Story E2.4: View Product Details
**Priority**: High  
**Story Points**: 5

**User Story**:
```
As a customer,
I want to view detailed information about a product,
So that I can make an informed purchase decision.
```

**Acceptance Criteria**:
- [ ] Product page displays: title, author/publisher, ISBN, price, description
- [ ] High-quality product images with zoom functionality
- [ ] Image gallery if multiple images available
- [ ] Product specs: grade level, subject, publication type, pages, language
- [ ] Stock availability status (In Stock, Out of Stock, Limited Stock)
- [ ] Sample pages or table of contents (if available)
- [ ] "Add to Cart" button (disabled if out of stock)
- [ ] Related products section
- [ ] Breadcrumb navigation

**Labels**: `frontend`, `backend`, `catalog`, `must-have`

---

## Story E2.5: Product Search
**Priority**: High  
**Story Points**: 5

**User Story**:
```
As a customer,
I want to search for specific books or materials,
So that I can quickly find what I need without browsing categories.
```

**Acceptance Criteria**:
- [ ] Search bar visible in header on all pages
- [ ] Search by: title, author, ISBN, subject, keywords
- [ ] Search results displayed in grid format
- [ ] Results ranked by relevance
- [ ] Highlight search terms in results
- [ ] "No results found" message with suggestions
- [ ] Search autocomplete/suggestions as user types
- [ ] Recent searches saved (for logged-in users)
- [ ] Filters applicable to search results
- [ ] Minimum 3 characters required for search

**Labels**: `frontend`, `backend`, `search`, `must-have`

---

## Story E2.6: Sort Products
**Priority**: Medium  
**Story Points**: 3

**User Story**:
```
As a customer,
I want to sort products by different criteria,
So that I can find products that best match my preferences.
```

**Acceptance Criteria**:
- [ ] Sort options: Price (Low to High), Price (High to Low), Name (A-Z), Name (Z-A), Newest First, Most Popular
- [ ] Sort applies to current product list/search results
- [ ] Default sort: Most Popular
- [ ] Sort selection persists during session
- [ ] Page reloads to top after sort applied
- [ ] Sort works with active filters

**Labels**: `frontend`, `backend`, `catalog`, `should-have`

---

## Story E2.7: Filter by Exam Type
**Priority**: High  
**Story Points**: 3

**User Story**:
```
As a student preparing for exams,
I want to filter materials by exam type (O/L or A/L),
So that I can find exam-specific preparation materials.
```

**Acceptance Criteria**:
- [ ] Exam type filter: O/L (Ordinary Level), A/L (Advanced Level)
- [ ] Filter works in combination with grade and subject filters
- [ ] Clear indication of exam type on product cards
- [ ] Filter count updates dynamically
- [ ] Mobile-responsive filter design

**Labels**: `frontend`, `backend`, `catalog`, `must-have`

---

## Story E2.8: Product Reviews and Ratings
**Priority**: Low  
**Story Points**: 8

**User Story**:
```
As a customer,
I want to read and write product reviews,
So that I can make better purchasing decisions and share my experience.
```

**Acceptance Criteria**:
- [ ] Star rating system (1-5 stars) visible on product page
- [ ] Average rating displayed with total number of reviews
- [ ] Reviews section shows: reviewer name, rating, date, review text
- [ ] Only verified purchasers can write reviews
- [ ] Review form with: star rating, title, review text
- [ ] Character limit: 1000 characters for review text
- [ ] Reviews sorted by: Most Recent, Highest Rating, Lowest Rating
- [ ] Admin can moderate/remove inappropriate reviews

**Labels**: `frontend`, `backend`, `catalog`, `could-have`

---

# Epic 3 (E3): Shopping, Checkout & Orders

**Epic Description**: Cart, checkout, payment, order processing, and tracking  
**Priority**: Highest  
**Story Count**: 13  
**Assigned To**: Jayasinghe D.B.P (IT24100191)

---

## Story E3.1: Add Items to Cart
**Priority**: High  
**Story Points**: 5

**User Story**:
```
As a customer,
I want to add products to my shopping cart,
So that I can purchase multiple items in a single transaction.
```

**Acceptance Criteria**:
- [ ] "Add to Cart" button visible on product pages
- [ ] Quantity selector (default: 1, max: available stock)
- [ ] Success message/notification when item added
- [ ] Cart icon in header shows item count
- [ ] Cart badge updates in real-time
- [ ] Duplicate items increase quantity (not create new line)
- [ ] Cart persists for logged-in users across sessions
- [ ] Cart saved in session storage for guest users
- [ ] Cannot add out-of-stock items
- [ ] Stock validation before adding to cart

**Labels**: `frontend`, `backend`, `cart`, `must-have`

---

## Story E3.2: View Shopping Cart
**Priority**: High  
**Story Points**: 5

**User Story**:
```
As a customer,
I want to view all items in my shopping cart,
So that I can review my selections before checkout.
```

**Acceptance Criteria**:
- [ ] Cart page displays all items with: image, title, price, quantity, subtotal
- [ ] Update quantity controls (+/- buttons or input field)
- [ ] Remove item button for each product
- [ ] Cart summary showing: Subtotal, Tax, Shipping, Total
- [ ] "Continue Shopping" button
- [ ] "Proceed to Checkout" button
- [ ] Empty cart message if no items
- [ ] Real-time calculation of totals when quantities change
- [ ] Stock availability check displayed
- [ ] Promotional/discount code input field

**Labels**: `frontend`, `backend`, `cart`, `must-have`

---

## Story E3.3: Update Cart Quantities
**Priority**: Medium  
**Story Points**: 3

**User Story**:
```
As a customer,
I want to update product quantities in my cart,
So that I can adjust my order before checkout.
```

**Acceptance Criteria**:
- [ ] Quantity can be increased or decreased
- [ ] Minimum quantity: 1
- [ ] Maximum quantity: available stock
- [ ] Subtotal updates automatically
- [ ] Total cart value updates automatically
- [ ] Warning if requested quantity exceeds stock
- [ ] Quantity input validates numeric values only
- [ ] Changes saved immediately

**Labels**: `frontend`, `backend`, `cart`, `must-have`

---

## Story E3.4: Remove Items from Cart
**Priority**: Medium  
**Story Points**: 2

**User Story**:
```
As a customer,
I want to remove items from my cart,
So that I can eliminate products I no longer wish to purchase.
```

**Acceptance Criteria**:
- [ ] Remove/delete button for each cart item
- [ ] Confirmation dialog before removal (optional)
- [ ] Item removed immediately from cart
- [ ] Cart totals recalculated
- [ ] Success message displayed
- [ ] "Undo" option to restore removed item (5 seconds)
- [ ] Cart icon count updates
- [ ] Empty cart message if all items removed

**Labels**: `frontend`, `backend`, `cart`, `must-have`

---

## Story E3.5: Apply Discount Codes
**Priority**: Low  
**Story Points**: 5

**User Story**:
```
As a customer,
I want to apply promotional discount codes,
So that I can save money on my purchase.
```

**Acceptance Criteria**:
- [ ] Discount code input field in cart page
- [ ] "Apply" button to validate and apply code
- [ ] Success message if code is valid
- [ ] Error message if code is invalid/expired
- [ ] Discount amount displayed in cart summary
- [ ] Discount applied to total before tax
- [ ] Only one discount code per order
- [ ] Code validation: active dates, usage limits, minimum order value
- [ ] "Remove" option to remove applied discount
- [ ] Discount details shown (e.g., "10% off")

**Labels**: `frontend`, `backend`, `cart`, `promotions`, `could-have`

---

## Story E3.13: Admin Order Management
**Priority**: High  
**Story Points**: 8

**User Story**:
```
As an admin,
I want to manage all customer orders,
So that I can process and fulfill orders efficiently.
```

**Acceptance Criteria**:
- [ ] Admin dashboard shows all orders
- [ ] Filter orders by status, date range, customer
- [ ] Search orders by order number, customer name, email
- [ ] View full order details
- [ ] Update order status manually
- [ ] Mark orders as shipped with tracking number
- [ ] Mark orders as delivered
- [ ] Process refunds for cancelled orders
- [ ] Export orders to CSV/Excel
- [ ] Bulk status updates

**Labels**: `backend`, `admin`, `orders`, `must-have`

---

# Epic 4 (E4): Supplier Management

**Epic Description**: Supplier relations and purchase orders  
**Priority**: Medium  
**Story Count**: 2  
**Assigned To**: Gawrawa G H Y (IT24100799)

---

## Story E4.1: Complete Checkout Process
**Priority**: High  
**Story Points**: 8

**User Story**:
```
As a customer,
I want to complete my purchase securely,
So that I can receive my educational materials.
```

**Acceptance Criteria**:
- [ ] Multi-step checkout: Shipping Address → Payment → Review → Confirmation
- [ ] Shipping address form: name, address line 1, address line 2, city, postal code, phone
- [ ] Address validation for Sri Lankan addresses
- [ ] Saved addresses for logged-in users
- [ ] Payment method selection (Credit/Debit Card, Bank Transfer, Cash on Delivery)
- [ ] Order review page showing: items, quantities, prices, shipping, total
- [ ] Terms and conditions acceptance required
- [ ] "Place Order" button
- [ ] Loading indicator during order processing
- [ ] Order confirmation page with order number
- [ ] Confirmation email sent immediately

**Labels**: `frontend`, `backend`, `checkout`, `must-have`

---

## Story E4.2: Guest Checkout
**Priority**: Medium  
**Story Points**: 5

**User Story**:
```
As a guest customer,
I want to checkout without creating an account,
So that I can make a quick purchase.
```

**Acceptance Criteria**:
- [ ] "Checkout as Guest" option on cart page
- [ ] Guest checkout form collects: name, email, phone, shipping address
- [ ] Email validation required
- [ ] Order confirmation sent to provided email
- [ ] Option to create account after order completion
- [ ] Guest orders tracked by email and order number
- [ ] Same checkout flow as registered users
- [ ] Guest cart cleared after order completion

**Labels**: `frontend`, `backend`, `checkout`, `should-have`

---

## Story E4.3: Order Confirmation
**Priority**: High  
**Story Points**: 3

**User Story**:
```
As a customer,
I want to receive order confirmation,
So that I have proof of my purchase and order details.
```

**Acceptance Criteria**:
- [ ] Confirmation page displays: order number, date, items, total, shipping address
- [ ] "Print Order" button
- [ ] "Download Invoice" button (PDF)
- [ ] Confirmation email sent with same details
- [ ] Email includes: order summary, estimated delivery date, tracking info (when available)
- [ ] "Continue Shopping" button
- [ ] "Track Order" link
- [ ] Order saved to user's order history

**Labels**: `frontend`, `backend`, `orders`, `must-have`

---

## Story E4.4: View Order History
**Priority**: Medium  
**Story Points**: 5

**User Story**:
```
As a registered customer,
I want to view my past orders,
So that I can track my purchases and reorder items.
```

**Acceptance Criteria**:
- [ ] "My Orders" page in user account section
- [ ] List of all orders with: order number, date, status, total
- [ ] Orders sorted by date (newest first)
- [ ] Filter by order status: All, Processing, Shipped, Delivered, Cancelled
- [ ] Search orders by order number or product name
- [ ] Click order to view full details
- [ ] Pagination for orders (10 per page)
- [ ] "Reorder" button to add same items to cart
- [ ] Download invoice for each order

**Labels**: `frontend`, `backend`, `orders`, `should-have`

---

## Story E4.5: Track Order Status
**Priority**: Medium  
**Story Points**: 5

**User Story**:
```
As a customer,
I want to track my order status,
So that I know when to expect delivery.
```

**Acceptance Criteria**:
- [ ] Order detail page shows current status
- [ ] Status options: Order Placed, Processing, Packed, Shipped, Out for Delivery, Delivered
- [ ] Visual progress indicator/timeline
- [ ] Estimated delivery date displayed
- [ ] Tracking number shown when available
- [ ] Link to courier tracking page (if applicable)
- [ ] Status update timestamps
- [ ] Email notifications for status changes

**Labels**: `frontend`, `backend`, `orders`, `should-have`

---

## Story E4.6: Cancel Order
**Priority**: Low  
**Story Points**: 5

**User Story**:
```
As a customer,
I want to cancel my order before it ships,
So that I can avoid unwanted purchases.
```

**Acceptance Criteria**:
- [ ] "Cancel Order" button visible for eligible orders
- [ ] Only orders with status "Order Placed" or "Processing" can be cancelled
- [ ] Confirmation dialog before cancellation
- [ ] Reason for cancellation dropdown (optional)
- [ ] Order status updated to "Cancelled"
- [ ] Refund processed if payment already made
- [ ] Cancellation confirmation email sent
- [ ] Cancelled items returned to inventory
- [ ] Admin notified of cancellation

**Labels**: `frontend`, `backend`, `orders`, `could-have`

---

## Story E4.7: Generate Invoice
**Priority**: Medium  
**Story Points**: 5

**User Story**:
```
As a customer,
I want to receive a payment receipt and invoice,
So that I have proof of payment for my records.
```

**Acceptance Criteria**:
- [ ] Invoice generated automatically after successful payment
- [ ] Invoice includes: invoice number, date, customer details, items, prices, tax, total
- [ ] Invoice downloadable as PDF
- [ ] Invoice sent via email
- [ ] Receipt shows payment method and transaction ID
- [ ] Company details and tax registration on invoice
- [ ] Sequential invoice numbering
- [ ] "Download Invoice" button in order history
- [ ] Invoices stored securely in system

**Labels**: `backend`, `orders`, `reporting`, `must-have`

---

## Story E4.8: Admin Order Management
**Priority**: High  
**Story Points**: 8

**User Story**:
```
As an admin,
I want to manage all customer orders,
So that I can process and fulfill orders efficiently.
```

**Acceptance Criteria**:
- [ ] Admin dashboard shows all orders
- [ ] Filter orders by status, date range, customer
- [ ] Search orders by order number, customer name, email
- [ ] View full order details
- [ ] Update order status manually
- [ ] Mark orders as shipped with tracking number
- [ ] Mark orders as delivered
- [ ] Process refunds for cancelled orders
- [ ] Export orders to CSV/Excel
- [ ] Bulk status updates

**Labels**: `backend`, `admin`, `orders`, `must-have`

---

# Epic 6 (E6): Promotions

**Epic Description**: Coupons, campaigns, and loyalty rewards  
**Priority**: Medium  
**Story Count**: 5  
**Assigned To**: Perera M.U.E (IT24101266)

---

## Story E6.1: Create Discount Coupons
**Priority**: Medium  
**Story Points**: 5

**User Story**:
```
As an admin,
I want to track stock levels in real-time,
So that I know product availability at all times.
```

**Acceptance Criteria**:
- [ ] Dashboard shows current stock levels for all products
- [ ] Stock automatically decreases when order is placed
- [ ] Stock increases when order is cancelled
- [ ] Stock status indicators: In Stock, Low Stock, Out of Stock
- [ ] Stock count visible on product management page
- [ ] Filter products by stock status
- [ ] Search products by name or SKU
- [ ] Export stock report to CSV/Excel

**Labels**: `backend`, `inventory`, `admin`, `should-have`

---

## Story E5.2: Low Stock Alerts
**Priority**: Medium  
**Story Points**: 3

**User Story**:
```
As an admin,
I want to receive alerts when stock is low,
So that I can reorder before stockouts occur.
```

**Acceptance Criteria**:
- [ ] Set low stock threshold per product
- [ ] Email alert sent when stock falls below threshold
- [ ] Dashboard notification for low stock items
- [ ] Low stock products highlighted in inventory list
- [ ] Alert includes: product name, current stock, threshold
- [ ] Option to dismiss or snooze alerts
- [ ] Alert history log

**Labels**: `backend`, `inventory`, `admin`, `should-have`

---

## Story E5.3: Stock Adjustment
**Priority**: Medium  
**Story Points**: 3

**User Story**:
```
As an admin,
I want to manually adjust stock levels,
So that I can correct discrepancies or handle returns.
```

**Acceptance Criteria**:
- [ ] Stock adjustment form for each product
- [ ] Increase or decrease stock quantity
- [ ] Reason for adjustment: Damaged, Lost, Found, Return, Other
- [ ] Notes field for additional details
- [ ] Adjustment history log with: date, user, quantity, reason
- [ ] Stock level updates immediately after adjustment
- [ ] Adjustment requires admin confirmation

**Labels**: `backend`, `inventory`, `admin`, `should-have`

---

# Epic 5 (E5): Inventory Management

**Epic Description**: Coupons, campaigns, and loyalty rewards  
**Priority**: Medium  
**Story Count**: 5  
**Assigned To**: Perera M.U.E (IT24101266)

---

## Story E7.1: Create Discount Coupons
**Priority**: Medium  
**Story Points**: 5

**User Story**:
```
As an admin,
I want to create discount coupons,
So that I can run promotional campaigns.
```

**Acceptance Criteria**:
- [ ] Coupon creation form in admin panel
- [ ] Coupon code (unique, alphanumeric)
- [ ] Discount type: Percentage or Fixed Amount
- [ ] Discount value
- [ ] Minimum order value requirement
- [ ] Valid from and valid until dates
- [ ] Usage limit: total uses and per customer
- [ ] Applicable to: All products, Specific categories, Specific products
- [ ] Active/Inactive status toggle
- [ ] Preview coupon before saving

**Labels**: `backend`, `promotions`, `admin`, `should-have`

---

## Story E7.2: Manage Coupon Rules
**Priority**: Medium  
**Story Points**: 3

**User Story**:
```
As an admin,
I want to set rules for coupon usage,
So that I can control discount conditions.
```

**Acceptance Criteria**:
- [ ] Set minimum purchase amount
- [ ] Set maximum discount amount (for percentage coupons)
- [ ] Limit to specific user roles (e.g., new customers only)
- [ ] Limit to specific grades or subjects
- [ ] Exclude sale items from coupon
- [ ] Combine with other coupons: Yes/No
- [ ] First-time customer only option
- [ ] Rules validation when coupon is applied

**Labels**: `backend`, `promotions`, `admin`, `should-have`

---

## Story E7.3: View Coupon Usage Reports
**Priority**: Low  
**Story Points**: 5

**User Story**:
```
As an admin,
I want to view coupon usage reports,
So that I can measure campaign effectiveness.
```

**Acceptance Criteria**:
- [ ] Coupon report page in admin panel
- [ ] List all coupons with: code, discount, usage count, total savings
- [ ] Filter by: Active, Expired, All
- [ ] Date range filter
- [ ] View detailed usage per coupon: customer, order, date, discount amount
- [ ] Total revenue impact calculation
- [ ] Export report to CSV/Excel
- [ ] Chart showing coupon usage over time

**Labels**: `backend`, `promotions`, `admin`, `reporting`, `could-have`

---

## Story E7.4: Purchase Gift Vouchers
**Priority**: Low  
**Story Points**: 8

**User Story**:
```
As a customer,
I want to purchase gift vouchers,
So that I can gift educational materials to others.
```

**Acceptance Criteria**:
- [ ] Gift voucher purchase page
- [ ] Select voucher amount (predefined or custom)
- [ ] Recipient email address
- [ ] Personal message (optional)
- [ ] Sender name
- [ ] Delivery date: Immediate or scheduled
- [ ] Voucher code generated automatically
- [ ] Email sent to recipient with voucher code and message
- [ ] Voucher redeemable at checkout
- [ ] Voucher balance tracking
- [ ] Expiry date (e.g., 1 year from purchase)

**Labels**: `frontend`, `backend`, `promotions`, `could-have`

---

## Story E7.5: Loyalty Points System
**Priority**: Low  
**Story Points**: 8

**User Story**:
```
As a customer,
I want to earn loyalty points on purchases,
So that I can get rewards for being a repeat customer.
```

**Acceptance Criteria**:
- [ ] Earn points on every purchase (e.g., 1 point per LKR 100)
- [ ] Points displayed in user account
- [ ] Points history showing: date, order, points earned
- [ ] Redeem points for discounts (e.g., 100 points = LKR 100 off)
- [ ] Minimum points required for redemption
- [ ] Points expiry (e.g., 1 year from earning)
- [ ] Points balance shown at checkout
- [ ] Option to use points during checkout
- [ ] Email notification when points are earned or redeemed
- [ ] Admin can manually adjust points

**Labels**: `frontend`, `backend`, `promotions`, `loyalty`, `could-have`

---

## 📊 Summary

### Total User Stories by Epic

| Epic | Epic Name | Stories | Priority |
|------|-----------|---------|----------|
| E1 | User & Identity | 6 | Highest |
| E2 | Catalog Discovery | 8 | Highest |
| E3 | Shopping Cart & Wishlist | 5 | Highest |
| E4 | Order & Payment Processing | 8 | Highest |
| E5 | Inventory Management | 3 | Medium |
| E6 | Supplier Management | 2 | Low |
| E7 | Promotions | 5 | Medium |
| **Total** | | **37** | |

### Story Points Distribution

- **E1: User & Identity**: ~23 points
- **E2: Catalog Discovery**: ~37 points
- **E3: Shopping Cart & Wishlist**: ~20 points
- **E4: Order & Payment Processing**: ~44 points
- **E5: Inventory Management**: ~11 points
- **E6: Supplier Management**: ~13 points
- **E7: Promotions**: ~29 points
- **Total Estimated**: ~177 points

---

## 📝 Notes

- All stories follow the format: "As a [user], I want [goal], So that [benefit]"
- Each story includes acceptance criteria, story points, priority, and labels
- Stories are ready to be imported into Jira
- Link each story to its respective Epic (E1-E7) in Jira
- Adjust story points during sprint planning based on team velocity

---

**Document Version**: 3.0 (7-Epic Structure)  
**Last Updated**: February 5, 2026  
**Ready for Jira Import**: ✅

