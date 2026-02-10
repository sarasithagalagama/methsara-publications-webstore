
Sri Lanka Institute of Information Technology

**Title of the Project:** Methsara Publications Webstore

**Sprint 0**
**Information Systems Project 2026**

**Group ID:** ISP_G05

**Submitted by:**

1. IT24100548 – Galagama S.T
2. IT24101314 – Appuhami H A P L
3. IT24100191 – Jayasinghe D.B.P
4. IT24100799 – Gawrawa G H Y
5. IT24100264 – Bandara N W C D
6. IT24101266 – Perera M.U.E

**Submitted to:**

(Supervisor’s signature)
…………………………..

**Name of the supervisor:** [Insert Supervisor Name]

**Date of submission:** [Insert Date]

**Team Members:**

| Student ID | Student Name | Role (Product Owner / Scrum Master / Team Member) |
|---|---|---|
| IT24100548 | Galagama S.T | Team Member (Dev - Epic 1) |
| IT24101314 | Appuhami H A P L | Team Member (Dev - Epic 2) |
| IT24100191 | Jayasinghe D.B.P | Team Member (Dev - Epic 3) |
| IT24100799 | Gawrawa G H Y | Scrum Master & Dev (Epic 4) |
| IT24100264 | Bandara N W C D | Team Member (Dev - Epic 5) |
| IT24101266 | Perera M.U.E | Team Member (Dev - Epic 6) |
| - | Methsara Publications | Product Owner |

---

### 1. Problem Identification

**Problem Statement:**

Methsara Publications currently operates using traditional manual methods for book sales and inventory tracking. This reliance on physical storefront interactions limits the business's reach to local customers and creates delays in order fulfillment. Stakeholders, including the store owners and loyal readers, suffer from a lack of real-time stock visibility and the inability to browse or purchase publications outside of standard business hours. 

Crucially, the lack of a centralized system for managing inventory across multiple branches (Main, Balangoda, Kottawa) leads to significant stock discrepancies and inefficient manual transfers. Manual procurement processes further complicate operations, making it difficult to coordinate with suppliers and restock popular items in a timely manner. Consequently, transitioning to a digital platform is a strategic necessity to eliminate these barriers, unify branch operations, and secure the publisher's market position.

**Why is this problem important?**
• **Limited Market Reach:** Without a digital presence, the publisher cannot reach the growing demographic of online book buyers.
• **Operational Errors:** Manual record-keeping leads to frequent errors in stock levels and order management during peak sales periods.

### 2. Stakeholder Identification

**List and categorize key stakeholders:**

| Stakeholder | Type (Primary / Secondary / Tertiary) | Interest / Concern |
|---|---|---|
| **Students (Grades 6-13)** | Primary | Need grade-specific materials for exam prep. |
| **Parents** | Primary | Purchase materials for children, concerned about quality and delivery. |
| **Methsara Publications** | Primary | Needs sales growth and efficient operations. |
| **Master Inventory Manager** | Primary | Oversees stock across all locations (Main, Balangoda, Kottawa). |
| **Teachers** | Secondary | Recommend materials, interested in bulk ordering. |
| **School Administrators** | Secondary | Bulk purchases for libraries. |
| **Tuition Center Owners** | Secondary | Wholesale purchases for students. |
| **Location-Specific Inventory Mgrs** | Secondary | Manage stock for specific branches (Main, Balangoda, Kottawa). |
| **Finance Manager** | Secondary | Handles financial reporting, invoices, and payments. |
| **Supplier Manager** | Secondary | Manages supplier profiles and Purchase Orders. |
| **Product Manager** | Secondary | Manages product catalog, categories, and reviews. |
| **Marketing Manager** | Secondary | Creates coupons, vouchers, and runs campaigns. |
| **System Administrator** | Secondary | Manages users, roles, settings, and security. |
| **Delivery Partners** | Tertiary | Handle logistics. |
| **Payment Gateway Providers** | Tertiary | Process transactions. |
| **Suppliers/Printers** | Tertiary | Supply books to publisher. |

