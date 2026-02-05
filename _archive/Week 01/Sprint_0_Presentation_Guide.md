# Sprint 0 Presentation Guide
## Methsara Publications Web Store

---

## 📋 Presentation Overview

**Total Duration**: 15 minutes  
**Presentation**: 12 minutes  
**Q&A / Feedback**: 2-3 minutes  
**Format**: Physical presentation as per Delivery Plan  
**Requirement**: All members present equal time (~2 minutes each)

---

## 🎯 Presentation Purpose

This presentation evaluates:
- Understanding of Sprint 0 concepts
- Ability to translate Sprint 0 document into clear Agile plan
- **Focus on EXPLAINING your thinking, NOT just reading slides**

---

## 📊 Slide Structure & Content

### **Slide 1 – Project Overview** (Speaker: Gawrawa G H Y - Scrum Master)
**Duration**: ~1 minute

**Content to Include**:
- **Project Title**: Methsara Publications Web Store
- **Group ID**: G1104
- **Technology Stack**: MERN (MongoDB, Express.js, React.js, Node.js)

**Team Members & Scrum Roles**:
| Student ID | Name | Scrum Role |
|------------|------|------------|
| N/A | Methsara Publications | Product Owner |
| IT24100799 | Gawrawa G H Y | Scrum Master |
| IT24100548 | Galagama S.T | Developer - User & Authentication System |
| IT24101314 | Appuhami H A P L | Developer - Publication & Catalog Manager |
| IT24100191 | Jayasinghe D.B.P | Developer - Order & Transaction Management |
| IT24100264 | Bandara N W C D | Developer - Inventory & Supplier System |
| IT24101266 | Perera M.U.E | Developer - Promotion & Gift Vouchers |

**Speaking Points**:
- "Good morning/afternoon. We are Group G1104, and we're building an e-commerce platform for Methsara Publications."
- "Our team consists of 6 members with clearly defined Scrum roles."
- "Methsara Publications, our real client, serves as the Product Owner."
- "I'm Gawrawa, serving as Scrum Master, and my 5 teammates are developers, each responsible for a specific system component."

---

### **Slide 2 – Problem Identification** (Speaker: Galagama S.T)
**Duration**: ~2 minutes

**Content to Include**:
- **Problem Statement**: Methsara Publications lacks online presence for educational materials
- **Who is Affected**: 
  - Students (Grades 6-13) preparing for O/L and A/L exams
  - Parents seeking study materials
  - Teachers and educational institutions
  - Methsara Publications (business growth)

**Key Problems**:
1. **Limited Accessibility** - Students must physically visit Pannipitiya store
2. **Time-Consuming** - Wasted study time traveling and queuing during exam seasons
3. **No Inventory Visibility** - Can't check stock before visiting
4. **Inefficient Order Management** - Bulk orders from schools handled manually
5. **Limited Market Reach** - Can't reach students in remote areas

**Why Important**:
- ✅ **Student Success**: Access to materials directly impacts exam performance
- ✅ **Business Growth**: Missing online revenue opportunities
- ✅ **Competitive Disadvantage**: Other publishers moving online
- ✅ **Operational Efficiency**: Manual processes are error-prone
- ✅ **Customer Satisfaction**: Modern customers expect online shopping

**Speaking Points**:
- "The core problem is NOT about technology - it's about access to education."
- "Students preparing for critical O/L and A/L exams waste valuable study time traveling to physical stores."
- "During peak exam seasons, popular materials sell out, and customers can't check availability beforehand."
- "This problem affects thousands of students across Sri Lanka who need quality educational materials."
- **IMPORTANT**: Do NOT mention solutions, systems, or features in this slide!

---

### **Slide 3 – Stakeholder Identification** (Speaker: Appuhami H A P L)
**Duration**: ~1.5 minutes

**Content to Include**:

