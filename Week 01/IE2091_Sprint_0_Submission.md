# IE2091 Sprint 0 Submission
## Methsara Publications Web Store

---

## 📋 Project Information

**Course:** IE2091 - Information Systems Project  
**Evaluation:** 1.1 | G1104 | ISP Practical 1.1  
**Schedule:** Friday 12:30 – 2:30 | B401  
**Semester:** 2nd Year, 2nd Semester (2026-S2)  
**Project Type:** Group Project (6 Members)  
**Client:** Methsara Publications (Real Client)  
**Technology Stack:** MERN (MongoDB, Express.js, React.js, Node.js)

---

## 👥 Team Members & Scrum Roles

| Student ID | Name | Scrum Role | System Component |
|------------|------|------------|------------------|
| IT24100548 | Galagama S.T | **Product Owner** | User & Authentication System |
| IT24100799 | Gawrawa G H Y | **Scrum Master** | Shopping Cart & Checkout |
| IT24101314 | Appuhami H A P L | Developer | Publication & Catalog Manager |
| IT24100191 | Jayasinghe D.B.P | Developer | Order & Transaction Management |
| IT24100264 | Bandara N W C D | Developer | Inventory & Supplier System |
| IT24101266 | Perera M.U.E | Developer | Promotion & Gift Vouchers |

### Role Responsibilities

#### Product Owner: Galagama S.T (IT24100548)
- Define product vision and goals
- Maintain and prioritize Product Backlog
- Accept or reject work results
- Communicate with stakeholders (Methsara Publications)
- Make final decisions on feature priorities

#### Scrum Master: Gawrawa G H Y (IT24100799)
- Facilitate all Scrum ceremonies (Sprint Planning, Daily Scrums, Sprint Review, Sprint Retrospective)
- Remove obstacles and blockers for the team
- Ensure Scrum practices are followed correctly
- Coach the team on Agile principles
- Track and maintain Burndown charts

#### Development Team: 4 Members
**Members:** Appuhami H A P L, Jayasinghe D.B.P, Bandara N W C D, Perera M.U.E

**Traits:**
- Self-management and self-organizing
- Developed "T" shaped skills (broad knowledge, deep expertise in one area)
- Cross-functional collaboration

**Responsibilities:**
- Develop features according to Sprint Backlog
- Participate in all Scrum ceremonies
- Collaborate and communicate effectively
- Write clean, tested, and documented code

---

## 🏢 Client Profile: Methsara Publications

### Overview
A specialist Sri Lankan publisher focusing on educational materials for students in **Grades 6-13**, specifically targeting **G.C.E. O/L and A/L examinations**. The company produces Sinhala-language resources including textbooks, past papers, model papers, and question-answer guides.

### Key Demographics
- Students (Grades 6-13)
- Annual Exam Candidates (O/L, A/L)
- Parents & Teachers

### Location & Operations
- **Address:** 752/1/23, Rukmale Road, Pannipitiya (near Kottawa)
- **Contact:** 077 7356199, 071 4325383, 071 4485899
- **Availability:** 24/7 Online Operations

### Business Needs
- Online presence for educational material sales
- Efficient inventory management for exam-season demand
- Order tracking and delivery management
- Promotional campaigns for exam seasons
- Customer management and loyalty programs

---

## 🎯 Project Vision & Objectives

### Vision Statement
To create a comprehensive, user-friendly e-commerce platform that enables Methsara Publications to efficiently sell educational materials online, serving students, parents, and teachers across Sri Lanka with 24/7 accessibility.

### Project Objectives
1. **Customer Experience:** Provide an intuitive shopping experience with grade-specific filtering and exam-focused categorization
2. **Operational Efficiency:** Streamline inventory, order, and supplier management processes
3. **Business Growth:** Enable promotional campaigns, gift vouchers, and loyalty programs to increase sales
4. **Scalability:** Build a robust MERN stack application that can handle peak exam-season traffic
5. **Security:** Implement secure authentication, payment processing, and data protection

---

## 📦 System Components & Assignments

### 1. User & Authentication Management System
**Assigned to:** Galagama S.T (IT24100548)

