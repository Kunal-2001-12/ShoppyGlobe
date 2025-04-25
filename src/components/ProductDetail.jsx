import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({ ...product, quantity }));
      alert(`${product.title} added to cart!`);
    }
  };

  if (!product) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="full-screen-container">
      <div className="product-detail">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
        />
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p className="product-price">Price: ₹{product.price}</p>

        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />

        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <p>Total: ₹{product.price * quantity}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
