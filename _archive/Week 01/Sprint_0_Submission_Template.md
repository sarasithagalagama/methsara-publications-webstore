# IE2091 Sprint 0 Submission Template
## Methsara Publications Web Store

---

## Team Members

| Student ID | Student Name | Role |
|------------|--------------|------|
| N/A | Methsara Publications | Product Owner |
| IT24100799 | Gawrawa G H Y | Scrum Master |
| IT24100548 | Galagama S.T | Team Member |
| IT24101314 | Appuhami H A P L | Team Member |
| IT24100191 | Jayasinghe D.B.P | Team Member |
| IT24100264 | Bandara N W C D | Team Member |
| IT24101266 | Perera M.U.E | Team Member |

---

## 1. Problem Identification

### Problem Statement

Methsara Publications, a specialist educational publisher in Sri Lanka, currently lacks an online presence for selling their educational materials. Students preparing for G.C.E. O/L and A/L examinations (Grades 6-13) and their parents face significant challenges in accessing study materials:

- **Limited Accessibility**: Customers must physically visit the store in Pannipitiya to browse and purchase textbooks, past papers, model papers, and question-answer guides, which is inconvenient for students and parents across Sri Lanka.

- **Time-Consuming Shopping**: During peak exam seasons, customers waste valuable study time traveling to physical locations and waiting in queues, when they should be focusing on exam preparation.

- **Inventory Visibility**: Customers cannot check stock availability before visiting the store, leading to wasted trips when specific grade-level or subject-specific materials are out of stock.

- **Inefficient Order Management**: The publisher struggles to manage bulk orders from schools and tuition centers without a centralized system, leading to order processing delays and inventory management issues.

- **Limited Marketing Reach**: Without an online platform, Methsara Publications cannot effectively reach students across Sri Lanka, particularly those in remote areas who need quality educational materials the most.

### Why is this problem important?

• **Student Success Impact**: Access to quality study materials directly affects academic performance. Delays or difficulties in obtaining the right textbooks and past papers can negatively impact students' exam preparation and results.

• **Business Growth**: The lack of online sales channels limits Methsara Publications' revenue potential and market reach, especially during critical exam seasons when demand peaks.

• **Competitive Disadvantage**: Other educational publishers are moving online, and without a web presence, Methsara Publications risks losing market share to competitors who offer convenient online shopping experiences.

• **Operational Efficiency**: Manual inventory and order management processes are error-prone and time-consuming, leading to stock shortages during exam seasons and excess inventory during off-peak periods.

• **Customer Satisfaction**: Parents and students expect modern, convenient shopping experiences. The inability to browse, compare, and purchase educational materials online leads to customer frustration and potential loss of business.

---

## 2. Stakeholder Identification

### List and categorize key stakeholders:

| Stakeholder | Type | Interest / Concern |
|-------------|------|-------------------|
| **Students (Grades 6-13)** | Primary | Need easy access to grade-specific textbooks, past papers, and study guides for exam preparation. Concerned about finding the right materials quickly and affordably. |
| **Parents** | Primary | Want to purchase all necessary educational materials for their children efficiently. Concerned about product quality, pricing, delivery reliability, and payment security. |
| **Teachers** | Secondary | Recommend study materials to students. Interested in bulk ordering options for classes and access to latest editions and supplementary materials. |
| **Methsara Publications (Business Owner)** | Primary | Needs to increase sales, expand market reach, manage inventory efficiently, and reduce operational costs. Concerned about ROI, system reliability, and business growth. |
| **School Administrators** | Secondary | May purchase materials in bulk for school libraries or student distribution. Concerned about bulk pricing, invoicing, and delivery logistics. |
| **Tuition Center Owners** | Secondary | Purchase materials in bulk for students. Interested in wholesale pricing, stock availability, and consistent supply during exam seasons. |
| **Delivery Partners** | Tertiary | Responsible for delivering orders to customers. Concerned about clear delivery instructions, order accuracy, and efficient logistics. |
| **Payment Gateway Providers** | Tertiary | Process online payments securely. Concerned about transaction security, compliance, and integration reliability. |
| **System Administrators** | Secondary | Manage and maintain the web platform. Concerned about system performance, security, backup procedures, and ease of maintenance. |
| **Customer Support Staff** | Secondary | Handle customer inquiries, order issues, and returns. Need access to order information, inventory status, and customer data. |
| **Suppliers/Printers** | Tertiary | Supply books and materials to Methsara Publications. Interested in receiving accurate purchase orders and maintaining stock levels. |
| **Marketing Team** | Secondary | Promote the platform and run campaigns. Need tools to create promotions, track campaign performance, and manage customer engagement. |