**Primary Stakeholders** (Direct users/high impact):
- **Students (Grades 6-13)**: Need grade-specific materials for exam prep
- **Parents**: Purchase materials for children, concerned about quality and delivery
- **Methsara Publications (Owner)**: Needs sales growth and efficient operations

**Secondary Stakeholders** (Indirect users/moderate impact):
- **Teachers**: Recommend materials, interested in bulk ordering
- **School Administrators**: Bulk purchases for libraries
- **Tuition Center Owners**: Wholesale purchases for students
- **System Administrators**: Manage and maintain platform
- **Customer Support Staff**: Handle inquiries and issues
- **Marketing Team**: Run campaigns and promotions

**Tertiary Stakeholders** (External/low direct impact):
- **Delivery Partners**: Handle logistics
- **Payment Gateway Providers**: Process transactions
- **Suppliers/Printers**: Supply books to publisher

**Speaking Points**:
- "We've identified 12 key stakeholder groups across three levels."
- "Primary stakeholders are our direct users - students, parents, and the business owner."
- "Secondary stakeholders like teachers and school admins have significant influence on purchasing decisions."
- "Tertiary stakeholders like delivery partners and payment gateways enable the system but don't directly use it."
- "Understanding stakeholder needs helps us prioritize features correctly."

---

### **Slide 4 – Product Vision Statement** (Speaker: Jayasinghe D.B.P)
**Duration**: ~1.5 minutes

**Content to Include**:

**Vision Statement**:
> **For** students preparing for G.C.E. O/L and A/L examinations, parents, and teachers across Sri Lanka,
> 
> **Who** need convenient access to high-quality, grade-specific educational materials including textbooks, past papers, model papers, and question-answer guides,
> 
> **The product** is a comprehensive e-commerce web platform built on the MERN stack,
> 
> **Provides** 24/7 online access to browse, search, and purchase educational materials with grade-level filtering (6-13), exam-type categorization (O/L, A/L), subject-specific organization, secure payment processing, order tracking, and home delivery, while enabling Methsara Publications to efficiently manage inventory, process orders, track suppliers, and run promotional campaigns during exam seasons.

**Key Value Propositions**:
- 🎯 **For Students/Parents**: 24/7 access, grade-specific filtering, home delivery
- 🎯 **For Business**: Expanded market reach, efficient operations, promotional capabilities
- 🎯 **For All**: Convenient, secure, and reliable platform

**Speaking Points**:
- "Our vision is to make educational materials accessible to students anywhere in Sri Lanka, anytime."
- "The platform serves both customer needs - convenient shopping - and business needs - efficient management."
- "Notice we keep this high-level - we're describing the value, not the technical implementation."
- "This vision directly addresses the problems we identified earlier."

---

### **Slide 5 – Epics** (Speaker: Bandara N W C D)
**Duration**: ~2 minutes

**Content to Include**:

| Epic ID | Epic Name | High-Level Description |
|---------|-----------|------------------------|
| **E1** | User & Authentication Management | User registration, login, role-based access, profile management, security |
| **E2** | Publication & Catalog Management | Book catalog, grade/exam/subject filtering, search, admin CRUD operations |
| **E3** | Shopping Cart & Checkout | Cart management, wishlist, multi-step checkout, payment integration |
| **E4** | Order & Transaction Management | Order processing, payment transactions, tracking, invoices, returns |
| **E5** | Inventory & Supplier Management | Stock tracking, warehouse management, supplier relations, purchase orders |
| **E6** | Promotion & Gift Voucher Management | Coupons, discounts, campaigns, gift vouchers, loyalty programs |

**How Epics Relate to Problem & Vision**:
- **E1 & E2**: Enable students to find and access materials (addresses accessibility problem)
- **E3 & E4**: Enable convenient online purchasing (addresses time-consuming shopping problem)
- **E5**: Ensures stock availability (addresses inventory visibility problem)
- **E6**: Enables marketing and customer retention (addresses business growth needs)

