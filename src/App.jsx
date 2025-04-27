import React,{useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
   const [cartItems, setCartItems] = useState([]);

   const addToCart = (product) => {
      setCartItems(prevItems => {
         const existingItem = prevItems.find(item => item.Product === product.Product);
         if (existingItem) {
            const updatedItems = prevItems.map(item =>
               item.Product === product.Product
               ? { ...item, quantity: item.quantity + 1 }
               : item
            );
            return updatedItems;
         }
         return [...prevItems, { ...product, quantity: 1 }];
      });
   };

   return (
      <div className="app-container">
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar">
            <div className="container-fluid">
            <Link to="/" className="navbar-brand mb-0 h1" style={{ cursor: 'pointer' }}>
               My Shopify
            </Link>
               <div className="d-flex align-items-center">
                  <p className="mb-0">Cart Count: {cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
                  <Link className="btn btn-outline-warning ms-3" to="/cart">Cart</Link>
               </div>
            </div>
         </nav>
         
         {/* Only this */}
         <Outlet context={{ cartItems, addToCart }} />
         
      </div>
   );
}

export default App;