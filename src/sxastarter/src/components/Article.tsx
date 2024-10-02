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
// import { CoasterButton } from './CoasterButton';

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
    <div className="card flex flex-col items-center border-2 border-black rounded-lg p-4">
      {/* Card image */}
      <Image field={props.fields?.Image} className="w-full h-auto rounded-t-lg" />

      {/* Card content */}
      <div className="card-content p-4 text-center">
        <Text field={props.fields?.Title} className="text-3xl font-bold mb-2" />
        <RichText field={props.fields?.Description} className="text-xl mb-4" />
        <Link
          field={props.fields?.ButtonLink}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text field={props.fields?.ButtonText} />
        </Link>

        {/* <CoasterButton
          fields={{
            ButtonLink: props.fields?.ButtonLink,
            ButtonText: props.fields?.ButtonText,
          }}
          params={{}}
        /> */}
      </div>
    </div>
  );
};
