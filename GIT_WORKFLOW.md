# 🐙 Team Git Workflow Guide

> **Goal:** Manage code for 6 members without conflicts and prove individual contribution in the VIVA.

---

## 1. Initial Setup (One Person Only)
The project lead should do this once:

```bash
# Initialize git
git init

# Add remote (your GitHub repo URL)
git remote add origin https://github.com/your-username/methsara-publications-webstore.git

# Create and switch to main branch
git checkout -b main

# Add initial files
git add .
git commit -m "Initial project setup"
git push -u origin main
```

---

## 2. Daily Workflow for Each Member 🧑‍💻

### Step A: Start a New Feature
**Never work on `main` directly.** Always create a branch for your feature.

```bash
# 1. Update your local main first
git checkout main
git pull origin main

# 2. Create your feature branch (Naming convention: feature/your-feature-name)
# Member 1 Example:
git checkout -b feature/user-auth-galagama

# Member 2 Example:
git checkout -b feature/catalog-appuhami

# Member 3 Example:
git checkout -b feature/cart-gawrawa
```

### Step B: Work & Commit Regularly
Make small, frequent commits. This proves you did the work step-by-step.

```bash
# Make changes to your files...

# Check status
git status

# Add changes
git add .

# Commit with a clear message
git commit -m "Added login form layout"
git commit -m "Implemented JWT validation logic"
```

### Step C: Push Your Branch
Push your branch to GitHub so the team (and examiner) can see it.

```bash
# Push your specific branch
git push origin feature/user-auth-galagama
```

---

## 3. Merging to Main (The Proper Way) 🔀

When your feature is done:

1.  **Go to GitHub** (website).
2.  You will see a "Compare & Pull Request" button.
3.  Click **Create Pull Request**.
    *   **Title:** "Feature: User Authentication System"
    *   **Reviewers:** Assign another team member to review.
4.  Once reviewed, click **Merge Pull Request**.

> **Why Pull Requests?**
> *   It creates a **permanent record** of your contribution.
> *   Shows code review history (examiners love this).
> *   Prevents breaking the main site.

---

## 4. Handling Conflicts (If they happen) 💥

If you try to pull or merge and get a conflict:

1.  **Don't panic.**
2.  VS Code will highlight the conflict in the file.
3.  Choose **"Accept Current Change"** (yours) or **"Accept Incoming Change"** (theirs), or fix it manually.
4.  Then:
    ```bash
    git add .
    git commit -m "Resolved merge conflict"
    git push
    ```

---

## 📋 Branch Name Cheat Sheet

| Member | Branch Name Guideline |
|--------|----------------------|
| **Galagama S.T** | `feature/auth-galagama` |
| **Appuhami H A P L** | `feature/catalog-appuhami` |
| **Gawrawa G H Y** | `feature/cart-gawrawa` |
| **Jayasinghe D.B.P** | `feature/orders-jayasinghe` |
| **Bandara N W C D** | `feature/inventory-bandara` |
| **Perera M.U.E** | `feature/promo-perera` |

---

## 💡 VIVA Pro-Tip
At the exam, show your **GitHub "Insights" -> "Network" graph**. It visually shows 6 different colored lines (branches) merging into one, proving everyone worked in parallel!
