# Requirements Engineering Assignment 1 & 2

**Sri Lanka Institute of Information Technology**

---

## Cover Page

**Project Title:** Methsara Publications Webstore

**Group ID:** ISP_G05

**Course:** Requirements Engineering

**Assignment:** Assignment 1 & 2 - Requirements Analysis and Specification

**Submitted by:**

| Student ID | Student Name |
|------------|--------------|
| IT24100548 | Galagama S.T |
| IT24101314 | Appuhami H A P L |
| IT24100191 | Jayasinghe D.B.P |
| IT24100799 | Gawrawa G H Y |
| IT24100264 | Bandara N W C D |
| IT24101266 | Perera M.U.E |

**Date of Submission:** [Insert Date]

**Classification:** Public-SLIIT

---

## 1. Introduction

### 1.1 Project Domain

Methsara Publications is an established educational publishing company in Sri Lanka that specializes in producing high-quality study materials for students in grades 6-13. The company currently operates through three physical locations: Main Branch (headquarters), Balangoda Branch, and Kottawa Branch. Their product catalog includes textbooks, revision guides, past papers, and exam preparation materials aligned with the Sri Lankan national curriculum.

### 1.2 Organization Background

The organization has been serving the educational community for several years, building a strong reputation among students, parents, and teachers. However, their current business model relies heavily on traditional brick-and-mortar operations, limiting their market reach and operational efficiency.

### 1.3 Existing Problems

**Operational Challenges:**
- **Manual Inventory Management:** Stock tracking across three branches is done manually, leading to frequent discrepancies and inefficient stock transfers
- **Limited Market Reach:** Physical storefront operations restrict customer access to business hours and geographical proximity
- **Procurement Inefficiencies:** Manual purchase order processes create coordination challenges with suppliers and delays in restocking
- **No Real-time Visibility:** Store owners and managers lack real-time insights into stock levels, sales performance, and financial metrics
- **Customer Inconvenience:** Students and parents cannot browse or purchase materials outside business hours or from remote locations

**Business Impact:**
- Lost sales opportunities due to limited accessibility
- Operational errors from manual record-keeping during peak exam seasons
- Inability to compete with online educational resource providers
- Difficulty in scaling operations to new locations
- Poor customer experience compared to modern e-commerce standards

### 1.4 Proposed Solution

The Methsara Publications Webstore is a comprehensive e-commerce platform designed to digitally transform the business operations. The system will provide 24/7 online access for customers, unified multi-location inventory management, automated procurement workflows, and data-driven business insights. This digital transformation will enable the company to expand its market reach, improve operational efficiency, and deliver a superior customer experience.

---

## 2. Requirements Elicitation

### 2.1 Elicitation Techniques Used

Our team employed multiple requirements elicitation techniques to gather comprehensive information about the system requirements:

#### 2.1.1 Stakeholder Interviews

**Approach:**
We conducted structured interviews with key stakeholders including:
- **Business Owner (Methsara Publications):** To understand business goals, current pain points, and strategic vision
- **Inventory Managers:** To identify stock management challenges across multiple locations
- **Customers (Students, Parents, Teachers):** To understand purchasing behaviors, preferences, and pain points
- **Finance Personnel:** To capture financial reporting and payment processing requirements

**Key Insights Gathered:**
- Critical need for multi-location inventory visibility and transfer capabilities
- Customer preference for multiple payment options (COD and bank transfer)
- Requirement for role-based access control with location-specific permissions
- Need for automated stock deduction and low-stock alerts
- Importance of product categorization by Grade, Subject, and Exam type

#### 2.1.2 Document Analysis

**Documents Reviewed:**
- Current manual inventory ledgers and stock cards
- Sample purchase orders and supplier invoices
- Customer order forms and receipts
- Product catalogs and pricing lists
- Existing business process workflows

**Findings:**
- Identified existing product categorization scheme
- Understood current order fulfillment workflow
- Discovered payment term structures with suppliers
- Analyzed stock movement patterns between branches

#### 2.1.3 Observation

**Activities Observed:**
- Customer purchasing behavior at physical stores
- Inventory counting and stock transfer processes
- Order processing and payment collection
- Product search and selection by customers

**Observations:**
- Customers often search by grade level and subject
- Peak demand periods during exam seasons
- Frequent stock-outs of popular items at suburban branches
- Time-consuming manual stock verification processes

#### 2.1.4 Workshops and Brainstorming Sessions

**Participants:** Development team, business owner, and key operational staff

**Topics Covered:**
- System feature prioritization
- User role definitions and permissions
- Workflow automation opportunities
- Integration requirements with existing processes

**Outcomes:**
- Defined 6 core system components (Epics)
- Established priority levels for features
- Identified critical vs. nice-to-have functionalities
- Created initial product backlog

### 2.2 Assumptions Made

Based on our elicitation activities, we made the following assumptions:

1. **Technical Assumptions:**
   - Users have access to internet-connected devices (computers, smartphones, tablets)
   - Basic digital literacy among staff members
   - Reliable internet connectivity at all branch locations
   - Email infrastructure is available for notifications

2. **Business Assumptions:**
   - Current supplier relationships will continue
   - Product catalog structure (Grade/Subject/Exam) will remain stable
   - Three-location structure will be maintained initially
   - Cash on Delivery and Bank Transfer are sufficient payment methods for launch

3. **Operational Assumptions:**
   - Staff will receive training on the new system
   - Existing inventory data can be migrated to the new system
   - Business processes can be adapted to digital workflows
   - Customers are willing to adopt online purchasing

---

## 3. List of Stakeholders

### 3.1 Stakeholder Identification and Categorization

