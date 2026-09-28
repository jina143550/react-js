import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">🌍 TravelWorld</div>
      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        <li
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <a href="#">Recommendations ▾</a>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><a href="/#beaches">Beaches</a></li>
              <li><a href="/#temples">Temples</a></li>
              <li><a href="/#countries">Countries</a></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
