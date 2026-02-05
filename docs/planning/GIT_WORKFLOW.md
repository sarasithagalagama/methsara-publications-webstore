# Git Workflow & Contribution Guide

## 1. Branching Strategy
We will use a simplified **Gitflow** workflow.

- **`main`**: Production-ready code. Only deployable code goes here.
- **`develop`**: Integration branch. All features merge here first.
- **`feature/feature-name`**: Individual feature branches created from `develop`.

### Naming Convention
- Feature: `feature/login-system`, `feature/shopping-cart`
- Bugfix: `fix/search-bar-error`
- Docs: `docs/update-readme`

---

## 2. Workflow Steps

1.  **Pull Latest Code**
    ```bash
    git checkout develop
    git pull origin develop
    ```

2.  **Create Feature Branch**
    ```bash
    git checkout -b feature/my-new-feature
    ```

3.  **Develop & Commit**
    - Write clean code.
    - Commit often with meaningful messages.
    ```bash
    git add .
    git commit -m "feat: add user registration form"
    ```
    *Use Conventional Commits:* `feat:`, `fix:`, `docs:`, `style:`, `refactor:`

4.  **Push & Pull Request (PR)**
    ```bash
    git push origin feature/my-new-feature
    ```
    - Go to GitHub and create a Pull Request to merge `feature/my-new-feature` into `develop`.

5.  **Code Review**
    - Assign a team member to review.
    - Address comments.
    - Once approved, merge into `develop`.

---

## 3. Best Practices
- **Never push directly to `main` or `develop`.** Always use PRs.
- **Sync often:** Run `git pull origin develop` frequently in your feature branch to avoid huge merge conflicts.
- **One Feature, One Branch:** keep branches focused on a single task.
