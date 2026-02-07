# Sprint 0 Presentation Content - Methsara Publications Webstore

Use this content to populate your presentation slides.

---

## Slide 1: Project Overview

**Project Title:** Methsara Publications Webstore
**Group ID:** [Insert Group ID Here]

**Project Team & Roles:**

| Role | Name | Assignment |
|------|------|------------|
| **Product Owner** | Methsara Publications | Client / Requirements Authority |
| **Scrum Master** | Gawrawa G H Y | Process Facilitation |
| **Development Team** | Galagama S.T | Epic 1: User & Admin Component |
| | Appuhami H A P L | Epic 2: Product Catalog Component |
| | Jayasinghe D.B.P | Epic 3: Order & Transaction Component |
| | Gawrawa G H Y | Epic 4: Supplier Management Component |
| | Bandara N W C D | Epic 5: Inventory Management Component |
| | Perera M.U.E | Epic 6: Promotion & Loyalty Component |

---

## Slide 2: Problem Identification

**The Problem:**
Students, parents, and teachers currently lack a centralized, accessible digital platform to purchase Methsara Publications' educational materials.

**Who is Affected:**
*   **Students (Grades 6-13):** Difficulty finding specific past papers and revision books.
*   **Parents:** Inconvenience of visiting physical bookshops to find required texts.
*   **Teachers:** Challenges in recommending and sourcing bulk materials for classes.
*   **Methsara Publications:** Limited market reach and manual order processing inefficiencies.

**Importance:**
*   Digital access to education is now a necessity, not a luxury.
*   Physical stock limitations often prevent students from getting exam materials on time.
*   Competitors are already moving online, risking market share loss.

---

## Slide 3: Stakeholder Identification

| Stakeholder | Type | Interest / Concern |
|-------------|------|--------------------|
| **Methsara Publications** | Primary | Increased sales, brand visibility, efficient inventory management. |
| **Students & Parents** | Primary | Easy access to books, secure payments, quick delivery. |
| **Teachers / Schools** | Secondary | Bulk ordering, curriculum alignment, resource availability. |
| **Delivery Partners** | Tertiary | Accurate pickup/drop-off details, timely order readiness. |
| **Payment Gateway** | Tertiary | Secure transaction processing. |

---

## Slide 4: Product Vision Statement

**Vision:**
"To create Sri Lanka’s most student-centric digital bookstore, empowering learners with instant access to quality educational resources through a seamless, secure, and user-friendly online platform."

**Value Proposition:**
*   **For Students:** A one-stop-shop for all curriculum needs (Grades 6-13).
*   **For Parents:** Convenience of home delivery and secure payments.
*   **For Methsara:** Automated sales channel operating 24/7.

---

## Slide 5: Epics Overview

**Total Epics:** 6 | **Total Stories:** 37

| Epic ID | Epic Name | High-Level Description |
| :--- | :--- | :--- |
| **E1** | **User & Admin Component** | Registration, login, role-based access, and security architecture. |
| **E2** | **Product Catalog Component** | Book listings, grade/exam filtering, and advanced search. |
| **E3** | **Order & Transaction Component** | Cart management, checkout, payment options (Bank Slip/COD), and order tracking. |
| **E4** | **Supplier Management Component** | Supplier information management and purchase order creation. |
| **E5** | **Inventory Management Component** | Real-time stock tracking, low stock alerts, and inventory adjustments. |
| **E6** | **Promotion & Loyalty Component** | Coupon codes, discount campaigns, and loyalty rewards system. |

**How Epics Relate to Problem & Vision:**

*   **Summary:** **E2 & E3** provide the central platform, **E1 & E6** ensure a secure student-centric experience, and **E4 & E5** enable efficient backend delivery.

---

## Slide 6: Initial Product Backlog (High Priority)

*Focus on Core Functionality (Foundation & Revenue)*

| Epic | Key Story | Priority | Points |
|------|-----------|----------|--------|
| **E1** | User Registration & Login | **Highest** | 8 |
| **E2** | Browse by Grade & Subject | **Highest** | 8 |
| **E3** | Add to Cart & Checkout | **Highest** | 13 |
| **E3** | Guest Checkout | **High** | 5 |
| **E5** | Real-time Stock Tracking | **High** | 5 |

**Justification:** "We prioritized **User Registration** and **Checkout** as 'Highest' because the system cannot function as an e-commerce store without identifying users and processing transactions. These are critical dependencies for all other features."

---

## Slide 7: Initial Product Backlog (Medium Priority)

*Focus on User Experience & Operations*

| Epic | Key Story | Priority | Points |
|------|-----------|----------|--------|
| **E1** | Password Reset | Medium | 5 |
| **E2** | Sort Products | Medium | 3 |
| **E3** | Update Cart Quantities | Medium | 3 |
| **E4** | Manage Suppliers | Medium | 5 |
| **E6** | Create Discount Coupons | Medium | 5 |

**Justification:** "Features like **sorting** and **coupons** enhance the experience but are not blockers for the MVP (Minimum Viable Product). Customers can still find and buy books without them."

---

## Slide 8: Initial Product Backlog (Low Priority)

*Focus on Value-Add & Enhancements*

| Epic | Key Story | Priority | Points |
|------|-----------|----------|--------|
| **E2** | Product Reviews & Ratings | Low | 8 |
| **E3** | Cancel Order | Low | 5 |
| **E6** | Loyalty Points System | Low | 8 |

**Justification:** "While **Reviews** and **Loyalty Points** are valuable for growth, they add complexity that should only be addressed after the core sales cycle is fully stable."

---

## Slide 9: Definition of Done (DoD)

**General DoD (Applied to all stories):**
1.  ✅ Code is implemented and committed to Git.
2.  ✅ Unit tests passed (minimum 80% coverage).
3.  ✅ Peer review completed and approved.
4.  ✅ Feature functionality verified manually.
5.  ✅ Acceptance criteria met.

**Epic-Specific DoD Example (E2 - Product Catalog):**
*   "Products displayed with correct pricing and grade level."
*   "Search functionality returns accurate results."
*   "Product images load correctly."

**How DoD Ensures Quality & Completeness:**
*   **Quality:** "Code reviews and 80% test coverage prevent production bugs."
*   **Completeness:** "Acceptance criteria ensure we build exactly what the user needs."

---

## Slide 10: Sprint 1 Plan & Team Utilization

**Goal:** Establish Foundation (Auth + Catalog) & Prepare Core Components
**Duration:** 3 Weeks

**Primary Development Focus (Active Coding):**
*   **E1 (User & Admin):** Registration & Login (Galagama S.T)
*   **E2 (Product Catalog):** Browsing & Search (Appuhami H A P L)

**Parallel Technical Preparation (Design & Schema):**
*   **E3 (Orders):** Database schema for Cart/Orders (Jayasinghe D.B.P)
*   **E4 (Suppliers):** Supplier API research (Gawrawa G H Y)
*   **E5 (Inventory):** Stock tracking logic design (Bandara N W C D)
*   **E6 (Promotions):** Coupon system architecture (Perera M.U.E)

**Why this plan?**
*   **Full Utilization:** All 6 members are contributing (2 coding, 4 designing).
*   **Dependency Management:** Foundation is built while complex features are designed.
*   **Risk Mitigation:** Database schema is validated before mass coding begins.

> **Note:** These plans are tentative and may change after further backlog refinement and team capacity assessment.
