import React, { useEffect, useState } from 'react';
import './AboutUsSlider.css';

const items = ["TRUST.", "EXPERTISE.", "CARE.", "EXCELLENCE.", "QUALITY."];

const AboutUsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
      }, 2000); // Change slide every 2 seconds
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  return (
    <div className="trust-container">
      <div className="trust-content">
        {items.map((item, index) => (
          <span 
            key={index} 
            className={`trust-item ${isMobile && index === currentIndex ? 'active' : ''}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AboutUsSlider;
