import React, { useEffect, useState } from 'react';

const ParallaxBackground = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg')`,
          opacity: scrollPosition < window.innerHeight * 1.5 ? 1 - (scrollPosition / (window.innerHeight * 1.5)) : 0,
          transform: `translateY(${scrollPosition * 0.5}px)`
        }}
      />
      <div className="absolute inset-0 bg-black" />
    </div>
  );
};

export default ParallaxBackground;