### 3. Product Vision Statement

**Vision:**
To create Sri Lanka’s most student-centric digital bookstore, empowering learners with instant access to quality educational resources through a seamless, secure, and user-friendly online platform.

**Template Structure:**
For **Students, Parents, and Teachers**,
Who **need reliable access to educational publications**,
The product **Methsara Publications Webstore**
Provides **a seamless, secure, and 24/7 accessible online platform for purchasing books and resources.**

### 4. Epics

**Identify at least 6 Epics:**

| Epic ID | Epic Description |
|---|---|
| **E1** | **User & Admin Management Component:** Customer self-registration with email verification, staff account management with location-specific assignments, authentication & session management (no MFA), role-based access control, profile management. |
| **E2** | **Product Catalog Component:** Product CRUD, category management, advanced search & filtering, product display & sorting, reviews & ratings management. |
| **E3** | **Order & Transaction Component:** Shopping cart management, checkout process, payment options (Bank Receipt, COD), order tracking, and financial reporting. |
| **E4** | **Supplier Management Component:** Supplier CRUD with verification, Purchase Order (PO) management with status tracking, and supplier performance tracking. |
| **E5** | **Inventory Management Component:** Multi-location stock tracking (Main, Balangoda, Kottawa), transfers with approval workflow, stock CRUD, and low stock alerts. |
| **E6** | **Promotion & Loyalty Component:** Coupon CRUD, campaign management, loyalty program operations (points only), and gift voucher management. |

### 5. User Stories

**Identify all possible user stories for the Epics identified in above section:**

