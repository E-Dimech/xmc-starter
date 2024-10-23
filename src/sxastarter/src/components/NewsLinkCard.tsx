// import React from 'react';
// import { Field, ImageField, LinkField, Image, Link, Text } from '@sitecore-jss/sitecore-jss-nextjs';
// import { gql, GraphQLClient } from 'graphql-request';
// import { GetStaticProps } from 'next';

// // Query to get NewsLinkCard content
// const GET_NEWS_LINK_CARD_DATA = gql`
//   query GetNewsLinkCardData($path: String!) {
//     item(path: $path, language: "en") {
//       id
//       name
//       fields {
//         jsonValue
//       }
//     }
//   }
// `;

// interface NewsLinkCardProps {
//   fields: {
//     NewsTitle: Field<string>;
//     NewsSubTitle: Field<string>;
//     NewsImage: ImageField;
//     NewsLink: LinkField;
//   };
// }

// // NewsLinkCard Component
// export const Default = (props: NewsLinkCardProps): JSX.Element => {
//   return (
//     <Link field={props.fields?.NewsLink} className="block group no-underline mx-auto">
//       <div className="flex w-full max-w-lg rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 mb-20">
//         {/* Image Section */}
//         <div className="w-2/3 relative overflow-hidden">
//           <Image
//             field={props.fields?.NewsImage}
//             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="w-1/3 bg-gray-100 p-4 flex flex-col justify-center">
//           <Text field={props.fields?.NewsTitle} tag="h3" className="text-2xl font-bold mb-2" />
//           <Text field={props.fields?.NewsSubTitle} tag="p" className="text-lg text-gray-600" />
//         </div>
//       </div>
//     </Link>
//   );
// };

// // Fetch data w/ getStaticProps
// export const getStaticProps: GetStaticProps = async () => {
//   const graphQLClient = new GraphQLClient('https://xmcloudcm.localhost/sitecore/api/graph/edge');
//   graphQLClient.setHeader('sc_apikey', 'E04FFE88-35EF-4C6F-A550-93755840847F');

//   // Run query to fetch NewsLinkCard data
//   const data = await graphQLClient.request(GET_NEWS_LINK_CARD_DATA, {
//     path: '/sitecore/content/sites/sxastarter/Home/Coasters/Data/NewsLink1',
//   });

//   const fields = data?.item?.fields || [];

//   return {
//     props: {
//       fields: {
//         NewsTitle: { value: fields[0]?.jsonValue?.value || '' },
//         NewsSubTitle: { value: fields[1]?.jsonValue?.value || '' },
//         NewsImage: {
//           value: {
//             src: fields[2]?.jsonValue?.value?.src || '',
//             alt: fields[2]?.jsonValue?.value?.alt || '',
//           },
//         },
//         NewsLink: {
//           value: {
//             href: fields[3]?.jsonValue?.value?.href || '',
//             text: 'Learn more',
//             target: fields[3]?.jsonValue?.value?.target || '',
//           },
//         },
//       },
//     },
//   };
// };

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
    <Link field={props.fields?.NewsLink} className="block group no-underline mx-10 w-full">
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