| Stakeholder | Type | Interest / Concern | Influence Level |
|-------------|------|-------------------|-----------------|
| **Students (Grades 6-13)** | Primary | Need grade-specific materials for exam preparation; concerned about product availability, pricing, and delivery speed | High |
| **Parents** | Primary | Purchase materials for children; concerned about product quality, pricing, secure payments, and timely delivery | High |
| **Teachers** | Primary | Recommend materials to students; interested in bulk ordering capabilities and product quality | Medium |
| **Methsara Publications (Business Owner)** | Primary | Needs sales growth, operational efficiency, and market expansion; concerned about ROI and system reliability | Very High |
| **Master Inventory Manager** | Primary | Oversees stock across all locations; needs holistic visibility and transfer management capabilities | High |
| **Location-Specific Inventory Managers** | Secondary | Manage stock for specific branches (Main, Balangoda, Kottawa); need location-specific access and alerts | High |
| **Finance Manager** | Secondary | Handles financial reporting, invoices, payments, and refunds; needs accurate financial data and reporting tools | High |
| **Supplier Manager** | Secondary | Manages supplier relationships and Purchase Orders; needs efficient procurement workflows | Medium |
| **Product Manager** | Secondary | Manages product catalog, categories, and reviews; needs easy product management tools | Medium |
| **Marketing Manager** | Secondary | Creates promotions, coupons, and campaigns; needs campaign management and analytics tools | Medium |
| **System Administrator** | Secondary | Manages users, roles, settings, and security; needs comprehensive admin controls | High |
| **School Administrators** | Secondary | Make bulk purchases for school libraries; interested in institutional pricing and bulk ordering | Medium |
| **Tuition Center Owners** | Secondary | Wholesale purchases for students; interested in volume discounts and regular supply | Medium |
| **Delivery Partners** | Tertiary | Handle logistics and last-mile delivery; concerned about order information accuracy and delivery addresses | Low |
| **Payment Gateway Providers** | Tertiary | Process online transactions; concerned about integration standards and security | Low |
| **Suppliers/Printers** | Tertiary | Supply books to publisher; concerned about timely payments and clear purchase orders | Medium |
| **IT Support Team** | Tertiary | Maintain system infrastructure; concerned about system maintainability and documentation | Medium |

---

## 4. Functional Requirements (FR)

### FR1: User & Admin Management

| ID | Requirement | Priority | Stakeholder |
|----|-------------|----------|-------------|
| FR1.1 | The system shall allow customers to self-register with email verification | High | Students, Parents, Teachers |
| FR1.2 | The system shall provide secure login functionality with session management | High | All Users |
| FR1.3 | The system shall allow customers to manage their profiles (name, address, phone, preferences) | High | Students, Parents, Teachers |
| FR1.4 | The system shall allow System Administrators to create staff accounts with assigned roles (Master Inventory Manager, Location-Specific Inventory Managers, Finance Manager, Supplier Manager, Marketing Manager, Product Manager, System Administrator) | High | System Administrator |
| FR1.5 | The system shall allow System Administrators to assign staff to specific locations | High | System Administrator |
| FR1.6 | The system shall enforce Role-Based Access Control (RBAC) to restrict feature access based on user roles | High | System Administrator |
| FR1.7 | The system shall provide password reset functionality via email | Medium | All Users |
| FR1.8 | The system shall force staff members to change their password on first login | Medium | Staff Members |
| FR1.9 | The system shall allow System Administrators to view and search all customer accounts | Medium | System Administrator |
| FR1.10 | The system shall allow System Administrators to deactivate customer or staff accounts | Medium | System Administrator |
| FR1.11 | The system shall maintain login history and security logs | Low | System Administrator |
| FR1.12 | The system shall allow customers to manage multiple delivery addresses | Medium | Students, Parents, Teachers |
| FR1.13 | The system shall allow customers to view and logout from active sessions | Medium | Students, Parents, Teachers |

### FR2: Product Catalog Management

| ID | Requirement | Priority | Stakeholder |
|----|-------------|----------|-------------|
| FR2.1 | The system shall allow Product Managers to create and update products with details (name, description, price, SKU, images, specifications) | High | Product Manager |
| FR2.2 | The system shall allow Product Managers to upload multiple images per product | High | Product Manager |
| FR2.3 | The system shall allow Product Managers to manage categories (Grade, Subject, Exam type) | High | Product Manager |
| FR2.4 | The system shall allow customers to search for products by name or SKU | High | Students, Parents, Teachers |
| FR2.5 | The system shall allow customers to filter products by Grade, Subject, and Price range | High | Students, Parents, Teachers |
| FR2.6 | The system shall display detailed product information including images, descriptions, and pricing | High | Students, Parents, Teachers |
| FR2.7 | The system shall allow customers to sort products by price, popularity, and newest arrivals | Medium | Students, Parents, Teachers |
| FR2.8 | The system shall allow customers to submit reviews and ratings (1-5 stars) | Medium | Students, Parents, Teachers |
| FR2.9 | The system shall allow Product Managers to moderate and remove inappropriate reviews | Low | Product Manager |
| FR2.10 | The system shall display related products based on category and purchase history | Low | Students, Parents, Teachers |
| FR2.11 | The system shall provide product analytics (best sellers, rating distributions) | Low | Product Manager |
| FR2.12 | The system shall allow customers to mark reviews as helpful | Low | Students, Parents, Teachers |
| FR2.13 | The system shall track and display recently viewed products for customers | Low | Students, Parents, Teachers |

### FR3: Order & Transaction Management

| ID | Requirement | Priority | Stakeholder |
|----|-------------|----------|-------------|
| FR3.1 | The system shall allow customers to add items to a shopping cart | High | Students, Parents, Teachers |
| FR3.2 | The system shall allow customers to view and update cart contents (quantities, remove items) | High | Students, Parents, Teachers |
| FR3.3 | The system shall support Cash on Delivery (COD) payment method | High | Students, Parents, Teachers |
| FR3.4 | The system shall allow customers to upload bank transfer slips as payment proof | High | Students, Parents, Teachers |
| FR3.5 | The system shall support guest checkout without account creation | Medium | Students, Parents, Teachers |
| FR3.6 | The system shall allow customers to view their order history | Medium | Students, Parents, Teachers |
| FR3.7 | The system shall allow customers to track order status (Pending, Processing, Shipped, Delivered) | High | Students, Parents, Teachers |
| FR3.8 | The system shall allow System Administrators to update order status | High | System Administrator |
| FR3.9 | The system shall provide a financial dashboard showing real-time revenue and transaction data | Medium | Finance Manager |
| FR3.10 | The system shall generate invoices for completed orders | Medium | Finance Manager |
| FR3.11 | The system shall allow Finance Managers to process customer refunds | Low | Finance Manager |
| FR3.12 | The system shall automatically apply valid coupon discounts at checkout | High | Students, Parents, Teachers |
| FR3.13 | The system shall allow Finance Managers to manage staff salary payments | Medium | Finance Manager |
| FR3.14 | The system shall allow Finance Managers to process supplier invoices and payments | Medium | Finance Manager |

