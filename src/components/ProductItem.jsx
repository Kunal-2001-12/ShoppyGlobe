import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import './ProductItem.css';

const ProductItem = ({ product, onAddToCart }) => {
  const navigate = useNavigate();

  const handleViewProduct = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-item">
      <img
        loading="lazy"
        src={`https://images.weserv.nl/?url=${encodeURIComponent(product.images[0])}&w=200&h=200&fit=cover`}
        alt={product.title}
        className="product-image"
      />
      <h3>{product.title}</h3>
      <p>Price: ₹{product.price}</p>
      <button onClick={handleViewProduct}>View Product</button>
    </div>
  );
};

export default ProductItem;
