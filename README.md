# 🛍️ ShoppyGlobe

ShoppyGlobe is a fully responsive e-commerce web application built with **React**, **Redux Toolkit**, and **Bootstrap**. The app mimics platforms like **Flipkart** and **Amazon**, allowing users to browse products, view detailed information, select quantity, and manage a shopping cart.

---

## 🚀 Features

- 🏠 **Home Page** with latest products
- 🔍 **View Product Details** page with:
  - Large image display
  - Title, description, price
  - Quantity selector
  - Add to Cart with dynamic total price
- 🛒 **Shopping Cart**:
  - View all added items
  - Quantity adjustment
  - Remove from cart
- 📄 **About Page**
- ⚙️ **Responsive Design** using Bootstrap
- 📦 **State Management** with Redux Toolkit
- 📱 Works perfectly on both mobile and desktop

---

## 📦 Installation & Running Locally

```bash
git clone https://github.com/yourusername/shoppy-globe.git
cd shoppy-globe
npm install
npm run dev
```

Make sure you have Node.js and npm installed.

---

## 📁 Project Structure

```
shoppy-globe/
├── public/          # Static assets
├── src/             # Source code
│   ├── components/  # React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductList.jsx
│   │   ├── ProductItem.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── CartItem.jsx
│   │   └── NotFound.jsx
│   ├── redux/       # Redux store and slices
│   │   ├── store.js
│   │   └── cartSlice.js
│   ├── hooks/       # Custom hooks
│   │   └── useFetchProducts.js
│   ├── App.jsx      # Main App component
│   └── main.jsx     # Entry point
├── package.json     # Project configuration
└── README.md        # Project documentation
```

---

## 📸 Screenshots
![Screenshot 2025-04-25 212551](https://github.com/user-attachments/assets/355eba0e-94e3-4938-81fe-27f321b9efda)


---

## 📚 Technologies Used

- **React**
- **Redux Toolkit**
- **React Router**
- **Bootstrap**
- **Vite**

---

## 👨‍💻 Developed By

**Kunal Sunil Sur**  
📍 Chandrapur, India  
🔗 [LinkedIn](#)  
📧 kunalsur2001@gmail.com

---

## 📄 License

This project is licensed under the MIT License.
