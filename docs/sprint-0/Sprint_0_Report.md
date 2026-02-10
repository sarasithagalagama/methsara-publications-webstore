
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
Methsara Publications currently operates using traditional manual methods for book sales and inventory tracking. This reliance on physical storefront interactions limits the business's reach to local customers and creates delays in order fulfillment. Stakeholders, including the store owners and loyal readers, suffer from a lack of real-time stock visibility and the inability to browse or purchase publications outside of standard business hours. This manual approach is operationally inefficient, causing stock discrepancies and significant customer friction due to the need for physical store visits. Consequently, transitioning to a digital platform is a strategic necessity to eliminate these barriers and secure the publisher's market position against increasingly digital competitors.

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
| **Teachers** | Secondary | Recommend materials, interested in bulk ordering. |
| **School Administrators** | Secondary | Bulk purchases for libraries. |
| **Tuition Center Owners** | Secondary | Wholesale purchases for students. |
| **System Administrators** | Secondary | Manage and maintain platform. |
| **Customer Support Staff** | Secondary | Handle inquiries and issues. |
| **Marketing Team** | Secondary | Run campaigns and promotions. |
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
| E1 | E1.1 | As a Customer, I want to register with email verification, so that I can access features. | Customer |
| E1 | E1.2 | As a User, I want to login securely, so that my account is safe. | User |
| E1 | E1.3 | As a Customer, I want to manage my profile and addresses, so that info is current. | Customer |
| E1 | E1.4 | As an Admin, I want to manage staff accounts and roles, so that employees have access. | Admin |
| E1 | E1.5 | As a System, I want to enforce RBAC, so that users access only authorized features. | System |
| E1 | E1.6 | As an Admin, I want to view customer accounts, so that I can provide support. | Admin |
| E1 | E1.7 | As an Admin, I want to track login history, so that I can monitor security. | Admin |
| E2 | E2.1 | As an Admin or Product Mgr, I want to manage products, so that the catalog is accurate. | Admin / Product Mgr |
| E2 | E2.2 | As an Admin or Product Mgr, I want to edit product details, so that information is updated. | Admin / Product Mgr |
| E2 | E2.3 | As an Admin or Product Mgr, I want to manage categories, so that products are organized. | Admin / Product Mgr |
| E2 | E2.4 | As a Customer, I want to search and filter products, so that I find items quickly. | Customer |
| E2 | E2.5 | As a Customer, I want to view product details, so that I can decide to buy. | Customer |
| E2 | E2.6 | As a Customer, I want to review products, so that I share my experience. | Customer |
| E2 | E2.7 | As a Customer, I want to see related products, so that I might find other useful items. | Customer |
| E2 | E2.8 | As a Customer, I want to review products I bought, so that I can share my opinion. | Customer |
| E2 | E2.9 | As an Admin or Product Mgr, I want to moderate reviews, so that inappropriate content is removed. | Admin / Product Mgr |
| E3 | E3.1 | As a Customer, I want to manage my cart, so that I can review items. | Customer |
| E3 | E3.2 | As a Customer, I want to checkout securely, so that I complete my purchase. | Customer |
| E3 | E3.3 | As an Admin, I want to manage orders, so that I can fulfill them. | Admin |
| E3 | E3.4 | As a Customer, I want to view order history, so that I track deliveries. | Customer |
| E3 | E3.5 | As a Supervisor, I want to view financial reports, so that I track revenue. | Supervisor |
| E4 | E4.1 | As an Inventory Mgr, I want to manage suppliers, so that I maintain vendor data. | Inventory Mgr |
| E4 | E4.2 | As an Inventory Mgr, I want to manage POs, so that I restock inventory. | Inventory Mgr |
| E5 | E5.1 | As an Inventory Mgr, I want to track multi-location stock, so that I know availability. | Inventory Mgr |
| E5 | E5.2 | As an Inventory Mgr, I want to adjust stock levels, so that records are accurate. | Inventory Mgr |
| E5 | E5.3 | As an Inventory Mgr, I want to transfer stock, so that I balance inventory. | Inventory Mgr |
| E5 | E5.4 | As an Inventory Mgr, I want low stock alerts, so that I reorder in time. | Inventory Mgr |
| E5 | E5.5 | As an Admin, I want to manage locations, so that I can assign managers. | Admin |
| E6 | E6.1 | As a Marketing Mgr, I want to manage coupons, so that I run promotions. | Marketing Mgr |

| E6 | E6.4 | As a Marketing Mgr, I want to run campaigns, so that I track performance. | Marketing Mgr |


### 6. Initial Product Backlog

**Prioritize user stories based on value:**

| User Story ID | Remarks | Estimated story points | Estimated hours | Priority (High / Medium / Low) |
|---|---|---|---|---|
| E1.1 | Registration | 5 | 16 | Highest |
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
    *   **Focus:** Customer self-registration, staff account management (Inventory Managers, Payment Manager, Supplier Manager, Marketing Team), authentication, and role-based access control.
    *   **Goal:** Secure access with clear separation between customer and staff accounts.
    *   **Security:** Authentication endpoints must be secure (JWT/Session).
    *   **Data Protection:** Sensitive user data (passwords) must be hashed/encrypted.
    *   **Validation:** Input validation implemented on both client and server sides.

### 8. Sprint 1 Preview

**Sprint Goal:** deliver a "Vertical Slice" of the application, establishing the core foundation and implementing key features across **all** 6 Epics (User Management, Catalog, Orders, Suppliers, Inventory, and Promotions).

**Planned Work (Targeting ~50% of each Epic):**

*   **Epic 1: User & Role Management Component (3/6 Stories)**
    *   **E1.1:** User Registration (Student, Teacher, Parent)
    *   **E1.2:** User Login (Secure Authentication)
    *   **E1.5:** Role-Based Access Control (Admin vs. Customer)

*   **Epic 2: Product Catalog Component (5/8 Stories)**
    *   **E2.1:** Browse Product Categories
    *   **E2.2:** Filter by Grade
    *   **E2.3:** Filter by Subject
    *   **E2.5:** Search Functionality
    *   **E2.7:** Filter by Exam

*   **Epic 3: Order & Transaction Component (7/13 Stories)**
    *   **E3.1:** Add Items to Cart
    *   **E3.2:** View Shopping Cart
    *   **E3.3:** Update Cart Quantities
    *   **E3.4:** Remove Items from Cart
    *   **E3.6:** Checkout via Bank Slip/COD
    *   **E3.8:** Order Confirmation
    *   **E3.9:** View Order History

*   **Epic 4: Supplier Management Component (1/2 Stories)**
    *   **E4.1:** Manage Suppliers

*   **Epic 5: Inventory Management Component (2/3 Stories)**
    *   **E5.1:** Track Stock Levels
    *   **E5.3:** Stock Adjustment

*   **Epic 6: Promotion & Loyalty Component (2/4 Stories)**
    *   **E6.1:** Create Discount Coupons
    *   **E6.2:** Manage Coupon Rules

**Team Utilization:**

All team members will be actively developing features for their respective Epics to meet this aggressive Sprint 1 goal. Parallel technical preparation will continue for the remaining complex features scheduled for Sprint 2.
