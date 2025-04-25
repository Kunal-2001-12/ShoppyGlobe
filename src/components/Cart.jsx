import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import CartItem from './CartItem';
import './Cart.css';

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="full-screen-container">
      <h2 className="full-screen-header">Your Cart</h2>
      <div className="full-screen-content">
        {cartItems.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>₹{item.price} x {item.quantity}</p>
                <p>Total: ₹{item.price * item.quantity}</p>
                <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))
        )}
        <div className="total-price">
          <h3>Total Amount: ₹{totalAmount}</h3>
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
