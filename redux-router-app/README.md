# 🛍️ React Product Store App
A simple Product Management app built with React, Redux Toolkit, and React Router. Users can browse products, view details, add new products, and delete them — synced with a local JSON Server API.

---

## 🚀 Concepts Practiced

- React Router v6 (nested routes, `useParams`, `useNavigate`, `<Outlet />`)
- Redux Toolkit (`createSlice`, `configureStore`, async thunks)
- Global state management with `useSelector` and `useDispatch`
- API integration using async thunks
- Centralized loading and error handling
- Clean separation of routing, state, and UI

---

## 🧠 Key Learnings

### React Router vs Redux — when to use which

**React Router**
- Handles navigation and URL-based state
- Use for page routing, route params, redirects, and layouts

**Redux Toolkit**
- Handles global and shared application data
- Use for API data, products list, selected product, loading, and error state

**Rule:**  
Router = **where you are**  
Redux = **what data you have**

---

### Async data handling best practices

- Store **loading and error state in Redux** so UI can react properly
- Dispatch errors to Redux instead of only logging them
- Clear old state before new fetches to avoid stale UI
- Keep API calls inside Redux thunks, not inside components

---

### Combining Router and Redux

Typical flow:
1. User navigates to a route (`/products/:id`)
2. Router provides the ID using `useParams`
3. Component dispatches Redux thunk
4. Redux updates store
5. UI automatically re-renders with new data

---

### State management guidelines

- Use **Redux** → global/shared state
- Use **useState** → local UI state (forms, toggles)
- Keep components focused on UI, not API logic

---

## 🏗️ Architecture Overview

- React Router → navigation
- Redux Toolkit → state management
- Thunks → API and async logic
- Components → UI rendering
- JSON Server → backend API