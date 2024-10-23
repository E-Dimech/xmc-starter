import React from 'react';
import {
  ImageField,
  LinkField,
  Image,
  Link,
  RichText,
  Text,
  RichTextField,
  Field,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  FooterLogo: ImageField;
  FooterLogoLink: LinkField;
  GeneralText: RichTextField;
  WatchText: Field<string>;
  // WatchLinks: LinkField[];
  WatchLink1: LinkField;
  WatchLink2: LinkField;
  WatchLink3: LinkField;
  WatchLink4: LinkField;
  DownloadAppText: Field<string>;
  DownloadAppImage: ImageField;
  DownloadAppLink: LinkField;
  ConnectText: Field<string>;
  ConnectImage: ImageField;
  ConnectLink: LinkField;
}

export type FooterProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: FooterProps): JSX.Element => {
  return (
    <footer className="bg-[#001f3f] text-white py-10 w-screen">
      <div className="max-w-7xl mx-auto flex justify-between items-start">
        {/* Left Section */}
        <div className="w-1/3">
          <div>
            <Link field={props.fields?.FooterLogoLink} className="block">
              <Image field={props.fields?.FooterLogo} className="w-52 h-auto" />
            </Link>
          </div>
          <div className="mt-8">
            <Text field={props.fields?.WatchText} className="font-bold mb-4" />
            <div className="flex flex-col space-y-2 mt-4">
              <div className="flex flex-col space-y-2 mt-4">
                <Link
                  field={props.fields?.WatchLink1}
                  className="no-underline hover:underline text-gray-300"
                />
                <Link
                  field={props.fields?.WatchLink2}
                  className="no-underline hover:underline text-gray-300"
                />
                <Link
                  field={props.fields?.WatchLink3}
                  className="no-underline hover:underline text-gray-300"
                />
                <Link
                  field={props.fields?.WatchLink4}
                  className="no-underline hover:underline text-gray-300"
                />
              </div>
              {/* TODO: Add Watch Links w/ multilist */}
              {/* {props.fields?.WatchLinks?.map((link, index) => (
                <Link
                  field={link}
                  key={index}
                  className="no-underline hover:underline text-gray-300"
                />
              ))} */}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-2/3 flex flex-col mt-16">
          <div className="flex justify-between items-start">
            {/* General Text */}
            <div className="w-full">
              <RichText
                field={props.fields?.GeneralText}
                className="text-2xl mt-2 mb-6 text-center"
              />
            </div>
          </div>
          <div className="flex justify-around mt-8">
            {/* Download the App as a Link */}
            <div className="text-center">
              <Text field={props.fields?.DownloadAppText} className="font-bold" />
              <Link field={props.fields?.DownloadAppLink} className="block">
                <Image
                  field={props.fields?.DownloadAppImage}
                  className="w-40 h-auto mx-auto mt-10 rounded-md"
                />
              </Link>
            </div>

            {/* Connect Section as a Link */}
            <div className="text-center">
              <Text field={props.fields?.ConnectText} className="font-bold" />
              <Link field={props.fields?.ConnectLink} className="block">
                <Image
                  field={props.fields?.ConnectImage}
                  className="w-40 h-auto mx-auto mt-10 rounded-md"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Blue Line at the Bottom */}
      <div className="w-full border-t-2 border-blue-500 mt-8"></div>
    </footer>
  );
};
