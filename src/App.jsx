import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css';

const Header = React.lazy(() => import('./components/Header'));
const ProductList = React.lazy(() => import('./components/ProductList'));
const ProductDetail = React.lazy(() => import('./components/ProductDetail'));
const Cart = React.lazy(() => import('./components/Cart'));
const NotFound = React.lazy(() => import('./components/NotFound'));
const Footer = React.lazy(() => import('./components/Footer')); // Import the footer

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Add Footer component */}
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