### FR4: Supplier Management

| ID | Requirement | Priority | Stakeholder |
|----|-------------|----------|-------------|
| FR4.1 | The system shall allow Supplier Managers to create and update supplier profiles (name, contact, email, address, payment terms) | High | Supplier Manager |
| FR4.2 | The system shall allow Supplier Managers to create Purchase Orders (POs) with product selection and quantities | High | Supplier Manager |
| FR4.3 | The system shall allow Supplier Managers to track PO status (Draft, Sent, Confirmed, In Transit, Received, Cancelled) | High | Supplier Manager |
| FR4.4 | The system shall allow Supplier Managers to email POs to suppliers | Medium | Supplier Manager |
| FR4.5 | The system shall allow Supplier Managers to link products to suppliers with pricing information | Medium | Supplier Manager |
| FR4.6 | The system shall allow Supplier Managers to manage payment terms and credit limits | Low | Supplier Manager |
| FR4.7 | The system shall allow Supplier Managers to verify deliveries against POs | High | Supplier Manager |

### FR5: Inventory Management

| ID | Requirement | Priority | Stakeholder |
|----|-------------|----------|-------------|
| FR5.1 | The system shall allow Location-Specific Inventory Managers to view real-time stock levels for their assigned location | High | Location-Specific Inventory Managers |
| FR5.2 | The system shall allow Master Inventory Manager to view stock across ALL locations | High | Master Inventory Manager |
| FR5.3 | The system shall allow Location-Specific Inventory Managers to manually adjust stock (damage, loss, found items) | High | Location-Specific Inventory Managers |
| FR5.4 | The system shall allow Location-Specific Inventory Managers to request stock transfers from other branches | Medium | Location-Specific Inventory Managers |
| FR5.5 | The system shall allow Location-Specific Inventory Managers to approve incoming transfer requests | Medium | Location-Specific Inventory Managers |
| FR5.6 | The system shall allow Location-Specific Inventory Managers to receive stock from Purchase Orders | High | Location-Specific Inventory Managers |
| FR5.7 | The system shall allow System Administrators to manage warehouse/branch locations | Low | System Administrator |
| FR5.8 | The system shall automatically deduct stock from the appropriate location when an order is placed | High | System |
| FR5.9 | The system shall send low stock alerts to Location-Specific Inventory Managers when stock falls below defined thresholds | Medium | Location-Specific Inventory Managers |
| FR5.10 | The system shall allow Location-Specific Inventory Managers to generate stock movement and valuation reports | Low | Location-Specific Inventory Managers |

### FR6: Promotion & Loyalty Management

| ID | Requirement | Priority | Stakeholder |
|----|-------------|----------|-------------|
| FR6.1 | The system shall allow Marketing Managers to create discount coupons with rules (percentage/fixed amount, minimum purchase, usage limits) | High | Marketing Manager |
| FR6.2 | The system shall allow Marketing Managers to set coupon validity dates | Medium | Marketing Manager |
| FR6.3 | The system shall allow Marketing Managers to track coupon usage and redemption rates | Medium | Marketing Manager |
| FR6.4 | The system shall allow Marketing Managers to create and sell gift vouchers | Low | Marketing Manager |
| FR6.5 | The system shall allow Marketing Managers to create seasonal campaigns | Low | Marketing Manager |
| FR6.6 | The system shall validate coupons at checkout (date, minimum spend, usage limits) | High | System |
| FR6.7 | The system shall allow Marketing Managers to set usage limits for coupons (per user, total uses) | Medium | Marketing Manager |

---

## 5. Non-Functional Requirements (NFR)

### NFR1: Performance Requirements

| ID | Requirement | Priority | Measurement Criteria |
|----|-------------|----------|---------------------|
| NFR1.1 | The system shall load product search results within 500 milliseconds | High | Response time < 500ms for 95% of search queries |
| NFR1.2 | The system shall support at least 500 concurrent users without performance degradation | High | System maintains response times under load testing |
| NFR1.3 | Product images shall load within 2 seconds | Medium | Image load time < 2s for 90% of requests |
| NFR1.4 | The system shall process checkout transactions within 3 seconds | High | Transaction completion time < 3s |

### NFR2: Security Requirements

| ID | Requirement | Priority | Measurement Criteria |
|----|-------------|----------|---------------------|
| NFR2.1 | All user passwords shall be hashed using industry-standard algorithms (bcrypt, Argon2) | High | 100% of passwords stored as hashes |
| NFR2.2 | The system shall enforce HTTPS for all communications | High | All endpoints use SSL/TLS encryption |
| NFR2.3 | The system shall implement session timeout after 30 minutes of inactivity | Medium | Sessions expire after 30 min idle time |
| NFR2.4 | The system shall lock user accounts after 5 consecutive failed login attempts | Medium | Account lockout triggers at 5 failures |
| NFR2.5 | The system shall maintain audit logs for all critical operations (user creation, stock adjustments, order modifications) | High | 100% of critical operations logged |
| NFR2.6 | Uploaded bank transfer slips shall be stored securely with access restricted to authorized personnel | High | File access controlled by RBAC |

### NFR3: Usability Requirements

| ID | Requirement | Priority | Measurement Criteria |
|----|-------------|----------|---------------------|
| NFR3.1 | The system shall be accessible on desktop, tablet, and mobile devices (responsive design) | High | UI adapts to screen sizes 320px-1920px |
| NFR3.2 | The system interface shall be available in English and Sinhala | Medium | Language toggle functionality |
| NFR3.3 | New users shall be able to complete a purchase within 5 minutes without training | Medium | User testing shows 80% success rate |
| NFR3.4 | The system shall provide clear error messages and validation feedback | High | All errors include actionable guidance |

### NFR4: Reliability Requirements

| ID | Requirement | Priority | Measurement Criteria |
|----|-------------|----------|---------------------|
| NFR4.1 | The system shall have 99.5% uptime during business hours (6 AM - 10 PM) | High | Monthly uptime ≥ 99.5% |
| NFR4.2 | The system shall perform automated daily backups of all data | High | Backup completion logs show 100% success |
| NFR4.3 | The system shall recover from failures within 1 hour | Medium | Mean Time To Recovery (MTTR) < 1 hour |

