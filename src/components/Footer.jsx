import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/cart">Cart</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-info">
          <p>&copy; 2025 ShoppyGlobe. All Rights Reserved.</p>
          <p>Developed by Kunal Sur</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;