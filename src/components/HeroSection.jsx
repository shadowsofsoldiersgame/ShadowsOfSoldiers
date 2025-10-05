import React from 'react';
import { motion } from 'framer-motion';
import PrimaryCTA from './PrimaryCTA';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background overlay */}
      <div className="hero-overlay"></div>
      
      {/* Content */}
      <div className="hero-content">
        <motion.div
          className="hero-logo"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1>SHADOWS OF SOLDIERS</h1>
        </motion.div>
        
        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Tactical Military Action Game
        </motion.p>
        
        <motion.div
          className="hero-cta-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <PrimaryCTA />
        </motion.div>
        
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span>▼</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

