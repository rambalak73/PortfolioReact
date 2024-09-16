import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/src/Images/ujjainJn.png',
    '/src/Images/khatoo.jpg',
    '/src/Images/banaras.png',
    // Add more slide images as needed
  ];

  // Automatic slide change after 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative w-full h-96 overflow-hidden shadow-lg">
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="object-cover w-full h-full opacity-80 transition-opacity duration-1000"
        />
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full shadow-md z-10"
        onClick={prevSlide}
      >
        Previous
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full shadow-md z-10"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Slider;
