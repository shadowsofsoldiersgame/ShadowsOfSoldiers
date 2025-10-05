import React from 'react';
import HeroSection from './components/HeroSection';
import TrailerSection from './components/TrailerSection';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <HeroSection />
      <TrailerSection />
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;

