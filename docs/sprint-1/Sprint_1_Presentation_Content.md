# Sprint 1 Presentation — ISP_G05
**Methsara Publications Webstore** | March 2, 2026

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

| Member | Epic | User Stories | Story Points | Hours |
|--------|------|--------------|-------------|-------|
| IT24100548 | E1 | 13 | 21 pts | 35 h |
| IT24101314 | E2 | 12 | 20 pts | 32 h |
| IT24100191 | E3 | 11 | 24 pts | 38 h |
| IT24100799 | E4 | 7 | 16 pts | 28 h |
| IT24100264 | E5 | 10 | 18 pts | 34 h |
| IT24101266 | E6 | 7 | 15 pts | 30 h |
| **Total** | | **60 stories** | **114 pts** | **197 h** |

> *Note: Sprint 1 scope was expanded beyond the initial backlog assignment — high-priority stories from later sprints were pulled forward to maximise delivery in the available capacity.*

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
| E1: User & Role Management | 13 | 11 | 2 (E1.1 - Email verification pending SMTP; E1.7 - Password reset email delivery pending SMTP) |
| E2: Product Catalog | 12 | 10 | 2 (E2.2 - Multi-image cloud storage upload integration; E2.7 - Product sort & pagination UI refinement) |
| E3: Order & Transaction | 11 | 9 | 2 (E3.9 - Financial dashboard frontend charts; E3.10 - PDF invoice template design pending) |
| E4: Supplier Management | 7 | 5 | 2 (E4.4 - Email POs pending SMTP; E4.5 - Product–supplier linking UI) |
| E5: Inventory Management | 10 | 8 | 2 (E5.10 - Stock report export formatting pending; E5.7 - Branch location management UI) |
| E6: Promotion & Loyalty | 7 | 5 | 2 (E6.4 - Gift voucher purchase flow; E6.5 - Seasonal campaign scheduling UI) |
| **TOTAL** | **60** | **48 (80%)** | **12 (20%)** |

### Each Member Summary:

**E1 - User & Role Management (IT24100548)**
- **Completed:** Registration, login, JWT authentication, 8-role RBAC, profile management, session management, maker-checker approval workflow, forced password change on first login, account deactivation, staff role assignment, admin search/view accounts
- **Status:** 11/13 stories complete, all core functionality working
- **In Progress:**
  - E1.1 — Email verification: code complete, awaiting SMTP credentials for delivery
  - E1.7 — Password reset via email: reset-token logic done, email dispatch blocked by SMTP

**E2 - Product Catalog (IT24101314)**
- **Completed:** Product CRUD, category management, search & filter by name/SKU/grade/subject/price, detailed product view, review & rating system, verified purchase validation, product archiving, product analytics
- **Status:** 10/12 stories complete
- **In Progress:**
  - E2.2 — Multi-image upload: single-image upload working; cloud storage (S3/Cloudinary) integration for multiple images in progress
  - E2.7 — Product sorting UI: backend sort endpoints ready; frontend sort/pagination controls under development

**E3 - Order & Transaction (IT24100191)**
- **Completed:** Shopping cart, order processing, COD & bank transfer checkout, order status tracking, admin order status updates, coupon discount application, guest checkout, order history, transaction tracking, refund processing
- **Status:** 9/11 stories complete
- **In Progress:**
  - E3.9 — Financial dashboard: revenue data API complete; frontend chart components (Chart.js integration) still in development
  - E3.10 — Invoice generation: invoice data model and endpoint done; PDF template design and rendering (PDFKit) pending

**E4 - Supplier Management (IT24100799)**
- **Completed:** Supplier CRUD, supplier verification system, purchase order creation with auto-numbering, PO status workflow, delivery verification against POs
- **Status:** 5/7 stories complete
- **In Progress:**
  - E4.4 — Email POs to suppliers: PDF generation ready; SMTP email dispatch awaiting credentials
  - E4.5 — Product–supplier linking: data model relationship defined; linking UI and filtering by supplier in progress

**E5 - Inventory Management (IT24100264)**
- **Completed:** Multi-location inventory tracking, stock adjustments (damage/loss), stock transfers with approval workflow, low stock alerts, automatic stock deduction on order placement, product-inventory sync
- **Status:** 8/10 stories complete
- **In Progress:**
  - E5.10 — Stock report export: data aggregation API ready; CSV/Excel export formatting and download endpoint pending
  - E5.7 — Branch location management UI: backend CRUD for locations complete; frontend admin panel for managing warehouse locations in progress

**E6 - Promotion & Loyalty (IT24101266)**
- **Completed:** Coupon system with validation rules, coupon validity dates, usage limit enforcement, coupon usage tracking, redemption tracking, analytics dashboard
- **Status:** 5/7 stories complete
- **In Progress:**
  - E6.4 — Gift vouchers: voucher model and generation logic done; purchase flow, balance tracking, and redemption at checkout in progress
  - E6.5 — Seasonal campaigns: campaign data model and admin creation endpoint ready; campaign scheduling, activation triggers, and frontend campaign listing UI in progress

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
   - Impact: 3 stories (E1.1, E1.7, E4.4) remain in progress — code and logic are complete, only email delivery is blocked

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
