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

export const Default = (props: CarouselSlideProps): JSX.Element => {
  return (
    <div className="carousel-slide relative h-[350px] md:h-[450px] lg:h-[550px] overflow-hidden">
      {props.fields?.SlideImage && (
        <Image
          field={props.fields?.SlideImage}
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      )}
      {props.fields?.SlideCaption && (
        <div className="absolute top-4 left-4 bg-slate-400 bg-opacity-30 text-black p-2 rounded">
          <Text field={props.fields?.SlideCaption} className="text-sm md:text-lg font-semibold" />
        </div>
      )}
    </div>
  );
};