### NFR5: Scalability Requirements

| ID | Requirement | Priority | Measurement Criteria |
|----|-------------|----------|---------------------|
| NFR5.1 | The system architecture shall support addition of new branch locations without code changes | Medium | New locations configurable via admin panel |
| NFR5.2 | The system shall handle a 200% increase in product catalog size without performance degradation | Medium | Performance maintained with 3x current catalog |

### NFR6: Maintainability Requirements

| ID | Requirement | Priority | Measurement Criteria |
|----|-------------|----------|---------------------|
| NFR6.1 | The system code shall follow industry-standard coding conventions and be well-documented | High | Code review compliance ≥ 90% |
| NFR6.2 | The system shall provide comprehensive API documentation | High | All endpoints documented with examples |
| NFR6.3 | The system shall have modular architecture with clear component boundaries | High | Components follow defined responsibilities |

### NFR7: Compliance Requirements

| ID | Requirement | Priority | Measurement Criteria |
|----|-------------|----------|---------------------|
| NFR7.1 | The system shall comply with Sri Lankan data protection regulations | High | Legal review confirms compliance |
| NFR7.2 | The system shall maintain financial records for audit purposes (minimum 7 years) | High | Records retention policy enforced |

---

## 6. Constraints

### 6.1 Technical Constraints

| ID | Constraint | Impact |
|----|------------|--------|
| C1 | The system must be web-based and accessible via standard browsers (Chrome, Firefox, Safari, Edge) | Limits technology choices to web-compatible frameworks |
| C2 | The system must integrate with existing email infrastructure for notifications | Requires email server configuration and SMTP integration |
| C3 | The system must support only Cash on Delivery and Bank Transfer payment methods (no credit card integration initially) | Limits payment processing complexity but may affect customer convenience |
| C4 | The system must be deployable on cloud infrastructure (AWS, Azure, or Google Cloud) | Requires cloud-compatible architecture and deployment scripts |

### 6.2 Business Constraints

| ID | Constraint | Impact |
|----|------------|--------|
| C5 | The system must be developed within a 16-week timeframe (4 sprints of 4 weeks each) | Requires careful prioritization and scope management |
| C6 | The system must support three initial locations (Main, Balangoda, Kottawa) | Defines initial data model and access control requirements |
| C7 | The system must maintain compatibility with existing product categorization (Grade, Subject, Exam) | Constrains catalog structure and migration approach |

### 6.3 Regulatory Constraints

| ID | Constraint | Impact |
|----|------------|--------|
| C8 | The system must comply with Sri Lankan tax regulations for e-commerce | Requires tax calculation and reporting features |
| C9 | The system must maintain customer data privacy in accordance with local regulations | Requires data protection measures and privacy policy |

---

## 7. Acceptance Criteria

### AC1: User Registration (FR1.1)

**Given** a new customer wants to create an account  
**When** they provide valid registration details (name, email, password, phone)  
**Then** the system shall:
- Create a new customer account in inactive status
- Send an email verification link to the provided email address
- Display a message instructing the user to check their email
- Activate the account when the user clicks the verification link
- Redirect to login page after successful verification

**Validation:**
- Email format validation (valid email structure)
- Password strength validation (minimum 8 characters, at least one uppercase, one lowercase, one number)
- Phone number format validation (Sri Lankan format)
- Duplicate email detection (reject if email already exists)

---

### AC2: Product Search (FR2.4)

**Given** a customer wants to find specific products  
**When** they enter a search query in the search box  
**Then** the system shall:
- Return all products matching the search term in name, description, or SKU
- Display results within 500 milliseconds
- Show product thumbnail, name, price, and availability status
- Highlight search terms in results
- Display "No results found" message if no matches exist
- Support partial matching (e.g., "math" matches "Mathematics")

**Validation:**
- Search handles special characters safely (no SQL injection)
- Search is case-insensitive
- Empty search returns all products
- Search results are paginated (20 items per page)

---

### AC3: Shopping Cart Management (FR3.1, FR3.2)

**Given** a customer wants to purchase products  
**When** they add items to the cart  
**Then** the system shall:
- Add the selected product with specified quantity to the cart
- Update cart total price in real-time
- Display cart item count in the header
- Persist cart contents for logged-in users across sessions
- Allow quantity updates (increase/decrease)
- Allow item removal from cart
- Validate stock availability before adding to cart
- Display warning if requested quantity exceeds available stock

**Validation:**
- Cart cannot contain negative quantities
- Cart total calculation is accurate (including any applicable discounts)
- Cart persists for logged-in users even after logout/login
- Guest cart persists during the session only

---

### AC4: Inventory Stock Deduction (FR5.8)

**Given** a customer completes an order  
**When** the order is confirmed  
**Then** the system shall:
- Automatically deduct ordered quantities from the appropriate location's stock
- Update stock levels in real-time
- Prevent order confirmation if insufficient stock exists
- Log the stock movement with order reference, timestamp, and user
- Trigger low stock alert if stock falls below threshold after deduction
- Ensure atomic transaction (order creation and stock deduction succeed or fail together)

**Validation:**
- Stock cannot go negative
- Concurrent orders for the same product handle stock correctly (no overselling)
- Stock deduction is reversible if order is cancelled
- Stock movement audit trail is complete and accurate

---

## 8. Use Case Diagrams and Scenarios

### 8.1 High-Level Use Case Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                  Methsara Publications Webstore                     │
└─────────────────────────────────────────────────────────────────────┘

    Customer                    System Admin              Inventory Manager
       │                              │                          │
       │                              │                          │
       ├─── Register Account          │                          │
       ├─── Login                     ├─── Manage Staff          │
       ├─── Browse Products           ├─── Manage Roles          │
       ├─── Search Products           ├─── View Security Logs    │
       ├─── Add to Cart               │                          │
       ├─── Checkout (COD/Bank)       │                          ├─── View Stock Levels
       ├─── Track Order               │                          ├─── Adjust Stock
       ├─── Submit Review             │                          ├─── Request Transfer
       └─── Manage Profile            │                          ├─── Approve Transfer
                                      │                          └─── Receive PO Stock
    
    Product Manager          Marketing Manager           Finance Manager
       │                              │                          │
       │                              │                          │
       ├─── Create Products           ├─── Create Coupons        ├─── View Dashboard
       ├─── Manage Categories         ├─── Create Campaigns      ├─── Generate Invoices
       ├─── Upload Images             ├─── Track Usage           ├─── Process Refunds
       ├─── Moderate Reviews          └─── Create Vouchers       ├─── Manage Salaries
       └─── View Analytics                                       └─── Pay Suppliers

    Supplier Manager
       │
       ├─── Manage Suppliers
       ├─── Create Purchase Orders
       ├─── Track PO Status
       └─── Verify Deliveries
