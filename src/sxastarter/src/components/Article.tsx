import React from 'react';
import {
  Text,
  Field,
  ImageField,
  Image,
  RichTextField,
  RichText,
  Link,
  LinkField,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: Field<string>;
  Description: RichTextField;
  Image: ImageField;
  ButtonLink: LinkField;
  ButtonText: Field<string>;
}

export type CoasterArticleProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: CoasterArticleProps): JSX.Element => {
  return (
    <div className="card flex flex-col items-center border-2 border-black rounded-lg p-4 w-full h-full">
      {/* Card image */}
      <Image
        field={props.fields?.Image}
        className="w-full h-48 lg:h-72 object-cover rounded-t-lg"
      />

      {/* Card content */}
      <div className="card-content flex flex-col justify-between flex-grow p-4 text-center">
        <Text field={props.fields?.Title} className="text-3xl font-bold mb-2" />
        <RichText field={props.fields?.Description} className="text-xl mb-4 flex-grow" />
        <Link
          field={props.fields?.ButtonLink}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg no-underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text field={props.fields?.ButtonText} />
        </Link>
      </div>
    </div>
  );
};
