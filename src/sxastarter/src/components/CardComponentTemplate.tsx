import React from 'react';
import { Field, RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import CardTemplate, { CardProps } from './CardTemplate';

interface CardComponentTemplateProps {
  fields: {
    Title: Field<string>;
    Description: Field<string>;
  };
  cards: CardProps[];
  renderingParams: {
    NumberOfCards: string;
  };
}

export const CardComponentTemplate = ({
  fields,
  cards,
  renderingParams,
}: CardComponentTemplateProps) => {
  const numberOfCards = parseInt(renderingParams.NumberOfCards, 10) || cards.length;
  return (
    <div className="card-component-container">
      <Text field={fields.Title} />

      <RichText field={fields.Description} />

      {/* Render Each Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.slice(0, numberOfCards).map((card, index) => (
          <CardTemplate key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    'https://xmcloudcm.localhost/sitecore/api/ssc/item?path=/sitecore/content/Home/CardItems'
  );
  const data = await res.json();

  const cards = data.item.children.results;

  return {
    props: {
      cards,
    },
  };
}

export default CardComponentTemplate;
