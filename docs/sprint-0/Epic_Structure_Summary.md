# Epic Structure Summary - Final 6-Epic Organization

## Overview

**Total Epics**: 6  
**Total Stories**: 37  
**Total Story Points**: ~177  
**Team Members**: 6 (1:1 Epic-to-Member mapping)

---

## Final Epic Structure

| Epic ID | Epic Name | Stories | Points | Priority | Assigned To | IT Number |
|---------|-----------|---------|--------|----------|-------------|-----------|
| **E1** | User & Identity | 6 | ~23 | Highest | Galagama S.T | IT24100548 |
| **E2** | Catalog Discovery | 8 | ~37 | Highest | Appuhami H A P L | IT24101314 |
| **E3** | Shopping, Checkout & Orders | 13 | ~64 | Highest | Jayasinghe D.B.P | IT24100191 |
| **E4** | Supplier Management | 2 | ~13 | Medium | Gawrawa G H Y | IT24100799 |
| **E5** | Inventory Management | 3 | ~11 | Medium | Bandara N W C D | IT24100264 |
| **E6** | Promotions | 5 | ~29 | Medium | Perera M.U.E | IT24101266 |

---

## Epic Details

### E1: User & Identity
**Assigned To**: Galagama S.T (IT24100548)  
**Description**: Registration, login, role-based access, and security  
**Stories**: 6 | **Points**: ~23

- E1.1: User Registration (5 pts)
- E1.2: User Login (3 pts)
- E1.3: Password Reset (5 pts)
- E1.4: User Logout (2 pts)
- E1.5: Role-Based Access Control (5 pts)
- E1.6: User Profile Management (3 pts)

### E2: Catalog Discovery
**Assigned To**: Appuhami H A P L (IT24101314)  
**Description**: Book listings, grade/exam filtering, and search  
**Stories**: 8 | **Points**: ~37

- E2.1: Browse Products by Category (5 pts)
- E2.2: Filter Products by Grade Level (5 pts)
- E2.3: Filter Products by Subject (3 pts)
- E2.4: View Product Details (5 pts)
- E2.5: Product Search (5 pts)
- E2.6: Sort Products (3 pts)
- E2.7: Filter by Exam Type (3 pts)
- E2.8: Product Reviews and Ratings (8 pts)

### E3: Shopping, Checkout & Orders
**Assigned To**: Jayasinghe D.B.P (IT24100191)  
**Description**: Cart, payment, order processing, and tracking  
**Stories**: 13 | **Points**: ~64

**Cart Management (5 stories, ~20 pts)**
- E3.1: Add Items to Cart (5 pts)
- E3.2: View Shopping Cart (5 pts)
- E3.3: Update Cart Quantities (3 pts)
- E3.4: Remove Items from Cart (2 pts)
- E3.5: Apply Discount Codes (5 pts)

**Checkout & Payment (2 stories, ~13 pts)**
- E3.6: Complete Checkout Process (8 pts)
- E3.7: Guest Checkout (5 pts)

**Order Management (6 stories, ~31 pts)**
- E3.8: Order Confirmation (3 pts)
- E3.9: View Order History (5 pts)
- E3.10: Track Order Status (5 pts)
- E3.11: Cancel Order (5 pts)
- E3.12: Generate Invoice (5 pts)
- E3.13: Admin Order Management (8 pts)

### E4: Supplier Management
**Assigned To**: Gawrawa G H Y (IT24100799)  
**Description**: Supplier relations and purchase orders  
**Stories**: 2 | **Points**: ~13

- E4.1: Manage Suppliers (5 pts)
- E4.2: Create Purchase Orders (8 pts)

### E5: Inventory Management
**Assigned To**: Bandara N W C D (IT24100264)  
**Description**: Stock tracking, alerts, and adjustments  
**Stories**: 3 | **Points**: ~11

- E5.1: Real-Time Stock Tracking (5 pts)
- E5.2: Low Stock Alerts (3 pts)
- E5.3: Stock Adjustment (3 pts)

### E6: Promotions
**Assigned To**: Perera M.U.E (IT24101266)  
**Description**: Coupons, campaigns, and loyalty rewards  
**Stories**: 5 | **Points**: ~29

- E6.1: Create Discount Coupons (5 pts)
- E6.2: Manage Coupon Rules (3 pts)
- E6.3: View Coupon Usage Reports (5 pts)
- E6.4: Purchase Gift Vouchers (8 pts)
- E6.5: Loyalty Points System (8 pts)

---

## Implementation Priority

```
1. E1: User & Identity (Foundation)
   ↓
2. E2: Catalog Discovery (Core Value)
   ↓
3. E3: Shopping, Checkout & Orders (Revenue)
   ↓
4. E5: Inventory Management (Operations)
   ↓
5. E4: Supplier Management (Procurement)
   ↓
6. E6: Promotions (Growth)
```

---

## Key Changes from Original Structure

### What Changed

1. **Merged Shopping Cart + Checkout + Orders** → E3 (was E3 + E4)
   - Combined the entire purchase flow into one Epic
   - Assigned to Jayasinghe D.B.P (13 stories, ~64 points)

2. **Separated Supplier Management** → E4
   - Moved from combined "Inventory & Supply"
   - Now standalone Epic for Gawrawa G H Y (2 stories, ~13 points)

3. **Kept Inventory Management** → E5
   - Stock-focused only (3 stories, ~11 points)
   - Assigned to Bandara N W C D

4. **Kept Promotions** → E6
   - Unchanged (5 stories, ~29 points)
   - Assigned to Perera M.U.E

### Rationale

- **6 Epics for 6 Team Members**: Perfect 1:1 mapping
- **Clear Ownership**: Each team member owns one Epic
- **Logical Grouping**: Shopping → Checkout → Orders flow is unified
- **Balanced Workload**: Story points range from 11 to 64

---

## Files Updated

✅ **README.md** - All Epic tables, templates, team assignments, implementation order  
⚠️ **Complete_Product_Backlog.md** - Needs cleanup (backup created)

---

**Last Updated**: February 5, 2026  
**Structure Version**: 6-Epic Final  
**Ready for Jira**: ✅
