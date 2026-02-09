
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
| **E1** | **User & Admin Component:** Registration, login, role-based access control (RBAC), and security features. |
| **E2** | **Product Catalog Component:** Book listings, grade/exam filtering (O/L, A/L), advanced search, and product details. |
| **E3** | **Order & Transaction Component:** Shopping cart management, checkout process, payment options (Bank Receipt Upload, Cash on Delivery), and order tracking. |
| **E4** | **Supplier Management Component:** Management of supplier information and purchase orders for restocking. |
| **E5** | **Inventory Management Component:** Real-time stock tracking, low stock alerts, and inventory adjustments. |
| **E6** | **Promotion & Loyalty Component:** Coupon codes, discount campaigns, and customer loyalty rewards system. |

### 5. User Stories

**Identify all possible user stories for the Epics identified in above section:**

| Epic ID | User Story ID | User Story | Stakeholder |
|---|---|---|---|
| E1 | E1.1 | As a new customer, I want to create an account, so that I can track orders. | Customer |
| E1 | E1.2 | As a registered customer, I want to log in, so that I can access my history. | Customer |
| E1 | E1.3 | As a customer, I want to reset my password, so that I can regain access. | Customer |
| E1 | E1.4 | As a logged-in user, I want to log out, so that I can secure my account. | Customer |
| E1 | E1.5 | As an admin, I want role-based access, so that I can control system access. | Admin |
| E1 | E1.6 | As a user, I want to update my profile, so that my details are current. | User |
| E2 | E2.1 | As a teacher, I want to browse by category, so that I find relevant resources. | Teacher |
| E2 | E2.2 | As a parent, I want to filter by grade, so that I find appropriate materials. | Parent |
| E2 | E2.3 | As a student, I want to filter by subject, so that I find specific items. | Student |
| E2 | E2.4 | As a customer, I want to view product details, so that I make informed choices. | Customer |
| E2 | E2.5 | As a customer, I want to search for books, so that I find them quickly. | Customer |
| E2 | E2.6 | As a customer, I want to sort products, so that I find the best match. | Customer |
| E2 | E2.7 | As a student, I want to filter by exam type, so that I prep for O/L or A/L. | Student |
| E2 | E2.8 | As a customer, I want to read reviews, so that I see others' feedback. | Customer |
| E3 | E3.1 | As a customer, I want to add items to cart, so that I can buy them. | Customer |
| E3 | E3.2 | As a customer, I want to view my cart, so that I can review items. | Customer |
| E3 | E3.3 | As a customer, I want to update quantities, so that I get the right amount. | Customer |
| E3 | E3.4 | As a customer, I want to remove items, so that I don't buy unwanted items. | Customer |
| E3 | E3.5 | As a customer, I want to apply coupons, so that I get a discount. | Customer |
| E3 | E3.6 | As a customer, I want to checkout via Bank Slip/COD, so that I receive my order. | Customer |
| E3 | E3.7 | As a guest, I want to checkout without account, so that I buy quickly. | Guest |
| E3 | E3.8 | As a customer, I want order confirmation, so that I have proof of purchase.| Customer |
| E3 | E3.9 | As a customer, I want to view order history, so that I track purchases. | Customer |
| E3 | E3.10 | As a customer, I want to track status, so that I know delivery time. | Customer |
| E3 | E3.11 | As a customer, I want to cancel orders, so that I stop unwanted shipments.| Customer |
| E3 | E3.12 | As a customer, I want an invoice, so that I have payment proof. | Customer |
| E3 | E3.13 | As an admin, I want to manage orders, so that I can fulfill them. | Admin |
| E4 | E4.1 | As an admin, I want to manage suppliers, so that I can contact them. | Admin |
| E4 | E4.2 | As an admin, I want to create purchase orders, so that I can restock. | Admin |
| E5 | E5.1 | As an admin, I want to track stock, so that I know availability. | Admin |
| E5 | E5.2 | As an admin, I want low stock alerts, so that I can reorder in time. | Admin |
| E5 | E5.3 | As an admin, I want to update stock levels, so that inventory is accurate.| Admin |
| E6 | E6.1 | As an admin, I want to create coupons, so that I run promotions. | Admin |
| E6 | E6.2 | As an admin, I want to manage user rules, so that I control usage. | Admin |
| E6 | E6.3 | As an admin, I want to view coupon reports, so that I measure success. | Admin |
| E6 | E6.4 | As a customer, I want to buy gift vouchers, so that I can gift them. | Customer |


