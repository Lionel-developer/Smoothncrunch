// Correct named import
import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext'; // Named import for useCart
import mockData from '../mock/menuData'; // Import mock data
import '../styles/orders.css';

function Orders() {
  const { cart, addToCart, removeFromCart } = useCart(); // Access cart and functions from CartContext
  const [items, setItems] = useState(mockData); // For the menu items
  
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    setItems(mockData); // You can replace this with a fetch request if you have an actual API
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div className="orders-page">
      <h1>Your Orders</h1>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty! Start adding items from the menu.</p>
      ) : (
        <div className="orders-list">
          {cart.map((item) => (
            <div key={item.id} className="order-item">
              <img src={item.image} alt={item.name} />
              <div className="order-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="price">Ksh {item.price}</div>
                <button className="remove-btn" onClick={() => handleRemoveFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Menu Items */}
      <h2>Menu Items</h2>
      <div className="menu-grid">
        {items.map((item) => (
          <div key={item.id} className="menu-card">
            <img src={item.image} alt={item.name} />
            <div className="menu-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="menu-footer">
                <span className="price">Ksh {item.price}</span>
                <button className="add-btn" onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="order-total">
        <strong>Total: Ksh {totalPrice}</strong>
      </div>

      {cart.length > 0 && (
        <button className="checkout-btn">Proceed to Checkout</button>
      )}
    </div>
  );
}

export default Orders;
