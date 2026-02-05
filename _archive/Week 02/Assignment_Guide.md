# Assigning User Stories to Team Members in Jira
## Solo & Team Assignment Guide

---

## 🎯 Two Scenarios

### Scenario 1: You're Working Solo (Recommended for Week 02)
Since you're creating the Product Backlog by yourself, you can:
- Assign all stories to yourself, OR
- Leave stories unassigned (common for Product Backlog)

### Scenario 2: Simulating a Team (If Required by Assignment)
Create dummy team members and distribute stories among them.

---

## 📝 Option 1: Solo Work - Assign to Yourself

### In Jira:
1. **When creating a story**:
   - Fill in all story details
   - In the **"Assignee"** field, select your name
   - Click "Create"

2. **For existing stories**:
   - Click on the story
   - Click the **"Assignee"** field
   - Select your name from dropdown
   - Story is now assigned to you

3. **Bulk Assignment**:
   - Go to Backlog view
   - Select multiple stories (checkboxes)
   - Click **"Bulk change"** (⋯ menu)
   - Select **"Edit issues"**
   - Change **"Assignee"** to your name
   - Click **"Next"** → **"Confirm"**

---

## 📝 Option 2: Leave Unassigned (Product Backlog Best Practice)

In Agile, the **Product Backlog** often has **unassigned stories** because:
- Stories are assigned during **Sprint Planning**, not in the backlog
- Product Backlog is about **what** needs to be done, not **who** does it

### To Leave Unassigned:
- Simply don't fill the "Assignee" field when creating stories
- This is perfectly acceptable for a Product Backlog!

---

## 📝 Option 3: Simulate Team Members

If your assignment requires showing team distribution:

### Step 1: Add Team Members to Jira

1. **Go to Project Settings**:
   - Click **⚙️ Project Settings** (bottom left)
   - Click **"People"**

2. **Add Team Members**:
   - Click **"Add people"**
   - Enter email addresses of team members
   - They'll receive invitation emails
   - Once they accept, they'll appear in your project

### Step 2: Assign Stories to Team Members

#### Manual Assignment:
1. Open a story
2. Click **"Assignee"** field
3. Select team member from dropdown
4. Save

#### Bulk Assignment by Epic:
1. Go to **Backlog** view
2. Filter by Epic (e.g., "User Authentication")
3. Select all stories in that epic
4. Bulk change → Assign to specific team member

---

## 🎯 Recommended Assignment Distribution

If you need to simulate team assignments, here's a suggested distribution based on the **Complete_Product_Backlog.md**:

### Team Member 1: Galagama S.T (IT24100548) - Lead Developer
**System Component**: User & Authentication System  
**Assigned Epics**: User Authentication & Admin Dashboard
- All stories from Epic 1: User Authentication (6 stories, 23 points)
- Stories 6.1, 6.2, 6.3 from Epic 6: Admin Dashboard (3 stories, 18 points)
- **Total**: 9 stories, 41 points

### Team Member 2: Appuhami H A P L (IT24101314) - Developer
**System Component**: Publication & Catalog Manager  
**Assigned Epics**: Product Catalog & Search
- All stories from Epic 2: Product Catalog (7 stories, 31 points)
- All stories from Epic 7: Search & Filter (3 stories, 13 points)
- **Total**: 10 stories, 44 points

### Team Member 3: Gawrawa G H Y (IT24100799) - Scrum Master
**System Component**: Shopping Cart & Checkout  
**Assigned Epics**: Shopping Cart & Payment
- All stories from Epic 3: Shopping Cart (6 stories, 25 points)
- All stories from Epic 5: Payment Integration (4 stories, 21 points)
- **Total**: 10 stories, 46 points

### Team Member 4: Jayasinghe D.B.P (IT24100191) - Developer
**System Component**: Order & Transaction Management  
**Assigned Epics**: Order Management & User Profile
- All stories from Epic 4: Order Management (5 stories, 26 points)
- All stories from Epic 8: User Profile (4 stories, 16 points)
- **Total**: 9 stories, 42 points

### Team Member 5: Bandara N W C D (IT24100264) - Developer
**System Component**: Inventory & Supplier System  
**Assigned Epics**: Admin Features & Inventory
- Stories 6.4, 6.5, 6.6 from Epic 6: Admin Dashboard (3 stories, 18 points)
- All stories from Epic 9: Inventory Management (3 stories, 13 points)
- **Total**: 6 stories, 31 points

### Team Member 6: Perera M.U.E (IT24101266) - Developer
**System Component**: Promotion & Gift Vouchers  
**Assigned Epics**: Reporting & Analytics
- Stories 6.7, 6.8 from Epic 6: Admin Dashboard (2 stories, 13 points)
- All stories from Epic 10: Reporting & Analytics (4 stories, 18 points)
- **Total**: 6 stories, 31 points

---

## 📊 Assignment Summary

| IT Number | Name | Role | Stories | Story Points |
|-----------|------|------|---------|--------------|
| IT24100548 | Galagama S.T | Lead Dev | 9 | 41 |
| IT24101314 | Appuhami H A P L | Developer | 10 | 44 |
| IT24100799 | Gawrawa G H Y | Scrum Master | 10 | 46 |
| IT24100191 | Jayasinghe D.B.P | Developer | 9 | 42 |
| IT24100264 | Bandara N W C D | Developer | 6 | 31 |
| IT24101266 | Perera M.U.E | Developer | 6 | 31 |
| **TOTAL** | | | **50** | **235** |