**Speaking Points**:
- "We've identified 6 major Epics that align with our 6 team members - each developer owns one Epic."
- "These Epics represent high-level business functionalities, not technical modules."
- "Each Epic will be broken down into multiple user stories across different sprints."
- "Notice how each Epic directly addresses problems we identified earlier."
- "E1 and E2 form the foundation - you can't shop without authentication and products."
- "E3 and E4 are the core e-commerce functionality."
- "E5 and E6 are advanced features that enhance operations and marketing."

---

### **Slide 6 – Initial Product Backlog (Part 1: High Priority)** (Speaker: Perera M.U.E)
**Duration**: ~2 minutes

**Content to Include**:

**Epic 1: User & Authentication Management**
| Priority | User Story ID | User Story | Stakeholder |
|----------|---------------|------------|-------------|
| High | US1.1 | As a student/parent, I want to create an account with grade preferences, so that I get recommended books for my exam year. | Students, Parents |
| High | US1.2 | As a registered user, I want to securely log in, so that I can access my profile and order history. | All Users |
| High | US1.5 | As an admin, I want role-based access control, so that I can control sensitive operations. | Admin |
| Medium | US1.3 | As a user, I want to reset my password via email, so that I can regain access. | All Users |
| Medium | US1.4 | As a user, I want to update my profile, so that my details remain current. | All Users |

**Epic 2: Publication & Catalog Management**
| Priority | User Story ID | User Story | Stakeholder |
|----------|---------------|------------|-------------|
| High | US2.1 | As a student, I want to filter books by Grade/Exam/Subject, so that I find exact study guides. | Students, Parents |
| High | US2.2 | As a customer, I want to search by title/ISBN/author, so that I find materials quickly. | All Customers |
| High | US2.3 | As a customer, I want detailed book information, so that I make informed decisions. | All Customers |
| High | US2.4 | As an admin, I want to manage books (CRUD), so that I keep inventory updated. | Admin |
| Medium | US2.5 | As an admin, I want to manage categories and metadata, so that filtering works effectively. | Admin |

**Speaking Points**:
- "We've created 50+ user stories across all 6 Epics."
- "Each user story follows the standard format: As a [user], I want [feature], so that [benefit]."
- "Notice how each story is linked to specific stakeholders we identified earlier."
- "We've prioritized stories based on business value and technical dependencies."

---

### **Slide 7 – Initial Product Backlog (Part 2: E3 & E4)** (Speaker: Gawrawa G H Y)
**Duration**: ~1.5 minutes

**Content to Include**:

**Epic 3: Shopping Cart & Checkout System**
| Priority | User Story ID | User Story | Stakeholder |
|----------|---------------|------------|-------------|
| High | US3.1 | As a parent, I want to add multiple items to cart, so that I buy all materials in one go. | Parents, Teachers |
| High | US3.2 | As a customer, I want to update quantities, so that I adjust my order. | All Customers |
| High | US3.6 | As a customer, I want smooth checkout with multiple payment options, so that I complete purchase securely. | All Customers |
| Medium | US3.4 | As a customer, I want cart persistence, so that I don't lose selections. | All Customers |
| Medium | US3.8 | As a customer, I want to apply discount coupons, so that I save money. | All Customers |

**Epic 4: Order & Transaction Management**
| Priority | User Story ID | User Story | Stakeholder |
|----------|---------------|------------|-------------|
| High | US4.1 | As a customer, I want order confirmation email, so that I have purchase record. | All Customers |
| High | US4.6 | As an admin, I want to manage order statuses, so that I handle fulfillment efficiently. | Admin |
| Medium | US4.2 | As a customer, I want to track order status, so that I know delivery time. | All Customers |
| Medium | US4.4 | As a customer, I want to download invoices, so that I keep records. | Parents, Teachers |
| Medium | US4.7 | As an admin, I want to search/filter orders, so that I find orders quickly. | Admin |

