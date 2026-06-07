import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-info">
          <h3>Dr. Shubham Jaiswal</h3>
          <p>Dedicated to providing premium medical consultation and professional care for a healthier community.</p>
        </div>
        <div className="footer-links-wrapper">
          <div className="footer-links">
            <a href="/privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <a href="/terms" onClick={(e) => e.preventDefault()}>Terms of Service</a>
            <a href="#contact">Contact</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <p className="copyright">
            © {new Date().getFullYear()} Dr. Shubham Jaiswal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
