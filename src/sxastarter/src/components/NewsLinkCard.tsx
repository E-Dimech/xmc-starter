import React from 'react';
import { Field, ImageField, LinkField, Link, Text, Image } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  NewsTitle: Field<string>;
  NewsSubTitle: Field<string>;
  NewsImage: ImageField;
  NewsLink: LinkField;
}

type NewsLinkCardProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: NewsLinkCardProps): JSX.Element => {
  return (
    <Link field={props.fields?.NewsLink} className="block group no-underline mx-auto">
      <div className="flex w-full rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Image Section */}
        <div className="w-2/3 relative overflow-hidden">
          <Image
            field={props.fields?.NewsImage}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Text Section */}
        <div className="w-1/3 bg-gray-100 p-4 flex flex-col justify-center">
          <Text field={props.fields?.NewsTitle} tag="h3" className="text-2xl font-bold mb-2" />
          <Text field={props.fields?.NewsSubTitle} tag="p" className="text-4xl text-gray-600" />
        </div>
      </div>
    </Link>
  );
};
