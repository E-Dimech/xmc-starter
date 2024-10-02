import React from 'react';
import { LinkField, Link, Text, Field } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  ButtonLink: LinkField;
  ButtonText: Field<string>;
}

type CoasterButtonProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const CoasterButton = (props: CoasterButtonProps): JSX.Element => {
  return (
    <Link
      field={props.fields?.ButtonLink}
      className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Text field={props.fields?.ButtonText} />
    </Link>
  );
};