**Speaking Points**:
- "E3 and E4 form the core e-commerce functionality."
- "Notice the clear separation: E3 handles pre-purchase (cart, checkout), E4 handles post-purchase (orders, transactions)."
- "High priority stories enable basic shopping - add to cart, checkout, receive confirmation."

---

### **Slide 8 – Initial Product Backlog (Part 3: E5 & E6 + Prioritization)** (Speaker: Galagama S.T)
**Duration**: ~1.5 minutes

**Content to Include**:

**Epic 5: Inventory & Supplier Management**
| Priority | User Story ID | User Story |
|----------|---------------|------------|
| Medium | US5.1 | As an admin, I want real-time stock tracking, so that I know availability. |
| Medium | US5.2 | As an admin, I want low stock alerts, so that I reorder before stockouts. |
| Low | US5.4 | As an admin, I want to manage suppliers, so that I maintain relationships. |
| Low | US5.5 | As an admin, I want to create purchase orders, so that I replenish stock. |

**Epic 6: Promotion & Gift Voucher Management**
| Priority | User Story ID | User Story |
|----------|---------------|------------|
| Medium | US6.1 | As an admin, I want to create coupons, so that I run promotional campaigns. |
| Medium | US6.2 | As an admin, I want to set coupon rules, so that I control discount conditions. |
| Low | US6.6 | As a customer, I want to purchase gift vouchers, so that I gift materials. |
| Low | US6.9 | As a customer, I want to earn loyalty points, so that I get rewards. |

**Prioritization Justification Example**:
> **Why is US2.1 (Grade/Exam/Subject filtering) HIGH priority?**
> - It's the PRIMARY way students find relevant materials for their specific exam year
> - Without this, the catalog is just a generic bookstore - not specialized for education
> - Directly addresses the core problem of students needing grade-specific materials
> - High business value: differentiates us from competitors
> - Technical dependency: Must be implemented early as other features depend on it

**Speaking Points**:
- "E5 and E6 are important but lower priority - we can launch without advanced inventory and promotions."
- "Our prioritization follows the MoSCoW method: Must have, Should have, Could have, Won't have."
- "High priority = foundation and core value; Medium = enhances experience; Low = nice to have."
- "For example, US2.1 is high priority because grade-specific filtering is our key differentiator."

---

### **Slide 9 – Definition of Done (DoD)** (Speaker: Appuhami H A P L)
**Duration**: ~1.5 minutes

**Content to Include**:

**General Definition of Done** (applies to ALL user stories):
- ✅ Code follows team coding standards and best practices
- ✅ Code committed to Git with meaningful commit messages
- ✅ Unit tests written and passing (minimum 80% coverage)
- ✅ Integration tests passing
- ✅ Code reviewed and approved by at least one team member
- ✅ Feature tested manually on development environment
- ✅ No critical or high-priority bugs
- ✅ API documentation updated (if applicable)
- ✅ User documentation updated
- ✅ Product Owner has reviewed and accepted the feature
- ✅ Feature deployed to staging environment

**Epic-Specific DoD** (for E3: Shopping Cart & Checkout):
- ✅ All payment methods (Stripe, PayPal, COD) tested with test credentials
- ✅ Cart persistence works across browser sessions and devices
- ✅ All price calculations are mathematically correct
- ✅ Payment information handled securely (PCI compliance)
- ✅ Order confirmation emails sent successfully
- ✅ Checkout flow works on mobile devices
- ✅ Error scenarios handled gracefully with user-friendly messages

**How DoD Ensures Quality**:
- **Consistency**: Every story meets same quality bar
- **Completeness**: Nothing is "done" until all criteria met
- **Accountability**: Clear checklist for developers and reviewers
- **Customer Satisfaction**: Product Owner acceptance ensures business value

**Speaking Points**:
- "Definition of Done is our quality contract - it defines when a story is truly complete."
- "We have a general DoD that applies to every user story, ensuring consistent quality."
- "For complex Epics like Shopping Cart & Checkout, we add specific criteria for payment security and calculation accuracy."
- "Notice we include testing, code review, documentation, and Product Owner acceptance - not just coding."
- "This prevents the common problem of 'done but not really done' - where features are coded but not tested or documented."

