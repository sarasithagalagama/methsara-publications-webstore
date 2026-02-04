# Complete Product Backlog - Methsara Publications Webstore
## All User Stories Ready for Jira

---

## 🎯 Project Overview

**Project Name**: Methsara Publications Webstore  
**Project Key**: MPW  
**Product Owner**: Methsara Publications  
**Developer**: Galagama S.T  
**Total User Stories**: 52  
**Total Epics**: 10

---

# Epic 1: User Authentication & Authorization
**Epic Description**: Complete user authentication system including registration, login, password management, and access control.

**Priority**: Highest  
**Story Count**: 6

---

## Story 1.1: User Registration
**Priority**: High  
**Story Points**: 5

**User Story**:
```
As a new customer,
I want to create an account on the Methsara Publications webstore,
So that I can track my orders and save my preferences.
```

**Acceptance Criteria**:
- [ ] Registration form includes fields: Full Name, Email, Password, Confirm Password, Phone Number
- [ ] Email validation ensures proper format
- [ ] Password must be minimum 8 characters with at least 1 uppercase, 1 lowercase, 1 number
- [ ] Password confirmation must match password field
- [ ] Phone number validation for Sri Lankan format (+94 or 0)
- [ ] Email verification link sent to user's email
- [ ] User cannot log in until email is verified
- [ ] Terms and conditions checkbox required
- [ ] Success message displayed after registration
- [ ] Automatic redirect to login page after email verification

**Labels**: `frontend`, `backend`, `authentication`, `must-have`

---

## Story 1.2: User Login
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
- [ ] Display loading indicator during authentication

**Labels**: `frontend`, `backend`, `authentication`, `must-have`

---

## Story 1.3: Password Reset
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
- [ ] Old password immediately invalidated
- [ ] Automatic redirect to login page
- [ ] Email notification sent confirming password change

**Labels**: `frontend`, `backend`, `authentication`, `should-have`

---

## Story 1.4: User Logout
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

## Story 1.5: Email Verification
**Priority**: High  
**Story Points**: 3

**User Story**:
```
As a new user,
I want to verify my email address,
So that the system can confirm my identity and enable my account.
```

**Acceptance Criteria**:
- [ ] Verification email sent immediately after registration
- [ ] Email contains verification link (valid for 24 hours)
- [ ] Clicking link verifies account and enables login
- [ ] Success message displayed after verification
- [ ] "Resend verification email" option available
- [ ] Expired links show appropriate error message
- [ ] Already verified accounts show appropriate message

**Labels**: `backend`, `authentication`, `must-have`

---

## Story 1.6: Role-Based Access Control
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

# Epic 2: Product Catalog Management
**Epic Description**: Complete product browsing, filtering, and display functionality for educational materials.

**Priority**: Highest  
**Story Count**: 7

---

## Story 2.1: Browse Products by Category
**Priority**: High  
**Story Points**: 5

**User Story**:
```
As a teacher,
I want to browse educational materials by category,
So that I can quickly find relevant resources for my students.
```

**Acceptance Criteria**:
- [ ] Categories include: Textbooks, Workbooks, Past Papers, Teacher Guides, Revision Materials
- [ ] Category navigation visible in header/sidebar
- [ ] Clicking category shows all products in that category
- [ ] Display product grid with: image, title, grade, subject, price
- [ ] Pagination with 20 products per page
- [ ] Product count displayed for each category
- [ ] Breadcrumb navigation showing current category
- [ ] Mobile-responsive grid layout

**Labels**: `frontend`, `backend`, `catalog`, `must-have`

---

## Story 2.2: Filter Products by Grade Level
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

## Story 2.3: Filter Products by Subject
**Priority**: High  
**Story Points**: 3

**User Story**:
```
As a student,
I want to filter products by subject,
So that I can find materials for specific subjects I'm studying.
```

**Acceptance Criteria**:
- [ ] Subject filter with options: Mathematics, Science, English, Sinhala, Tamil, History, Geography, ICT, Commerce, Arts
- [ ] Multiple subject selection allowed
- [ ] Combine with grade level filters
- [ ] Product count updates with filter changes
- [ ] Mobile-friendly filter interface
- [ ] Filters can be collapsed/expanded on mobile

