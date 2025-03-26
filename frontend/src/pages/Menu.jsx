// src/pages/Menu.jsx
import '../styles/menu.css';
import mockData from '../mock/menuData'; // Mock data file
import { useState } from 'react';

function Menu() {
  const [items] = useState(mockData);

  return (
    <section className="menu-page">
      <h1 className="menu-title">Our Delicious Menu</h1>
      <div className="menu-grid">
        {items.map((item) => (
          <div key={item.id} className="menu-card" data-aos="fade-up">
            <img src={item.image} alt={item.name} />
            <div className="menu-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="menu-footer">
                <span className="price">Ksh {item.price}</span>
                <button className="add-btn">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
