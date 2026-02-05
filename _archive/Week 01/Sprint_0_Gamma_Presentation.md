# Sprint 0 Presentation - Methsara Publications Web Store
## Gamma AI Format - Ready to Paste

---

# Slide 1: Project Overview

## Methsara Publications Web Store
### E-Commerce Platform for Educational Materials

**Group ID:** G1104  
**Technology Stack:** MERN (MongoDB, Express.js, React.js, Node.js)

### Team Members & Scrum Roles

| Student ID | Name | Scrum Role |
|------------|------|------------|
| N/A | Methsara Publications | **Product Owner** |
| IT24100799 | Gawrawa G H Y | **Scrum Master** |
| IT24100548 | Galagama S.T | Developer |
| IT24101314 | Appuhami H A P L | Developer |
| IT24100191 | Jayasinghe D.B.P | Developer |
| IT24100264 | Bandara N W C D | Developer |
| IT24101266 | Perera M.U.E | Developer |

---

# Slide 2: Problem Identification

## The Real-World Problem

**Core Issue:** Methsara Publications lacks an online presence for selling educational materials, forcing students to visit physical stores.

### Who is Affected?

- **Students (Grades 6-13)** preparing for O/L and A/L examinations
- **Parents** seeking quality study materials for their children
- **Teachers** requiring bulk orders for classes
- **Methsara Publications** missing online revenue opportunities

### Why This Problem Matters

1. **Limited Accessibility** - Students must physically visit Pannipitiya store
2. **Time-Consuming** - Valuable study time wasted traveling and queuing during exam seasons
3. **No Inventory Visibility** - Cannot check stock availability before visiting
4. **Inefficient Order Management** - Bulk orders from schools handled manually
5. **Limited Market Reach** - Cannot serve students in remote areas of Sri Lanka

### Impact

✅ Student exam performance affected by lack of access to materials  
✅ Business losing competitive advantage as competitors move online  
✅ Operational inefficiencies in manual processes  
✅ Customer dissatisfaction with limited shopping options

---

# Slide 3: Stakeholder Identification

## Primary Stakeholders
*Direct users with high impact*

- **Students (Grades 6-13)** - Need grade-specific materials for exam preparation
- **Parents** - Purchase materials for children, concerned about quality and delivery
- **Methsara Publications (Owner)** - Needs sales growth and efficient operations

## Secondary Stakeholders
*Indirect users with moderate impact*

- **Teachers** - Recommend materials, interested in bulk ordering
- **School Administrators** - Bulk purchases for school libraries
- **Tuition Center Owners** - Wholesale purchases for students
- **System Administrators** - Manage and maintain the platform
- **Customer Support Staff** - Handle customer inquiries and issues
- **Marketing Team** - Run promotional campaigns

## Tertiary Stakeholders
*External parties with low direct impact*

- **Delivery Partners** - Handle logistics and shipping
- **Payment Gateway Providers** - Process online transactions
- **Suppliers/Printers** - Supply books to the publisher

---

# Slide 4: Product Vision Statement

## Vision Statement

**For** students preparing for G.C.E. O/L and A/L examinations, parents, and teachers across Sri Lanka,

**Who** need convenient access to high-quality, grade-specific educational materials including textbooks, past papers, model papers, and question-answer guides,

**The product** is a comprehensive e-commerce web platform,

**That provides** 24/7 online access to browse, search, and purchase educational materials with:
- Grade-level filtering (6-13)
- Exam-type categorization (O/L, A/L)
- Subject-specific organization
- Secure payment processing
- Order tracking and home delivery

**While enabling** Methsara Publications to efficiently manage inventory, process orders, track suppliers, and run promotional campaigns during exam seasons.

### Key Value Propositions

🎯 **For Students/Parents:** 24/7 access, grade-specific filtering, home delivery  
🎯 **For Business:** Expanded market reach, efficient operations, promotional capabilities  
🎯 **For All:** Convenient, secure, and reliable platform

