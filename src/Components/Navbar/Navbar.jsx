import React, { useState } from 'react';
import logo from '../../assets/new.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/Leaderboard" onClick={() => setIsMenuOpen(false)}>Leaderboard</Link></li>
          <li><Link to="/Reviews" onClick={() => setIsMenuOpen(false)}>Reviews</Link></li>
          <li><Link to="/Contact Us" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
        </ul>
        <div className="mobile-menu">
          <button 
            className={`mobile-menu-button ${isMenuOpen ? 'open' : ''}`} 
            aria-label="Toggle menu" 
            aria-expanded={isMenuOpen} 
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
