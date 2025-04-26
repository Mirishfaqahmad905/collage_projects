import React, { useState, useEffect } from 'react';
import './css/Hero.css';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    'https://lh3.googleusercontent.com/p/AF1QipOKYUSMgVhH65rpLD_S0fN7E_Nn5H06skrFACBT=s1360-w1360-h1020',
    'https://www.facebook.com/photo/?fbid=551531747222507&set=a.191948613180824',
    'https://www.facebook.com/photo/?fbid=520100810365601&set=pcb.520101490365533'
  ];

  // Automatically transition to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <div
        className="carousel-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Remove the button if not needed, or keep them for manual control */}
      <button className="prev-slide" onClick={prevSlide}>❮</button>
      <button className="next-slide" onClick={nextSlide}>❯</button>

      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Hero;
