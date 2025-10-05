import React from 'react';
import ReactPlayer from 'react-player/youtube';
import '../styles/TrailerSection.css';

const TrailerSection = () => {
  // Using the YouTube channel URL - users can replace with specific video URL
  const videoUrl = 'https://www.youtube.com/@shadowsofsoldiers';
  
  return (
    <section className="trailer-section">
      <div className="container">
        <h2 className="section-title">Watch Gameplay</h2>
        <div className="trailer-wrapper">
          <ReactPlayer
            url={videoUrl}
            width="100%"
            height="100%"
            controls={true}
            light={true}
            playing={false}
            config={{
              youtube: {
                playerVars: { showinfo: 1 }
              }
            }}
          />
        </div>
        <p className="trailer-note">
          Visit our{' '}
          <a
            href="https://youtube.com/@shadowsofsoldiers"
            target="_blank"
            rel="noopener noreferrer"
            className="trailer-link"
          >
            YouTube channel
          </a>
          {' '}for more videos
        </p>
      </div>
    </section>
  );
};

export default TrailerSection;

