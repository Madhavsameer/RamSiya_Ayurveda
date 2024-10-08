import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import mylogo from '../logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={mylogo} alt="logo" id="logo" className="logo" />
      </Link>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>Home</Link>
        </li>
        <li>
          <Link to="/services" onClick={toggleMenu}>Our Services</Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
        </li>
        <li>
          <Link to="/blog" onClick={toggleMenu}>Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
