import React from 'react';
import './Footer.css';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </div>
      <div className="footer-social">
        <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="#" aria-label="Twitter"><FaTwitter /></a>
      </div>
      <div className="footer-copyright">
        © 2025 FinStaff360. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
