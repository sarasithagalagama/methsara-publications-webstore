# 📚 Methsara Publications Webstore — Complete Installation Guide

> **For:** Group Members (ISP_G05)  
> **Assumes:** You have nothing installed yet — this guide walks you through everything from scratch.  
> **Covers:** Windows & macOS

---

## 📋 Table of Contents

1. [What You'll Install](#1-what-youll-install)
2. [Step 1 — Install Node.js](#step-1--install-nodejs)
3. [Step 2 — Install GitHub Desktop](#step-2--install-github-desktop)
4. [Step 3 — Clone the Repository](#step-3--clone-the-repository)
5. [Step 4 — Open a Terminal](#step-4--open-a-terminal)
6. [Step 5 — Install Backend Dependencies](#step-5--install-backend-dependencies)
7. [Step 6 — Install Frontend Dependencies](#step-6--install-frontend-dependencies)
8. [Step 7 — Set Up the .env File](#step-7--set-up-the-env-file)
9. [Step 8 — Run the Application](#step-8--run-the-application)
10. [Troubleshooting](#troubleshooting)

---

## 1. What You'll Install

| Tool | Purpose | Required? |
|---|---|---|
| **Node.js** (v18 or later) | Runs the backend server and React frontend | ✅ Yes |
| **GitHub Desktop** | Clone and manage the repository | ✅ Yes |
| **MongoDB** | Already cloud-hosted (Atlas) — no install needed | ❌ Not needed |

---

## Step 1 — Install Node.js

### 🪟 Windows

1. Go to 👉 **https://nodejs.org/**
2. Download the **LTS** version (e.g., `v20.x.x LTS`). Do NOT pick "Current".
3. Run the `.msi` installer. Click **Next** through all screens with default options.
4. When asked about **"Tools for Native Modules"** — leave it **unchecked**.
5. Click **Install** and let it finish, then **restart your computer**.

### 🍎 macOS

**Option A — Direct Download (Easiest):**
1. Go to 👉 **https://nodejs.org/**
2. Download the **LTS** macOS `.pkg` installer.
3. Double-click the `.pkg` file and follow the installer prompts.

**Option B — Using Homebrew (Recommended for developers):**
1. Open **Terminal** (press `Cmd + Space`, type `Terminal`, press Enter).
2. Install Homebrew first (if not already installed):
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
3. Then install Node.js:
   ```bash
   brew install node
   ```

### ✅ Verify Node.js is installed (Windows & macOS)

Open a terminal and run:

```bash
node --version
```
You should see something like `v20.x.x`.

```bash
npm --version
```
You should see something like `10.x.x`.

---

## Step 2 — Install GitHub Desktop

> **Skip this step if you already have GitHub Desktop installed.**

1. Go to 👉 **https://desktop.github.com/**
2. Click **Download for Windows** or **Download for macOS**.
3. **Windows:** Run the installer — it installs automatically.  
   **macOS:** Open the `.zip` file, drag **GitHub Desktop** to your Applications folder.
4. Open GitHub Desktop and **sign in with your GitHub account**.

---

## Step 3 — Clone the Repository

1. Open **GitHub Desktop**.
2. Go to **File → Clone repository...**
3. Click the **URL** tab.
4. Enter the repository URL:
   ```
   https://github.com/sarasithagalagama/methsara-publications-webstore
   ```
5. Under **"Local Path"**, choose where to save the project:
   - **Windows:** e.g., `C:\Projects\methsara-publications-webstore`
   - **macOS:** e.g., `/Users/yourname/Projects/methsara-publications-webstore`
6. Click **Clone** and wait for it to finish.

---

## Step 4 — Open a Terminal

You need a terminal opened **inside the project folder**.

### 🪟 Windows

**Option A — Via GitHub Desktop:**  
Go to **Repository → Open in Command Prompt**

**Option B — Via File Explorer:**  
Navigate to the project folder → click the address bar → type `cmd` → press Enter.

**Option C — Via VS Code:**  
Open VS Code → **File → Open Folder** → select the project folder → press `` Ctrl + ` ``

### 🍎 macOS

**Option A — Via GitHub Desktop:**  
Go to **Repository → Open in Terminal**

**Option B — Via Finder:**  
Right-click the project folder in Finder → **New Terminal at Folder**  
*(If not visible: System Settings → Privacy & Security → Enable "New Terminal at Folder" in Services)*

**Option C — Via VS Code:**  
Open VS Code → **File → Open Folder** → select the project folder → press `` Ctrl + ` ``

> ⚠️ **Confirm you're in the right folder** by running `ls` (macOS) or `dir` (Windows) — you should see `server.js` listed.

---

## Step 5 — Install Backend Dependencies

In your terminal (at the project root), run:

```bash
npm install
```

- ⏳ Takes **1–3 minutes** depending on internet speed.
- Lots of text will scroll — this is normal.
- Done when your cursor returns with no `npm ERR!` messages.

---

## Step 6 — Install Frontend Dependencies

```bash
cd client
npm install
cd ..
```

- ⏳ Takes **2–5 minutes** — React has many packages.
- Wait until the cursor returns, then `cd ..` to go back to the project root.

---

## Step 7 — Set Up the .env File

The `.env` file holds secret config values and is **not on GitHub** for security. You must create it manually.

### 🪟 Windows

1. Open **File Explorer**, navigate to the project root folder.
2. Right-click → **New → Text Document**.
3. Name it exactly `.env` *(remove the `.txt` extension — click Yes when Windows warns you).*
4. Right-click the `.env` file → **Open with → Notepad**.
5. Paste the content below, save, and close.

> 💡 **Tip:** If you can't rename it, go to **View → Show → File name extensions** in File Explorer to make extensions visible.

### 🍎 macOS

1. Open **Terminal** in the project root folder.
2. Run:
   ```bash
   nano .env
   ```
3. Paste the content below.
4. Press `Ctrl + X`, then `Y`, then `Enter` to save and exit.

### 📋 .env File Content (paste this exactly):

```env
# MongoDB Configuration
MONGODB_URI=mongodb+srv://sarasithagalagama_db_user:ofBKObtIBDUec8AR@methsara-publications-w.axk9ers.mongodb.net/methsara_publications?retryWrites=true&w=majority&appName=methsara-publications-webstore

# Server Configuration
PORT=5001
NODE_ENV=development

# JWT Configuration
JWT_SECRET=methsara_publications_secret_key_2026_sprint1_isp_g05
JWT_EXPIRE=7d

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password

# Frontend URL
FRONTEND_URL=http://localhost:3000
```

> 💡 `EMAIL_USER` and `EMAIL_PASSWORD` are only needed for email features. Leave them as-is — the rest of the app works fine without them.

---

## Step 8 — Run the Application

Make sure your terminal is at the **project root** (not inside `client`), then run:

```bash
npm start
```

This starts:
- 🖥️ **Backend API** → `http://localhost:5001`
- 🌐 **Frontend (React)** → `http://localhost:3000`

Your browser should open automatically to `http://localhost:3000`.  
If it doesn't, just open any browser and go to that URL.

> ⏳ The first time React compiles, it may take **30–60 seconds**.

### To stop the app:
Press `Ctrl + C` in the terminal, then type `Y` and press Enter (Windows), or just `Ctrl + C` (macOS).

---

## Troubleshooting

### ❌ `'node' is not recognized` (Windows) / `command not found: node` (macOS)
Node.js isn't installed or not added to PATH.  
**Fix:** Reinstall Node.js from https://nodejs.org/ and restart your terminal/computer.

### ❌ `npm install` fails with permission error (macOS)
**Fix:**
```bash
sudo npm install
```
Enter your Mac login password when prompted.

### ❌ Port 3000 or 5001 already in use
Another process is using the port.  
**Fix:** Close other terminals running this project, or restart your computer.

### ❌ `Cannot connect to MongoDB` / `MongooseServerSelectionError`
**Fix:** Check your internet connection. The database is cloud-hosted — you need internet.

### ❌ `.env` file saved as `.env.txt`
**Windows Fix:** In File Explorer → **View → Show → File name extensions**, then rename `.env.txt` → `.env`.  
**macOS Fix:** Run `mv .env.txt .env` in Terminal.

### ❌ `react-scripts: command not found`
Frontend `npm install` wasn't run.  
**Fix:** Run `cd client && npm install && cd ..` again.

---

## 🔄 Daily Workflow (After First Setup)

Each time you sit down to work:

1. **Pull latest changes** in GitHub Desktop → **Fetch origin** → **Pull**.
2. If teammates added new packages, re-run:
   ```bash
   npm install
   cd client && npm install && cd ..
   ```
3. Start the app:
   ```bash
   npm start
   ```

---

## 📁 Project Structure (Quick Reference)

```
methsara-publications-webstore/
├── client/          ← React frontend (port 3000)
├── epics/           ← Backend routes, controllers, models
├── server.js        ← Backend entry point (port 5001)
├── package.json     ← Backend dependencies
└── .env             ← ⚠️ You must create this manually — not on GitHub
```

---

*If you're still stuck, contact your project lead or raise an issue on GitHub.* 🚀
