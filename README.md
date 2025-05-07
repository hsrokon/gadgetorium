
# 📱 Gadgetorium

Welcome to **Gadgetorium**, your ultimate destination for the latest and greatest tech gadgets. This is a fully responsive React-based e-commerce application built as part of the Assignment 8 project for Batch 10.

## 🔗 Live Website  
👉 [https://gadgetorium.surge.sh](https://gadgetorium.surge.sh)

## 📄 Requirement Document  
📎 [Gadgetorium req PDF](./gadgetorium-req-doc)

---

## 🚀 React Fundamentals Used

- **JSX and Component Structure**
- **Props and State Management**
- **React Router DOM v7**: Routing, dynamic routes, nested layouts
- **Conditional Rendering**
- **Hooks**: `useState`, `useEffect`, `useContext`, `useParams`, `useNavigate`, `useLocation`
- **Context API** for global state (cart & wishlist)
- **React Helmet Async** for dynamic page titles
- **Reusable Components** (e.g. `Gadget`, `Header`, `Footer`, `Layout`)
- **Form and Event Handling**

---

## 📦 Data Handling & Management

- **Context API**: Used to manage cart and wishlist globally.
- **LocalStorage (Optional)**: Prepared for persistence if needed.
- **Dynamic JSON Data**: Fetched from `data.json` and rendered across multiple components.

---

## ✨ Features

1. **Homepage with Floating Banner & Hero Section**  
   A visually appealing banner with a call-to-action button that leads users to explore gadgets.

2. **Product Grid with Category Filtering & Sorting**  
   Products can be filtered by category or sorted by price/rating using a sidebar drawer UI.

3. **Product Details Page**  
   Each product has a detailed view with specifications, price, availability, and interactive buttons (Add to Cart/Wishlist).

4. **Dashboard with Cart & Wishlist Tabs**  
   - Users can view, sort, and manage items in both the Cart and Wishlist.
   - Total cost calculation and sorting by price.
   - Wishlist items can be moved to the Cart directly.

5. **Statistics Page with Custom Recharts**  
   A responsive and dynamic data visualization using custom bar shapes to compare prices across products.

---

## 🛠️ Tools & Libraries

- **React Router DOM**
- **React Icons**
- **React Helmet Async**
- **Recharts**
- **React Toastify**
- **Tailwind CSS & DaisyUI**
- **d3-scale & d3-scale-chromatic**

---

## 🧪 Bonus Implementations

- Dynamic title per route using `react-helmet-async`
- Custom bar chart in statistics using `ResponsiveContainer` and `TriangleBar`
- Conditional disabling of wishlist/cart buttons
- Route-based design change using `useLocation`
- Toast messages on add-to-cart/wishlist actions

---

Feel free to clone, explore, and enhance this project for your learning or portfolio. If you'd like a dark mode, search functionality, or Stripe integration — it's ready for expansion!