**Features:**
- User registration and login (JWT authentication)
- Multi-role management (Customer, Staff, Manager, Super Admin) - CRUD
- Profile management (personal info, password, preferences) - CRUD
- Role-based access control and permissions
- Activity logs and security audit trails
- Password reset and email verification

**Database Collections:**
- Users
- Roles
- Permissions
- Activity Logs

---

### 2. Publication & Catalog Management System
**Assigned to:** Appuhami H A P L (IT24101314)

**Features:**
- Book management (title, ISBN, price, description) - CRUD
- Category/genre hierarchy with exam metadata (Grade, Subject, Exam Type) - CRUD
- Book formats (hardcover, paperback, ebook) - CRUD
- Search and filtering by Grade (6-13), Exam (O/L, A/L), Subject
- Pre-order and new release management - CRUD
- Book cover and media uploads

**Database Collections:**
- Books
- Categories
- Book Formats
- Pre-orders

---

### 3. Shopping Cart & Checkout System
**Assigned to:** Gawrawa G H Y (IT24100799)

**Features:**
- Shopping cart management - CRUD
- Cart persistence (session and database)
- Wishlist functionality - CRUD
- Checkout workflow (shipping, billing, payment)
- Multiple shipping address management - CRUD
- Payment method integration (Stripe/PayPal/COD)
- Order summary and confirmation
- Coupon/discount code application
- Guest checkout option

**Database Collections:**
- Shopping Carts
- Cart Items
- Wishlists
- Shipping Addresses
- Payment Methods

---

### 4. Order & Transaction Management System
**Assigned to:** Jayasinghe D.B.P (IT24100191)

**Features:**
- Order placement and processing - CRUD
- Order status workflow (Pending → Processing → Shipped → Delivered)
- Payment processing and transaction logs - CRUD
- Return/refund management - CRUD
- Invoice and receipt generation (PDF)
- Order tracking and notifications
- Bulk order handling (institutional sales)

**Database Collections:**
- Orders
- Order Items
- Transactions
- Returns/Refunds
- Invoices

---

### 5. Inventory & Supplier Management System
**Assigned to:** Bandara N W C D (IT24100264)

**Features:**
- Stock tracking and management - CRUD
- Warehouse/location management - CRUD
- Stock alerts (low stock, out of stock, overstock)
- Supplier/printer management - CRUD
- Purchase orders to suppliers - CRUD
- Stock receiving and batch tracking - CRUD
- Damaged/defective stock handling - CRUD
- Inventory valuation reports

**Database Collections:**
- Inventory
- Warehouses
- Suppliers
- Purchase Orders
- Stock Movements
- Batches

---

### 6. Promotion & Gift Voucher Management System
**Assigned to:** Perera M.U.E (IT24101266)

**Features:**
- Coupon code management - CRUD
- Discount rules (percentage, fixed amount, free shipping) - CRUD
- Promotional campaigns - CRUD
- Flash sales and limited-time offers - CRUD
- Banner and advertisement management - CRUD
- Gift voucher generation and management - CRUD
- Gift voucher purchase (digital/physical) - CRUD
- Gift voucher redemption tracking
- Loyalty points system - CRUD
- Referral program - CRUD

**Database Collections:**
- Coupons
- Promotions
- Gift Vouchers
- Loyalty Points
- Referrals
- Banners
- Campaign Analytics

---

## 📝 Product Backlog

### Priority 1 (Must Have - Sprint 1)

#### Epic 1: User Authentication & Authorization
**Story Points:** 21

1. **User Registration**
   ```
   As a student/parent,
   I want to create an account with my grade level preferences,
   So that I get recommended books for my specific exam year.
   ```
   **Story Points:** 8  
   **Acceptance Criteria:**
   - Registration form with email, password, name, grade level
   - Email verification system
   - Password strength validation
   - Success confirmation and auto-login

2. **User Login**
   ```
   As a registered user,
   I want to securely log in to my account,
   So that I can access my profile and order history.
   ```
   **Story Points:** 5  
   **Acceptance Criteria:**
   - Login form with email and password
   - JWT token generation
   - Remember me functionality
   - Error handling for invalid credentials

3. **Role-Based Access Control**
   ```
   As an admin,
   I want different access levels for staff, managers, and super admins,
   So that I can control who can perform sensitive operations.
   ```
   **Story Points:** 8  
   **Acceptance Criteria:**
   - Role assignment system
   - Permission-based route protection
   - Admin dashboard access control
   - Activity logging for admin actions