---

# Slide 5: Epics

## Six Major Epics

| Epic ID | Epic Name | High-Level Description |
|---------|-----------|------------------------|
| **E1** | User & Authentication Management | User registration, login, role-based access control, profile management, security features |
| **E2** | Publication & Catalog Management | Book catalog, grade/exam/subject filtering, search functionality, admin CRUD operations |
| **E3** | Shopping Cart & Checkout | Cart management, wishlist, multi-step checkout, payment integration, guest checkout |
| **E4** | Order & Transaction Management | Order processing, payment transactions, status tracking, invoices, returns/refunds |
| **E5** | Inventory & Supplier Management | Stock tracking, warehouse management, supplier relations, purchase orders, alerts |
| **E6** | Promotion & Gift Voucher Management | Coupons, discounts, campaigns, gift vouchers, loyalty programs, referral system |

### How Epics Relate to Problem & Vision

✅ **E1 & E2** - Enable students to find and access materials (addresses accessibility)  
✅ **E3 & E4** - Enable convenient online purchasing (addresses time-consuming shopping)  
✅ **E5** - Ensures stock availability (addresses inventory visibility)  
✅ **E6** - Enables marketing and customer retention (addresses business growth)

---

# Slide 6: Initial Product Backlog (Part 1)

## Epic 1: User & Authentication Management

| Priority | ID | User Story | Stakeholder |
|----------|----|-----------| ------------|
| **High** | US1.1 | As a student/parent, I want to create an account with my grade level preferences, so that I get recommended books for my specific exam year. | Students, Parents |
| **High** | US1.2 | As a registered user, I want to securely log in to my account, so that I can access my profile and order history. | All Users |
| **High** | US1.3 | As an admin, I want different access levels for staff, managers, and super admins, so that I can control who can perform sensitive operations. | Admin |

**Story Points:** 21 points total

## Epic 2: Educational Catalog Management

| Priority | ID | User Story | Stakeholder |
|----------|----|-----------| ------------|
| **High** | US2.1 | As a student, I want to filter books by Grade (6-13), Exam (O/L, A/L), and Subject, so that I can quickly find the exact study guides I need. | Students, Parents |
| **High** | US2.2 | As an admin, I want to add, edit, and delete books from the catalog, so that I can keep the inventory up-to-date. | Admin |

**Story Points:** 21 points total

---

# Slide 7: Initial Product Backlog (Part 2)

## Epic 3: Shopping & Checkout

| Priority | ID | User Story | Stakeholder |
|----------|----|-----------| ------------|
| **High** | US3.1 | As a parent, I want to add multiple textbooks and past papers to my cart, so that I can buy all necessary materials for the school term in one go. | Parents, Teachers |
| **High** | US3.2 | As a customer, I want a smooth checkout experience with multiple payment options, so that I can complete my purchase quickly and securely. | All Customers |

**Story Points:** 34 points total

## Epic 4: Order Management

| Priority | ID | User Story | Stakeholder |
|----------|----|-----------| ------------|
| **High** | US4.1 | As a customer, I want to track my order status in real-time, so that I know when to expect my delivery. | All Customers |
| **High** | US4.2 | As an admin, I want to view and update order statuses, so that I can manage the fulfillment process efficiently. | Admin |

**Story Points:** 21 points total

---

# Slide 8: Initial Product Backlog (Part 3)

## Epic 5: Inventory & Supplier Management

| Priority | ID | User Story | Stakeholder |
|----------|----|-----------| ------------|
| **Medium** | US5.1 | As an admin, I want to track stock levels and receive low stock alerts, so that I can maintain adequate inventory for exam seasons. | Admin |
| **Low** | US5.2 | As an admin, I want to manage supplier information and purchase orders, so that I can maintain adequate stock levels. | Admin |

**Story Points:** 21 points total

## Epic 6: Promotions & Marketing

