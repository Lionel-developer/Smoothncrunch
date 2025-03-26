import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/styles.css'; // Global styles
import 'aos/dist/aos.css'; // AOS animation styles
import AOS from 'aos'; // AOS library

// Initialize AOS when the app starts
AOS.init({
  duration: 800,        // Animation duration (ms)
  once: true,           // Only animate once when in view
  easing: 'ease-out',   // Smooth easing
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