| Epic ID | User Story ID | User Story | Stakeholder |
|---|---|---|---|
| E1 | E1.1 | As a Customer, I want to self-register with email verification, so that I can create a verified account. | Customer |
| E1 | E1.2 | As a Customer, I want to login securely, so that I can access my personalized account. | Customer |
| E1 | E1.3 | As a Customer, I want to manage my profile (name, address, phone), so that my details are up to date for orders. | Customer |
| E1 | E1.4 | As a System Administrator, I want to create Master Inventory Manager accounts, so that they can oversee all location stock. | System Administrator |
| E1 | E1.4.1 | As a System Administrator, I want to create Location-Specific Inventory Manager accounts, so that they can manage their specific branch. | System Administrator |
| E1 | E1.4.2 | As a System Administrator, I want to create Finance Manager accounts, so that they can handle financial reporting and invoices. | System Administrator |
| E1 | E1.4.3 | As a System Administrator, I want to create Supplier Manager accounts, so that they can manage procurement and vendors. | System Administrator |
| E1 | E1.4.4 | As a System Administrator, I want to create Marketing Team accounts, so that they can manage campaigns and coupons. | System Administrator |
| E1 | E1.4.5 | As a System Administrator, I want to create Product Manager accounts, so that they can manage the catalog and categories. | System Administrator |
| E1 | E1.4.6 | As a System Administrator, I want to create System Administrator accounts, so that they can manage system-wide settings and security. | System Administrator |
| E1 | E1.4.7 | As a System Administrator, I want to update staff account details and roles, so that employee information remains accurate. | System Administrator |
| E1 | E1.5 | As a System Administrator, I want to assign staff to specific locations, so that inventory managers only access their branch data. | System Administrator |
| E1 | E1.6 | As a System, I want to enforce Role-Based Access Control (RBAC), so that users only access authorized features. | System |
| E1 | E1.7 | As a User, I want to reset my password via email, so that I can recover my account if I forget my credentials. | User |
| E1 | E1.8 | As a Staff Member, I want to be forced to change my password on first login, so that my account is secure. | Staff Member |
| E1 | E1.9 | As a System Administrator, I want to view and search all customer accounts, so that I can provide support. | System Administrator |
| E1 | E1.10 | As a System Administrator, I want to deactivate customer or staff accounts, so that I can prevent access for specific users. | System Administrator |
| E1 | E1.11 | As a System Administrator, I want to view login history and security logs, so that I can monitor for suspicious activity. | System Administrator |
| E1 | E1.12 | As a Customer, I want to manage multiple delivery addresses, so that I can choose where to receive my orders. | Customer |
| E1 | E1.13 | As a Customer, I want to view and logout from active sessions, so that I can secure my account. | Customer |
| E2 | E2.1 | As a Product Manager, I want to create and update products, so that the catalog is accurate and complete. | Product Manager |
| E2 | E2.2 | As a Product Manager, I want to upload multiple product images, so that customers can see what they are buying. | Product Manager |
| E2 | E2.3 | As a Product Manager, I want to manage categories (Grade, Subject, Exam), so that products are organized logically. | Product Manager |
| E2 | E2.4 | As a Customer, I want to search for products by name or SKU, so that I can find specific items quickly. | Customer |
| E2 | E2.5 | As a Customer, I want to filter products by Grade, Subject, and Price, so that I can narrow down my choices. | Customer |
| E2 | E2.6 | As a Customer, I want to view detailed product information, so that I can make informed purchase decisions. | Customer |
| E2 | E2.7 | As a Customer, I want to sort products by price, popularity, and newest, so that I can find the best options. | Customer |
| E2 | E2.8 | As a Customer, I want to submit reviews and ratings, so that I can share my feedback. | Customer |
| E2 | E2.9 | As a Product Manager, I want to moderate reviews, so that I can remove inappropriate content. | Product Manager |
| E2 | E2.10 | As a Customer, I want to see "Related Products", so that I can discover similar items. | Customer |
| E2 | E2.11 | As a Product Manager, I want to view product analytics (e.g., best sellers), so that I can understand sales trends. | Product Manager |
| E2 | E2.12 | As a Customer, I want to mark reviews as helpful, so that useful feedback is highlighted. | Customer |
| E2 | E2.13 | As a Customer, I want to view my recently viewed products, so that I can easily find items I looked at. | Customer |
| E3 | E3.1 | As a Customer, I want to add items to my shopping cart, so that I can purchase them later. | Customer |
| E3 | E3.2 | As a Customer, I want to view and update my cart, so that I can adjust quantities before checkout. | Customer |
| E3 | E3.3 | As a Customer, I want to checkout using Cash on Delivery (COD), so that I can pay when I receive the order. | Customer |
| E3 | E3.4 | As a Customer, I want to checkout by uploading a Bank Transfer Slip, so that I can pay via bank transfer. | Customer |
| E3 | E3.5 | As a Guest, I want to checkout without an account, so that I can buy quickly. | Guest |
| E3 | E3.6 | As a Customer, I want to view my order history, so that I can track past purchases. | Customer |
| E3 | E3.7 | As a Customer, I want to track my order status, so that I know when it will arrive. | Customer |
| E3 | E3.8 | As a System Administrator, I want to update order status (e.g., Shipped, Delivered), so that customers are informed. | System Administrator |
| E3 | E3.9 | As a Finance Manager, I want to view a financial dashboard, so that I can see real-time revenue. | Finance Manager |
| E3 | E3.10 | As a Finance Manager, I want to generate invoices, so that I can provide proof of purchase. | Finance Manager |
| E3 | E3.11 | As a Finance Manager, I want to process customer refunds, so that I can handle returned orders. | Finance Manager |
| E3 | E3.12 | As a System, I want to apply discounts from coupons, so that the total price reflects promotions. | System |
| E3 | E3.13 | As a Finance Manager, I want to manage staff salaries and payments, so that employees are paid on time. | Finance Manager |
| E3 | E3.14 | As a Finance Manager, I want to process supplier invoices and payments, so that we maintain good vendor relationships. | Finance Manager |
| E4 | E4.1 | As a Supplier Manager, I want to create and update supplier profiles, so that I have accurate contact info. | Supplier Manager |
| E4 | E4.2 | As a Supplier Manager, I want to create Purchase Orders (POs), so that I can restock inventory. | Supplier Manager |
| E4 | E4.3 | As a Supplier Manager, I want to track PO status, so that I know when stock is arriving. | Supplier Manager |
| E4 | E4.4 | As a Supplier Manager, I want to email POs to suppliers, so that they receive the order details. | Supplier Manager |
| E4 | E4.5 | As a Supplier Manager, I want to link products to suppliers, so that reordering is easier. | Supplier Manager |
| E4 | E4.6 | As a Supplier Manager, I want to manage payment terms, so that I track credit limits and schedules. | Supplier Manager |
| E4 | E4.7 | As a Supplier Manager, I want to verify deliveries against POs, so that I ensure we received what we ordered. | Supplier Manager |
| E5 | E5.1 | As a Location-Specific Inventory Manager, I want to view real-time stock levels for my location, so that I know what is available. | Location-Specific Inventory Manager |
| E5 | E5.2 | As a Master Inventory Manager, I want to view stock across ALL locations, so that I have a holistic view. | Master Inventory Manager |
| E5 | E5.3 | As a Location-Specific Inventory Manager, I want to manually adjust stock (damage/loss), so that records align with reality. | Location-Specific Inventory Manager |
| E5 | E5.4 | As a Location-Specific Inventory Manager, I want to request a stock transfer from another branch, so that I can fulfill local demand. | Location-Specific Inventory Manager |
| E5 | E5.5 | As a Location-Specific Inventory Manager, I want to approve incoming transfer requests, so that I control stock leaving my branch. | Location-Specific Inventory Manager |
| E5 | E5.6 | As a Location-Specific Inventory Manager, I want to receive stock from a Purchase Order, so that inventory counts increase. | Location-Specific Inventory Manager |
| E5 | E5.7 | As a System Administrator, I want to manage warehouse/branch locations, so that I can expand the business. | System Administrator |
| E5 | E5.8 | As a System, I want to automatically deduct stock on order placement, so that inventory is always current. | System |
| E5 | E5.9 | As a Location-Specific Inventory Manager, I want to receive low stock alerts, so that I can reorder before running out. | Location-Specific Inventory Manager |
| E5 | E5.10 | As a Location-Specific Inventory Manager, I want to generate stock movement and valuation reports, so that I can analyze branch performance. | Location-Specific Inventory Manager |
| E6 | E6.1 | As a Marketing Manager, I want to create discount coupons with rules, so that I can run sales. | Marketing Manager |
| E6 | E6.2 | As a Marketing Manager, I want to set coupon validity dates, so that promotions are time-bound. | Marketing Manager |
| E6 | E6.3 | As a Marketing Manager, I want to track coupon usage, so that I can measure campaign success. | Marketing Manager |
| E6 | E6.4 | As a Marketing Manager, I want to create and sell Gift Vouchers, so that customers can give them as gifts. | Marketing Manager |
| E6 | E6.5 | As a Marketing Manager, I want to run seasonal campaigns, so that I can boost sales during specific periods. | Marketing Manager |
| E6 | E6.6 | As a System, I want to validate coupons at checkout, so that only eligible discounts are applied. | System |
| E6 | E6.7 | As a Marketing Manager, I want to set usage limits for coupons, so that they are not abused. | Marketing Manager |


