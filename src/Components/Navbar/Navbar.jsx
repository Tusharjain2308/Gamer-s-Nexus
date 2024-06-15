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
    <nav className="navbar" style={{ background: 'linear-gradient(to top, rgba(14, 23, 39, 0.9), rgba(0, 0, 0, 0.8))' }}>
      <div className="navbar-container">
        <img src={logo} alt="Logo" className="logo" />
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Leaderboard">Leaderboard</Link></li>
          <li><Link to="/Reviews">Reviews</Link></li>
          <li><Link to="/Contact Us">Contact Us</Link></li>
        </ul>
        <div className="mobile-menu">
          <button 
            className="mobile-menu-button" 
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
