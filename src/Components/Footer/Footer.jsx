// src/Components/Footer/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/new1.png'; // Assuming this is the correct path to your logo

const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-900 relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-blue-900 opacity-75"></div>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 relative z-10">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="h-8"
              alt="Gamer's Nexus Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Gamer's Nexus
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-100 sm:mb-0 dark:text-gray-100">
            <li>
              <Link to="/" className="hover:underline me-4 md:me-6">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Leaderboard" className="hover:underline me-4 md:me-6">
                Leaderboard
              </Link>
            </li>
            <li>
              <Link to="/Reviews" className="hover:underline me-4 md:me-6">
                Reviews
              </Link>
            </li>
            <li>
              <Link to="/Contact Us" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-100 sm:text-center dark:text-gray-100">
          © 2024{' '}
          <Link to="/" className="hover:underline">
            Gamer's Nexus™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
