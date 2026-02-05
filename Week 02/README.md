# Week 02: Jira Product Backlog
## Methsara Publications Webstore

---

## 📋 Overview

This guide helps you create a comprehensive **Product Backlog** in Jira for the Methsara Publications webstore project.

**Total Duration**: Week 02  
**Deliverables**: 6 Epics, 37 User Stories, All with acceptance criteria and story points

---

## 🎯 6 Core Epics

| Epic ID | Epic Name | Description |
|---------|-----------|-------------|
| **E1** | **User & Identity** | Registration, login, role-based access, and security |
| **E2** | **Catalog Discovery** | Book listings, grade/exam filtering, and search |
| **E3** | **Shopping, Checkout & Orders** | Cart, payment, order processing, and tracking |
| **E4** | **Supplier Management** | Supplier relations and purchase orders |
| **E5** | **Inventory Management** | Stock tracking, alerts, and adjustments |
| **E6** | **Promotions** | Coupons, campaigns, and loyalty rewards |

---

## 👥 Team Assignments

| IT Number | Name | Epic | Focus Area |
|-----------|------|------|------------|
| IT24100548 | Galagama S.T | E1: User & Identity | Authentication & Security |
| IT24101314 | Appuhami H A P L | E2: Catalog Discovery | Product Browsing & Search |
| IT24100191 | Jayasinghe D.B.P | E3: Shopping, Checkout & Orders | Complete Purchase Flow |
| IT24100799 | Gawrawa G H Y | E4: Supplier Management | Supplier Relations |
| IT24100264 | Bandara N W C D | E5: Inventory Management | Stock Tracking |
| IT24101266 | Perera M.U.E | E6: Promotions | Marketing & Growth |

---

## 🚀 Quick Start: Creating Epics in Jira

### Step 1: Create Your Epic

1. Open Jira → Click **"Epics"** → **"Create Epic"**
2. Use the templates below for each Epic

### Epic Templates (Copy-Paste Ready)

#### E1: User & Identity
```
Epic Name: User & Identity
Summary: User authentication and identity management
Description: Registration, login, role-based access, and security features for the webstore.
Priority: Highest
Labels: authentication, security, foundation
```

#### E2: Catalog Discovery
```
Epic Name: Catalog Discovery
Summary: Product catalog and discovery features
Description: Book listings, grade/exam filtering, search functionality, and product browsing.
Priority: Highest
Labels: catalog, search, core-feature
```

#### E3: Shopping, Checkout & Orders
```
Epic Name: Shopping, Checkout & Orders
Summary: Complete purchase and order flow
Description: Cart operations, checkout, payment integration, order processing, tracking, and invoices.
Priority: Highest
Labels: cart, checkout, payment, orders, revenue
```

#### E4: Supplier Management
```
Epic Name: Supplier Management
Summary: Supplier relations and procurement
Description: Supplier information management and purchase order creation.
Priority: Medium
Labels: suppliers, procurement, operations
```

#### E5: Inventory Management
```
Epic Name: Inventory Management
Summary: Stock tracking and management
Description: Real-time stock tracking, low stock alerts, and inventory adjustments.
Priority: Medium
Labels: inventory, stock, operations
```

#### E6: Promotions
```
Epic Name: Promotions
Summary: Marketing and promotional features
Description: Coupons, discount campaigns, loyalty rewards, and gift vouchers.
Priority: Medium
Labels: marketing, promotions, growth
```

---

## 📊 Epic Priorities & Dependencies

### Implementation Order
```
1. E1: User & Identity (FIRST - Foundation)
   ↓
2. E2: Catalog Discovery (SECOND - Core Value)
   ↓
3. E3: Shopping, Checkout & Orders (THIRD - Revenue)
   ↓
4. E5: Inventory Management (FOURTH - Operations)
   ↓
5. E4: Supplier Management (FIFTH - Procurement)
   ↓
6. E6: Promotions (SIXTH - Growth)
```

### Priority Levels
- **Highest Priority (Must Have)**: E1, E2, E3
- **Medium Priority (Should Have)**: E4, E5, E6

---

## ✍️ Writing User Stories

### User Story Format
```
As a [type of user],
I want [goal/desire],
So that [benefit/value].
```

### Example User Stories

#### Epic E1: User & Identity
**Story: User Registration**
```
As a new customer,
I want to create an account on the Methsara Publications webstore,
So that I can track my orders and save my preferences.
```

**Acceptance Criteria:**
- [ ] Registration form includes: Full Name, Email, Password, Phone Number
- [ ] Email validation ensures proper format
- [ ] Password minimum 8 characters with 1 uppercase, 1 lowercase, 1 number
- [ ] Email verification link sent to user's email
- [ ] User cannot log in until email is verified

