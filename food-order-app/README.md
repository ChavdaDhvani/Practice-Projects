# 🍔 React Food Order App

This is a simple Food Ordering application built using React.  
Users can browse available meals, add items to the cart, remove items, and place an order through a checkout form.  

---

## 🚀 Concepts Practiced

- React Hooks: `useState`, `useEffect`, `useContext`, `useReducer`
- Context API for global cart state management
- useReducer for handling complex cart actions
- Avoiding prop drilling using Context
- Handling side effects with `useEffect`
- Form submission and API integration

---

## 🧠 Key Learnings

Initially, the project was implemented using only `useState`.  
As the cart logic became more complex and prop drilling increased, the Context API was introduced to manage global state efficiently.  
Later, `useReducer` was implemented to handle multiple cart actions (add item, remove item, clear cart) in a more structured and scalable way.

This project helped me clearly understand:
- When to use Context API
- When to implement useReducer instead of multiple useState