---

## 3. Product Vision Statement

**For** students preparing for G.C.E. O/L and A/L examinations, parents, and teachers across Sri Lanka,

**Who** need convenient access to high-quality, grade-specific educational materials including textbooks, past papers, model papers, and question-answer guides,

**The product** is a comprehensive e-commerce web platform built on the MERN stack,

**Provides** 24/7 online access to browse, search, and purchase educational materials with grade-level filtering (6-13), exam-type categorization (O/L, A/L), subject-specific organization, secure payment processing, order tracking, and home delivery, while enabling Methsara Publications to efficiently manage inventory, process orders, track suppliers, and run promotional campaigns during exam seasons.

---

## 4. Epics

### Identify at least 6 Epics:

| Epic ID | Epic Description |
|---------|------------------|
| **E1** | **User & Authentication Management**: Complete user registration, login, role-based access control (Customer, Staff, Manager, Super Admin), profile management, password reset, and activity logging system. |
| **E2** | **Publication & Catalog Management**: Comprehensive book catalog with CRUD operations, category hierarchy with exam metadata (Grade 6-13, Subject, Exam Type: O/L/A/L), search and filtering, book formats, pre-orders, and media uploads. |
| **E3** | **Shopping Cart & Checkout System**: Shopping cart management with persistence, wishlist functionality, multi-step checkout workflow, shipping address management, payment method integration (Stripe/PayPal/COD), and guest checkout. |
| **E4** | **Order & Transaction Management**: Order creation and processing, order status workflow (Pending → Processing → Shipped → Delivered), payment processing, transaction logging, return/refund management, invoice generation, and order tracking with notifications. |
| **E5** | **Inventory & Supplier Management**: Real-time stock tracking, warehouse management, low stock alerts, supplier/printer management, purchase order creation, stock receiving and batch tracking, and damaged stock handling. |
| **E6** | **Promotion & Gift Voucher Management**: Coupon code creation and management, discount rules (percentage, fixed, free shipping), promotional campaigns, flash sales, banner management, gift voucher generation and redemption, loyalty points, and referral programs. |

---

## 5. User Stories

### Identify all possible user stories for the Epics identified in above section

**User Story Format**: As a \<user\>, I want \<feature\>, so that \<benefit\>.

