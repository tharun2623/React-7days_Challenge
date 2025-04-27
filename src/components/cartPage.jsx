import React from 'react';
import { useOutletContext } from 'react-router-dom';

function CartPage() {
  const { cartItems } = useOutletContext();

  if (!cartItems || cartItems.length === 0) {
    return <h2 className="text-center mt-5">Your Cart is Empty.</h2>;
  }

  return (
    <div className="container cart-page">
      <h2 className="cart-title">🛒 Your Cart Items</h2>
      <div className="cart-items-grid">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item-card">
            <img src={item.Image} className="cart-item-img" alt={item.Product} />
            <div className="cart-item-details">
              <h5 className="cart-item-name">{item.Product}</h5>
              <p className="cart-item-price">{item.Price}</p>
              <p className="cart-item-quantity">Qty: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartPage;