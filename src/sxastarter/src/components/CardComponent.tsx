import React from 'react';
import {
  Field,
  RichTextField,
  Text,
  ImageField,
  RichText,
  LinkField,
  Link,
  Image,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  CardTitle: Field<string>;
  CardBody: RichTextField;
  CardImage?: ImageField;
  CardLink: LinkField;
  CardButtonText: Field<string>;
}

type CardProps = {
  params?: { [key: string]: string };
  fields: Fields;
};

type CardComponentProps = {
  cards: CardProps[]; // Cards are passed as props
  renderingParams: {
    NumberOfCards: string;
  };
};

export const Default = ({ cards, renderingParams }: CardComponentProps) => {
  // Convert the number of cards from string to number
  const numberOfCards = parseInt(renderingParams.NumberOfCards, 10) || 3;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.slice(0, numberOfCards).map((card, index) => {
        return (
          <div key={index} className="p-6 relative rounded-lg overflow-hidden">
            {/* Image handling using the Sitecore JSS Image component */}
            {card.fields?.CardImage && (
              <Image
                field={card.fields.CardImage}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}

            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="relative z-10 p-4">
              {/* Explicitly set text color for visibility */}
              <div className="text-2xl font-bold mb-2 text-white">
                <Text field={card.fields?.CardTitle} />
              </div>
              <RichText field={card.fields?.CardBody} className="mb-2 text-white" />
              <Link field={card.fields?.CardLink} className="text-white underline">
                <Text field={card.fields?.CardButtonText} />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
