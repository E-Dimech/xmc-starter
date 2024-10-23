import React from 'react';
import {
  RichText,
  Text,
  Image as JssImage,
  Field,
  RichTextField,
  ImageField,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: Field<string>;
  Headline: RichTextField;
  CardImage?: ImageField;
  Author: RichTextField;
}

type NewsCardProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: NewsCardProps): JSX.Element => {
  return (
    <div className="w-full px-10">
      <div className="flex flex-col md:flex-row rounded-lg overflow-hidden my-20 mx-auto">
        {/* Image section - occupies 100% width on smaller screens, 50% on larger screens */}
        <div className="w-full md:w-1/2 flex-shrink-0 overflow-hidden">
          <JssImage
            field={props.fields?.CardImage}
            alt="Card Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content section - occupies 100% width on smaller screens, 50% on larger screens */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start bg-[#001f3f] p-6 md:p-10">
          <div className="text-2xl md:text-4xl py-2 text-[#66e0ff]">
            <Text field={props.fields?.Title} />
          </div>
          <RichText
            field={props.fields?.Headline}
            className="text-xl md:text-3xl font-bold py-2 text-gray-300"
          />
          <RichText field={props.fields?.Author} className="text-lg md:text-xl py-2 text-white" />
        </div>
      </div>
    </div>
  );
};