---

### **Slide 10 – Sprint 1 Preview** (Speaker: Jayasinghe D.B.P)
**Duration**: ~1.5 minutes

**Content to Include**:

**Sprint 1 Goal**: 
> Implement core user authentication and basic product catalog functionality to enable users to browse educational materials.

**Selected User Stories**:
| Epic | User Story ID | Description | Story Points |
|------|---------------|-------------|--------------|
| E1 | US1.1 | User Registration with grade preferences | 8 |
| E1 | US1.2 | User Login with JWT authentication | 5 |
| E1 | US1.5 | Role-Based Access Control | 8 |
| E2 | US2.1 | Browse and filter by Grade/Exam/Subject | 13 |
| E2 | US2.4 | Admin Book Management (CRUD) | 8 |

**Total Story Points**: 42

**Why These Stories Were Selected**:
1. **Priority**: All are HIGH priority in our backlog
2. **Foundation**: Authentication is required before any other features
3. **Value**: Product catalog delivers immediate value to students
4. **Dependencies**: Other features depend on these being completed first
5. **Achievability**: 42 points is realistic for 6 developers over 3 weeks

**Sprint 1 Deliverables**:
- ✅ Functional user registration and login system
- ✅ Role-based access control implementation
- ✅ Product catalog with grade/exam/subject filtering
- ✅ Admin interface for managing books
- ✅ Database schemas for Users, Roles, and Books
- ✅ RESTful API endpoints
- ✅ Basic frontend UI

**Note**: Plans may change after Sprint 0 review and team velocity assessment.

**Speaking Points**:
- "For Sprint 1, we're focusing on the foundation - authentication and catalog."
- "We've selected 42 story points, which is achievable for our team size and sprint duration."
- "These stories were chosen because they're high priority AND other features depend on them."
- "You can't have shopping cart without products, and you can't have orders without users."
- "After Sprint 0 review and once we understand our team velocity, we may adjust this plan."
- "By the end of Sprint 1, students will be able to register, log in, and browse grade-specific materials."

---

## 🎤 Presentation Tips

### **Equal Time Distribution**:
- Each member speaks for approximately 2 minutes
- Practice transitions between speakers
- Use phrases like: "Now I'll hand over to [Name] to discuss..."

### **Speaking Guidelines**:
- ✅ **EXPLAIN your thinking** - don't just read slides
- ✅ Use examples and context
- ✅ Show enthusiasm and understanding
- ✅ Make eye contact with audience
- ✅ Speak clearly and at moderate pace
- ❌ Don't read slides word-for-word
- ❌ Don't go into technical implementation details
- ❌ Don't exceed time limits

### **Slide Design**:
- Keep slides concise and readable
- Use bullet points, not paragraphs
- Use visual elements (tables, icons, diagrams)
- Consistent formatting and branding
- Large, readable fonts

### **Team Coordination**:
- Practice together multiple times
- Time each section
- Prepare for smooth transitions
- Designate backup speaker if someone is absent
- Prepare for Q&A together

---

## ❓ Potential Q&A Questions & Answers

### **Question 1**: "Why did you prioritize filtering by Grade/Exam/Subject as high priority?"
**Answer**: "Because it's the core differentiator of our platform. Students need to find materials specific to their exam year - a Grade 10 O/L student needs different books than a Grade 12 A/L student. Without this filtering, we're just a generic bookstore, not a specialized educational platform. It directly addresses our identified problem of students wasting time searching for relevant materials."

### **Question 2**: "How will you handle if Sprint 1 takes longer than expected?"
**Answer**: "We'll monitor our burndown chart daily during Daily Scrums. If we're falling behind, we'll discuss with the Product Owner to potentially reduce scope - maybe defer US2.4 (Admin Book Management) to Sprint 2 and focus on core user-facing features. Our Definition of Done ensures we don't compromise quality to meet deadlines."