---

#### Epic 2: Educational Catalog Management
**Story Points:** 21

4. **Browse Educational Materials**
   ```
   As a student,
   I want to filter books by Grade (6-13), Exam (O/L, A/L), and Subject,
   So that I can quickly find the exact study guides I need.
   ```
   **Story Points:** 13  
   **Acceptance Criteria:**
   - Filter sidebar with Grade, Exam Type, Subject dropdowns
   - Real-time filtering without page reload
   - Display book count for each filter
   - Clear all filters option

5. **Admin Book Management**
   ```
   As an admin,
   I want to add, edit, and delete books from the catalog,
   So that I can keep the inventory up-to-date.
   ```
   **Story Points:** 8  
   **Acceptance Criteria:**
   - CRUD operations for books
   - Image upload for book covers
   - Rich text editor for descriptions
   - Validation for required fields (ISBN, price, grade, subject)

---

### Priority 2 (Should Have - Sprint 2)

#### Epic 3: Shopping & Checkout
**Story Points:** 34

6. **Shopping Cart**
   ```
   As a parent,
   I want to add multiple textbooks and past papers to my cart,
   So that I can buy all necessary materials for the school term in one go.
   ```
   **Story Points:** 13  
   **Acceptance Criteria:**
   - Add/remove items from cart
   - Update quantity
   - Real-time price calculation
   - Cart persistence across sessions
   - Cart item count badge

7. **Checkout Process**
   ```
   As a customer,
   I want a smooth checkout experience with multiple payment options,
   So that I can complete my purchase quickly and securely.
   ```
   **Story Points:** 21  
   **Acceptance Criteria:**
   - Multi-step checkout (shipping, payment, review)
   - Address management
   - Payment method selection (COD, Stripe, PayPal)
   - Order summary with total breakdown
   - Order confirmation email

---

#### Epic 4: Order Management
**Story Points:** 21

8. **Order Tracking**
   ```
   As a customer,
   I want to track my order status in real-time,
   So that I know when to expect my delivery.
   ```
   **Story Points:** 8  
   **Acceptance Criteria:**
   - Order history page
   - Status badges (Pending, Processing, Shipped, Delivered)
   - Order details view
   - Email notifications on status changes

9. **Admin Order Management**
   ```
   As an admin,
   I want to view and update order statuses,
   So that I can manage the fulfillment process efficiently.
   ```
   **Story Points:** 13  
   **Acceptance Criteria:**
   - Order list with search and filters
   - Status update functionality
   - Invoice generation (PDF)
   - Bulk order processing

---

### Priority 3 (Could Have - Sprint 3)

#### Epic 5: Inventory & Supplier Management
**Story Points:** 21

10. **Inventory Tracking**
    ```
    As an admin,
    I want to track stock levels and receive low stock alerts,
    So that I can maintain adequate inventory for exam seasons.
    ```
    **Story Points:** 13  
    **Acceptance Criteria:**
    - Real-time stock level display
    - Low stock alerts (configurable threshold)
    - Stock movement history
    - Warehouse management

11. **Supplier Management**
    ```
    As an admin,
    I want to manage supplier information and purchase orders,
    So that I can maintain adequate stock levels.
    ```
    **Story Points:** 8  
    **Acceptance Criteria:**
    - Supplier CRUD operations
    - Purchase order creation
    - Supplier contact management
    - Order receiving workflow

---

#### Epic 6: Promotions & Marketing
**Story Points:** 21

12. **Coupon Management**
    ```
    As an admin,
    I want to create and manage discount coupons,
    So that I can run promotional campaigns during exam seasons.
    ```
    **Story Points:** 8  
    **Acceptance Criteria:**
    - Coupon code creation with rules
    - Percentage or fixed amount discounts
    - Expiry date management
    - Usage limit settings
    - Coupon validation at checkout

13. **Gift Voucher System**
    ```
    As a customer,
    I want to purchase and redeem gift vouchers,
    So that I can gift educational materials to others.
    ```
    **Story Points:** 13  
    **Acceptance Criteria:**
    - Gift voucher purchase
    - Unique code generation
    - Email delivery
    - Redemption at checkout
    - Balance tracking

