import React, { useState } from 'react';
import { ImageField, Field, Text, Image } from '@sitecore-jss/sitecore-jss-nextjs';

interface SlideFields {
  slideImage: ImageField;
  // slideAltText: Field<string>;
  slideCaption: Field<string>;
}

export type CarouselProps = {
  fields: {
    slides: SlideFields[];
  };
};

const CarouselComponent = ({ fields }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = fields?.slides || [];

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container relative max-w-4xl mx-auto">
      {slides.length > 0 && (
        <>
          <div className="carousel-slide relative min-w-[525px] h-96 overflow-hidden">
            {slides[currentIndex].slideImage && (
              <Image
                field={slides[currentIndex].slideImage}
                // alt={slides[currentIndex].slideAltText.value}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            )}
            {slides[currentIndex].slideCaption && (
              <div className="absolute top-4 left-4 bg-slate-400 bg-opacity-30 text-white p-2 rounded">
                <Text
                  field={slides[currentIndex].slideCaption}
                  className="text-sm md:text-lg font-semibold"
                />
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          <button
            onClick={goToPreviousSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
          >
            &#9664;
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
          >
            &#9654;
          </button>

          {/* Dots for Slide Navigation */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-white' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CarouselComponent;
