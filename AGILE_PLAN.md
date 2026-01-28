# 📋 Agile Project Plan - Methsara Publications Web Store

## 📌 Context

**ISP Evaluation:** 1.1 | G1104 | ISP Practical 1.1  
**Schedule:** Friday 12:30 – 2:30 | B401  
**Project:** Methsara Publications Web Store (MERN Stack)

## 🏢 Client Profile: Methsara Publications

**Overview:**
A specialist Sri Lankan publisher focusing on educational materials for students in **Grades 6-13**, specifically targeting **G.C.E. O/L and A/L examinations**. The company produces Sinhala-language resources including textbooks, past papers, model papers, and question-answer guides.

**Key Demographics:**
- Students (Grades 6-13)
- Annual Exam Candidates (O/L, A/L)
- Parents & Teachers

**Location & Operations:**
- **Address:** 752/1/23, Rukmale Road, Pannipitiya (near Kottawa)
- **Contact:** 077 7356199, 071 4325383, 071 4485899
- **Availability:** 24/7 Online Operations

---

## 👥 Project Roles

### Product Owner: 1 Person
**Assigned to:** _TBD_

**Responsibilities:**
- Define product vision and goals
- Maintain and prioritize Product Backlog
- Accept or reject work results
- Communicate with stakeholders (Methsara Publications)

### Scrum Master: 1 Person
**Assigned to:** _TBD_

**Responsibilities:**
- Facilitate Scrum ceremonies
- Remove obstacles for the team
- Ensure Scrum practices are followed
- Coach the team on Agile principles

### Developers/Scrum Team: 4 Persons
**Assigned to:** _TBD (4 members)_

**Traits:**
- Self-management
- Self-organizing
- Developed "T" shaped skills (broad knowledge, deep expertise in one area)

**Responsibilities:**
- Develop features according to Sprint Backlog
- Participate in all Scrum ceremonies
- Collaborate and communicate effectively

---

## 📅 Next Week Plan

### Week 1: Proposal Presentation → Product Backlog
1. **Proposal Presentation** to Product Owner (Client)
2. **Create Product Backlog** - Write all user stories
3. **Prioritize features** with Product Owner
4. **Estimate story points** for each user story

---

## 📦 Scrum Artifacts

### 1. Product Backlog
**Definition:** List of all features, requirements, and improvements maintained from the very beginning of the project.

**Contents:**
- User stories
- Bug fixes
- Technical improvements
- Knowledge acquisition

**Maintained by:** Product Owner

---

### 2. Sprint

**Duration:** 1-2 weeks (to be decided)

**Components:**
- Sprint Goal
- Sprint Backlog
- Daily Scrums
- Sprint Review
- Sprint Retrospective

---

### 3. Sprint Backlog

**Definition:** Subset of Product Backlog items selected for the current Sprint.

**Example Structure:**

| User Story | Story Points | Tasks | Assigned To | Status |
|------------|--------------|-------|-------------|--------|
| User Management | 13 | - Create user model<br>- Build registration API<br>- Create login form | Member 1 | In Progress |
| Product Catalog | 21 | - Design book schema<br>- Build CRUD APIs<br>- Create UI components | Member 2 | To Do |

**Decomposition Example:**
```
User Management (13 points)
├── Create MongoDB User Schema (3 points)
├── Build Registration API (5 points)
├── Build Login API with JWT (5 points)
└── Create Frontend Forms (8 points)
```

---

### 4. Burndown Chart

**Purpose:** Visual representation of work remaining vs. time

**Axes:**
- **Y-axis:** Work Remaining (Story Points)
- **X-axis:** Sprint Time (Days)

**Trend:** General trend towards zero

**Formula:**
```
Work Remaining ÷ Rate = Days to Completion
```

**Example:**
```
Day 0:  100 points remaining
Day 3:   75 points remaining
Day 6:   45 points remaining
Day 9:   20 points remaining
Day 12:   0 points remaining ✓
```

---

### 5. Increment