| Priority | ID | User Story | Stakeholder |
|----------|----|-----------| ------------|
| **Medium** | US6.1 | As an admin, I want to create and manage discount coupons, so that I can run promotional campaigns during exam seasons. | Admin |
| **Medium** | US6.2 | As a customer, I want to purchase and redeem gift vouchers, so that I can gift educational materials to others. | All Customers |

**Story Points:** 21 points total

### Prioritization Example

**Why is US2.1 (Grade/Exam/Subject filtering) HIGH priority?**

✅ PRIMARY way students find relevant materials for their specific exam year  
✅ Without this, the catalog is just a generic bookstore - not specialized for education  
✅ Directly addresses the core problem of students needing grade-specific materials  
✅ High business value: differentiates us from competitors  
✅ Technical dependency: Must be implemented early as other features depend on it

---

# Slide 9: Definition of Done (DoD)

## General Definition of Done
*Applies to ALL user stories*

✅ Code follows team coding standards and best practices  
✅ Code committed to Git with meaningful commit messages  
✅ Unit tests written and passing (minimum 80% coverage)  
✅ Integration tests passing  
✅ Code reviewed and approved by at least one team member  
✅ Feature tested manually on development environment  
✅ No critical or high-priority bugs  
✅ API documentation updated (if applicable)  
✅ User documentation updated  
✅ Product Owner has reviewed and accepted the feature  
✅ Feature deployed to staging environment

## Epic-Specific DoD Example
*For Epic 3: Shopping Cart & Checkout*

✅ All payment methods (Stripe, PayPal, COD) tested with test credentials  
✅ Cart persistence works across browser sessions and devices  
✅ All price calculations are mathematically correct  
✅ Payment information handled securely (PCI compliance)  
✅ Order confirmation emails sent successfully  
✅ Checkout flow works on mobile devices  
✅ Error scenarios handled gracefully with user-friendly messages

### How DoD Ensures Quality

**Consistency** - Every story meets same quality bar  
**Completeness** - Nothing is "done" until all criteria met  
**Accountability** - Clear checklist for developers and reviewers  
**Customer Satisfaction** - Product Owner acceptance ensures business value

---

# Slide 10: Sprint 1 Preview

## Sprint Goal

> Implement core user authentication and basic product catalog functionality to enable users to browse educational materials.

## Selected User Stories

| Epic | User Story ID | Description | Story Points |
|------|---------------|-------------|--------------|
| E1 | US1.1 | User Registration with grade preferences | 8 |
| E1 | US1.2 | User Login with JWT authentication | 5 |
| E1 | US1.3 | Role-Based Access Control | 8 |
| E2 | US2.1 | Browse and filter by Grade/Exam/Subject | 13 |
| E2 | US2.2 | Admin Book Management (CRUD) | 8 |

**Total Story Points:** 42

### Why These Stories Were Selected

1. **Priority** - All are HIGH priority in our backlog
2. **Foundation** - Authentication is required before any other features
3. **Value** - Product catalog delivers immediate value to students
4. **Dependencies** - Other features depend on these being completed first
5. **Achievability** - 42 points is realistic for 6 developers over 3 weeks

### Sprint 1 Deliverables

✅ Functional user registration and login system  
✅ Role-based access control implementation  
✅ Product catalog with grade/exam/subject filtering  
✅ Admin interface for managing books  
✅ Database schemas for Users, Roles, and Books  
✅ RESTful API endpoints  
✅ Basic frontend UI

**Note:** Plans may change after Sprint 0 review and team velocity assessment.

---

# Thank You

## Questions & Feedback

**Team:** Methsara Publications Web Store  
**Group ID:** G1104  
**Prepared By:** All Team Members  
**Date:** February 2026

### Contact Information
Methsara Publications  
752/1/23, Rukmale Road, Pannipitiya  
📞 077 7356199 | 071 4325383 | 071 4485899
