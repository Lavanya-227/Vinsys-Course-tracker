import React from 'react';
import { Link } from 'react-router-dom'; // ✅ import Link

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Course Progress Tracker.</p>
      <div className="footer-links">
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms of Service</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>
    </footer>
  );
};

export default Footer;
