import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          © {currentYear} Shadows of Soldiers. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