**Story Points:** 5

---

#### Epic E2: Catalog Discovery
**Story: Filter by Grade Level**
```
As a parent,
I want to filter products by grade level,
So that I can find materials appropriate for my child's education level.
```

**Acceptance Criteria:**
- [ ] Filter sidebar with grade checkboxes (Grade 6-13)
- [ ] Multiple grade selection allowed
- [ ] Product list updates dynamically when filters applied
- [ ] "Clear all filters" button available
- [ ] Filter count shows number of matching products

**Story Points:** 5

---

#### Epic E3: Shopping, Checkout & Orders
**Story: Add Items to Cart**
```
As a student,
I want to add multiple books to my shopping cart,
So that I can purchase all my required materials at once.
```

**Acceptance Criteria:**
- [ ] "Add to Cart" button visible on product pages
- [ ] Cart icon shows item count
- [ ] Can update quantity in cart
- [ ] Can remove items from cart
- [ ] Cart persists across sessions (for logged-in users)

**Story Points:** 5

---

## 📈 Story Point Estimation

Use the **Fibonacci sequence**: 1, 2, 3, 5, 8, 13, 21

### Guidelines
- **1 point**: Very simple, < 2 hours
- **2 points**: Simple, 2-4 hours
- **3 points**: Moderate, 4-8 hours
- **5 points**: Complex, 1-2 days
- **8 points**: Very complex, 2-3 days
- **13 points**: Extremely complex, consider breaking down
- **21+ points**: Too large, must break into smaller stories

---

## ✅ Acceptance Criteria Best Practices

### Good Acceptance Criteria Are:
- ✅ Specific and measurable
- ✅ Written from user perspective
- ✅ Testable (can verify completion)
- ✅ Clear definition of "done"

### Example Format (Given-When-Then):
```
Given I am on the product page,
When I click "Add to Cart",
Then the item should appear in my cart,
And the cart count should increase by 1,
And I should see a confirmation message.
```

---

## 🎯 Prioritization (MoSCoW Method)

- **Must Have**: Critical for launch (E1, E2, E3 core features)
- **Should Have**: Important but not critical (E4, advanced features)
- **Could Have**: Nice to have (E5, E6, enhancements)
- **Won't Have**: Not in this release

---

## 📤 Week 02 Deliverables

By end of week, you should have:

- ✅ Jira project created and configured
- ✅ **6 Epics** created with descriptions
- ✅ **37 User Stories** total
- ✅ All stories with **acceptance criteria**
- ✅ All stories **estimated** with story points
- ✅ **Backlog prioritized** (High/Medium/Low)
- ✅ Team members assigned to Epics
- ✅ Screenshots/export for submission

---

## 📊 Expected Story Distribution

| Epic | Stories | Story Points |
|------|---------|--------------|
| E1: User & Identity | 6 | ~23 |
| E2: Catalog Discovery | 8 | ~37 |
| E3: Shopping, Checkout & Orders | 13 | ~64 |
| E4: Supplier Management | 2 | ~13 |
| E5: Inventory Management | 3 | ~11 |
| E6: Promotions | 5 | ~29 |
| **Total** | **37** | **~177** |

---

## 📚 Additional Resources

- **Complete_Product_Backlog.md** - Full list of 50+ user story examples
- **Jira_Quick_Start.md** - Technical Jira setup guide
- **Product_Backlog_Guide.md** - Detailed backlog management guide
- **Team_Task_Assignments.md** - Task distribution among team
- **Assignment_Guide.md** - How to assign stories in Jira

---

## 💡 Tips for Success

1. **Collaborate**: Involve the whole team in backlog creation
2. **Be Specific**: Vague stories lead to confusion
3. **Think User-First**: Focus on user value, not technical implementation
4. **Keep It Updated**: Backlog is a living document
5. **Break Down Large Stories**: If a story is > 8 points, split it
6. **Use Consistent Naming**: Always use Epic IDs (E1-E6)

---

## ✅ Pre-Submission Checklist

- [ ] All 6 Epics created in Jira
- [ ] All 37 user stories created
- [ ] All stories have acceptance criteria
- [ ] All stories estimated with story points
- [ ] Stories linked to appropriate Epics
- [ ] Backlog prioritized
- [ ] Screenshots taken:
  - [ ] Project dashboard
  - [ ] Epic roadmap
  - [ ] Product backlog view
  - [ ] Sample user stories
- [ ] Export backlog to Excel/CSV (if required)

---

**Ready to build an excellent Product Backlog! 🚀**

**Product Owner**: Methsara Publications  
**Team Size**: 6 members  
**Project Key**: MPW
