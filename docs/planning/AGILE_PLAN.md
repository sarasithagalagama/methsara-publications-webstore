# Agile Project Plan for Methsara Publications Webstore

## 1. Project Overview
This project aims to develop a full-stack e-commerce web application for Methsara Publications, a specialist educational publisher in Sri Lanka. The system will facilitate online sales of educational materials (books, past papers, model papers) for students in grades 6-13, focusing on O/L and A/L examinations.

### Key Stakeholders
- **Product Owner**: Methsara Publications (Client)
- **Scrum Master**: Gawrawa G H Y
- **Development Team**: 6 Members

---

## 2. Sprint Schedule (12 Weeks)

| Sprint | Duration | Focus Area | Dates (Estimated) |
|--------|----------|------------|-------------------|
| **Sprint 0** | Weeks 1-2 | Planning, Setup, Architecture | Jan 27 - Feb 7 |
| **Sprint 1** | Weeks 3-5 | Core Features (Auth, Catalog) | Feb 10 - Feb 28 |
| **Sprint 2** | Weeks 6-8 | E-commerce (Cart, Orders) | Mar 3 - Mar 21 |
| **Sprint 3** | Weeks 9-11 | Advanced (Inventory, Promos) | Mar 24 - Apr 11 |
| **Sprint 4** | Week 12 | Deployment, Viva, Final Polish | Apr 14 - Apr 18 |

---

## 3. Sprint Breakdown

### Sprint 0: Foundation (Current)
**Goal:** Establish project structure, backlog, and architecture.
- [x] Requirement Analysis
- [x] Product Backlog Creation
- [x] Team Assignments
- [x] Technology Stack Finalization (MERN)
- [ ] Git Repository Setup
- [ ] UI/UX Prototyping (Figma)
- [ ] Database Schema Design

### Sprint 1: The Core
**Goal:** User management and product browsing.
- **Stories:**
  - User Registration & Login (JWT)
  - Role-based Access Control (Admin/User)
  - Product Catalog Display
  - Search & Filtering (Grade, Exam, Subject)
  - Admin: Manage Products (CRUD)

### Sprint 2: The Transaction
**Goal:** Enable purchasing and order management.
- **Epics:**
  - **E1: User & Admin Component** - Registration, login, role-based access, and security
  - **E2: Product Catalog Component** - Book listings, grade/exam filtering, and search
  - **E3: Order & Transaction Component** - Cart, checkout, payment, order processing, and tracking
  - **E4: Supplier Management Component** - Supplier relations and purchase orders
  - **E5: Inventory Management Component** - Stock tracking, alerts, and adjustments
  - **E6: Promotion & Loyalty Component** - Coupons, campaigns, and loyalty rewards
  - Admin Dashboards & Reporting

### Sprint 3: The Operations
**Goal:** Inventory control and business growth tools.
- **Stories:**
  - Inventory Management (Stock tracking)
  - Supplier Management
  - Discount Codes & Coupons
  - Gift Vouchers
  - Admin Dashboards & Reporting

### Sprint 4: The Final Polish
**Goal:** Testing, deployment, and handover.
- **Tasks:**
  - End-to-End Testing
  - Bug Fixes & Performance Tuning
  - Deployment (Vercel/Heroku/AWS)
  - Documentation (User & Technical)
  - Final Viva Presentation

---

## 4. Team Roles & Responsibilities

| Role | Responsibility | Assigned To |
|------|----------------|-------------|
| **Product Owner** | Define requirements, Prioritize backlog | Methsara Publications |
| **Scrum Master** | Facilitate ceremonies, Remove blockers | Gawrawa G H Y |
| **Tech Lead** | Architecture decisions, Code reviews | (Rotational/Joint) |
| **Frontend Devs** | UI Implementation (React) | All (Component based) |
| **Backend Devs** | API Development (Node/Express) | All (Component based) |

---

## 5. Scrum Ceremonies

1.  **Sprint Planning** (Monday, Week 1 of Sprint): Select stories, estimate points.
2.  **Daily Standup** (Daily, 15 mins): Status updates.
3.  **Sprint Review** (Friday, Last Week of Sprint): Demo to client/lecturer.
4.  **Sprint Retrospective** (After Review): What went well? What needs improvement?

## 6. Definition of Done (DoD)
- Code committed and pushed to `develop` branch.
- Reviewed by at least one team member.
- Unit tests passed (if applicable).
- Functional on local/staging environment.
- Acceptance criteria met.
