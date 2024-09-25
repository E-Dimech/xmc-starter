import React from 'react';
import { Link, RichText, Text, Image as JssImage, Field } from '@sitecore-jss/sitecore-jss-nextjs';

export interface HeroProps {
  title: string;
  bodyText: string;
  backgroundImage?: string | Field<string>;
  logoImage?: string | Field<string>;
  ctaLabel: string;
  ctaLink: string;
  rounded: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title,
  bodyText,
  backgroundImage,
  logoImage,
  ctaLabel,
  ctaLink,
  rounded,
}) => {
  return (
    <div
      className={`relative bg-cover bg-center text-white ${rounded ? 'rounded-lg' : ''}`}
      style={{
        height: '400px',
        width: '800px',
      }}
    >
      <JssImage
        field={{ value: backgroundImage }}
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
      />
      {/* Transparent Overlay */}
      <div
        className={`absolute inset-0 ${rounded ? 'rounded-lg' : ''}`}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          boxShadow: 'inset 0 0 0 12px rgba(255, 255, 255, 0.1)',
        }}
      ></div>

      {/* Text Content & Logo*/}
      <div className="relative z-10 flex flex-col justify-start items-start text-left pt-36 max-w-[25rem] mx-14">
        <JssImage
          field={{ value: logoImage }}
          alt="Logo"
          className="pb-2 w-48 h-48"
          style={{ marginBottom: '-3rem' }}
        />
        <div className="pl-3">
          <RichText field={{ value: title }} className="text-4xl font-bold" />
          <RichText field={{ value: bodyText }} className="text-lg pt-4" />
          <Link
            field={{ value: ctaLink }}
            href={ctaLink}
            className="inline-block text-white underline hover:no-underline"
          >
            <Text field={{ value: ctaLabel }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
