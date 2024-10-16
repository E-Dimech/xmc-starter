import React from 'react';
import { ImageField, Field, Text, Image } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  SlideImage: ImageField;
  SlideCaption: Field<string>;
}

export type CarouselSlideProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const CarouselSlide = (props: CarouselSlideProps): JSX.Element => {
  return (
    <div className="carousel-slide relative min-w-[525px] h-96 overflow-hidden">
      {props.fields?.SlideImage && (
        <Image
          field={props.fields?.SlideImage}
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      )}
      {props.fields?.SlideCaption && (
        <div className="absolute top-4 left-4 bg-slate-400 bg-opacity-30 text-white p-2 rounded">
          <Text field={props.fields?.SlideCaption} className="text-sm md:text-lg font-semibold" />
        </div>
      )}
    </div>
  );
};

export default CarouselSlide;
