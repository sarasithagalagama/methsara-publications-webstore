# One Command Start

## Single Command to Run Everything

```bash
npm start
```

This uses `concurrently` to launch both backend and frontend in one terminal.

| Prefix | Service | URL |
|---|---|---|
| `[0]` | Backend (Express + MongoDB) | http://localhost:5000 |
| `[1]` | Frontend (React) | http://localhost:3000 |

---

## First-Time Setup

Run this once before `npm start`:

```bash
# Root dependencies (Express, Mongoose, JWT, etc.)
npm install

# Frontend dependencies (React, Tailwind, etc.)
cd client && npm install && cd ..
```

Also create your `.env` file in the project root:
```env
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/methsara_publications
JWT_SECRET=your_secret_key
PORT=5000
NODE_ENV=development
```

---

## Individual Commands

| Command | What It Does |
|---|---|
| `npm start` | Backend + Frontend together |
| `npm run server` | Backend only (with nodemon) |
| `npm run client` | Frontend only (React dev server) |
| `npm run dev` | Backend only (alternative) |

---

## Stopping the Servers

Press `Ctrl + C` once — stops both backend and frontend.

---

## Expected Startup Output

```
[0] [nodemon] starting `node server.js`
[0] ✅ MongoDB Connected Successfully
[0] 📦 Database: methsara_publications
[0] 🚀 Server running on port 5000
[1]
[1] Compiled successfully!
[1] Local: http://localhost:3000
```

`[0]` = Backend output  
`[1]` = Frontend output

---

## If Something Fails

**Port 5000 already in use:**
```bash
taskkill /F /IM node.exe
npm start
```

**Frontend modules missing:**
```bash
cd client && npm install && cd ..
npm start
```

**MongoDB won't connect:**
- Check `.env` has the correct `MONGO_URI`
- Verify your IP is whitelisted in MongoDB Atlas
