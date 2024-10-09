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
  cardTitle: Field<string>;
  cardBody: RichTextField;
  cardImage?: ImageField;
  cardLink: LinkField;
  cardButtonText: Field<string>;
}

export type CardProps = {
  params?: { [key: string]: string };
  fields: Fields;
};

const CardTemplate = ({ fields }: CardProps) => {
  return (
    <div className="p-6 relative rounded-lg overflow-hidden">
      {fields?.cardImage && (
        <Image field={fields.cardImage} className="absolute inset-0 w-full h-full object-cover" />
      )}

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 p-4">
        <div className="text-2xl font-bold mb-2 text-white">
          <Text field={fields?.cardTitle} />
        </div>
        <RichText field={fields?.cardBody} className="mb-2 text-white" />
        <Link field={fields?.cardLink} className="text-white underline">
          <Text field={fields?.cardButtonText} />
        </Link>
      </div>
    </div>
  );
};

export default CardTemplate;

// type CardComponentProps = {
//   cards: CardProps[]; // Cards are passed as props
//   renderingParams: {
//     NumberOfCards: string;
//   };
// };

// export async function getStaticProps() {
//   const res = await fetch(
//     'https://www.sxastarter.localhost/sitecore/api/ssc/item?path=/sitecore/content/Home/CardItems'
//   );
//   const cards = await res.json();

//   return {
//     props: {
//       cards,
//     },
//   };
// }

// export const Default = ({ cards, renderingParams }: CardComponentProps) => {
//   // Convert the number of cards from string to number
//   const numberOfCards = parseInt(renderingParams.NumberOfCards, 10) || 3;

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//       {cards.slice(0, numberOfCards).map((card, index) => {
//         return (
//           <div key={index} className="p-6 relative rounded-lg overflow-hidden">
//             {card.fields?.CardImage && (
//               <Image
//                 field={card.fields.CardImage}
//                 className="absolute inset-0 w-full h-full object-cover"
//               />
//             )}

//             <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//             <div className="relative z-10 p-4">
//               <div className="text-2xl font-bold mb-2 text-white">
//                 <Text field={card.fields?.CardTitle} />
//               </div>
//               <RichText field={card.fields?.CardBody} className="mb-2 text-white" />
//               <Link field={card.fields?.CardLink} className="text-white underline">
//                 <Text field={card.fields?.CardButtonText} />
//               </Link>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
