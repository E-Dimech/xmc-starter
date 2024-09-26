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
  // rounded: boolean;
}

type HeroProps = {
  params: { [key: string]: string };
  fields: Fields;
  // rounded: boolean;
};

export const Default = (props: HeroProps): JSX.Element => {
  const isRounded = props.params?.rounded === 'true';
  const backgroundImageUrl = props.fields?.BackgroundImage?.value?.src;

  return (
    <div
      className={`relative bg-cover bg-no-repeat h-[400px] w-screen bg-center text-white ${
        isRounded ? 'rounded-lg' : ''
      }`}
      style={{
        backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : 'none',
      }}
    >
      {/* Transparent Overlay */}
      <div
        className={`absolute inset-0 ${isRounded ? 'rounded-lg' : ''}`}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          boxShadow: 'inset 0 0 0 16px rgba(255, 255, 255, 0.1)',
        }}
      ></div>

      {/* Text Content & Logo*/}
      <div className="relative z-10 flex flex-col justify-start items-start text-left pt-36 max-w-[25rem] mx-14">
        <JssImage
          field={props.fields?.LogoImage}
          alt="Logo"
          style={{ width: '130px', marginBottom: '-3rem', paddingBottom: '.5rem' }}
          // className="pb-2 w-24 h-24 mb-[-3rem]"
        />
        <div className="pl-3">
          <RichText field={props.fields?.Title} className="text-4xl font-bold" />
          <RichText field={props.fields?.BodyText} className="text-lg py-3" />
          <Link
            field={props.fields?.CTALink}
            className="inline-block text-white underline hover:no-underline"
          >
            <Text field={props.fields?.CTALabel} />
          </Link>
        </div>
      </div>
    </div>
  );
};
