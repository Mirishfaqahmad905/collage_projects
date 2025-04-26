import React, { useState, useEffect } from 'react';
import './css/Hero.css';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    'https://lh3.googleusercontent.com/p/AF1QipOKYUSMgVhH65rpLD_S0fN7E_Nn5H06skrFACBT=s1360-w1360-h1020',
    'https://scontent.fisb9-1.fna.fbcdn.net/v/t39.30808-6/476261153_640687918306889_8390343945738308948_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=UIR-lSJMuZkQ7kNvwGy4HQM&_nc_oc=AdnzAV2nc__cLWs3ocyPu69BYnD3vnl1_O0Aw1hP0-5OxBP6dhCRpEckl4QO7wQa1QE&_nc_zt=23&_nc_ht=scontent.fisb9-1.fna&_nc_gid=Nu-truW0ywbkGaQY9JtJ_A&oh=00_AfHJ7ONImw-CBmFHJ6uxs_3MJQbfDUYzgbuns2KO6n64rg&oe=6812EC30',
    'https://scontent.fisb9-1.fna.fbcdn.net/v/t39.30808-6/476836924_640687641640250_3118916123784318175_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=hRtFKKwoS14Q7kNvwFEhr6H&_nc_oc=AdlA5MZUfrlGu9MM--9giHY25syFYqu6WE7_Cpc2pwdw6BNHETVz3dQ81YwgoaFBado&_nc_zt=23&_nc_ht=scontent.fisb9-1.fna&_nc_gid=47RmTJt_4y0dsfyy2s5umg&oh=00_AfG0FOZL587YPU6X-n5aAteXD8HPl4GXvrRIwNkToATUAQ&oe=6812E818'
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
