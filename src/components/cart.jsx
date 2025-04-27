import React from 'react';
import Button from './button'; // Assuming you have a Button component

function Cart({ product, onAddToCart }) {
  // If no product is passed, return a simple message
  if (!product) {
    return <div>No Product Data Available.</div>;
  }

  return (
    <article className="card custom-card">
      <div className="card-img-container">
        <img
          className="card-img-top product-img"
          src={product.Image}
          alt={product.Product}
        />
      </div>
      <div className="card-body">
        <h2 className="card-title product-title">{product.Product}</h2>
        <p className="card-text product-price">{product.Price}</p>

        {/* Use the reusable Button */}
        <Button className="btn-primary add-to-cart-btn" onClick={onAddToCart}>
          Add to cart
        </Button>
      </div>
    </article>
  );
}

export default Cart;