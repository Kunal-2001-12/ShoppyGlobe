import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const cartItems = []; 
  const cartCount = cartItems.length;

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">
          ShoppyGlobe
        </Link>
      </div>
    
      <div className="nav-links">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/cart" className="nav-item">
          <span className="cart-icon">🛒</span> 
          Cart
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
        <Link to="/about" className="nav-item">About</Link>
      </div>
    </nav>
  );
}

export default Header;