---

### Priority 4 (Won't Have This Time)
- Mobile app (iOS/Android)
- Advanced analytics with ML recommendations
- Multi-language support (English/Tamil)
- Live chat support
- Social media integration

---

## 📊 Sprint Planning

### Sprint 0: Proposal & Planning (Week 1)
**Duration:** 1 week  
**Sprint Goal:** Complete project planning and get approval for Product Backlog

**Activities:**
- [x] Proposal presentation to Product Owner
- [x] Create Product Backlog with user stories
- [x] Define and estimate story points
- [x] Assign system components to team members
- [ ] Set up development environment (Git, MongoDB, Node.js, React)
- [ ] Create project repository structure
- [ ] Define coding standards and Git workflow

**Deliverables:**
- Product Backlog with prioritized user stories
- Team roles assignment
- Development environment setup guide
- Git workflow documentation

---

### Sprint 1: Core Features (Weeks 2-4)
**Duration:** 3 weeks  
**Sprint Goal:** Implement user authentication and basic product catalog

**Selected User Stories:**
- User Registration (8 points)
- User Login (5 points)
- Role-Based Access Control (8 points)
- Browse Educational Materials (13 points)
- Admin Book Management (8 points)

**Total Story Points:** 42

**Definition of Done:**
- Code is written and committed to Git
- Unit tests are written and passing
- Code is reviewed by at least one team member
- Feature is deployed to development environment
- Documentation is updated
- Product Owner has accepted the feature

**Presentation:** Week 4

---

### Sprint 2: E-commerce Features (Weeks 5-7)
**Duration:** 3 weeks  
**Sprint Goal:** Implement shopping cart, checkout, and order management

**Planned User Stories:**
- Shopping Cart (13 points)
- Checkout Process (21 points)
- Order Tracking (8 points)
- Admin Order Management (13 points)

**Total Story Points:** 55

**Presentation:** Week 7

---

### Sprint 3: Advanced Features (Weeks 8-10)
**Duration:** 3 weeks  
**Sprint Goal:** Implement inventory, supplier, and promotion management

**Planned User Stories:**
- Inventory Tracking (13 points)
- Supplier Management (8 points)
- Coupon Management (8 points)
- Gift Voucher System (13 points)

**Total Story Points:** 42

**Presentation:** Week 10

---

### Sprint 4: Polish & Deployment (Weeks 11-12)
**Duration:** 2 weeks  
**Sprint Goal:** Bug fixes, testing, and production deployment

**Activities:**
- Bug fixes and refinements
- Performance optimization
- User Acceptance Testing (UAT)
- Production deployment
- Final documentation

**Presentation:** Week 12 (Final)

---

## 📈 Scrum Artifacts