| Epic ID | User Story ID | User Story | Stakeholder |
|---------|---------------|------------|-------------|
| **E1** | US1.1 | As a student/parent, I want to create an account with my grade level preferences, so that I get recommended books for my specific exam year. | Students, Parents |
| **E1** | US1.2 | As a registered user, I want to securely log in to my account, so that I can access my profile and order history. | Students, Parents, Teachers |
| **E1** | US1.3 | As a user, I want to reset my password via email, so that I can regain access if I forget my credentials. | Students, Parents, Teachers |
| **E1** | US1.4 | As a registered user, I want to update my profile information (name, email, phone, grade level), so that my account details remain current. | Students, Parents, Teachers |
| **E1** | US1.5 | As an admin, I want different access levels for staff, managers, and super admins, so that I can control who can perform sensitive operations. | Business Owner, System Admin |
| **E1** | US1.6 | As an admin, I want to view activity logs of user actions, so that I can monitor system security and user behavior. | Business Owner, System Admin |
| **E2** | US2.1 | As a student, I want to filter books by Grade (6-13), Exam (O/L, A/L), and Subject, so that I can quickly find the exact study guides I need. | Students, Parents, Teachers |
| **E2** | US2.2 | As a customer, I want to search for books by title, ISBN, or author, so that I can find specific materials quickly. | Students, Parents, Teachers |
| **E2** | US2.3 | As a customer, I want to view detailed book information (description, price, format, grade, subject), so that I can make informed purchasing decisions. | Students, Parents, Teachers |
| **E2** | US2.4 | As an admin, I want to add, edit, and delete books from the catalog, so that I can keep the inventory up-to-date. | Business Owner, Staff |
| **E2** | US2.5 | As an admin, I want to manage book categories and exam metadata, so that customers can filter products effectively. | Business Owner, Staff |
| **E2** | US2.6 | As an admin, I want to upload book cover images, so that products are visually appealing to customers. | Business Owner, Staff |
| **E2** | US2.7 | As a customer, I want to pre-order upcoming publications, so that I can secure new releases before they sell out. | Students, Parents, Teachers |
| **E3** | US3.1 | As a parent, I want to add multiple textbooks and past papers to my cart, so that I can buy all necessary materials for the school term in one go. | Parents, Teachers |
| **E3** | US3.2 | As a customer, I want to update item quantities in my cart, so that I can adjust my order before checkout. | Students, Parents, Teachers |
| **E3** | US3.3 | As a customer, I want to remove items from my cart, so that I can change my mind about purchases. | Students, Parents, Teachers |
| **E3** | US3.4 | As a customer, I want my cart to persist across sessions, so that I don't lose my selections if I close the browser. | Students, Parents, Teachers |
| **E3** | US3.5 | As a customer, I want to save items to a wishlist, so that I can purchase them later. | Students, Parents, Teachers |
| **E3** | US3.6 | As a customer, I want a smooth checkout experience with multiple payment options, so that I can complete my purchase quickly and securely. | Students, Parents, Teachers |
| **E3** | US3.7 | As a customer, I want to save multiple shipping addresses, so that I can easily ship to different locations (home, school, tuition center). | Parents, Teachers |
| **E3** | US3.8 | As a customer, I want to apply discount coupons at checkout, so that I can save money on my purchases. | Students, Parents, Teachers |
| **E3** | US3.9 | As a guest user, I want to checkout without creating an account, so that I can make quick purchases. | Students, Parents |
| **E4** | US4.1 | As a customer, I want to receive an order confirmation email with details, so that I have a record of my purchase. | Students, Parents, Teachers |
| **E4** | US4.2 | As a customer, I want to track my order status in real-time, so that I know when to expect my delivery. | Students, Parents, Teachers |
| **E4** | US4.3 | As a customer, I want to view my complete order history, so that I can reference past purchases. | Students, Parents, Teachers |
| **E4** | US4.4 | As a customer, I want to download invoices for my orders, so that I can keep records for my accounts. | Parents, Teachers, School Admins |
| **E4** | US4.5 | As a customer, I want to request returns or refunds for damaged items, so that I can get replacements or my money back. | Students, Parents, Teachers |
| **E4** | US4.6 | As an admin, I want to view and update order statuses, so that I can manage the fulfillment process efficiently. | Business Owner, Staff |
| **E4** | US4.7 | As an admin, I want to search and filter orders by date, status, or customer, so that I can find specific orders quickly. | Business Owner, Staff |
| **E4** | US4.8 | As an admin, I want to generate printable invoices, so that I can include them with shipments. | Staff |
| **E4** | US4.9 | As an admin, I want to process bulk orders from schools and tuition centers, so that I can handle institutional sales efficiently. | Business Owner, Staff |
| **E4** | US4.10 | As an admin, I want to view transaction logs, so that I can track payment processing and reconcile accounts. | Business Owner, Staff |
| **E5** | US5.1 | As an admin, I want to track stock levels in real-time, so that I know what's available to sell. | Business Owner, Staff |
| **E5** | US5.2 | As an admin, I want to receive low stock alerts, so that I can reorder before items run out during exam seasons. | Business Owner, Staff |
| **E5** | US5.3 | As an admin, I want to manage multiple warehouse locations, so that I can organize inventory efficiently. | Business Owner, Staff |
| **E5** | US5.4 | As an admin, I want to add and manage supplier information, so that I can maintain relationships with printers and distributors. | Business Owner, Staff |
| **E5** | US5.5 | As an admin, I want to create purchase orders to suppliers, so that I can replenish stock systematically. | Business Owner, Staff |
| **E5** | US5.6 | As an admin, I want to record stock receiving and batch tracking, so that I can trace inventory sources. | Staff |
| **E5** | US5.7 | As an admin, I want to mark damaged or defective stock, so that I don't sell faulty products to customers. | Staff |
| **E5** | US5.8 | As an admin, I want to view inventory valuation reports, so that I can understand the value of stock on hand. | Business Owner |
| **E6** | US6.1 | As an admin, I want to create and manage discount coupons, so that I can run promotional campaigns during exam seasons. | Business Owner, Marketing Team |
| **E6** | US6.2 | As an admin, I want to set coupon rules (percentage, fixed amount, free shipping, minimum purchase), so that I can control discount conditions. | Business Owner, Marketing Team |
| **E6** | US6.3 | As an admin, I want to set expiry dates and usage limits for coupons, so that promotions run for specific periods. | Business Owner, Marketing Team |
| **E6** | US6.4 | As an admin, I want to create flash sales and limited-time offers, so that I can drive urgency and boost sales. | Business Owner, Marketing Team |
| **E6** | US6.5 | As an admin, I want to manage promotional banners on the website, so that I can highlight special offers and new releases. | Business Owner, Marketing Team |
| **E6** | US6.6 | As a customer, I want to purchase gift vouchers, so that I can gift educational materials to others. | Parents, Teachers |
| **E6** | US6.7 | As a customer, I want to redeem gift vouchers at checkout, so that I can use them to pay for purchases. | Students, Parents, Teachers |
| **E6** | US6.8 | As an admin, I want to track gift voucher usage and balances, so that I can manage the voucher program effectively. | Business Owner, Staff |
| **E6** | US6.9 | As a customer, I want to earn loyalty points on purchases, so that I can get rewards for repeat business. | Students, Parents, Teachers |
| **E6** | US6.10 | As a customer, I want to refer friends and earn rewards, so that I can benefit from sharing the platform. | Students, Parents, Teachers |