### **Question 3**: "Who is your Product Owner and how will they be involved?"
**Answer**: "Methsara Publications, our real client, is the Product Owner. They'll attend Sprint Planning to prioritize the backlog, Sprint Reviews to accept or reject our work, and be available for questions during the sprint. This ensures we're building what the business actually needs, not what we think they need."

### **Question 4**: "How did you estimate story points?"
**Answer**: "We used the Fibonacci scale (1, 2, 3, 5, 8, 13, 21) and Planning Poker technique. We considered complexity, effort, and uncertainty. For example, US1.2 (Login) is 5 points because it's straightforward - one API endpoint and form. US2.1 (Filtering) is 13 points because it involves complex database queries, multiple filter combinations, and UI state management."

### **Question 5**: "What if stakeholders have conflicting requirements?"
**Answer**: "The Product Owner (Methsara Publications) has final decision-making authority. For example, if students want free shipping but the business needs to charge for it, the Product Owner balances both needs - perhaps offering free shipping above a minimum order value. We document all stakeholder concerns but the Product Owner prioritizes based on business value."

### **Question 6**: "How does your Definition of Done ensure quality?"
**Answer**: "It creates a quality gate that every story must pass. For example, we require 80% test coverage - this catches bugs early. Code review by another team member ensures knowledge sharing and catches issues one person might miss. Product Owner acceptance ensures we built the right thing, not just built it right. Without DoD, developers might consider a story 'done' when it's just coded but not tested or documented."

---

## ✅ Assessment Focus Areas

### **1. Clear Problem Understanding**:
- ✅ Articulate the real-world problem without mentioning solutions
- ✅ Explain who is affected and why it matters
- ✅ Show empathy for stakeholders

### **2. Alignment**:
- ✅ Vision addresses the problem
- ✅ Epics support the vision
- ✅ User stories deliver Epic value
- ✅ Sprint 1 focuses on high-priority, foundational stories

### **3. Correct Agile/Scrum Terminology**:
- ✅ Use terms correctly: Epic, User Story, Sprint, Product Backlog, Sprint Backlog, Definition of Done, Story Points, Product Owner, Scrum Master, Sprint Goal
- ✅ Explain concepts, don't just name them

### **4. Quality of Explanation**:
- ✅ Demonstrate understanding, not memorization
- ✅ Provide context and rationale
- ✅ Use examples to illustrate points

### **5. Teamwork**:
- ✅ Equal participation from all members
- ✅ Smooth transitions between speakers
- ✅ Consistent message across presenters
- ✅ Support each other during Q&A

---

## 📝 Pre-Presentation Checklist

### **1 Week Before**:
- [ ] All slides completed and reviewed
- [ ] Speaking points assigned to each member
- [ ] Practice presentation once

### **3 Days Before**:
- [ ] Full dress rehearsal with timing
- [ ] Refine based on practice feedback
- [ ] Prepare Q&A responses

### **1 Day Before**:
- [ ] Final practice run
- [ ] Verify all members know their parts
- [ ] Prepare backup plan (USB drive, cloud backup)
- [ ] Check presentation equipment

### **Presentation Day**:
- [ ] Arrive early
- [ ] Test equipment and slides
- [ ] Brief team huddle
- [ ] Stay calm and confident

---

## 🎯 Success Criteria

**You'll know you succeeded if**:
- ✅ Stayed within 12-minute time limit
- ✅ All members participated equally
- ✅ Clearly explained problem without mentioning solutions
- ✅ Demonstrated alignment between problem, vision, and backlog
- ✅ Used Agile/Scrum terminology correctly
- ✅ Answered Q&A questions confidently
- ✅ Showed teamwork and coordination

---

**Good luck with your Sprint 0 presentation!**

**Prepared By**: Team Methsara Publications Web Store  
**Date**: February 4, 2026  
**Presentation Date**: As per Delivery Plan
