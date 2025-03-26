import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../components/Navbar.css';
import logo from '../assets/logo.jpg';

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Smooth and Crunch Logo" />
        </Link>
      </div>

      <nav className={`navbar-links ${open ? 'show' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/menu" onClick={closeMenu}>Menu</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </nav>

      <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        {open ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
}

export default Navbar;
