import React from 'react';
import './Navbar.css';  // Importing external CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">FOODIE FAVORITE</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">Download</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/contact">Menu</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
