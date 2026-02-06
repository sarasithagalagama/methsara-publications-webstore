# Week 02: Jira Product Backlog Guide
## Methsara Publications Webstore

---

## 📋 Overview

This guide will help you create a comprehensive **Product Backlog** in Jira for the Methsara Publications webstore project. The Product Backlog is a prioritized list of features, enhancements, and fixes that need to be implemented.

---

## 🎯 Objectives

1. Set up Jira project workspace
2. Create well-defined user stories
3. Organize and prioritize backlog items
4. Establish story point estimates
5. Define acceptance criteria for each story

---

## 📚 What is a Product Backlog?

The Product Backlog is a living document that contains:
- **User Stories**: Features from the user's perspective
- **Technical Tasks**: Infrastructure and technical requirements
- **Bugs**: Known issues to be fixed
- **Enhancements**: Improvements to existing features

### Key Characteristics:
- ✅ Prioritized by business value
- ✅ Continuously refined and updated
- ✅ Owned by the Product Owner
- ✅ Visible to the entire team

---

## 🏗️ Jira Setup Steps

### Step 1: Create Jira Project
1. Log in to Jira
2. Click **"Create Project"**
3. Select **"Scrum"** template
4. Name: `Methsara Publications Webstore`
5. Key: `MPW` (or similar short code)

### Step 2: Configure Project Settings
1. Add team members with appropriate roles:
   - **Product Owner**: Methsara Publications
   - **Scrum Master**: [Assign team member]
   - **Development Team**: All 6 team members

2. Set up issue types:
   - Story
   - Task
   - Bug
   - Epic

### Step 3: Create Epics
Organize your backlog into major feature areas (Epics):

1. **User & Admin Component**
2. **Product Catalog Component**
3. **Order & Transaction Component**
4. **Supplier Management Component**
5. **Inventory Management Component**
6. **Promotion & Loyalty Component**

---

## ✍️ Writing User Stories

### User Story Format:
```
As a [type of user],
I want [goal/desire],
So that [benefit/value].
```

### Example User Stories for Methsara Publications:

#### Epic: Product Catalog Component
**Story 1: Browse Educational Materials**
```
As a teacher,
I want to browse educational materials by grade level,
So that I can quickly find relevant resources for my students.
```

**Acceptance Criteria:**
- [ ] Products are categorized by grade (6-13)
- [ ] Filter options include: Grade, Subject, Publication Type
- [ ] Display shows book cover, title, price, and availability
- [ ] Pagination shows 20 items per page

**Story Points:** 5

---

**Story 2: View Product Details**
```
As a parent,
I want to view detailed information about a textbook,
So that I can make an informed purchase decision.
```

**Acceptance Criteria:**
- [ ] Product page shows: title, author, ISBN, price, description
- [ ] Display sample pages or table of contents
- [ ] Show stock availability
- [ ] Display related products
- [ ] Include customer reviews section

**Story Points:** 3

---

#### Epic: Order & Transaction Component
**Story 3: Add Items to Cart**
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

**Story 4: Complete Checkout**
```
As a customer,
I want to complete my purchase securely,
So that I can receive my educational materials.
```

**Acceptance Criteria:**
- [ ] Collect shipping address
- [ ] Collect billing information
- [ ] Display order summary with total
- [ ] Integrate payment gateway
- [ ] Send order confirmation email
- [ ] Generate order number

**Story Points:** 8

---

#### Epic: User & Admin Component
**Story 5: User Registration**
```
As a new customer,
I want to create an account,
So that I can track my orders and save my preferences.
```

**Acceptance Criteria:**
- [ ] Registration form with: name, email, password, phone
- [ ] Email verification required
- [ ] Password strength validation
- [ ] Terms and conditions acceptance
- [ ] Automatic login after registration

**Story Points:** 5

---

**Story 6: User Login**
```
As a returning customer,
I want to log in to my account,
So that I can access my order history and saved information.
```

**Acceptance Criteria:**
- [ ] Login form with email and password
- [ ] "Remember me" option
- [ ] "Forgot password" functionality
- [ ] Session management
- [ ] Redirect to previous page after login

**Story Points:** 3

---

#### Epic: User & Admin Component
**Story 7: Manage Products**
```
As an admin,
I want to add and edit product listings,
So that I can keep the catalog up to date.
```

**Acceptance Criteria:**
- [ ] Create new product form
- [ ] Edit existing product details
- [ ] Upload product images
- [ ] Set pricing and stock levels
- [ ] Publish/unpublish products
- [ ] Bulk import via CSV

**Story Points:** 8

---

**Story 8: View Sales Reports**
```
As an admin,
I want to view sales analytics,
So that I can make informed business decisions.
```

