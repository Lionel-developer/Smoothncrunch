import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';
import Orders from './pages/Orders'; // Import the Orders page

function App() {
  return (
    <CartProvider> {/* Wrapping App in CartProvider */}
      <Router>
        <Navbar />
        <main style={{ padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/orders" element={<Orders />} />
            {/* Add routes for Orders page or Cart page if needed */}
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
}

export default App;
