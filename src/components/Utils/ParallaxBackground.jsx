import React from 'react';
import './ParallaxBackground.css';

const ParallaxBackground = () => {
  return (
    <div className="parallax-container">
      <div className="parallax-background"></div>
      <div className="parallax-gradient-overlay"></div>
    </div>
  );
};

export default ParallaxBackground;