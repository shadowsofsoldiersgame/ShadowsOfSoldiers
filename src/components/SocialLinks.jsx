import React from 'react';
import { FaYoutube, FaPatreon, FaFacebook } from 'react-icons/fa';
import '../styles/SocialLinks.css';

const SOCIAL_LINKS = {
  youtube: 'https://youtube.com/@shadowsofsoldiers',
  patreon: 'https://patreon.com/shadowsofsoldiers',
  facebook: 'https://www.facebook.com/shadowsofsoldiers/'
};

const SocialLinks = () => {
  return (
    <section className="social-section">
      <div className="container">
        <h2 className="section-title">Follow Our Journey</h2>
        <div className="social-links">
          <a
            href={SOCIAL_LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link social-youtube"
            aria-label="Visit our YouTube channel"
          >
            <FaYoutube />
          </a>
          
          <a
            href={SOCIAL_LINKS.patreon}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link social-patreon"
            aria-label="Support us on Patreon"
          >
            <FaPatreon />
          </a>
          
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link social-facebook"
            aria-label="Follow us on Facebook"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;