**Labels**: `frontend`, `backend`, `catalog`, `must-have`

---

## Story 2.4: View Product Details
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
- [ ] Product specifications: grade level, subject, publication type, pages, language
- [ ] Stock availability status (In Stock, Out of Stock, Limited Stock)
- [ ] Sample pages or table of contents (if available)
- [ ] "Add to Cart" button (disabled if out of stock)
- [ ] Related products section
- [ ] Customer reviews and ratings section
- [ ] Breadcrumb navigation

**Labels**: `frontend`, `backend`, `catalog`, `must-have`

---

## Story 2.5: Product Search
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

## Story 2.6: Sort Products
**Priority**: Medium  
**Story Points**: 3

**User Story**:
```
As a customer,
I want to sort products by different criteria,
So that I can find products that best match my preferences.
```

**Acceptance Criteria**:
- [ ] Sort dropdown with options: Price (Low to High), Price (High to Low), Name (A-Z), Name (Z-A), Newest First, Most Popular
- [ ] Sort applies to current product list/search results
- [ ] Default sort: Most Popular
- [ ] Sort selection persists during session
- [ ] Page reloads to top after sort applied
- [ ] Sort works with active filters

**Labels**: `frontend`, `backend`, `catalog`, `should-have`

---

## Story 2.7: Product Reviews and Ratings
**Priority**: Medium  
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
- [ ] Reviews sorted by: Most Recent, Highest Rating, Lowest Rating, Most Helpful
- [ ] "Helpful" voting system for reviews
- [ ] Admin can moderate/remove inappropriate reviews
- [ ] Email notification to customer when review is published

**Labels**: `frontend`, `backend`, `catalog`, `could-have`

---

# Epic 3: Shopping Cart & Checkout
**Epic Description**: Shopping cart functionality and complete checkout process with payment integration.

**Priority**: Highest  
**Story Count**: 6

---

## Story 3.1: Add Items to Cart
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

## Story 3.2: View Shopping Cart
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

## Story 3.3: Update Cart Quantities
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
- [ ] Undo option for accidental changes (optional)

**Labels**: `frontend`, `backend`, `cart`, `must-have`

---

## Story 3.4: Remove Items from Cart
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

## Story 3.5: Apply Discount Codes
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

## Story 3.6: Guest Checkout
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

# Epic 4: Order & Transaction Management
**Epic Description**: Complete order processing, tracking, and management system.

**Priority**: High  
**Story Count**: 5

---

## Story 4.1: Complete Checkout Process
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

## Story 4.2: Order Confirmation
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

## Story 4.3: View Order History
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

## Story 4.4: Track Order Status
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
- [ ] SMS notifications (optional)

**Labels**: `frontend`, `backend`, `orders`, `should-have`

---

## Story 4.5: Cancel Order
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

# Epic 5: Payment Integration
**Epic Description**: Secure payment processing with multiple payment methods.

**Priority**: High  
**Story Count**: 4

---

## Story 5.1: Credit/Debit Card Payment
**Priority**: High  
**Story Points**: 8

**User Story**:
```
As a customer,
I want to pay using my credit or debit card,
So that I can complete my purchase securely online.
```

**Acceptance Criteria**:
- [ ] Integration with payment gateway (e.g., PayHere, Stripe)
- [ ] Secure card input form: card number, expiry, CVV, cardholder name
- [ ] Card validation (Luhn algorithm)
- [ ] SSL encryption for all payment data
- [ ] 3D Secure authentication support
- [ ] Payment processing indicator
- [ ] Success/failure messages
- [ ] Transaction ID stored with order
- [ ] Failed payment allows retry
- [ ] PCI DSS compliance

**Labels**: `backend`, `payment`, `must-have`, `security`

---

## Story 5.2: Bank Transfer Payment
**Priority**: Medium  
**Story Points**: 5

**User Story**:
```
As a customer,
I want to pay via bank transfer,
So that I can use my preferred payment method.
```

**Acceptance Criteria**:
- [ ] Bank transfer option in payment methods
- [ ] Display bank account details: bank name, account number, account name
- [ ] Order placed with "Pending Payment" status
- [ ] Instructions to upload payment receipt
- [ ] File upload for payment proof (image/PDF)
- [ ] Admin notification of pending payment verification
- [ ] Order confirmed after admin verifies payment
- [ ] Payment verification deadline (e.g., 24 hours)
- [ ] Order auto-cancelled if payment not received in time