**Definition:** A small, workable part of the whole project that is potentially shippable.

**Requirements:**
- Must meet Definition of Done (DoD)
- Must be tested and functional
- Must integrate with previous increments

**Examples for our project:**
- Sprint 1 Increment: User authentication system (login, registration, JWT)
- Sprint 2 Increment: Product catalog with search functionality
- Sprint 3 Increment: Shopping cart and checkout system

---

## 📝 User Stories Format

### Template
```
As a [role],
I want to [feature],
So that [benefit].
```

### Examples for Methsara Publications Web Store

#### Customer User Stories
1. **User Registration**
   ```
   As a student/parent,
   I want to create an account with my grade level preferences,
   So that I get recommended books for my specific exam year.
   ```

2. **Browse Educational Materials**
   ```
   As a student,
   I want to filter books by Grade (6-13), Exam (O/L, A/L), and Subject (History, Sinhala),
   So that I can quickly find the exact study guides I need.
   ```

3. **Shopping Cart**
   ```
   As a parent,
   I want to add multiple textbooks and past papers to my cart,
   So that I can buy all necessary materials for the school term in one go.
   ```

4. **Order Tracking**
   ```
   As a customer,
   I want to track my order status in real-time,
   So that I know when to expect my delivery.
   ```

5. **Product Reviews**
   ```
   As a customer,
   I want to read and write reviews for books,
   So that I can make informed purchasing decisions.
   ```

#### Admin User Stories
6. **Inventory Management**
   ```
   As an admin,
   I want to add, edit, and delete books from the catalog,
   So that I can keep the inventory up-to-date.
   ```

7. **Order Management**
   ```
   As an admin,
   I want to view and update order statuses,
   So that I can manage the fulfillment process efficiently.
   ```

8. **Sales Analytics**
   ```
   As an admin,
   I want to view sales reports and analytics,
   So that I can make data-driven business decisions.
   ```

9. **Coupon Management**
   ```
   As an admin,
   I want to create and manage discount coupons,
   So that I can run promotional campaigns.
   ```

10. **Supplier Management**
    ```
    As an admin,
    I want to manage supplier information and purchase orders,
    So that I can maintain adequate stock levels.
    ```

---

## 📊 Metrics and Tracking

### Story Points
**Definition:** Estimate of effort/complexity for a feature (Scale: 0 - 100)

**Common Scale (Fibonacci):**
- 1 point: Very simple task (< 1 hour)
- 2 points: Simple task (1-2 hours)
- 3 points: Small feature (2-4 hours)
- 5 points: Medium feature (4-8 hours)
- 8 points: Large feature (1-2 days)
- 13 points: Very large feature (2-3 days)
- 21 points: Epic (needs decomposition)

### Velocity
**Definition:** Average story points completed per Sprint

**Calculation:**
```
Velocity = Total Story Points Completed ÷ Number of Sprints
```

**Use:** Predict future Sprint capacity

---

## 📅 Project Timeline

### Sprint 0: Proposal & Planning
**Week:** 1  
**Activities:**
- Proposal Presentation
- Create Product Backlog
- Define user stories
- Set up development environment
- Assign roles

**Deliverable:** Product Backlog with prioritized user stories

---

### Sprint 1: Core Features
**Week:** 2-4  
**Presentation:** 4th Week

**Goals:**
- [ ] User authentication system (login, registration, JWT)
- [ ] Basic product catalog (CRUD operations)
- [ ] Database schema implementation
- [ ] API endpoints for user and product management

**Definition of Done:**
- Code is written and committed to Git
- Unit tests are written and passing
- Code is reviewed by at least one team member
- Feature is deployed to development environment
- Documentation is updated

---

### Sprint 2: E-commerce Features
**Week:** 5-7  
**Presentation:** 7th Week

**Goals:**
- [ ] Shopping cart functionality
- [ ] Checkout process
- [ ] Order management system
- [ ] Payment integration (simulation)

---

### Sprint 3: Advanced Features
**Week:** 8-10  
**Presentation:** 10th Week

