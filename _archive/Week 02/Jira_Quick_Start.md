# Week 02: Jira Quick Start Guide
## Step-by-Step Setup Instructions

---

## 🚀 Getting Started with Jira

### Option 1: Jira Cloud (Recommended for Students)

1. **Create Free Account**:
   - Go to [https://www.atlassian.com/software/jira/free](https://www.atlassian.com/software/jira/free)
   - Click "Get it free"
   - Sign up with your email
   - Verify your email address

2. **Create Your Site**:
   - Choose a site name: `methsara-publications` (or similar)
   - Your Jira URL will be: `https://methsara-publications.atlassian.net`

3. **Select Template**:
   - Choose **"Scrum"** template
   - This gives you backlog, sprints, and board views

---

## 📝 Project Setup (Step-by-Step)

### Step 1: Create Project

1. Click **"Create project"** button
2. Select **"Scrum"** template
3. Choose **"Team-managed"** project type
4. Fill in details:
   - **Name**: Methsara Publications Webstore
   - **Key**: MPW (auto-generated, you can change)
5. Click **"Create"**

### Step 2: Invite Team Members

1. Click **"Project settings"** (gear icon)
2. Go to **"People"**
3. Click **"Add people"**
4. Enter team members' email addresses
5. Assign roles:
   - **Admin**: Product Owner, Scrum Master
   - **Member**: Development team

### Step 3: Configure Issue Types

1. Go to **"Project settings"** → **"Issue types"**
2. Ensure you have:
   - ✅ Epic
   - ✅ Story
   - ✅ Task
   - ✅ Bug
3. Add custom issue type if needed (click **"Add issue type"**)

### Step 4: Create Custom Fields (Optional)

For educational publishing context:

1. Go to **"Project settings"** → **"Fields"**
2. Click **"Create field"**
3. Add custom fields:
   - **Grade Level**: Dropdown (6, 7, 8, 9, 10, 11, 12, 13)
   - **Subject**: Dropdown (Maths, Science, English, etc.)
   - **Publication Type**: Dropdown (Textbook, Workbook, Guide, Past Papers)

---

## 📊 Creating Your First Epic

1. Click **"Backlog"** in left sidebar
2. Click **"Create epic"** button
3. Fill in:
   - **Epic name**: User Authentication & Authorization
   - **Description**: All features related to user registration, login, and access control
4. Choose a color for easy identification
5. Click **"Create"**

**Repeat for all 10 Epics** (see Product Backlog Guide for full list)

---

## ✍️ Creating User Stories

### Method 1: From Backlog View

1. Go to **"Backlog"**
2. Click **"Create"** button (or press `C`)
3. Select **"Story"** as issue type
4. Fill in:
   - **Summary**: Brief title (e.g., "User Registration")
   - **Description**: Full user story in format:
     ```
     As a new customer,
     I want to create an account,
     So that I can track my orders.
     ```
5. Add **Acceptance Criteria**:
   - Click in description area
   - Add section titled "Acceptance Criteria"
   - List each criterion with checkbox:
     ```
     Acceptance Criteria:
     - [ ] Registration form with name, email, password
     - [ ] Email verification required
     - [ ] Password strength validation
     ```
6. Set **Story Points**: Click story points field, enter value (1, 2, 3, 5, 8, 13)
7. Set **Priority**: Choose from dropdown
8. Link to **Epic**: Select from epic dropdown
9. Add **Labels**: e.g., `frontend`, `backend`, `authentication`
10. Click **"Create"**

### Method 2: Quick Create

1. In Backlog view, type in the text box at bottom
2. Press Enter to create basic story
3. Click on story to add details later

---

## 🎯 Story Point Estimation

### Planning Poker (Team Activity)

1. Gather team on video call
2. For each story:
   - Read story aloud
   - Discuss complexity
   - Each member privately estimates (1, 2, 3, 5, 8, 13)
   - Reveal estimates simultaneously
   - Discuss differences
   - Agree on final estimate
3. Update story points in Jira

### Estimation Guidelines:

| Points | Complexity | Time Estimate |
|--------|------------|---------------|
| 1 | Trivial | < 2 hours |
| 2 | Simple | 2-4 hours |
| 3 | Moderate | 4-8 hours |
| 5 | Complex | 1-2 days |
| 8 | Very Complex | 2-3 days |
| 13 | Extremely Complex | 3-5 days (consider splitting) |

---

## 📋 Organizing Your Backlog

### Prioritization

1. Go to **"Backlog"** view
2. Drag and drop stories to reorder
3. Top = Highest priority
4. Bottom = Lowest priority

### Using MoSCoW Method:

Add labels to stories:
- `must-have` - Critical for MVP
- `should-have` - Important but not critical
- `could-have` - Nice to have
- `wont-have` - Future consideration

### Grouping by Epic:

1. In Backlog view, click **"Group by"** dropdown
2. Select **"Epic"**
3. Stories will be grouped under their epics

---

## 🔍 Viewing Your Backlog

### Backlog View:
- Shows all unscheduled stories
- Organized by priority
- Can group by Epic
- Drag to reorder

### Board View:
- Kanban-style board
- Columns: To Do, In Progress, Done
- Useful during sprint execution

### Roadmap View:
- Timeline view of Epics
- Shows epic progress
- Useful for long-term planning

---

## 📤 Exporting Your Backlog

### For Submission:

1. Go to **"Backlog"** view
2. Click **"..."** (more options) in top right
3. Select **"Export"**
4. Choose format:
   - **Excel**: For detailed data
   - **CSV**: For importing elsewhere
   - **Print**: For PDF generation

### Taking Screenshots:

Capture these views:
1. **Project Dashboard**: Shows overview
2. **Backlog View**: Shows all stories
3. **Epic Roadmap**: Shows epic organization
4. **Sample Story Details**: Shows acceptance criteria format

**Windows Screenshot Shortcuts**:
- `Win + Shift + S`: Snipping tool
- `Win + PrtScn`: Full screenshot to Pictures folder

---

## 🎨 Jira Tips & Tricks

### Keyboard Shortcuts:
- `C`: Create issue
- `G` then `B`: Go to Backlog
- `G` then `D`: Go to Board
- `/`: Search

### Bulk Operations:
1. Select multiple stories (checkbox)
2. Click **"Bulk change"**
3. Update fields for all selected

### Filters:
1. Click **"Filter"** icon
2. Filter by:
   - Epic
   - Assignee
   - Priority
   - Labels
   - Story points

### Quick Filters:
- **Only my issues**: Shows your assigned stories
- **Recently updated**: Shows recent changes

---

## ✅ Quality Checklist

Before considering a story "complete":

- [ ] Title is clear and concise
- [ ] Description follows user story format
- [ ] Acceptance criteria defined (minimum 3)
- [ ] Story points estimated
- [ ] Priority set
- [ ] Epic linked
- [ ] Labels added
- [ ] No spelling/grammar errors

---

## 🐛 Common Issues & Solutions

### Issue: Can't add team members
**Solution**: Check if you're project admin. Only admins can add people.

### Issue: Stories not showing in backlog
**Solution**: Check if they're already in a sprint. Go to Active Sprint view.

### Issue: Can't estimate story points
**Solution**: Enable estimation in Project Settings → Features → Story Points

### Issue: Lost work/changes
**Solution**: Jira auto-saves. Check Activity log on the issue.

---

## 📚 Additional Resources

### Official Documentation:
- [Jira Software Guide](https://www.atlassian.com/software/jira/guides)
- [Scrum with Jira](https://www.atlassian.com/agile/tutorials/how-to-do-scrum-with-jira-software)
- [Writing User Stories](https://www.atlassian.com/agile/project-management/user-stories)

### Video Tutorials:
- [Jira for Beginners](https://www.youtube.com/results?search_query=jira+for+beginners)
- [Creating User Stories in Jira](https://www.youtube.com/results?search_query=creating+user+stories+jira)

### Templates:
- User Story Template (see Product Backlog Guide)
- Acceptance Criteria Template (Given-When-Then format)

---

## 🎯 Week 02 Success Criteria

By end of week, you should have:

✅ Jira project created and configured  
✅ All team members added  
✅ 10 Epics created  
✅ 40-50 User Stories created  
✅ All stories with acceptance criteria  
✅ All stories estimated  
✅ Backlog prioritized  
✅ Screenshots captured for submission  

---

**You're ready to start! Good luck! 🚀**

---

## 📞 Need Help?

**Technical Issues**: Contact Atlassian Support or check their community forums  
**Team Questions**: Discuss in your team chat  
**Course Questions**: Consult with your instructor

---

*Last Updated: Week 02, 2026*