*Note: 2 stories (6.7, 6.8) moved from Epic 6 to Member 6 for better balance*

---

## 🔧 How to Assign in Jira (Step-by-Step)

### Method 1: During Story Creation
```
1. Click "Create" button
2. Select "Story" as issue type
3. Fill in Summary, Description, Acceptance Criteria
4. In "Assignee" field → Select team member
5. Set Story Points
6. Link to Epic
7. Click "Create"
```

### Method 2: After Story Creation
```
1. Go to Backlog view
2. Click on a story to open details panel
3. Click "Assignee" field (shows "Unassigned" by default)
4. Type team member name or select from dropdown
5. Story is automatically saved
```

### Method 3: Bulk Assignment
```
1. Go to Backlog view
2. Select multiple stories (checkboxes on left)
3. Click "⋯" (more options) → "Bulk change"
4. Select "Edit issues"
5. Check "Assignee" checkbox
6. Select team member from dropdown
7. Click "Next" → "Confirm"
8. All selected stories assigned at once
```

---

## 💡 Pro Tips

### For Solo Work:
- ✅ **Leave stories unassigned** - This is standard for Product Backlog
- ✅ Focus on creating quality stories with good acceptance criteria
- ✅ Prioritize stories correctly (High/Medium/Low)
- ✅ Ensure all story points are estimated

### For Team Simulation:
- ✅ **Distribute evenly** - Aim for similar story points per person (35-45 points)
- ✅ **Match skills to epics** - Frontend dev gets UI stories, Backend gets API stories
- ✅ **Use labels** - Tag stories with `frontend`, `backend`, `database` etc.
- ✅ **Consider dependencies** - Authentication should be assigned to experienced dev

### General Best Practices:
- 🎯 **Product Backlog** = Usually unassigned
- 🎯 **Sprint Backlog** = Assigned to specific team members
- 🎯 **During Sprint Planning** = Team members pick stories to work on
- 🎯 **Flexibility** = Assignments can change during the sprint

---

## 📸 Visual Guide: Where to Find Assignee Field

### In Story Creation Dialog:
```
┌─────────────────────────────────────┐
│ Create Story                        │
├─────────────────────────────────────┤
│ Summary: [User Registration]        │
│ Description: [As a customer...]     │
│ Assignee: [Select person ▼]  ← HERE│
│ Story Points: [5]                   │
│ Epic Link: [User Authentication ▼] │
│ Priority: [High ▼]                  │
│                                     │
│         [Cancel]  [Create]          │
└─────────────────────────────────────┘
```

### In Story Details Panel:
```
┌─────────────────────────────────────┐
│ Story: User Registration            │
├─────────────────────────────────────┤
│ Details                             │
│ ├─ Assignee: [Unassigned ▼]  ← HERE│
│ ├─ Reporter: Galagama S.T           │
│ ├─ Priority: High                   │
│ ├─ Story Points: 5                  │
│ └─ Epic Link: User Authentication   │
│                                     │
│ Description                         │
│ [As a customer, I want to...]       │
└─────────────────────────────────────┘
```

---

## ✅ What to Submit for Week 02

Based on typical assignment requirements:

1. **Screenshot of Backlog** showing:
   - All 52 stories created
   - Stories organized by Epic
   - Story points visible
   - Assignees (if required) OR unassigned (if allowed)

2. **Screenshot of Epic Roadmap** showing:
   - All 10 Epics
   - Epic descriptions
   - Story count per epic

3. **Sample Story Details** showing:
   - Complete user story format
   - Acceptance criteria
   - Story points
   - Priority
   - Epic link
   - Assignee (if applicable)

4. **Export of Product Backlog**:
   - CSV/Excel file with all stories
   - Include: Summary, Description, Story Points, Priority, Epic, Assignee

---

## 🎓 For Your Specific Case

Since you mentioned **"I am going to do this jira thing all by myself"**, I recommend:

### ✅ **Option A: Leave Unassigned (Recommended)**
- Create all 52 stories
- Leave "Assignee" field empty
- This is **standard practice** for Product Backlog
- Focus on quality: good descriptions, acceptance criteria, story points

### ✅ **Option B: Assign All to Yourself**
- If assignment requires showing ownership
- Bulk assign all stories to yourself after creation
- Quick and simple

### ✅ **Option C: Simulate Team (If Required)**
- If assignment specifically asks for team distribution
- Use the assignment distribution table above
- You can create the stories and assign to team members
- Team members don't need to actually work on them (it's just for the backlog)

---

## ❓ Check Your Assignment Requirements

Look at the **2026-S2-IE2091-Practical 2.pdf** to see if it specifies:
- ☐ Must stories be assigned?
- ☐ Must show team distribution?
- ☐ Can Product Backlog be unassigned?

If unclear, **leaving unassigned is the safest and most correct approach** for a Product Backlog! ✅

---

**Need help with anything else for your Jira setup?** 🚀