**Goals:**
- [ ] Inventory and supplier management
- [ ] Promotion and coupon system
- [ ] Email notifications
- [ ] Admin dashboard with analytics

---

### Sprint 4: Polish & Deployment
**Week:** 11-12  
**Final Presentation:** 12th Week

**Goals:**
- [ ] Bug fixes and refinements
- [ ] Performance optimization
- [ ] Final testing (UAT)
- [ ] Deployment to production
- [ ] Documentation completion

---

## 🎯 Definition of Done (DoD)

### For Each User Story
- [ ] Code is written following coding standards
- [ ] Code is committed to version control (Git)
- [ ] Unit tests are written and passing
- [ ] Integration tests are passing
- [ ] Code review is completed
- [ ] Feature is tested manually
- [ ] No critical bugs remain
- [ ] Documentation is updated
- [ ] Feature is deployed to development environment
- [ ] Product Owner has accepted the feature

### For Each Sprint
- [ ] All user stories meet individual DoD
- [ ] Sprint Review is conducted
- [ ] Sprint Retrospective is completed
- [ ] Burndown chart is updated
- [ ] Increment is potentially shippable

---

## 🔄 Scrum Ceremonies

### 1. Sprint Planning
**When:** Beginning of each Sprint  
**Duration:** 2-4 hours  
**Question:** "How do we do it?"

**Participants:**
- Product Owner
- Scrum Master
- Scrum Team (All developers)

**Activities:**
1. Product Owner presents prioritized Product Backlog
2. Team discusses and asks questions
3. Team selects items for Sprint Backlog
4. Team breaks down user stories into tasks
5. Team estimates effort for each task
6. Team commits to Sprint Goal

**Input:** Product Backlog  
**Output:** Sprint Backlog + Sprint Goal

---

### 2. Daily Scrum (Stand-up)
**When:** Every day during Sprint  
**Duration:** 15 minutes  
**Format:** Brief stand-up meeting

**Participants:**
- Scrum Master (facilitator)
- Scrum Team (All developers)
- Product Owner (optional)

**Three Key Questions (Each team member answers):**
1. **What did I do since the last meeting?**
   - Example: "I completed the user registration API"
   
2. **What am I going to do next?**
   - Example: "I will work on the login authentication"
   
3. **What obstacles are in my way?**
   - Example: "I'm blocked on MongoDB connection issues"

**Purpose:**
- Synchronize team activities
- Identify blockers early
- Promote accountability

---

### 3. Sprint Review
**When:** End of each Sprint  
**Duration:** 1-2 hours  
**Purpose:** Demonstrate the work completed during the Sprint

**Participants:**
- Product Owner
- Scrum Master
- Scrum Team
- Stakeholders (Client - Methsara Publications)

**Activities:**
1. Scrum Team demonstrates completed features (live demo)
2. Product Owner reviews against acceptance criteria
3. Stakeholders provide feedback
4. Team discusses what went well and challenges faced
5. Product Owner updates Product Backlog based on feedback

**Outcome:**
- Product Owner accepts or requests changes
- Feedback is incorporated into Product Backlog
- Stakeholders are informed of progress

**Preparation Tips:**
- Prepare working demo (not slides!)
- Test all features beforehand
- Have backup plan for technical issues
- Be ready to explain technical decisions

---

### 4. Sprint Retrospective
**When:** After Sprint Review, before next Sprint Planning  
**Duration:** 1-2 hours  
**Purpose:** Discuss what went well and what went wrong for continuous improvement

**Participants:**
- Scrum Master (facilitator)
- Scrum Team (All developers)
- Product Owner (optional)

**Three Key Questions:**
1. **What went well during the Sprint?**
   - Example: "Good collaboration on the authentication module"
   - Example: "Daily scrums helped us stay aligned"

2. **What didn't go well?**
   - Example: "We underestimated the complexity of payment integration"
   - Example: "Communication gaps caused duplicate work"