### 6. Initial Product Backlog

**Prioritize user stories based on value:**

| User Story ID | Remarks | Estimated story points | Estimated hours | Priority (High / Medium / Low) |
|---|---|---|---|---|
| E1.1 | Registration | 5 | 16 | Highest |
| E1.2 | Login | 3 | 8 | Highest |
| E1.4 | Create Staff (Master Inv) | 3 | 8 | Highest |
| E1.4.1 | Create Staff (Loc Inv) | 3 | 8 | High |
| E1.4.6 | Create Staff (Sys Admin) | 3 | 8 | Highest |
| E1.5 | Assign Locations | 3 | 8 | High |
| E1.6 | Enforce RBAC | 8 | 24 | Highest |
| E2.1 | Manage Products | 5 | 16 | Highest |
| E2.3 | Manage Categories | 5 | 16 | High |
| E2.4 | Search | 5 | 16 | Highest |
| E2.6 | Product Details | 5 | 16 | Highest |
| E3.1 | Add to Cart | 3 | 8 | Highest |
| E3.2 | Manage Cart | 3 | 8 | Highest |
| E3.3 | Checkout COD | 3 | 8 | Highest |
| E3.4 | Checkout Bank Slip | 5 | 16 | Highest |
| E3.7 | Track Order | 3 | 8 | Highest |
| E3.8 | Update Order Status | 3 | 8 | High |
| E3.12 | Apply Coupons (System) | 5 | 16 | High |
| E4.1 | Manage Suppliers | 3 | 8 | High |
| E4.2 | Create PO | 8 | 24 | High |
| E4.3 | Track PO | 5 | 16 | High |
| E4.7 | Verify Delivery | 5 | 16 | High |
| E5.1 | View Stock (Loc) | 5 | 16 | Highest |
| E5.2 | View Stock (Master) | 5 | 16 | Highest |
| E5.3 | Adjust Stock | 3 | 8 | High |
| E5.6 | Receive Stock (PO) | 5 | 16 | Highest |
| E5.8 | Auto Deduct Stock | 5 | 16 | Highest |
| E6.1 | Create Coupons | 5 | 16 | High |
| E6.6 | Validate Coupons | 5 | 16 | High |
| E1.3 | Manage Profile | 3 | 8 | High |
| E1.13 | Session Mgmt | 5 | 16 | Medium |
| E2.2 | Product Images | 3 | 8 | High |
| E2.5 | Filter Products | 5 | 16 | High |
| E2.7 | Sort Products | 3 | 8 | Medium |
| E2.8 | Submit Reviews | 3 | 8 | Medium |
| E3.5 | Guest Checkout | 5 | 16 | Medium |
| E3.6 | Order History | 3 | 8 | Medium |
| E3.9 | Finance Dashboard | 5 | 16 | Medium |
| E3.10 | Invoices | 3 | 8 | Medium |
| E3.13 | Staff Salaries | 5 | 16 | Medium |
| E3.14 | Supplier Payments | 5 | 16 | Medium |
| E4.4 | Email PO | 3 | 8 | Medium |
| E4.5 | Link Products | 3 | 8 | Medium |
| E5.4 | Request Transfer | 5 | 16 | Medium |
| E5.5 | Approve Transfer | 3 | 8 | Medium |
| E5.9 | Low Stock Alerts | 3 | 8 | Medium |
| E6.2 | Coupon Validity | 2 | 4 | Medium |
| E6.3 | Track Usage | 3 | 8 | Medium |
| E6.7 | Usage Limits | 3 | 8 | Medium |
| E1.7 | Reset Password | 5 | 16 | Medium |
| E1.8 | Force Pwd Change | 3 | 8 | Medium |
| E1.9 | Search Customers | 3 | 8 | Medium |
| E1.10 | Deactivate Accts | 2 | 4 | Medium |
| E1.11 | Security Logs | 3 | 8 | Low |
| E1.12 | Delivery Addresses | 5 | 16 | Medium |
| E2.9 | Moderate Reviews | 3 | 8 | Low |
| E2.10 | Related Products | 5 | 16 | Low |
| E2.11 | Product Analytics | 3 | 8 | Low |
| E2.12 | Helpful Reviews | 2 | 4 | Low |
| E2.13 | Recently Viewed | 3 | 8 | Low |
| E3.11 | Refunds | 5 | 16 | Low |
| E4.6 | Payment Terms | 2 | 4 | Low |
| E5.7 | Manage Locations | 3 | 8 | Low |
| E5.10 | Stock Reports | 5 | 16 | Low |
| E6.4 | Gift Vouchers | 5 | 16 | Low |
| E6.5 | Campaigns | 5 | 16 | Low |
| E1.2 | Login | 3 | 8 | Highest |
| E1.8 | RBAC | 8 | 24 | Highest |
| E2.4 | Search | 5 | 16 | Highest |
| E2.6 | Product Details | 5 | 16 | Highest |
| E3.1 | Add to Cart | 3 | 8 | Highest |
| E3.2 | Manage Cart | 3 | 8 | Highest |
| E3.3 | Checkout Address | 3 | 8 | Highest |
| E3.4 | Checkout Payment | 8 | 24 | Highest |
| E5.1 | View Stock | 5 | 16 | Highest |
| E1.3 | Forgot Password | 3 | 8 | High |
| E1.5 | Delivery Addresses | 5 | 16 | High |
| E1.6 | Manage Staff | 5 | 16 | High |
| E1.7 | Assign Roles | 5 | 16 | Highest |
| E1.10 | Security Logs | 3 | 8 | High |
| E2.1 | Create Product | 5 | 16 | High |
| E2.2 | Update Product | 3 | 8 | High |
| E2.5 | Filter Products | 5 | 16 | High |
| E3.5 | Order Confirm | 3 | 8 | High |
| E3.7 | Admin Orders | 5 | 16 | High |
| E3.8 | Update Order Status | 3 | 8 | High |
| E3.10 | Sales Dashboard | 5 | 16 | High |
| E4.3 | Create PO | 8 | 24 | High |
| E4.4 | Receive PO | 5 | 16 | High |
| E5.2 | Adjust Stock | 3 | 8 | High |
| E5.3 | Request Transfer | 5 | 16 | High |
| E5.4 | Approve Transfer | 5 | 16 | High |
| E6.2 | Validate Coupons | 3 | 8 | High |
| E1.4 | Manage Profile | 3 | 8 | Medium |
| E1.9 | View Customers | 3 | 8 | Medium |
| E2.3 | Manage Categories | 5 | 16 | Medium |
| E3.6 | Guest Checkout | 5 | 16 | Medium |
| E3.9 | Order History | 3 | 8 | Medium |
| E3.11 | Financial Reports | 5 | 16 | Medium |
| E4.1 | Add Supplier | 3 | 8 | Medium |
| E4.2 | Verify Supplier | 3 | 8 | Medium |
| E5.5 | Low Stock Alerts | 3 | 8 | Medium |
| E5.6 | Manage Locations | 3 | 8 | Medium |
| E6.1 | Create Coupons | 5 | 16 | Medium |