### 1. Product Backlog
- Maintained by: Product Owner (Galagama S.T)
- Contains: All user stories, bug fixes, technical improvements
- Prioritized using MoSCoW method (Must, Should, Could, Won't)
- Story points estimated using Fibonacci scale (1, 2, 3, 5, 8, 13, 21)

### 2. Sprint Backlog
- Created during Sprint Planning
- Contains: Selected user stories broken down into tasks
- Updated daily during Daily Scrums
- Owned by: Development Team

### 3. Burndown Chart
- Maintained by: Scrum Master (Gawrawa G H Y)
- Tracks: Work remaining vs. time
- Updated: Daily
- Used for: Predicting Sprint completion

### 4. Increment
- Definition: Potentially shippable product at end of each Sprint
- Must meet: Definition of Done
- Demonstrated: During Sprint Review

---

## 🔄 Scrum Ceremonies Schedule

### 1. Sprint Planning
- **When:** First day of each Sprint
- **Duration:** 2-4 hours
- **Participants:** Product Owner, Scrum Master, Development Team
- **Output:** Sprint Backlog and Sprint Goal

### 2. Daily Scrum
- **When:** Every working day (Monday-Friday)
- **Time:** 9:00 AM (15 minutes)
- **Format:** Stand-up meeting
- **Questions:**
  1. What did I do yesterday?
  2. What will I do today?
  3. What obstacles are blocking me?

### 3. Sprint Review
- **When:** Last day of Sprint (before Retrospective)
- **Duration:** 1-2 hours
- **Participants:** Product Owner, Scrum Master, Development Team, Stakeholders
- **Format:** Live demo of completed features

### 4. Sprint Retrospective
- **When:** After Sprint Review
- **Duration:** 1-2 hours
- **Participants:** Scrum Master, Development Team
- **Questions:**
  1. What went well?
  2. What didn't go well?
  3. What can we improve?

---

## 🛠️ Technology Stack

### Frontend
- **React.js** - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Context API** - State management
- **CSS Modules** - Component styling
- **React Hook Form** - Form handling
- **Recharts** - Data visualization

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcrypt.js** - Password hashing
- **Multer** - File uploads
- **Nodemailer** - Email notifications

### Development Tools
- **Git & GitHub** - Version control
- **Postman** - API testing
- **MongoDB Compass** - Database management
- **VS Code** - Code editor
- **ESLint** - Code linting
- **Prettier** - Code formatting

---

## ✅ Definition of Done

### For Each User Story
- [ ] Code follows team coding standards
- [ ] Code is committed to Git with meaningful commit messages
- [ ] Unit tests written and passing (minimum 80% coverage)
- [ ] Integration tests passing
- [ ] Code review completed by at least one team member
- [ ] Feature tested manually on development environment
- [ ] No critical or high-priority bugs
- [ ] API documentation updated (if applicable)
- [ ] User-facing documentation updated
- [ ] Product Owner has accepted the feature

### For Each Sprint
- [ ] All selected user stories meet individual DoD
- [ ] Sprint Review conducted with stakeholders
- [ ] Sprint Retrospective completed with action items
- [ ] Burndown chart updated and analyzed
- [ ] Increment is potentially shippable
- [ ] All code merged to main branch
- [ ] Deployment to staging environment successful

---

## 📅 Sprint 0 Deliverables Checklist

### Documentation
- [x] Product Backlog with 13+ user stories
- [x] User stories in correct format (As a... I want... So that...)
- [x] Story points estimated for all backlog items
- [x] Team roles assigned (Product Owner, Scrum Master, Developers)
- [x] System components assigned to team members
- [x] Sprint timeline defined (4 sprints over 12 weeks)
- [x] Definition of Done established
- [x] Scrum ceremonies scheduled

### Technical Setup (To be completed this week)
- [ ] Git repository created and shared with team
- [ ] Project folder structure initialized
- [ ] Development environment setup guide created
- [ ] Git workflow documented (branching strategy)
- [ ] Coding standards document created
- [ ] Team communication channels established (WhatsApp/Discord)

### Presentation Preparation
- [ ] Presentation slides prepared
- [ ] Each team member knows their role and responsibilities
- [ ] Product Backlog ready to present
- [ ] Questions prepared for Product Owner/Stakeholders

---

## 📞 Team Communication

### Primary Channels
- **WhatsApp Group:** Daily updates and quick questions
- **GitHub:** Code reviews, issues, and project management
- **Weekly Meetings:** Friday 12:30 – 2:30 (B401)

### Communication Guidelines
- Respond to messages within 24 hours
- Use GitHub issues for bug reports and feature requests
- Tag relevant team members in discussions
- Keep communication professional and constructive

---

## 🎯 Success Metrics

### Sprint Velocity
- **Target:** 40-50 story points per 3-week sprint
- **Measurement:** Total completed story points / number of sprints
- **Goal:** Maintain consistent velocity across sprints

### Code Quality
- **Test Coverage:** Minimum 80%
- **Code Review:** 100% of code reviewed before merge
- **Bug Rate:** Less than 5 bugs per sprint

### Team Performance
- **Daily Scrum Attendance:** 100%
- **Sprint Goal Achievement:** 90%+
- **On-time Delivery:** All sprints completed on schedule

---

## 📚 References

- **Scrum Guide:** https://scrumguides.org/
- **Agile Manifesto:** https://agilemanifesto.org/
- **MERN Stack Documentation:**
  - MongoDB: https://docs.mongodb.com/
  - Express.js: https://expressjs.com/
  - React.js: https://react.dev/
  - Node.js: https://nodejs.org/

---

**Document Prepared By:** Team Methsara Publications Web Store  
**Date:** January 29, 2026  
**Version:** 1.0  
**Status:** Ready for Sprint 0 Presentation
