# Deploying the MERN App on Render

Use [Render](https://dashboard.render.com/) to host the client and server as a single web service.

---

## Step 1: Prepare your MERN app

1. Confirm the app runs locally. The project should have two folders:
   - `client` — React
   - `server` — Node.js / Express
2. Create a production build of the React app:

```bash
cd client
npm run build
```

This writes the production files into a `build` folder (or `dist` if you are using Vite).

---

## Step 2: Set up a Git repository

Initialize git in the project root (skip if you already have a repo):

```bash
git init
```

Commit your code:

```bash
git add .
git commit -m "Initial commit"
```

Create a GitHub repository, then push:

```bash
git remote add origin {your-github-repo-url}
git push -u origin main
```

---

## Step 3: Create a Render web service

1. Sign up or log in at [dashboard.render.com](https://dashboard.render.com/).
2. Click **New** → **Web Service**.

---

## Step 4: Connect your GitHub repository

1. Authorize Render to access GitHub if you have not already.
2. Select the repository that contains this MERN app.

---

## Step 5: Configure the service

| Setting | Value |
| --- | --- |
| **Name** | Any name you want for the service |
| **Region** | A region close to your users |
| **Build Command** | See below |
| **Start Command** | See below |

**Build command** (if the server lives in `server`):

```bash
cd client && npm install && npm run build && cd ../server && npm install
```

**Start command:**

```bash
cd server && node server.js
```

Use `node index.js` instead if that is your server entry file.

---

## Step 6: Environment variables

In the Render dashboard, click **Add Environment Variable** and add values such as:

- `MONGODB_URI`
- `JWT_SECRET`
- any other secrets your server reads from `process.env`

---

## Step 7: Deploy

Click **Create Web Service**. Render will:

1. Pull the code from GitHub
2. Install dependencies
3. Build the client
4. Start the server

---

## Step 8: Serve the React build from Express

Add this to `server.js` (or `index.js`) **after** your API routes, so `/api/*` still hits Express and everything else goes to React:

```js
const path = require("path");

const clientBuildPath = path.join(__dirname, "../client/build");
console.log(clientBuildPath);

app.use(express.static(clientBuildPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});
```

**What this does**

- `express.static(clientBuildPath)` serves JS, CSS, images, and other assets from `client/build`.
- `app.get("*", ...)` is a catch-all. Any route that is not a static file or an API route gets `index.html`.
- That catch-all is required for a React SPA. Client-side routing only works if the server always returns `index.html` and lets React handle the URL.

If you use Vite, change `../client/build` to `../client/dist`.

---

## Step 9: Remove the client proxy and update CORS

Remove the `proxy` field from `client/package.json`. Then update CORS in the server:

```js
const cors = require("cors");

// Restrict origins in production (recommended)
// app.use(
//   cors({
//     origin: ["http://localhost:3000", "https://your-production-url.com"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true,
//   })
// );

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
```

---

## Step 10: Point Axios at the production URL

If API calls still go to `localhost:3000` (or `localhost:5173`), update the Axios instance to the Render URL:

```js
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://test3-99k4.onrender.com/",
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
```

Replace the `baseURL` with your own Render service URL.

---

## Troubleshooting: `csp:blocked`

If the browser reports a Content Security Policy error, loosen Helmet like this (and replace the placeholder URLs):

```js
// app.use(
//   helmet({
//     contentSecurityPolicy: {
//       directives: {
//         defaultSrc: ["'self'"],
//         scriptSrc: [
//           "'self'",
//           "'unsafe-inline'",
//           "'unsafe-eval'",
//           "https://your-production-url.com",
//         ],
//         styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
//         imgSrc: ["'self'", "data:", "https://your-production-url.com"],
//         connectSrc: ["'self'", "https://your-production-url.com"],
//         fontSrc: ["'self'", "https://fonts.gstatic.com"],
//         objectSrc: ["'none'"],
//         upgradeInsecureRequests: [],
//       },
//     },
//   })
// );
```
