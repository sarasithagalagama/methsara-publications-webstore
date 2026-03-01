# Sprint 1 Presentation — ISP_G05
**Methsara Publications Webstore** | March 1, 2026

---

## Slide 1 — Project Overview

**Methsara Publications Webstore**
*Centralized Educational Materials Platform — Sri Lanka*

### Group ID: ISP_G05

| Member | Student ID | Epic | Scrum Role |
|--------|-----------|------|------------|
| Gawrawa G H Y | IT24100799 | E4: Supplier Management | Scrum Master |
| Galagama S.T | IT24100548 | E1: User & Role Management | Product Owner |
| Appuhami H A P L | IT24101314 | E2: Product Catalog | Dev Team |
| Jayasinghe D.B.P | IT24100191 | E3: Order & Transaction | Dev Team |
| Bandara N W C D | IT24100264 | E5: Inventory Management | Dev Team |
| Perera M.U.E | IT24101266 | E6: Promotion & Loyalty | Dev Team |

**Technology Stack:** React.js · Node.js/Express · MongoDB · JWT Auth

---

## Slide 2 — Sprint 0 Recap

### Problem Statement
- No centralized platform for educational materials in Sri Lanka
- Schools contact multiple publishers manually → 3–5 day fulfillment delays
- No real-time inventory visibility across warehouse locations
- No targeted promotion tools for publishers and distributors

### Identified Epics

| Epic | Owner | Focus Area |
|------|-------|------------|
| E1 | IT24100548 | User & Role Management (Authentication & 8-role RBAC) |
| E2 | IT24101314 | Product Catalog (Product management, search, reviews) |
| E3 | IT24100191 | Order & Transaction (Orders, payments, financial dashboard) |
| E4 | IT24100799 | Supplier Management (Supplier & purchase order management) |
| E5 | IT24100264 | Inventory Management (Multi-location inventory & transfers) |
| E6 | IT24101266 | Promotion & Loyalty (Campaigns, coupons, gift vouchers) |

---

## Slide 3 — Sprint 1 Planning Summary

### Sprint Goal
*"Deliver functional backend, database, and core UI for all 6 epics — demonstrable end-to-end by Week 7"*

### Selected High-Priority User Stories

| Member | Epic | User Stories | Hours |
|--------|------|--------------|-------|
| IT24100548 | E1 | 13 | 35 h |
| IT24101314 | E2 | 12 | 32 h |
| IT24100191 | E3 | 11 | 38 h |
| IT24100799 | E4 | 7 | 28 h |
| IT24100264 | E5 | 10 | 34 h |
| IT24101266 | E6 | 7 | 30 h |
| **Total** | | **60 stories / 107 pts** | **197 h** |

### Definition of Done Applied in Sprint 1
- Acceptance criteria met
- Correct HTTP status codes implemented
- Schema validation enforced
- Role authorization checked
- Postman tested (happy + error paths)
- Cross-epic integration verified
- Epic README documented


---

## Slide 4 — Epic wise Progress Summary

| Epic Planned | User Stories | Completed | In Progress |
|--------------|--------------|-----------|-------------|
| E1: User & Role Management | 13 | 12 | 1 (E1.1 - Email verification pending SMTP) |
| E2: Product Catalog | 12 | 12 | 0 |
| E3: Order & Transaction | 11 | 11 | 0 |
| E4: Supplier Management | 7 | 6 | 1 (E4.4 - Email POs pending SMTP) |
| E5: Inventory Management | 10 | 9 | 1 (E5.10 - Report export pending) |
| E6: Promotion & Loyalty | 7 | 7 | 0 |
| **TOTAL** | **60** | **57 (95%)** | **3 (5%)** |

### Each Member Summary:

**E1 - User & Role Management (IT24100548)**
- **Completed:** Registration, login, JWT authentication, 8-role RBAC, profile management, password reset, session management, maker-checker approval workflow
- **Status:** 12/13 stories complete, all core functionality working
- **Pending:** Email verification (waiting for SMTP credentials)

**E2 - Product Catalog (IT24101314)**
- **Completed:** Product CRUD, image uploads, search & filter, categories, reviews, ratings, verified purchase system, product archiving
- **Status:** 12/12 stories complete (100%)
- **Pending:** None

**E3 - Order & Transaction (IT24100191)**
- **Completed:** Shopping cart, order processing, payment integration, invoice generation, financial dashboard, transaction tracking, refund processing
- **Status:** 11/11 stories complete (100%)
- **Pending:** None

**E4 - Supplier Management (IT24100799)**
- **Completed:** Supplier CRUD, verification system, purchase order creation with auto-numbering, PO status workflow, delivery verification, supplier analytics
- **Status:** 6/7 stories complete
- **Pending:** Email PO to supplier (waiting for SMTP credentials)

**E5 - Inventory Management (IT24100264)**
- **Completed:** Multi-location inventory tracking, stock adjustments, location management, stock transfers with approval, low stock alerts, product-inventory sync
- **Status:** 9/10 stories complete
- **Pending:** Stock report export (data API ready, export formatting pending)

**E6 - Promotion & Loyalty (IT24101266)**
- **Completed:** Coupon system with validation, marketing campaigns, gift vouchers, usage limits, grade-level targeting, redemption tracking, analytics
- **Status:** 7/7 stories complete (100%)
- **Pending:** None

---

## Slide 5 — Challenges and Improvements

### Technical Challenges Faced

1. **Cross-Epic Integration Complexity**
   - Challenge: E3 (Orders) needed to interact with E2 (Products), E5 (Inventory), and E6 (Promotions) atomically
   - Solution: Implemented transaction-like controller logic with rollback mechanisms

2. **Role Authorization Conflicts**
   - Challenge: `master_inventory_manager` couldn't access E4 purchase order routes initially
   - Solution: Added role to authorization middleware arrays in E4 routes

3. **Inventory-Product Stock Sync**
   - Challenge: Manual sync required between main location inventory and product stock
   - Solution: Created `syncProductStock()` static method that auto-updates on inventory changes

4. **SMTP Configuration Blocker**
   - Challenge: Email features blocked by missing production SMTP credentials
   - Impact: 2 stories (E1.1, E4.4) remain incomplete but code is ready

### Requirement Clarifications & Adjustments

1. **Guest Orders** — Added support for guest checkout (originally only planned for registered users)
2. **Soft Delete Pattern** — Changed from hard delete to `isArchived` flag to preserve order history references
3. **Multi-Location Inventory** — Expanded from single warehouse to multi-location with transfer workflow
4. **PO Status History** — Added audit trail array instead of single status field

### Improvements Made During Sprint 1

1. **Reusable Auth Middleware** — `protect` and `authorize` functions used across all 6 epics
2. **Standardized Error Responses** — Consistent HTTP status codes and error format
3. **API Documentation** — Each epic has comprehensive Postman collection
4. **Cross-Epic Data Validation** — Controllers verify referenced data exists in other epics

### Lessons Learned

1. **Backend-First Approach Works** — Stabilizing APIs before UI prevented rework
2. **Early Integration Testing Essential** — Caught cross-epic bugs early
3. **Clear DoD Prevents Scope Creep** — Pre-defined criteria helped maintain focus
4. **External Dependencies Need Contingency** — SMTP blocker should have had mock alternative
5. **Role Matrix Documentation Critical** — Saved hours of debugging authorization issues

---

*End of Sprint 1 Presentation — ISP_G05*
