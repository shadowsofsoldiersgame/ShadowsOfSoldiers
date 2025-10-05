import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          © {currentYear} Brought to you by{' '}
          <a 
            href="https://store.steampowered.com/developer/SneakyDevs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            Sneaky Devs
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

