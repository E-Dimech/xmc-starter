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
  title: RichTextField;
  bodyText: RichTextField;
  backgroundImage?: ImageField;
  logoImage?: ImageField;
  ctaLabel: Field<string>;
  ctaLink: LinkField;
  // rounded: boolean;
}

type HeroProps = {
  params: { [key: string]: string };
  fields: Fields;
  // rounded: boolean;
};

const Hero = (props: HeroProps): JSX.Element => {
  const isRounded = props.params?.rounded === 'true';
  return (
    <div
      className="relative bg-cover bg-center text-white"
      style={{
        height: '400px',
        width: '800px',
      }}
    >
      {/* Background Image */}
      {props.fields.backgroundImage ? (
        <JssImage
          field={props.fields.backgroundImage}
          alt="Background"
          className={`absolute inset-0 object-cover w-full h-full ${isRounded ? 'rounded-lg' : ''}`}
        />
      ) : (
        <div className="absolute inset-0 bg-gray-300"></div>
      )}

      {/* Transparent Overlay */}
      <div
        className={`absolute inset-0 ${isRounded ? 'rounded-lg' : ''}`}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          boxShadow: 'inset 0 0 0 12px rgba(255, 255, 255, 0.1)',
        }}
      ></div>

      {/* Text Content & Logo*/}
      <div className="relative z-10 flex flex-col justify-start items-start text-left pt-36 max-w-[25rem] mx-14">
        <JssImage
          field={props.fields.logoImage}
          alt="Logo"
          className="pb-2 w-48 h-48"
          style={{ marginBottom: '-3rem' }}
        />
        <div className="pl-3">
          <RichText field={props.fields.title} className="text-4xl font-bold" />
          <RichText field={props.fields.bodyText} className="text-lg pt-4" />
          <Link
            field={props.fields.ctaLink}
            className="inline-block text-white underline hover:no-underline"
          >
            <Text field={props.fields.ctaLabel} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
