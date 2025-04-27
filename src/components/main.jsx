import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Cart from './cart'; // your Card component
import tshirt from '../images/tshirt.png';
import headphone from '../images/headphone.png';
import phone from '../images/phone.png';

const products = [
  {
    id: 1,
    Product: 'Tshirt',
    Price: '$50',
    Image: tshirt, // Add your real image link here
  },
  {
    id: 2,
    Product: 'Boat Headphone',
    Price: '$150',
    Image: headphone,
  },
  {
    id: 3,
    Product: 'iPhone 14 Pro',
    Price: '$850',
    Image: phone,
  },
];

function Main() {
  const { addToCart } = useOutletContext();

  return (
    <div className="card-container">
      {products.map((product) => (
        <Cart 
          key={product.id}
          product={product}
          onAddToCart={() => addToCart(product)}
        />
      ))}
    </div>
  );
}

export default Main;
