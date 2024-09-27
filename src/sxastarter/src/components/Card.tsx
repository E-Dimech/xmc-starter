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

type CardProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: CardProps): JSX.Element => {
  // const isRounded = props.params?.RoundedCorners === '1';

  return (
    <div className="flex border-5 border-cyan-500 rounded-lg overflow-hidden">
      {/* Image occupying 50%, no gap, with rounded left corners matching the card */}
      <div className="w-1/2 flex-shrink-0 overflow-hidden">
        <JssImage
          field={props.fields?.CardImage}
          alt="Card Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content occupying 50%, left-aligned and vertically centered */}
      <div className="w-1/2 flex flex-col justify-center items-start bg-cyan-100 pl-10">
        <div className="text-2xl py-2">
          <Text field={props.fields?.Title} />
        </div>
        <RichText field={props.fields?.Headline} className="text-3xl font-bold py-2" />
        <RichText field={props.fields?.Author} className="text-xl py-2" />
      </div>
    </div>
  );
};
