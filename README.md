<div align="center">

<h1>⚛️ React with Rehan</h1>

<p>A monorepo of React mini-projects and a production-grade mega blog app —<br>covering hooks, routing, context, Redux, fullstack basics, and more.</p>

![Projects](https://img.shields.io/badge/Projects-12-blue?style=flat-square)
![JavaScript](https://img.shields.io/badge/JavaScript-89.5%25-yellow?style=flat-square&logo=javascript)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-Build_Tool-646CFF?style=flat-square&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

</div>

---

## 🗺️ Learning Path

Follow this progression from beginner to production-grade:

```
bgChanger → passwordGenerator → currencyConverter
    → reactRouter → minicontext → todocontextlocal
        → themeswitcher → todoredux → reduxtoolkittodo
            → customReact → fullstackbasics → 12MegaBlog
```

---

## 📁 Projects

### 🟢 Beginner

<details>
<summary><b>🎨 bgChanger</b> — Background Color Changer</summary>

<br>

Click buttons to swap the full-page background color in real time.

**Concepts covered**

| Hook / API | Purpose |
|---|---|
| `useState` | Stores the active color |
| Event handlers | Triggered on button click |
| Inline styles | Applied dynamically to the page |

**Run**
```bash
cd bgChanger
npm install
npm run dev
```

</details>

---

<details>
<summary><b>🔐 passwordGenerator</b> — Random Password Generator</summary>

<br>

Generates random passwords based on length, numbers, and special character toggles. One-click copy to clipboard included.

**Concepts covered**

| Hook / API | Purpose |
|---|---|
| `useState` | Tracks password options |
| `useEffect` | Re-generates on option change |
| `useCallback` | Memoizes the generator function |
| `useRef` | DOM reference for clipboard copy |

**Run**
```bash
cd passwordGenerator
npm install
npm run dev
```

</details>

---

<details>
<summary><b>💱 currencyConverter</b> — Live Currency Converter</summary>

<br>

Converts between currencies using a live exchange rate API. Features a swap button to flip the conversion direction.

**Concepts covered**

| Hook / API | Purpose |
|---|---|
| Custom hook `useCurrencyInfo` | Fetches and returns live rates |
| `useState` | Manages amount and selected currencies |
| `useEffect` | Triggers API fetch on currency change |
| Controlled inputs | Syncs form values to state |

**Run**
```bash
cd currencyConverter
npm install
npm run dev
```

</details>

---

### 🟡 Intermediate

<details>
<summary><b>🗺️ reactRouter</b> — React Router Demo</summary>

<br>

A multi-page SPA with dynamic routes, nested layouts, a GitHub profile fetcher, and a custom 404 page.

**Concepts covered**

| Feature | Detail |
|---|---|
| `createBrowserRouter` | Declarative route config |
| `RouterProvider` | Renders the router tree |
| `NavLink` | Active-state-aware navigation |
| `useParams` | Reads `/user/:userId` |
| `loader` | Fetches GitHub data before render |
| `Outlet` | Renders nested child routes |

**Run**
```bash
cd reactRouter
npm install
npm run dev
```

</details>

---

<details>
<summary><b>🔧 minicontext</b> — Context API Demo</summary>

<br>

Minimal login/logout flow demonstrating how React Context shares global state across components without prop drilling.

**Concepts covered**

| API | Purpose |
|---|---|
| `createContext` | Creates the context object |
| `useContext` | Consumes context in any child |
| Custom provider | Wraps the app with shared state |

**Run**
```bash
cd minicontext
npm install
npm run dev
```

</details>

---

<details>
<summary><b>✅ todocontextlocal</b> — Todo App with Context + LocalStorage</summary>

<br>

Full-featured todo app — add, edit, delete, and mark todos as complete. State persists across page refreshes via `localStorage`.

**Concepts covered**

| Feature | Detail |
|---|---|
| Context API | Global todo state |
| `useEffect` | Syncs state to `localStorage` on change |
| `localStorage` | Persists todos between sessions |
| CRUD operations | Add / edit / delete / toggle complete |

**Run**
```bash
cd todocontextlocal
npm install
npm run dev
```

</details>

---

<details>
<summary><b>🌓 themeswitcher</b> — Light / Dark Theme Toggle</summary>

<br>

Site-wide light/dark mode toggle implemented with Context API and Tailwind CSS. The theme class is applied at the root level.

**Concepts covered**

| Feature | Detail |
|---|---|
| Context API | Distributes theme value globally |
| `useContext` | Reads theme in any component |
| Tailwind `dark:` variant | Applies dark-mode styles |
| Toggle pattern | Single boolean controls entire UI |

**Run**
```bash
cd themeswitcher
npm install
npm run dev
```

</details>

---

<details>
<summary><b>📦 todoredux</b> — Todo App with Redux Toolkit</summary>

<br>

The todo app rebuilt using Redux Toolkit. Demonstrates how to set up a store, write slice reducers, and connect components.

**Concepts covered**

| Feature | Detail |
|---|---|
| `configureStore` | Sets up the Redux store |
| `createSlice` | Defines reducers + actions together |
| `useSelector` | Reads state in components |
| `useDispatch` | Dispatches actions from components |
| Redux DevTools | Available for debugging |

**Run**
```bash
cd todoredux
npm install
npm run dev
```

</details>

---

<details>
<summary><b>🗂️ reduxtoolkittodo</b> — Redux Toolkit Todo (Extended)</summary>

<br>

An extended Redux todo with filter selectors (all / active / completed) and optional middleware-based localStorage persistence.

**Concepts covered**

| Feature | Detail |
|---|---|
| Redux Toolkit | Store + slice pattern |
| Filter selectors | Derived state from slice |
| Middleware | Optional `localStorage` sync |

**Run**
```bash
cd reduxtoolkittodo
npm install
npm run dev
```

</details>

---

### 🔴 Advanced

<details>
<summary><b>⚙️ customReact</b> — Build React from Scratch</summary>

<br>

A from-scratch implementation of React's renderer. Parses a virtual DOM object tree and writes it to the real DOM — the same idea behind `ReactDOM.render`.

**Concepts covered**

| Concept | Detail |
|---|---|
| Virtual DOM | Plain JS objects describing UI |
| Custom `render` function | Walks the vDOM tree recursively |
| `createElement` | Creates vDOM nodes |
| Reconciliation concepts | How React updates the real DOM |

**Run**
```bash
cd customReact/backend
# Open index.html in a browser, or:
npx serve .
```

</details>

---

<details>
<summary><b>🖥️ fullstackbasics</b> — React + Express Fullstack</summary>

<br>

Connects a React (Vite) frontend to a Node.js/Express backend. Covers CORS setup, Vite proxy config, and data fetching from your own API.

**Concepts covered**

| Feature | Detail |
|---|---|
| Express.js | REST endpoint setup |
| CORS | Cross-origin request handling |
| Vite proxy | Avoids CORS in dev |
| `axios` / `fetch` | Data fetching in React |
| `.env` | Environment variable usage |

**Run**

> Start the backend and frontend in two separate terminals.

```bash
# Terminal 1 — backend
cd fullstackbasics/backend
npm install
node index.js

# Terminal 2 — frontend
cd fullstackbasics/frontend
npm install
npm run dev
```

</details>

---

<details>
<summary><b>📝 12MegaBlog</b> — Production Blog Platform</summary>

<br>

The capstone project. A fully functional blog platform with user authentication, a rich-text editor, cloud file storage, and protected routes.

**Tech stack**

| Layer | Tool |
|---|---|
| Frontend | React + Vite + Tailwind CSS |
| State | Redux Toolkit |
| Routing | React Router v6 |
| Auth + DB + Storage | [Appwrite](https://appwrite.io/) (BaaS) |
| Editor | TinyMCE |
| Forms | React Hook Form |

**Features**
- User registration and login via Appwrite Auth
- Create, edit, and delete blog posts
- Cover image upload to Appwrite Storage
- Rich text editing with TinyMCE
- Public post listing and protected author routes

**Setup**

1. Create an [Appwrite](https://appwrite.io/) project with a database, collection, and storage bucket.
2. Copy `.env.sample` → `.env` and fill in your credentials.

```env
VITE_APPWRITE_URL=
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_COLLECTION_ID=
VITE_APPWRITE_BUCKET_ID=
VITE_TINYMCE_API_KEY=
```

3. Run:

```bash
cd 12MegaBlog
npm install
npm run dev
```

</details>

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| ⚛️ React 18 | UI library |
| ⚡ Vite | Build tool & dev server |
| 🎨 Tailwind CSS | Utility-first styling |
| 🗺️ React Router v6 | Client-side routing |
| 📦 Redux Toolkit | Global state management |
| ☁️ Appwrite | BaaS — auth, database, storage |
| ✏️ TinyMCE | Rich text editor |
| 📋 React Hook Form | Form handling |

---

## 🚀 Quick Start

Each project is self-contained. To run any of them:

```bash
cd <project-folder>
npm install
npm run dev
```

> Node.js v18+ and npm v9+ recommended.

---

## 👤 Author

**Rehan Ali** — [@rehanbhjg](https://github.com/rehanbhjg)

---

<div align="center">
<sub>Built while learning React · chai-aur-react series</sub>
</div>