**Acceptance Criteria:**
- [ ] Dashboard shows total sales, orders, revenue
- [ ] Filter by date range
- [ ] Display top-selling products
- [ ] Show sales by grade level/subject
- [ ] Export reports to PDF/Excel

**Story Points:** 5

---

#### Epic: Product Catalog Component
**Story 9: Search Products**
```
As a customer,
I want to search for specific books or materials,
So that I can quickly find what I need.
```

**Acceptance Criteria:**
- [ ] Search bar visible on all pages
- [ ] Search by: title, author, ISBN, subject
- [ ] Display search results with relevance ranking
- [ ] Show "no results" message when applicable
- [ ] Search suggestions/autocomplete

**Story Points:** 5

---

#### Epic: Order & Transaction Component
**Story 10: Track Orders**
```
As a customer,
I want to track my order status,
So that I know when to expect delivery.
```

**Acceptance Criteria:**
- [ ] Order history page in user profile
- [ ] Display order status (Processing, Shipped, Delivered)
- [ ] Show tracking number when available
- [ ] Email notifications for status changes
- [ ] View order details and invoice

**Story Points:** 5

---

## 📊 Story Point Estimation

Use the **Fibonacci sequence** for story points: 1, 2, 3, 5, 8, 13, 21

### Guidelines:
- **1 point**: Very simple, < 2 hours
- **2 points**: Simple, 2-4 hours
- **3 points**: Moderate, 4-8 hours
- **5 points**: Complex, 1-2 days
- **8 points**: Very complex, 2-3 days
- **13 points**: Extremely complex, consider breaking down
- **21+ points**: Too large, must break into smaller stories

---

## 🎯 Prioritization

### MoSCoW Method:
- **Must Have**: Critical for launch
- **Should Have**: Important but not critical
- **Could Have**: Nice to have
- **Won't Have**: Not in this release

### Priority Levels in Jira:
1. **Highest**: Blocking issues, critical features
2. **High**: Important features for MVP
3. **Medium**: Standard features
4. **Low**: Enhancements, nice-to-haves
5. **Lowest**: Future considerations

---

## ✅ Acceptance Criteria Best Practices

Each user story should have clear, testable acceptance criteria:

### Good Acceptance Criteria:
- ✅ Specific and measurable
- ✅ Written from user perspective
- ✅ Testable (can verify completion)
- ✅ Clear definition of "done"

### Example:
```
Given I am on the product page,
When I click "Add to Cart",
Then the item should appear in my cart,
And the cart count should increase by 1,
And I should see a confirmation message.
```

---

## 📝 Additional Backlog Items

### Technical Stories:
- Set up development environment
- Configure database schema
- Implement API endpoints
- Set up CI/CD pipeline
- Configure hosting and deployment

### Non-Functional Requirements:
- Performance: Page load time < 3 seconds
- Security: SSL encryption, secure payment processing
- Accessibility: WCAG 2.1 AA compliance
- Mobile responsiveness: Support all screen sizes

---

## 🔄 Backlog Refinement

### Regular Activities:
1. **Weekly Backlog Grooming**: Review and update priorities
2. **Story Refinement**: Add details to upcoming stories
3. **Estimation Sessions**: Team estimates story points
4. **Dependency Mapping**: Identify blockers and dependencies

---

## 📤 Deliverables for Week 02

1. ✅ Jira project created and configured
2. ✅ Minimum 20-30 user stories created
3. ✅ Stories organized into Epics
4. ✅ All stories have acceptance criteria
5. ✅ Story points estimated
6. ✅ Backlog prioritized
7. ✅ Team members assigned to project
8. ✅ Screenshot/export of Product Backlog

---

## 🎓 Tips for Success

1. **Collaborate**: Involve the whole team in backlog creation
2. **Be Specific**: Vague stories lead to confusion
3. **Think User-First**: Focus on user value, not technical implementation
4. **Keep It Updated**: Backlog is a living document
5. **Break Down Large Stories**: If a story is > 8 points, split it
6. **Include Non-Functional Requirements**: Don't forget performance, security, etc.

---

## 📚 Resources

- [Jira User Guide](https://support.atlassian.com/jira-software-cloud/)
- [Agile User Stories](https://www.atlassian.com/agile/project-management/user-stories)
- [Story Point Estimation](https://www.atlassian.com/agile/project-management/estimation)
- [Product Backlog Best Practices](https://www.scrum.org/resources/blog/product-backlog-best-practices)

---

## 📞 Need Help?

If you have questions about:
- Writing user stories → Consult with Product Owner
- Technical feasibility → Discuss with Development Team
- Prioritization → Review with Scrum Master
- Jira configuration → Check Atlassian documentation

---

**Good luck with your Product Backlog creation! 🚀**
