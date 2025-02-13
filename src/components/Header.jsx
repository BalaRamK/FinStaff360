import React, { useState } from 'react';
import './Header.css';
import { FaBars } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-logo">FinStaff360</div>
      <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
        <button className="header-menu-toggle" onClick={toggleMenu}>
          <FaBars />
        </button>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="header-buttons">
        <button className="header-login-button">Login</button>
      </div>
    </header>
  );
}

export default Header;