---

## 6. Initial Product Backlog

### Prioritize user stories based on value:

| Priority | User Story ID | Remarks |
|----------|---------------|---------|
| **High** | US1.1 | Foundation - Must have user registration before any other features |
| **High** | US1.2 | Foundation - Essential for user authentication and access control |
| **High** | US1.5 | Foundation - Required for admin access to manage the system |
| **High** | US2.1 | Core Value - Primary way students find relevant educational materials |
| **High** | US2.2 | Core Value - Essential search functionality for quick product discovery |
| **High** | US2.3 | Core Value - Customers need detailed info to make purchase decisions |
| **High** | US2.4 | Core Value - Admin must be able to manage product catalog |
| **High** | US3.1 | Core E-commerce - Essential shopping cart functionality |
| **High** | US3.2 | Core E-commerce - Basic cart management feature |
| **High** | US3.3 | Core E-commerce - Basic cart management feature |
| **High** | US3.6 | Core E-commerce - Critical for completing purchases |
| **High** | US4.1 | Core E-commerce - Essential order confirmation for customers |
| **High** | US4.6 | Core E-commerce - Admin must manage orders for fulfillment |
| **Medium** | US1.3 | Important - Improves user experience but not blocking |
| **Medium** | US1.4 | Important - Profile management enhances user experience |
| **Medium** | US1.6 | Important - Security and monitoring feature |
| **Medium** | US2.5 | Important - Supports filtering functionality |
| **Medium** | US2.6 | Important - Enhances product presentation |
| **Medium** | US3.4 | Important - Improves user experience significantly |
| **Medium** | US3.5 | Important - Adds value for customers planning future purchases |
| **Medium** | US3.7 | Important - Convenience feature for repeat customers |
| **Medium** | US3.8 | Important - Enables promotional campaigns |
| **Medium** | US4.2 | Important - Enhances customer satisfaction and reduces support queries |
| **Medium** | US4.3 | Important - Valuable for customer reference |
| **Medium** | US4.4 | Important - Needed for institutional buyers |
| **Medium** | US4.7 | Important - Admin efficiency feature |
| **Medium** | US4.8 | Important - Professional order processing |
| **Medium** | US5.1 | Important - Prevents overselling and stock issues |
| **Medium** | US5.2 | Important - Critical during exam seasons |
| **Medium** | US6.1 | Important - Enables marketing campaigns |
| **Medium** | US6.2 | Important - Flexible promotion management |
| **Low** | US2.7 | Nice to Have - Additional feature for new releases |
| **Low** | US3.9 | Nice to Have - Convenience but not essential |
| **Low** | US4.5 | Nice to Have - Return handling can be manual initially |
| **Low** | US4.9 | Nice to Have - Bulk orders can be handled manually initially |
| **Low** | US4.10 | Nice to Have - Financial tracking feature |
| **Low** | US5.3 | Nice to Have - Single warehouse sufficient initially |
| **Low** | US5.4 | Nice to Have - Supplier management can be manual initially |
| **Low** | US5.5 | Nice to Have - Purchase orders can be manual initially |
| **Low** | US5.6 | Nice to Have - Advanced inventory feature |
| **Low** | US5.7 | Nice to Have - Can be handled manually initially |
| **Low** | US5.8 | Nice to Have - Advanced reporting feature |
| **Low** | US6.3 | Nice to Have - Advanced coupon features |
| **Low** | US6.4 | Nice to Have - Advanced promotional feature |
| **Low** | US6.5 | Nice to Have - Marketing enhancement |
| **Low** | US6.6 | Nice to Have - Additional revenue stream |
| **Low** | US6.7 | Nice to Have - Depends on US6.6 |
| **Low** | US6.8 | Nice to Have - Voucher program management |
| **Low** | US6.9 | Nice to Have - Customer retention feature |
| **Low** | US6.10 | Nice to Have - Marketing growth feature |

