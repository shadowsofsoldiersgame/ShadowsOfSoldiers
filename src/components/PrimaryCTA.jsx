import React from 'react';
import { FaDiscord, FaSteam } from 'react-icons/fa';
import '../styles/PrimaryCTA.css';

const LINKS = {
  discord: 'https://discord.gg/rkWhy9TwjX',
  steam: 'https://store.steampowered.com/app/1401200/Shadows_of_Soldiers/'
};

const PrimaryCTA = () => {
  return (
    <div className="primary-cta">
      <a
        href={LINKS.discord}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button cta-discord"
      >
        <FaDiscord className="cta-icon" />
        <span className="cta-text">Join Our Community</span>
      </a>
      
      <a
        href={LINKS.steam}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button cta-steam"
      >
        <FaSteam className="cta-icon" />
        <span className="cta-text">Wishlist on Steam</span>
      </a>
    </div>
  );
};

export default PrimaryCTA;