| E2.7 | Recommendations | 5 | 16 | Low |
| E2.8 | Write Review | 3 | 8 | Low |
| E2.9 | Moderate Reviews | 3 | 8 | Low |
| E6.5 | Create Vouchers | 3 | 8 | Low |
| E6.6 | Redeem Vouchers | 3 | 8 | Low |
| E6.7 | Campaigns | 5 | 16 | Low |

### 7. Definition of Done (DoD)

**General Definition of Done (DoD)**

For any User Story or Epic to be considered "Done," the following criteria must be met:

*   [ ] **Code Quality:** Code is written, follows project standards, and passes linting checks.
*   [ ] **Testing:** Unit tests cover critical paths (>80% coverage) and pass successfully.
*   [ ] **Review:** Code is committed, pushed, and approved via Pull Request (PR) by at least one peer.
*   [ ] **Verification:** Feature functionality is manually verified in the staging environment against acceptance criteria.
*   [ ] **Acceptance Criteria:** All specific acceptance criteria for the user story are fully met.
*   [ ] **No Bugs:** No critical or high-severity bugs remain open related to the feature.
*   [ ] **Documentation:** Relevant documentation (API docs, user guides) is updated if applicable.

**Epic-Specific DoD**
*   **Epic 1: User & Admin Management Component**
    *   **Focus:** Secure authentication, RBAC, and strict separation of customer/staff data.
    *   **Criteria:** All endpoints protected by role checks (e.g., only Admin can create staff). Passwords hashed. Email verification functional.

