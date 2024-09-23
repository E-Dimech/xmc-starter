import React from 'react';
import { StaticImageData } from 'next/image';

export interface HeroProps {
  title: string;
  content: string;
  backgroundImage?: string | StaticImageData;
  logoImage?: string | StaticImageData;
  ctaLabel: string;
  ctaLink: string;
  rounded: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title,
  content,
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
        backgroundImage: `url(${
          typeof backgroundImage === 'string' ? backgroundImage : backgroundImage?.src
        })`,
        height: '400px',
        width: '800px',
      }}
    >
      {/* Transparent Overlay */}
      <div
        className={`absolute inset-0 ${rounded ? 'rounded-lg' : ''}`}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          boxShadow: 'inset 0 0 0 12px rgba(255, 255, 255, 0.1)',
        }}
      ></div>

      {/* Text Content & Logo*/}
      <div className="relative z-10 flex flex-col justify-start items-start text-left py-32 max-w-[25rem] mx-14">
        {logoImage && (
          <img
            src={typeof logoImage === 'string' ? logoImage : logoImage.src}
            alt="Logo"
            className="w-48 h-48"
            style={{ marginBottom: '-3rem' }} // Negative margin to pull up the text
          />
        )}
        <div className="pl-3">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-lg pt-4">{content}</p>
          <a href={ctaLink} className="inline-block text-white underline hover:no-underline">
            {ctaLabel}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