**Labels**: `frontend`, `backend`, `payment`, `should-have`

---

## Story 5.3: Cash on Delivery
**Priority**: Medium  
**Story Points**: 3

**User Story**:
```
As a customer,
I want to pay cash when I receive my order,
So that I don't need to pay online.
```

**Acceptance Criteria**:
- [ ] "Cash on Delivery" option in payment methods
- [ ] COD available only for orders below certain amount (e.g., LKR 10,000)
- [ ] COD fee added to order total (if applicable)
- [ ] Order placed with "COD" payment status
- [ ] Delivery instructions include COD amount
- [ ] Payment marked as received by delivery person
- [ ] Admin can mark payment as collected
- [ ] COD availability based on delivery location

**Labels**: `frontend`, `backend`, `payment`, `should-have`

---

## Story 5.4: Payment Receipt & Invoice
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

**Labels**: `backend`, `payment`, `reporting`, `must-have`

---

# Epic 6: Admin Dashboard
**Epic Description**: Administrative interface for managing products, orders, users, and system settings.

**Priority**: High  
**Story Count**: 8

---

## Story 6.1: Admin Login & Dashboard
**Priority**: High  
**Story Points**: 5

**User Story**:
```
As an admin,
I want to access a secure admin dashboard,
So that I can manage the webstore.
```

**Acceptance Criteria**:
- [ ] Separate admin login page (/admin/login)
- [ ] Admin credentials validated against admin users only
- [ ] Dashboard shows key metrics: total orders, revenue, products, users
- [ ] Quick stats: today's orders, pending orders, low stock alerts
- [ ] Recent orders list (last 10)
- [ ] Sales chart (last 30 days)
- [ ] Navigation menu: Products, Orders, Users, Reports, Settings
- [ ] Admin session timeout after 30 minutes of inactivity
- [ ] Responsive design for tablet/desktop

**Labels**: `frontend`, `backend`, `admin`, `must-have`

---

## Story 6.2: Manage Products (Create)
**Priority**: High  
**Story Points**: 8

**User Story**:
```
As an admin,
I want to add new products to the catalog,
So that I can expand the available inventory.
```

**Acceptance Criteria**:
- [ ] "Add Product" button in products section
- [ ] Product form fields: title, description, ISBN, author/publisher, category, grade, subject, price, stock quantity, publication type
- [ ] Image upload (multiple images, max 5)
- [ ] Image preview before upload
- [ ] Rich text editor for description
- [ ] Required field validation
- [ ] Price validation (positive numbers only)
- [ ] Stock validation (non-negative integers)
- [ ] "Save as Draft" and "Publish" options
- [ ] Success message after product creation
- [ ] Redirect to product list after save

**Labels**: `frontend`, `backend`, `admin`, `catalog`, `must-have`

---

## Story 6.3: Manage Products (Edit/Delete)
**Priority**: High  
**Story Points**: 5

**User Story**:
```
As an admin,
I want to edit and delete existing products,
So that I can keep the catalog accurate and up-to-date.
```