*   **Epic 2: Product Catalog Component**
    *   **Focus:** Accurate product display and efficient search.
    *   **Criteria:** Proper image optimization (loading speed <2s). Search returns relevant results within 500ms. Filtering correctly narrows down results.

*   **Epic 3: Order & Transaction Component**
    *   **Focus:** Transaction integrity and accurate calculations.
    *   **Criteria:** Cart totals (including discounts) are 100% accurate. Orders cannot be modified after "Fulfilling" state. Bank Slip uploads are securely stored.

*   **Epic 4: Supplier Management Component**
    *   **Focus:** Supplier data accuracy and PO lifecycle.
    *   **Criteria:** POs correctly link to Suppliers and Products. Email notifications for POs are sent. Delivery verification updates PO status to "Received".

*   **Epic 5: Inventory Management Component**
    *   **Focus:** Real-time stock accuracy across locations.
    *   **Criteria:** Stock deduction is atomic (prevents overselling). Stock transfers require source deduction and destination addition only upon approval. Low stock alerts trigger at defined thresholds.

*   **Epic 6: Promotion & Loyalty Component**
    *   **Focus:** Correct application of discounts and rules.
    *   **Criteria:** Coupons validated against date, min spend, and usage limits. Expired coupons are rejected. Discount calculations are precise to 2 decimal places.