3. **What can we improve for the next Sprint?**
   - Example: "Better task breakdown in Sprint Planning"
   - Example: "More frequent code reviews"

**Tools:**
- Sticky notes for anonymous feedback
- Flipcharts for brainstorming
- Voting to prioritize improvements

**Action Items:**
- Create concrete action items
- Assign owners to each action
- Track improvements in next Sprint

**Important for Sprints 1, 2, 3:**
- Be well prepared with specific examples
- Bring data (burndown charts, velocity metrics)
- Focus on actionable improvements
- Document lessons learned

---

## 📈 Sprint Backlog Example

### Sprint 1: User & Authentication Management

| User Story | Story Points | Tasks | Assigned To | Status | Hours |
|------------|--------------|-------|-------------|--------|-------|
| **User Registration** | 8 | | | | |
| | | Create User model (MongoDB schema) | Member 1 | Done | 3 |
| | | Build registration API endpoint | Member 1 | Done | 5 |
| | | Add input validation | Member 1 | In Progress | 2 |
| | | Create registration form (React) | Member 2 | To Do | 4 |
| | | Add form validation | Member 2 | To Do | 2 |
| **User Login** | 8 | | | | |
| | | Build login API with JWT | Member 1 | To Do | 5 |
| | | Create login form (React) | Member 2 | To Do | 3 |
| | | Implement JWT storage | Member 2 | To Do | 2 |
| **Password Reset** | 5 | | | | |
| | | Build forgot password API | Member 3 | To Do | 3 |
| | | Email integration (Nodemailer) | Member 3 | To Do | 4 |
| | | Create reset password form | Member 2 | To Do | 3 |

**Total Story Points:** 21  
**Sprint Goal:** Complete user authentication system with registration, login, and password reset

---

## 📋 Product Backlog Template

### Priority 1 (Must Have - Sprint 1)
- [ ] User registration and login (13 points)
- [ ] Admin authentication (8 points)
- [ ] **Educational Catalog Management** (13 points)
  - *Must support specific metadata: Grade, Exam Type, Subject, Medium (Sinhala)*

### Priority 2 (Should Have - Sprint 2)
- [ ] Shopping cart with **bulk item support** (13 points)
- [ ] Checkout process with **home delivery calculation** (21 points)
- [ ] Order management (21 points)

### Priority 3 (Could Have - Sprint 3)
- [ ] **Inventory & Supplier Management** (21 points)
- [ ] **Seasonal Promotion System** (Exam season discounts) (13 points)
- [ ] **Digital Preview** (Sample pages for Q&A books) (13 points)

### Priority 4 (Won't Have This Time)
- [ ] Mobile app
- [ ] Advanced analytics with ML
- [ ] Multi-language support

---

## ✅ Evaluation Checklist

### Sprint 0 Presentation (Week 1)
- [ ] Proposal presentation prepared
- [ ] Product Backlog created
- [ ] User stories written in correct format
- [ ] Story points estimated
- [ ] Roles assigned

### Sprint 1 Presentation (Week 4)
- [ ] Sprint goals achieved
- [ ] Code committed to Git
- [ ] Features demonstrated (live demo)
- [ ] Burndown chart prepared
- [ ] Sprint Review conducted
- [ ] Sprint Retrospective completed
- [ ] Documentation updated

### General Requirements
- [ ] All Scrum ceremonies conducted
- [ ] Scrum artifacts maintained
- [ ] Team collaboration evident
- [ ] Continuous improvement demonstrated

---

## 📚 Resources

### Tools
- **Project Management:** Jira, Trello, or GitHub Projects
- **Version Control:** Git & GitHub
- **Communication:** Slack, Discord, or WhatsApp
- **Documentation:** Confluence, Notion, or Google Docs

### References
- Scrum Guide: https://scrumguides.org/
- Agile Manifesto: https://agilemanifesto.org/
- User Story Best Practices

---

**Last Updated:** January 28, 2026  
**Next Review:** Sprint Planning (Week 2)
