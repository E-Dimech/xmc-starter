import React, { useState } from 'react';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';

import { Default as CarouselSlide, CarouselSlideProps } from './CarouselSlide';

interface Fields {
  Slides: CarouselSlideProps[];
}
type CarouselProps = {
  rendering: ComponentRendering;
  fields: Fields;
};

export const Default = (props: CarouselProps): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = props.fields.Slides || [];

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
    <div className="carousel-container relative max-w-4xl mx-auto mb-20">
      {slides.length > 0 && (
        <>
          <CarouselSlide fields={slides[currentIndex].fields} params={{}} />

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