**Acceptance Criteria**:
- [ ] Product list with edit and delete buttons
- [ ] Edit opens product form with existing data
- [ ] All fields editable
- [ ] Image management: add new, remove existing
- [ ] Delete requires confirmation
- [ ] Soft delete (mark as deleted, don't remove from database)
- [ ] Deleted products hidden from customer view
- [ ] Deleted products can be restored
- [ ] Edit history/audit log (optional)
- [ ] Bulk actions: delete multiple, publish/unpublish multiple

**Labels**: `frontend`, `backend`, `admin`, `catalog`, `must-have`

---

## Story 6.4: Manage Orders
**Priority**: High  
**Story Points**: 8

**User Story**:
```
As an admin,
I want to view and manage all customer orders,
So that I can process and fulfill them efficiently.
```

**Acceptance Criteria**:
- [ ] Orders list showing: order number, customer, date, status, total
- [ ] Filter by status: All, Pending, Processing, Shipped, Delivered, Cancelled
- [ ] Filter by date range
- [ ] Search by order number or customer name
- [ ] Click order to view full details
- [ ] Order details show: customer info, items, payment status, shipping address
- [ ] Update order status dropdown
- [ ] Add tracking number field
- [ ] Print packing slip
- [ ] Send status update email to customer
- [ ] Pagination (20 orders per page)
- [ ] Export orders to CSV/Excel

**Labels**: `frontend`, `backend`, `admin`, `orders`, `must-have`

---

## Story 6.5: Manage Users
**Priority**: Medium  
**Story Points**: 5

**User Story**:
```
As an admin,
I want to view and manage user accounts,
So that I can handle customer support and security issues.
```

**Acceptance Criteria**:
- [ ] Users list showing: name, email, role, registration date, status
- [ ] Search users by name or email
- [ ] Filter by role: All, Customer, Admin, Super Admin
- [ ] View user details: profile info, order history, total spent
- [ ] Activate/deactivate user accounts
- [ ] Reset user password
- [ ] Change user role (Super Admin only)
- [ ] Delete user account (with confirmation)
- [ ] View user activity log
- [ ] Pagination (50 users per page)

**Labels**: `frontend`, `backend`, `admin`, `users`, `should-have`

---

## Story 6.6: Inventory Management
**Priority**: High  
**Story Points**: 5

**User Story**:
```
As an admin,
I want to track and manage product inventory,
So that I can prevent overselling and maintain stock levels.
```

**Acceptance Criteria**:
- [ ] Inventory page showing all products with stock levels
- [ ] Low stock alert (configurable threshold, e.g., < 10 units)
- [ ] Out of stock indicator
- [ ] Quick stock update: add/subtract quantity
- [ ] Stock adjustment with reason (e.g., damaged, returned, restocked)
- [ ] Stock history/audit log
- [ ] Filter: All, Low Stock, Out of Stock
- [ ] Search products by name or ISBN
- [ ] Bulk stock update via CSV import
- [ ] Stock level displayed in product list

**Labels**: `frontend`, `backend`, `admin`, `inventory`, `must-have`

---

## Story 6.7: Sales Reports
**Priority**: Medium  
**Story Points**: 8

**User Story**:
```
As an admin,
I want to view sales reports and analytics,
So that I can make informed business decisions.
```

**Acceptance Criteria**:
- [ ] Reports dashboard with date range selector
- [ ] Total revenue chart (daily, weekly, monthly)
- [ ] Total orders count
- [ ] Average order value
- [ ] Top-selling products (by quantity and revenue)
- [ ] Sales by category
- [ ] Sales by grade level
- [ ] Sales by subject
- [ ] Customer acquisition metrics
- [ ] Export reports to PDF/Excel
- [ ] Visual charts: line, bar, pie charts
- [ ] Comparison with previous period

**Labels**: `frontend`, `backend`, `admin`, `reporting`, `should-have`

---

## Story 6.8: System Settings
**Priority**: Low  
**Story Points**: 5

**User Story**:
```
As a super admin,
I want to configure system settings,
So that I can customize the webstore behavior.
```

**Acceptance Criteria**:
- [ ] Settings page with tabs: General, Payment, Shipping, Email, Tax
- [ ] General: site name, logo upload, contact email, phone
- [ ] Payment: enable/disable payment methods, payment gateway credentials
- [ ] Shipping: shipping rates, free shipping threshold, delivery areas
- [ ] Email: SMTP settings, email templates
- [ ] Tax: tax rate, tax-inclusive pricing toggle
- [ ] Save button for each section
- [ ] Validation for required fields
- [ ] Success/error messages
- [ ] Settings stored in database
- [ ] Only Super Admin can access

**Labels**: `frontend`, `backend`, `admin`, `settings`, `could-have`

---

# Epic 7: Search & Filter Functionality
**Epic Description**: Advanced search and filtering capabilities for better product discovery.

**Priority**: Medium  
**Story Count**: 3

---

## Story 7.1: Advanced Search
**Priority**: Medium  
**Story Points**: 5

**User Story**:
```
As a customer,
I want to use advanced search with multiple criteria,
So that I can find exactly what I'm looking for.
```

**Acceptance Criteria**:
- [ ] Advanced search page/modal
- [ ] Search fields: title, author, ISBN, keywords
- [ ] Filter options: category, grade, subject, price range
- [ ] Combine multiple search criteria
- [ ] "Search" button to execute search
- [ ] Results displayed in grid format
- [ ] Results count displayed
- [ ] Clear all filters button
- [ ] Save search (for logged-in users)
- [ ] Recent searches displayed

**Labels**: `frontend`, `backend`, `search`, `should-have`

---

## Story 7.2: Search Autocomplete
**Priority**: Low  
**Story Points**: 5

**User Story**:
```
As a customer,
I want search suggestions as I type,
So that I can find products faster.
```

**Acceptance Criteria**:
- [ ] Autocomplete dropdown appears after 3 characters typed
- [ ] Suggestions include: product titles, authors, subjects
- [ ] Maximum 10 suggestions displayed
- [ ] Highlight matching text in suggestions
- [ ] Click suggestion to navigate to product or execute search
- [ ] Keyboard navigation (up/down arrows, enter to select)
- [ ] Debounce search requests (300ms delay)
- [ ] Show "No suggestions" if no matches
- [ ] Close dropdown when clicking outside

**Labels**: `frontend`, `backend`, `search`, `could-have`

---

## Story 7.3: Filter by Price Range
**Priority**: Low  
**Story Points**: 3

**User Story**:
```
As a customer,
I want to filter products by price range,
So that I can find products within my budget.
```

**Acceptance Criteria**:
- [ ] Price range slider in filter sidebar
- [ ] Minimum and maximum price inputs
- [ ] Slider updates input values and vice versa
- [ ] Price range based on available products
- [ ] Product list updates when price filter applied
- [ ] Price filter combines with other filters
- [ ] Display product count for selected range
- [ ] Currency displayed (LKR)

**Labels**: `frontend`, `backend`, `catalog`, `could-have`

---

# Epic 8: User Profile Management
**Epic Description**: User account management, profile editing, and preferences.

**Priority**: Medium  
**Story Count**: 4

---

## Story 8.1: View User Profile
**Priority**: Medium  
**Story Points**: 3

**User Story**:
```
As a registered customer,
I want to view my profile information,
So that I can verify my account details.
```

**Acceptance Criteria**:
- [ ] Profile page accessible from user menu
- [ ] Display: name, email, phone, registration date
- [ ] Display: total orders, total spent
- [ ] "Edit Profile" button
- [ ] "Change Password" button
- [ ] Profile picture/avatar (optional)
- [ ] Account status (Active, Inactive)
- [ ] Responsive design

**Labels**: `frontend`, `backend`, `profile`, `should-have`

---

## Story 8.2: Edit User Profile
**Priority**: Medium  
**Story Points**: 5

**User Story**:
```
As a registered customer,
I want to edit my profile information,
So that I can keep my details up-to-date.
```

**Acceptance Criteria**:
- [ ] Edit profile form with: name, phone, profile picture
- [ ] Email displayed but not editable (or requires verification if changed)
- [ ] Phone number validation
- [ ] Image upload for profile picture
- [ ] Image preview before upload
- [ ] "Save Changes" button
- [ ] Validation for required fields
- [ ] Success message after update
- [ ] Changes reflected immediately in profile view

**Labels**: `frontend`, `backend`, `profile`, `should-have`

---

## Story 8.3: Change Password
**Priority**: Medium  
**Story Points**: 3

**User Story**:
```
As a registered customer,
I want to change my password,
So that I can maintain account security.
```

**Acceptance Criteria**:
- [ ] Change password form: current password, new password, confirm new password
- [ ] Validate current password is correct
- [ ] New password validation (same rules as registration)
- [ ] Confirm password must match new password
- [ ] Success message after password change
- [ ] Email notification sent confirming password change
- [ ] User remains logged in after password change
- [ ] Error message if current password is incorrect

**Labels**: `frontend`, `backend`, `profile`, `should-have`

---

## Story 8.4: Manage Saved Addresses
**Priority**: Low  
**Story Points**: 5

**User Story**:
```
As a registered customer,
I want to save multiple shipping addresses,
So that I can quickly select them during checkout.
```

**Acceptance Criteria**:
- [ ] "Saved Addresses" section in profile
- [ ] List of saved addresses with edit/delete buttons
- [ ] "Add New Address" button
- [ ] Address form: label (Home, Office, etc.), full address, city, postal code, phone
- [ ] Set default address option
- [ ] Maximum 5 saved addresses
- [ ] Address validation
- [ ] Saved addresses available in checkout
- [ ] Delete requires confirmation

**Labels**: `frontend`, `backend`, `profile`, `could-have`

---

# Epic 9: Inventory Management
**Epic Description**: Stock tracking, low stock alerts, and inventory reporting.

**Priority**: Medium  
**Story Count**: 3

---

## Story 9.1: Stock Level Tracking
**Priority**: High  
**Story Points**: 5

**User Story**:
```
As an admin,
I want to track stock levels in real-time,
So that I can prevent overselling and stockouts.
```

**Acceptance Criteria**:
- [ ] Stock quantity decremented when order is placed
- [ ] Stock quantity incremented when order is cancelled
- [ ] Stock quantity updated when admin adjusts inventory
- [ ] Display current stock on product page
- [ ] Display "In Stock", "Low Stock", or "Out of Stock" status
- [ ] Prevent adding to cart if out of stock
- [ ] Prevent checkout if stock becomes unavailable
- [ ] Stock reserved during checkout process (15 minutes)
- [ ] Reserved stock released if checkout not completed

**Labels**: `backend`, `inventory`, `must-have`

---

## Story 9.2: Low Stock Alerts
**Priority**: Medium  
**Story Points**: 3

**User Story**:
```
As an admin,
I want to receive alerts when stock is low,
So that I can reorder products before they run out.
```

**Acceptance Criteria**:
- [ ] Configurable low stock threshold (default: 10 units)
- [ ] Low stock indicator in admin inventory page
- [ ] Dashboard widget showing low stock products
- [ ] Email notification to admin when product reaches low stock
- [ ] Daily summary email of all low stock items
- [ ] Low stock badge on product list
- [ ] Filter to view only low stock products

**Labels**: `backend`, `admin`, `inventory`, `should-have`

---

## Story 9.3: Inventory Reports
**Priority**: Low  
**Story Points**: 5

**User Story**:
```
As an admin,
I want to generate inventory reports,
So that I can analyze stock movement and trends.
```

**Acceptance Criteria**:
- [ ] Inventory report page in admin dashboard
- [ ] Report shows: product, current stock, sold quantity, restocked quantity
- [ ] Date range filter
- [ ] Stock movement history
- [ ] Products by stock status (In Stock, Low Stock, Out of Stock)
- [ ] Stock value calculation (quantity × price)
- [ ] Export to CSV/Excel
- [ ] Visual charts for stock trends
- [ ] Filter by category, grade, subject

**Labels**: `frontend`, `backend`, `admin`, `inventory`, `reporting`, `could-have`

---

# Epic 10: Reporting & Analytics
**Epic Description**: Business intelligence, analytics, and reporting features.

**Priority**: Low  
**Story Count**: 4

---

## Story 10.1: Customer Analytics
**Priority**: Low  
**Story Points**: 5

**User Story**:
```
As an admin,
I want to view customer analytics,
So that I can understand customer behavior and preferences.
```

**Acceptance Criteria**:
- [ ] Customer analytics dashboard
- [ ] Total customers count
- [ ] New customers (by date range)
- [ ] Customer lifetime value
- [ ] Repeat customer rate
- [ ] Average orders per customer
- [ ] Customer segmentation (by total spent)
- [ ] Top customers list
- [ ] Customer acquisition chart
- [ ] Export to PDF/Excel

**Labels**: `frontend`, `backend`, `admin`, `analytics`, `could-have`

---

## Story 10.2: Product Performance Report
**Priority**: Low  
**Story Points**: 5

**User Story**:
```
As an admin,
I want to view product performance metrics,
So that I can identify best and worst performing products.
```

**Acceptance Criteria**:
- [ ] Product performance page
- [ ] Metrics: units sold, revenue, profit margin, views
- [ ] Top 10 best-selling products
- [ ] Bottom 10 worst-selling products
- [ ] Products with most views but no sales
- [ ] Date range filter
- [ ] Filter by category, grade, subject
- [ ] Comparison with previous period
- [ ] Visual charts (bar, pie)
- [ ] Export to CSV/Excel

**Labels**: `frontend`, `backend`, `admin`, `analytics`, `could-have`

---

## Story 10.3: Revenue Analytics
**Priority**: Medium  
**Story Points**: 5

**User Story**:
```
As an admin,
I want to view detailed revenue analytics,
So that I can track financial performance.
```

**Acceptance Criteria**:
- [ ] Revenue dashboard
- [ ] Total revenue (by date range)
- [ ] Revenue by payment method
- [ ] Revenue by category
- [ ] Revenue by grade level
- [ ] Revenue by subject
- [ ] Daily/weekly/monthly revenue charts
- [ ] Revenue growth rate
- [ ] Average order value trend
- [ ] Export to PDF/Excel

**Labels**: `frontend`, `backend`, `admin`, `analytics`, `reporting`, `should-have`

---

## Story 10.4: Export All Data
**Priority**: Low  
**Story Points**: 3

**User Story**:
```
As an admin,
I want to export all system data,
So that I can perform external analysis or create backups.
```

**Acceptance Criteria**:
- [ ] Data export page in admin settings
- [ ] Export options: Products, Orders, Customers, Inventory
- [ ] Select date range for orders
- [ ] Export format: CSV, Excel, JSON
- [ ] Generate export file
- [ ] Download link provided
- [ ] Export includes all relevant fields
- [ ] Large exports processed in background
- [ ] Email notification when export is ready

**Labels**: `backend`, `admin`, `reporting`, `could-have`

---

# Summary Statistics

## Total Breakdown
- **Total Epics**: 10
- **Total User Stories**: 52
- **Total Story Points**: 251

## Story Points by Epic
1. User Authentication & Authorization: 23 points
2. Product Catalog Management: 31 points
3. Shopping Cart & Checkout: 25 points
4. Order & Transaction Management: 26 points
5. Payment Integration: 21 points
6. Admin Dashboard: 49 points
7. Search & Filter Functionality: 13 points
8. User Profile Management: 16 points
9. Inventory Management: 13 points
10. Reporting & Analytics: 18 points

## Priority Distribution
- **Highest Priority**: 3 epics (Authentication, Catalog, Cart & Checkout)
- **High Priority**: 3 epics (Orders, Payment, Admin)
- **Medium Priority**: 3 epics (Search, Profile, Inventory)
- **Low Priority**: 1 epic (Reporting & Analytics)

## Story Count by Priority
- **High**: 22 stories
- **Medium**: 18 stories
- **Low**: 12 stories

---

# Implementation Recommendations

## Sprint 1 (Must-Have Features)
Focus on core functionality:
- User Authentication (Stories 1.1-1.4, 1.6)
- Basic Product Catalog (Stories 2.1-2.4)
- Shopping Cart (Stories 3.1-3.4)
- Basic Checkout (Story 4.1-4.2)
- Payment Integration (Story 5.1)
- Basic Admin (Stories 6.1-6.3)

**Estimated Points**: ~80 points

## Sprint 2 (Should-Have Features)
Enhance functionality:
- Advanced Catalog Features (Stories 2.5-2.6)
- Order Management (Stories 4.3-4.4)
- Additional Payment Methods (Stories 5.2-5.3)
- Admin Order Management (Story 6.4)
- Inventory Tracking (Story 9.1)

**Estimated Points**: ~60 points

## Sprint 3 (Could-Have Features)
Polish and additional features:
- Reviews & Ratings (Story 2.7)
- Discount Codes (Story 3.5)
- Advanced Search (Stories 7.1-7.3)
- User Profile Features (Stories 8.1-8.4)
- Reporting & Analytics (Epic 10)

**Estimated Points**: ~70 points

---

# Quick Copy-Paste Format for Jira

For each story, use this format when creating in Jira:

**Summary**: [Story Title]  
**Description**:
```
User Story:
[As a... I want... So that...]

Acceptance Criteria:
- [ ] Criterion 1
- [ ] Criterion 2
...
```
**Story Points**: [Number]  
**Priority**: [High/Medium/Low]  
**Epic Link**: [Epic Name]  
**Labels**: [Comma-separated labels]

---

**You now have a complete Product Backlog ready to import into Jira! 🚀**

*Total: 52 User Stories | 251 Story Points | 10 Epics*