---

## 7. Definition of Done (DoD)

### Define what it means for a user story or epic to be considered Done:

**General Definition of Done (applies to all user stories):**

• **Code Quality**: Code follows team coding standards and best practices
• **Version Control**: Code is committed to Git with meaningful commit messages
• **Testing**: Unit tests written and passing with minimum 80% code coverage
• **Integration**: Integration tests passing and feature works with existing system
• **Code Review**: Code reviewed and approved by at least one team member
• **Manual Testing**: Feature tested manually on development environment
• **Bug-Free**: No critical or high-priority bugs remaining
• **Documentation**: API documentation updated (if applicable)
• **User Documentation**: User-facing documentation or help text updated
• **Acceptance**: Product Owner has reviewed and accepted the feature
• **Deployment**: Feature successfully deployed to staging environment

**Epic-Specific DoD (for E3: Shopping Cart & Checkout System):**

• **Payment Integration**: All payment methods (Stripe, PayPal, COD) tested with test credentials
• **Cart Persistence**: Cart data persists correctly across browser sessions and devices
• **Calculation Accuracy**: All price calculations (subtotal, discounts, shipping, tax, total) are mathematically correct
• **Security**: Payment information is handled securely (PCI compliance for card data)
• **Email Notifications**: Order confirmation emails are sent successfully
• **Mobile Responsiveness**: Checkout flow works seamlessly on mobile devices
• **Error Handling**: All error scenarios (payment failure, network issues, validation errors) are handled gracefully with user-friendly messages

---

## 8. Sprint 1 Preview

### Planned Epics and User Stories for Sprint 1:

**Sprint Goal**: Implement core user authentication and basic product catalog functionality to enable users to browse educational materials.

**Selected User Stories** (based on High priority and foundational requirements):

| Epic | User Story ID | Description | Story Points |
|------|---------------|-------------|--------------|
| E1 | US1.1 | User Registration with grade level preferences | 8 |
| E1 | US1.2 | User Login with JWT authentication | 5 |
| E1 | US1.5 | Role-Based Access Control (Customer, Staff, Manager, Super Admin) | 8 |
| E2 | US2.1 | Browse and filter books by Grade, Exam Type, and Subject | 13 |
| E2 | US2.4 | Admin Book Management (CRUD operations) | 8 |

**Total Story Points**: 42

**Rationale**:
- These stories form the foundation of the system
- User authentication is required before implementing any other features
- Product catalog is essential for customers to browse and discover materials
- Admin book management enables content population
- Story point total (42) is achievable for a 3-week sprint with 6 team members

**Sprint 1 Deliverables**:
- Functional user registration and login system
- Role-based access control implementation
- Product catalog with grade/exam/subject filtering
- Admin interface for managing books
- Database schemas for Users, Roles, and Books
- RESTful API endpoints for authentication and catalog management
- Basic frontend UI for registration, login, and product browsing

**Note**: This selection may be refined after Sprint 0 review and team velocity assessment.

---

**Document Prepared By**: Team Methsara Publications Web Store  
**Date**: February 4, 2026  
**Version**: 1.0  
**Status**: Sprint 0 Submission Template