```

### 8.2 Detailed Use Case Scenarios

#### Scenario 1: Customer Registration and Email Verification
**Use Case ID:** UC-001  
**Actor:** Customer (Student/Parent/Teacher)  
**Preconditions:** User has internet access and valid email address  
**Trigger:** User clicks "Register" button on homepage

**Main Flow:**
1. User navigates to registration page
2. User enters personal details:
   - Full Name: "Kasun Perera"
   - Email: "kasun.perera@email.com"
   - Phone: "+94771234567"
   - Password: "SecurePass123"
   - Confirm Password: "SecurePass123"
3. User clicks "Register" button
4. System validates input data:
   - Email format is valid
   - Password meets strength requirements (8+ chars, uppercase, lowercase, number)
   - Phone number is valid Sri Lankan format
   - Email is not already registered
5. System creates account in "Inactive" status
6. System sends verification email to "kasun.perera@email.com" with unique verification link
7. System displays message: "Registration successful! Please check your email to verify your account."
8. User opens email and clicks verification link
9. System validates verification token
10. System activates account (status changes to "Active")
11. System displays: "Email verified successfully! You can now login."
12. User is redirected to login page

**Postconditions:** 
- New customer account exists in Active status
- User can login with credentials
- Welcome email is sent

**Alternative Flows:**
- **A1:** Email already exists → System displays "This email is already registered. Please login or use password reset."
- **A2:** Weak password → System displays "Password must be at least 8 characters with uppercase, lowercase, and numbers."
- **A3:** Verification link expired (>24 hours) → System displays "Verification link expired. Please request a new one."

---

#### Scenario 2: Product Search and Filtering by Grade and Subject
**Use Case ID:** UC-002  
**Actor:** Customer (Student)  
**Preconditions:** User is on the webstore homepage  
**Trigger:** User wants to find Mathematics books for Grade 10

**Main Flow:**
1. User enters "Mathematics" in the search box
2. System displays all products containing "Mathematics" (47 results found)
3. User applies filters:
   - Grade: "Grade 10"
   - Subject: "Mathematics"
4. System refines results to show only Grade 10 Mathematics products (12 results)
5. User sorts results by "Price: Low to High"
6. System reorders products in ascending price order
7. User clicks on "Grade 10 Mathematics Revision Guide - 2024"
8. System displays detailed product page with:
   - Product images (3 images available)
   - Description and specifications
   - Price: Rs. 850.00
   - Stock status: "In Stock (Main Branch: 45, Balangoda: 12, Kottawa: 8)"
   - Customer reviews (4.5 stars, 23 reviews)
   - Related products

**Postconditions:** 
- User has found desired product
- Product details are displayed accurately
- User can proceed to add to cart

**Alternative Flows:**
- **A1:** No results found → System displays "No products found matching your criteria. Try different filters."
- **A2:** Out of stock → System displays "Currently out of stock. Click 'Notify Me' to receive email when available."

---

#### Scenario 3: Complete Purchase with Cash on Delivery
**Use Case ID:** UC-003  
**Actor:** Customer (Parent)  
**Preconditions:** User is logged in and has items in cart  
**Trigger:** User clicks "Proceed to Checkout"

**Main Flow:**
1. User has 3 items in cart (Total: Rs. 2,450.00)
2. User clicks "Proceed to Checkout"
3. System displays checkout page with:
   - Order summary (3 items, subtotal Rs. 2,450.00)
   - Delivery address selection
   - Payment method selection
4. User selects delivery address: "No. 45, Galle Road, Colombo 03"
5. User selects payment method: "Cash on Delivery (COD)"
6. User enters coupon code: "EXAM2024" (10% discount)
7. System validates coupon:
   - Coupon is valid and active
   - Minimum purchase requirement met (Rs. 2,000)
   - Usage limit not exceeded
8. System applies discount: Rs. 245.00
9. System displays updated total:
   - Subtotal: Rs. 2,450.00
   - Discount (EXAM2024): -Rs. 245.00
   - Delivery Fee: Rs. 300.00
   - **Total: Rs. 2,505.00**
10. User clicks "Place Order"
11. System validates stock availability for all items
12. System creates order (Order ID: #MP-2024-00123)
13. System deducts stock from Main Branch inventory
14. System sends order confirmation email
15. System displays: "Order placed successfully! Order ID: #MP-2024-00123. You will pay Rs. 2,505.00 upon delivery."

**Postconditions:** 
- Order exists in "Pending" status
- Stock is deducted from inventory
- Customer receives confirmation email
- Order appears in customer's order history

**Alternative Flows:**
- **A1:** Item out of stock during checkout → System displays "Sorry, [Product Name] is no longer available. Please remove it from your cart."
- **A2:** Invalid coupon → System displays "Coupon code is invalid or expired."
- **A3:** Coupon minimum not met → System displays "Minimum purchase of Rs. 2,000 required for this coupon."

---

#### Scenario 4: Inter-Branch Stock Transfer Request and Approval
**Use Case ID:** UC-004  
**Actor:** Location-Specific Inventory Manager (Balangoda), Location-Specific Inventory Manager (Main Branch)  
**Preconditions:** Both managers are logged in with appropriate permissions  
**Trigger:** Balangoda branch is low on a popular product

**Main Flow:**
1. **Balangoda Inventory Manager** logs in and navigates to "Stock Levels"
2. Manager notices "Grade 11 Science Textbook" stock is low (3 units remaining, threshold: 10)
3. Manager receives low stock alert notification
4. Manager clicks "Request Transfer"
5. System displays transfer request form
6. Manager fills in details:
   - Product: "Grade 11 Science Textbook"
   - Quantity Requested: 20 units
   - From Location: "Main Branch" (has 65 units available)
   - To Location: "Balangoda Branch"
   - Reason: "Low stock - high demand period"
   - Priority: "High"
7. Manager clicks "Submit Request"
8. System creates transfer request (Transfer ID: #TR-2024-00045, Status: "Pending Approval")
9. System sends notification to Main Branch Inventory Manager
10. **Main Branch Inventory Manager** logs in and sees pending transfer request
11. Manager reviews request details and checks Main Branch stock (65 units available)
12. Manager clicks "Approve Transfer"
13. System updates transfer status to "Approved"
14. System deducts 20 units from Main Branch inventory (65 → 45)
15. System adds 20 units to Balangoda Branch inventory (3 → 23)
16. System logs stock movement with timestamp and user details
17. System sends confirmation notifications to both managers
18. System displays: "Transfer approved successfully. Stock updated."

**Postconditions:** 
- Transfer record exists with "Approved" status
- Stock levels updated at both locations
- Stock movement audit trail is complete
- Both managers receive confirmation

**Alternative Flows:**
- **A1:** Insufficient stock at source → System displays "Main Branch only has 15 units available. Please adjust quantity."
- **A2:** Manager rejects transfer → System updates status to "Rejected" and notifies requester with rejection reason
- **A3:** Transfer cancelled before approval → System restores original stock levels

---

#### Scenario 5: Create Purchase Order and Receive Stock
**Use Case ID:** UC-005  
**Actor:** Supplier Manager, Location-Specific Inventory Manager (Main Branch)  
**Preconditions:** Supplier Manager is logged in, supplier profiles exist  
**Trigger:** Need to restock popular items from supplier

**Main Flow:**
1. **Supplier Manager** logs in and navigates to "Purchase Orders"
2. Manager clicks "Create New PO"
3. System displays PO creation form
4. Manager selects supplier: "ABC Printers (Pvt) Ltd"
5. Manager adds products to PO:
   - Product 1: "Grade 10 Mathematics Textbook" - Quantity: 100, Unit Price: Rs. 450
   - Product 2: "Grade 10 Science Textbook" - Quantity: 80, Unit Price: Rs. 520
6. System calculates PO total: Rs. 86,600.00
7. Manager sets:
   - Expected Delivery Date: 2024-03-15
   - Delivery Location: "Main Branch"
   - Payment Terms: "Net 30"
   - Notes: "Urgent restock for exam season"
8. Manager clicks "Create PO"
9. System generates PO (PO ID: #PO-2024-00078, Status: "Draft")
10. Manager reviews PO and clicks "Send to Supplier"
11. System updates status to "Sent"
12. System sends PO via email to supplier (supplier@abcprinters.lk)
13. System displays: "PO sent successfully to ABC Printers"
14. [2 weeks later] Supplier delivers stock to Main Branch
15. **Main Branch Inventory Manager** logs in and navigates to "Receive Stock"
16. Manager selects PO #PO-2024-00078
17. Manager verifies delivered quantities:
   - Grade 10 Mathematics Textbook: 100 units ✓
   - Grade 10 Science Textbook: 80 units ✓
18. Manager clicks "Confirm Receipt"
19. System updates PO status to "Received"
20. System adds stock to Main Branch inventory:
   - Grade 10 Mathematics Textbook: +100 units
   - Grade 10 Science Textbook: +80 units
21. System logs stock receipt with PO reference
22. System notifies Supplier Manager and Finance Manager
23. System displays: "Stock received and inventory updated successfully"

**Postconditions:** 
- PO status is "Received"
- Stock levels increased at Main Branch
- Stock movement logged with PO reference
- Finance Manager notified for payment processing

**Alternative Flows:**
- **A1:** Partial delivery → Manager enters actual received quantities, system updates PO to "Partially Received"
- **A2:** Damaged goods → Manager adjusts quantity, adds notes about damage, system creates damage report
- **A3:** Delivery delayed → Manager updates expected delivery date, system sends notification to stakeholders

---

#### Scenario 6: Create and Apply Discount Coupon
**Use Case ID:** UC-006  
**Actor:** Marketing Manager, Customer  
**Preconditions:** Marketing Manager is logged in  
**Trigger:** Upcoming exam season promotional campaign

**Main Flow:**
1. **Marketing Manager** logs in and navigates to "Promotions"
2. Manager clicks "Create New Coupon"
3. System displays coupon creation form
4. Manager fills in details:
   - Coupon Code: "EXAM2024"
   - Discount Type: "Percentage"
   - Discount Value: 10%
   - Minimum Purchase: Rs. 2,000
   - Valid From: 2024-03-01
   - Valid Until: 2024-03-31
   - Usage Limit: 500 uses
   - Per User Limit: 1 use
   - Applicable Categories: "All"
   - Status: "Active"
5. Manager clicks "Create Coupon"
6. System validates coupon code is unique
7. System creates coupon and displays: "Coupon EXAM2024 created successfully"
8. [Later] **Customer** adds items worth Rs. 2,450 to cart
9. Customer proceeds to checkout
10. Customer enters coupon code "EXAM2024"
11. System validates coupon:
    - Code exists and is active ✓
    - Current date is within validity period ✓
    - Cart total meets minimum purchase (Rs. 2,450 ≥ Rs. 2,000) ✓
    - Customer has not used this coupon before ✓
    - Total usage limit not exceeded (45/500 uses) ✓
12. System applies 10% discount: Rs. 245.00
13. System displays updated total with discount breakdown
14. Customer completes order
15. System increments coupon usage count (45 → 46)
16. System records coupon usage in customer's history

**Postconditions:** 
- Coupon usage count incremented
- Discount applied to order
- Customer cannot reuse the same coupon
- Marketing Manager can track coupon performance

**Alternative Flows:**
- **A1:** Coupon expired → System displays "This coupon has expired"
- **A2:** Minimum purchase not met → System displays "Add Rs. X more to use this coupon (minimum Rs. 2,000)"
- **A3:** Already used by customer → System displays "You have already used this coupon"
- **A4:** Usage limit reached → System displays "This coupon is no longer available"

---

## 9. Additional Deliverables

The following sections are provided in separate documents for clarity and readability:

- **Section 9:** Strategic Dependency (SD) Diagram → See [Strategic_Dependency_Diagram.md](./Strategic_Dependency_Diagram.md)
- **Section 10:** Business Model Canvas → See [Business_Model_Canvas.md](./Business_Model_Canvas.md)
- **Section 11:** UML Use Case Diagram → See [UML_Use_Case_Diagram.md](./UML_Use_Case_Diagram.md)
- **Section 12:** Product Backlog Table → See [Product_Backlog_Table.md](./Product_Backlog_Table.md)
- **Section 13:** Burn-up Chart → See [Burn_Up_Chart.md](./Burn_Up_Chart.md)
- **Section 14:** Requirements Traceability Matrix (RTM) → See [Requirements_Traceability_Matrix.md](./Requirements_Traceability_Matrix.md)

---

## 10. References

### 10.1 Academic References

1. **Sommerville, I.** (2016). *Software Engineering* (10th ed.). Pearson Education Limited.
   - Used for: Requirements engineering principles, stakeholder analysis, and functional/non-functional requirements classification

2. **Pressman, R. S., & Maxim, B. R.** (2020). *Software Engineering: A Practitioner's Approach* (9th ed.). McGraw-Hill Education.
   - Used for: Requirements elicitation techniques, acceptance criteria formulation, and software project planning

3. **Pohl, K., & Rupp, C.** (2015). *Requirements Engineering Fundamentals* (2nd ed.). Rocky Nook.
   - Used for: Requirements traceability matrix structure and stakeholder identification methodology

4. **Cohn, M.** (2004). *User Stories Applied: For Agile Software Development*. Addison-Wesley Professional.
   - Used for: User story formulation, story point estimation, and product backlog prioritization

5. **Schwaber, K., & Sutherland, J.** (2020). *The Scrum Guide*. Scrum.org.
   - Used for: Sprint planning, burn-up chart methodology, and Agile estimation techniques

6. **Osterwalder, A., & Pigneur, Y.** (2010). *Business Model Generation*. John Wiley & Sons.
   - Used for: Business Model Canvas framework and value proposition design

7. **Yu, E. S. K.** (1997). "Towards Modelling and Reasoning Support for Early-Phase Requirements Engineering." *Proceedings of the 3rd IEEE International Symposium on Requirements Engineering*, pp. 226-235.
   - Used for: Strategic Dependency (i*) modeling framework

### 10.2 Industry Standards and Guidelines

8. **IEEE Std 830-1998**. *IEEE Recommended Practice for Software Requirements Specifications*. Institute of Electrical and Electronics Engineers.
   - Used for: Requirements specification structure and documentation standards

9. **ISO/IEC/IEEE 29148:2018**. *Systems and software engineering — Life cycle processes — Requirements engineering*. International Organization for Standardization.
   - Used for: Requirements engineering process and best practices

10. **BABOK® Guide v3** (2015). *A Guide to the Business Analysis Body of Knowledge*. International Institute of Business Analysis (IIBA).
    - Used for: Requirements elicitation techniques and stakeholder analysis

### 10.3 Tools and Resources

11. **Mermaid.js** (2024). *Mermaid - Diagramming and charting tool*. https://mermaid.js.org/
    - Used for: Creating UML use case diagrams, strategic dependency diagrams, and business model canvas visualizations

12. **PlantUML** (2024). *PlantUML - Open-source tool for creating UML diagrams*. https://plantuml.com/
    - Reference tool for UML diagram standards and notation

13. **Atlassian Agile Coach** (2024). *Agile project management resources*. https://www.atlassian.com/agile
    - Used for: Agile planning best practices, story point estimation guidelines, and burn-up chart examples

14. **Scrum.org** (2024). *Professional Scrum Resources*. https://www.scrum.org/resources
    - Used for: Sprint planning guidelines and product backlog management

### 10.4 Project-Specific Documentation

15. **Methsara Publications - Sprint 0 Report** (2026). Internal project documentation.
    - Source: `docs/sprint-0/Sprint_0_Report.md`
    - Used for: Project context, stakeholder identification, and initial requirements

16. **Methsara Publications - Complete Product Backlog** (2026). Internal project documentation.
    - Source: `docs/sprint-0/Complete_Product_Backlog.md`
    - Used for: User stories, story points, and epic definitions

17. **Methsara Publications - Component Responsibilities** (2026). Internal project documentation.
    - Source: `docs/planning/Component_Responsibilities.md`
    - Used for: System architecture, component boundaries, and functional requirements

### 10.5 Web Resources

18. **Sri Lanka E-Commerce Association** (2024). *E-commerce regulations and best practices in Sri Lanka*. https://www.sleca.lk/
    - Used for: Understanding local e-commerce compliance requirements

19. **Strategyzer** (2024). *Business Model Canvas resources*. https://www.strategyzer.com/
    - Used for: Business Model Canvas templates and examples

20. **Requirements Engineering Specialization Group (RESG)** (2024). *Requirements engineering best practices*. British Computer Society.
    - Used for: Requirements documentation standards and traceability guidelines

---

## 11. Group Members Contribution Table

| Student ID | Student Name | Contribution Areas | Page Numbers / Sections |
|------------|--------------|-------------------|------------------------|
| **IT24100548** | **Galagama S.T** | • Introduction and Project Domain (Section 1)<br/>• Stakeholder Identification (Section 3)<br/>• Functional Requirements - Epic 1 (FR1.1-FR1.13)<br/>• Use Case Scenario 1: Customer Registration<br/>• Strategic Dependency Diagram<br/>• Product Backlog - Epic 1 stories | Pages 1-4 (Introduction)<br/>Pages 5-6 (Stakeholders)<br/>Pages 7-8 (FR1)<br/>Pages 18-19 (Scenario 1)<br/>Strategic_Dependency_Diagram.md<br/>Product_Backlog_Table.md (E1 stories) |
| **IT24101314** | **Appuhami H A P L** | • Requirements Elicitation Techniques (Section 2)<br/>• Functional Requirements - Epic 2 (FR2.1-FR2.13)<br/>• Use Case Scenario 2: Product Search<br/>• UML Use Case Diagram<br/>• Product Backlog - Epic 2 stories | Pages 4-5 (Elicitation)<br/>Pages 8-9 (FR2)<br/>Pages 19-20 (Scenario 2)<br/>UML_Use_Case_Diagram.md<br/>Product_Backlog_Table.md (E2 stories) |
| **IT24100191** | **Jayasinghe D.B.P** | • Functional Requirements - Epic 3 (FR3.1-FR3.14)<br/>• Non-Functional Requirements (NFR1-NFR7)<br/>• Use Case Scenario 3: Complete Purchase<br/>• Business Model Canvas<br/>• Product Backlog - Epic 3 stories | Pages 9-10 (FR3)<br/>Pages 10-13 (NFR)<br/>Pages 20-21 (Scenario 3)<br/>Business_Model_Canvas.md<br/>Product_Backlog_Table.md (E3 stories) |
| **IT24100799** | **Gawrawa G H Y** | • Functional Requirements - Epic 4 (FR4.1-FR4.7)<br/>• Constraints (Section 6)<br/>• Use Case Scenario 4: Stock Transfer<br/>• Burn-up Chart and Sprint Planning<br/>• Product Backlog - Epic 4 stories | Pages 10 (FR4)<br/>Pages 13-14 (Constraints)<br/>Pages 21-22 (Scenario 4)<br/>Burn_Up_Chart.md<br/>Product_Backlog_Table.md (E4 stories) |
| **IT24100264** | **Bandara N W C D** | • Functional Requirements - Epic 5 (FR5.1-FR5.10)<br/>• Acceptance Criteria (Section 7)<br/>• Use Case Scenario 5: Purchase Orders<br/>• Requirements Traceability Matrix<br/>• Product Backlog - Epic 5 stories | Pages 10-11 (FR5)<br/>Pages 14-16 (Acceptance Criteria)<br/>Pages 22-23 (Scenario 5)<br/>Requirements_Traceability_Matrix.md<br/>Product_Backlog_Table.md (E5 stories) |
| **IT24101266** | **Perera M.U.E** | • Functional Requirements - Epic 6 (FR6.1-FR6.7)<br/>• Use Case Diagrams Overview (Section 8.1)<br/>• Use Case Scenario 6: Discount Coupons<br/>• References and Documentation<br/>• Product Backlog - Epic 6 stories<br/>• Final document compilation and formatting | Pages 11 (FR6)<br/>Pages 16-17 (Use Case Overview)<br/>Pages 23-24 (Scenario 6)<br/>Pages 25-27 (References)<br/>Product_Backlog_Table.md (E6 stories)<br/>All documents (formatting) |

### Contribution Summary by Document

| Document | Primary Contributors | Review & Editing |
|----------|---------------------|------------------|
| **RE_Assignment_1_Report.md** | All members (divided by sections as above) | IT24101266 (Perera M.U.E) |
| **Strategic_Dependency_Diagram.md** | IT24100548 (Galagama S.T) | IT24100799 (Gawrawa G H Y) |
| **Business_Model_Canvas.md** | IT24100191 (Jayasinghe D.B.P) | IT24100548 (Galagama S.T) |
| **UML_Use_Case_Diagram.md** | IT24101314 (Appuhami H A P L) | IT24100264 (Bandara N W C D) |
| **Product_Backlog_Table.md** | All members (each epic by respective member) | IT24100799 (Gawrawa G H Y) |
| **Burn_Up_Chart.md** | IT24100799 (Gawrawa G H Y) | IT24101314 (Appuhami H A P L) |
| **Requirements_Traceability_Matrix.md** | IT24100264 (Bandara N W C D) | IT24100191 (Jayasinghe D.B.P) |
| **README.md** | IT24101266 (Perera M.U.E) | All members |

### Work Distribution Verification

| Member | Estimated Hours | Contribution Percentage |
|--------|----------------|------------------------|
| IT24100548 (Galagama S.T) | 18 hours | 16.7% |
| IT24101314 (Appuhami H A P L) | 18 hours | 16.7% |
| IT24100191 (Jayasinghe D.B.P) | 18 hours | 16.7% |
| IT24100799 (Gawrawa G H Y) | 18 hours | 16.7% |
| IT24100264 (Bandara N W C D) | 18 hours | 16.7% |
| IT24101266 (Perera M.U.E) | 18 hours | 16.7% |
| **Total** | **108 hours** | **100%** |

### Team Collaboration Notes

- **Weekly Meetings:** Team conducted 4 weekly meetings to discuss progress and coordinate work
- **Document Review:** All documents underwent peer review by at least one other team member
- **Version Control:** All documents maintained in Git repository with proper commit history
- **Quality Assurance:** Final review conducted by all members before submission

---

**Document Version:** 1.0  
**Last Updated:** February 12, 2026  
**Classification:** Public-SLIIT

---

## Appendices

### Appendix A: Glossary

| Term | Definition |
|------|------------|
| **COD** | Cash on Delivery - Payment method where customer pays upon receiving the order |
| **Epic** | Large body of work that can be broken down into smaller user stories |
| **FR** | Functional Requirement - Specific behavior or function of the system |
| **NFR** | Non-Functional Requirement - Quality attribute or constraint of the system |
| **PO** | Purchase Order - Document sent to supplier to order products |
| **RBAC** | Role-Based Access Control - Access control method based on user roles |
| **RTM** | Requirements Traceability Matrix - Document linking requirements to test cases |
| **SD Diagram** | Strategic Dependency Diagram - Model showing dependencies between actors |
| **SKU** | Stock Keeping Unit - Unique identifier for each product |
| **Story Point** | Unit of measure for estimating effort required to implement a user story |

### Appendix B: Assumptions and Constraints Summary

**Key Assumptions:**
- Users have internet access and basic digital literacy
- Current supplier relationships will continue
- Three-location structure maintained initially
- COD and Bank Transfer sufficient for launch

**Key Constraints:**
- 28-day development timeline (4 sprints)
- Web-based platform only (no mobile apps initially)
- No credit card payment integration in Phase 1
- Must support three specific locations (Main, Balangoda, Kottawa)

### Appendix C: Risk Register

| Risk ID | Risk Description | Probability | Impact | Mitigation Strategy |
|---------|-----------------|-------------|--------|---------------------|
| R1 | Scope creep during development | Medium | High | Fixed scope, change requests deferred |
| R2 | Integration issues between components | Medium | High | Continuous integration testing |
| R3 | Performance bottlenecks | Low | Medium | Performance testing in Sprint 3 |
| R4 | User adoption resistance | Medium | Medium | Training and change management plan |
| R5 | Data migration challenges | Low | High | Pilot migration with rollback plan |

---

**End of Document**