### 8. Sprint 1 Preview

**Sprint Goal:** deliver a "Vertical Slice" of the application, establishing the core foundation and implementing key features across **all** 6 Epics (User Management, Catalog, Orders, Suppliers, Inventory, and Promotions).

**Planned Work (Targeting ~50% of each Epic):**

*   **Epic 1: User & Role Management Component (3/6 Stories)**
    *   **E1.1:** Self-Register with Email Verification
    *   **E1.2:** Login Securely
    *   **E1.6:** Enforce Role-Based Access Control (RBAC)

*   **Epic 2: Product Catalog Component (5/8 Stories)**
    *   **E2.1:** Create and Update Products (Admin)
    *   **E2.3:** Manage Categories (Admin)
    *   **E2.4:** Search for Products (Customer)
    *   **E2.5:** Filter Products by Grade/Subject (Customer)
    *   **E2.6:** View Detailed Product Information (Customer)

*   **Epic 3: Order & Transaction Component (7/13 Stories)**
    *   **E3.1:** Add Items to Shopping Cart
    *   **E3.2:** View and Update Cart
    *   **E3.3:** Checkout using Cash on Delivery (COD)
    *   **E3.4:** Checkout by Uploading Bank Transfer Slip
    *   **E3.7:** Track Order Status
    *   **E3.8:** Update Order Status (Admin)
    *   **E3.12:** Apply Discounts from Coupons

*   **Epic 4: Supplier Management Component (1/2 Stories)**
    *   **E4.1:** Create and Update Supplier Profiles

*   **Epic 5: Inventory Management Component (2/3 Stories)**
    *   **E5.1:** View Real-Time Stock Levels (Location-Based)
    *   **E5.8:** Automatically Deduct Stock on Order

*   **Epic 6: Promotion & Loyalty Component (2/4 Stories)**
    *   **E6.1:** Create Discount Coupons with Rules
    *   **E6.6:** Validate Coupons at Checkout

**Team Utilization:**

All team members will be actively developing features for their respective Epics to meet this aggressive Sprint 1 goal. Parallel technical preparation will continue for the remaining complex features scheduled for Sprint 2.
