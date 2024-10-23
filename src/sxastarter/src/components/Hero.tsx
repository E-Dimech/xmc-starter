import React from 'react';
import {
  Link,
  RichText,
  Text,
  Image as JssImage,
  Field,
  RichTextField,
  LinkField,
  ImageField,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: RichTextField;
  BodyText: RichTextField;
  BackgroundImage?: ImageField;
  LogoImage?: ImageField;
  CTALabel: Field<string>;
  CTALink: LinkField;
}

type HeroProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: HeroProps): JSX.Element => {
  const isRounded = props.params?.RoundedCorners === '1';
  const backgroundImageUrl = props.fields?.BackgroundImage?.value?.src;

  return (
    <div
      className={`relative bg-cover bg-no-repeat h-[500px] w-screen bg-center text-white mb-20 ${
        isRounded ? 'rounded-lg' : ''
      }`}
      style={{
        backgroundImage: `url(${backgroundImageUrl}?quality=90)`,
      }}
    >
      {/* Transparent Overlay */}
      <div
        className={`absolute inset-0 shadow-custom-inset bg-black bg-opacity-50 ${
          isRounded ? 'rounded-lg' : ''
        }`}
      ></div>

      {/* Text Content & Logo*/}
      <div className="relative z-10 flex flex-col justify-start items-start text-left pt-36 max-w-[25rem] mx-14">
        <JssImage field={props.fields?.LogoImage} alt="Logo" className="pb-2 w-52 mb-6" />
        <div className="pl-3">
          <RichText field={props.fields?.Title} className="text-4xl font-bold" />
          <RichText field={props.fields?.BodyText} className="text-2xl py-3" />
          <Link
            field={props.fields?.CTALink}
            className="inline-block text-white no-underline hover:underline"
          >
            <Text field={props.fields?.CTALabel} />
          </Link>
        </div>
      </div>
    </div>
  );
};