### 6. Initial Product Backlog

**Prioritize user stories based on value:**

| User Story ID | Remarks | Estimated story points | Estimated hours | Priority (High / Medium / Low) |
|---|---|---|---|---|
| E1.1 | Registration | 5 | 16 | High |
| E1.2 | Login | 3 | 8 | High |
| E1.5 | RBAC | 5 | 16 | High |
| E2.1 | Browse Category| 5 | 16 | High |
| E2.2 | Filter Grade | 5 | 16 | High |
| E2.3 | Filter Subject | 3 | 8 | High |
| E2.4 | Product Details| 5 | 16 | High |
| E2.5 | Search | 5 | 16 | High |
| E2.7 | Filter Exam | 3 | 8 | High |
| E3.1 | Add to Cart | 5 | 16 | High |
| E3.2 | View Cart | 5 | 16 | High |
| E3.6 | Checkout (Bank/COD) | 8 | 24 | High |
| E3.8 | Confirmation | 3 | 8 | High |
| E3.13 | Admin Orders | 8 | 24 | High |
| E5.1 | Track Stock | 5 | 16 | High |
| E1.3 | Password Reset | 5 | 16 | Medium |
| E1.4 | Logout | 2 | 4 | Medium |
| E1.6 | Profile | 3 | 8 | Medium |
| E2.6 | Sort | 3 | 8 | Medium |
| E3.3 | Update Cart | 3 | 8 | Medium |
| E3.4 | Remove Item | 2 | 4 | Medium |
| E3.7 | Guest Check. | 5 | 16 | Medium |
| E3.9 | Order History | 5 | 16 | Medium |
| E3.10 | Track Order | 5 | 16 | Medium |
| E3.12 | Invoice | 5 | 16 | Medium |
| E4.1 | Manage Supp. | 5 | 16 | Medium |
| E4.2 | Purch. Orders | 8 | 24 | Medium |
| E5.2 | Stock Alerts | 3 | 8 | Medium |
| E5.3 | Update Stock | 3 | 8 | Medium |
| E6.1 | Create Coupon | 5 | 16 | Medium |
| E6.2 | Coupon Rules | 3 | 8 | Medium |
| E2.8 | Reviews | 8 | 24 | Low |
| E3.5 | Discounts | 5 | 16 | Low |
| E3.11 | Cancel Order | 5 | 16 | Low |
| E6.3 | View Reports | 5 | 16 | Low |
| E6.4 | Gift Vouchers | 8 | 24 | Low |


*Note: Some user stories were renumbered to align with the correct Epic structure.*

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

**Epic-Specific DoD (Epic 1: User & Admin Component)**

*   [ ] **Security:** Authentication endpoints must be secure (JWT/Session).
*   [ ] **Data Protection:** Sensitive user data (passwords) must be hashed/encrypted.
*   [ ] **Validation:** Input validation implemented on both client and server sides.

### 8. Sprint 1 Preview

**Sprint Goal:** Establish the core system foundation by implementing secure User Authentication and the Product Catalog.

**Planned Work:**

*   **Epic 1: User & Admin Component (**High Priority**)**
    *   **E1.1:** User Registration (Student, Teacher, Parent)
    *   **E1.2:** User Login (Secure Authentication)
    *   **E1.5:** Role-Based Access Control (Admin vs. Customer)

*   **Epic 2: Product Catalog Component (**High Priority**)**
    *   **E2.1:** Browse Product Categories
    *   **E2.2:** Filter by Grade
    *   **E2.3:** Filter by Subject
    *   **E2.4:** View Product Details
    *   **E2.5:** Search Functionality
    *   **E2.7:** Filter by Exam

**(Team Utilization & Parallel Preparation)**

While the core development team focuses on Epics 1 & 2, other members will prepare the technical foundation for upcoming complex features to ensure a smooth workflow in subsequent sprints.

*   **Primary Development (Active Coding):**
    *   **E1 (User & Admin):** Registration & Login (Galagama S.T)
    *   **E2 (Product Catalog):** Browsing & Search (Appuhami H A P L)

*   **Parallel Technical Preparation (Design & Schema):**
    *   **E3 (Orders):** Database schema for Cart/Orders (Jayasinghe D.B.P)
    *   **E4 (Suppliers):** Supplier research & API planning (Gawrawa G H Y)
    *   **E5 (Inventory):** Stock tracking logic design (Bandara N W C D)
    *   **E6 (Promotions):** Coupon system architecture (Perera M.U.E)
