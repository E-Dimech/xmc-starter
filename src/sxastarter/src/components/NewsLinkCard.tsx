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
//   graphQLClient.setHeader('sc_apikey', '');
// sc_apikey: process.env.NEXT_PUBLIC_SITECORE_API_KEY

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

// import React, { useEffect, useState } from 'react';
// import { Link, Text, Image, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
// import { gql, GraphQLClient } from 'graphql-request';

// // GraphQL query to fetch NewsLinkCard data
// const GET_NEWS_LINK_CARD_DATA = gql`
//   query GetNewsLinkCardData($path: String!, $language: String!) {
//     item(path: $path, language: $language) {
//       id
//       name
//       ... on NewsLinkCard {
//         newsTitle {
//           value
//         }
//         newsSubTitle {
//           value
//         }
//         newsImage {
//           src
//           alt
//         }
//         newsLink {
//           value
//         }
//       }
//     }
//   }
// `;

// interface NewsLinkCardProps {
//   path: string;
//   fields: {
//     NewsTitle: { value: string };
//     NewsSubTitle: { value: string };
//     NewsImage: { src: string; alt: string };
//     NewsLink: { value: string };
//   };
// }

// export const Default: React.FC<NewsLinkCardProps> = ({ path, fields }) => {
//   const { sitecoreContext } = useSitecoreContext();
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const [data, setData] = useState<any>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<Error | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       if (sitecoreContext?.pageState !== 'normal') {
//         // In Experience Editor, use the provided fields
//         setData({ item: fields });
//         return;
//       }

//       setLoading(true);
//       const graphQLClient = new GraphQLClient('/sitecore/api/graph/edge', {
//         headers: {
//           sc_apikey: '',
//         },
//       });

//       try {
//         const result = await graphQLClient.request(GET_NEWS_LINK_CARD_DATA, {
//           path,
//           language: sitecoreContext.language || 'en',
//         });
//         setData(result);
//       } catch (err) {
//         setError(err as Error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [path, sitecoreContext, fields]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;
//   if (!data) return null;

//   const { item } = data;

//   return (
//     <Link
//       field={{ value: { href: item.NewsLink.value } }}
//       className="block group no-underline mx-10 w-full"
//     >
//       <div className="flex w-full rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
//         {/* Image Section */}
//         <div className="w-2/3 relative overflow-hidden">
//           <Image
//             field={item.NewsImage}
//             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="w-1/3 bg-gray-100 p-4 flex flex-col justify-center">
//           <Text field={item.NewsTitle} tag="h3" className="text-2xl font-bold mb-2" />
//           <Text field={item.NewsSubTitle} tag="p" className="text-4xl text-gray-600" />
//         </div>
//       </div>
//     </Link>
//   );
// };

// import React, { useEffect, useState } from 'react';
// import { Link, Text, Image, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
// import { gql, GraphQLClient } from 'graphql-request';

// // GraphQL query to fetch NewsLinkCard data
// const GET_NEWS_LINK_CARD_DATA = gql`
//   query GetNewsLinkCardData($path: String!, $language: String!) {
//     item(path: $path, language: $language) {
//       id
//       name
//       ... on NewsLinkCard {
//         NewsTitle {
//           value
//         }
//         NewsSubTitle {
//           value
//         }
//         NewsImage {
//           src
//           alt
//         }
//         NewsLink {
//           value
//         }
//       }
//     }
//   }
// `;

// interface NewsLinkCardProps {
//   path: string;
//   fields?: {
//     NewsTitle: { value: string };
//     NewsSubTitle: { value: string };
//     NewsImage: { src: string; alt: string };
//     NewsLink: { value: string };
//   };
// }

// export const Default: React.FC<NewsLinkCardProps> = ({ path, fields }) => {
//   const { sitecoreContext } = useSitecoreContext();

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const [data, setData] = useState<any>(fields || null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<Error | null>(null);

//   useEffect(() => {
//     console.log('Path passed to component:', path); // Debugging statement

//     if (!path) {
//       setError(new Error('Path is not defined.'));
//       return;
//     }

//     const fetchData = async () => {
//       if (sitecoreContext?.pageState !== 'normal') {
//         setData({ item: fields });
//         return;
//       }

//       setLoading(true);
//       const graphQLClient = new GraphQLClient('/sitecore/api/graph/edge', {
//         headers: {
//           sc_apikey: '',
//         },
//       });

//       try {
//         const result = await graphQLClient.request(GET_NEWS_LINK_CARD_DATA, {
//           path,
//           language: sitecoreContext.language || 'en',
//         });
//         setData(result);
//       } catch (err) {
//         console.error('Error fetching data:', err); // Log the error
//         setError(err as Error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [path, sitecoreContext, fields]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;
//   if (!data?.item) return <p>No data available</p>; // Graceful fallback if no data

//   const { item } = data;

//   return (
//     <Link
//       field={{ value: { href: item.NewsLink.value } }}
//       className="block group no-underline mx-10 w-full"
//     >
//       <div className="flex w-full rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
//         {/* Image Section */}
//         <div className="w-2/3 relative overflow-hidden">
//           <Image
//             field={item.NewsImage}
//             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="w-1/3 bg-gray-100 p-4 flex flex-col justify-center">
//           <Text field={item.NewsTitle} tag="h3" className="text-2xl font-bold mb-2" />
//           <Text field={item.NewsSubTitle} tag="p" className="text-4xl text-gray-600" />
//         </div>
//       </div>
//     </Link>
//   );
// };

// import React, { useEffect, useState } from 'react';
// import { Link, Text, Image, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
// import { gql, GraphQLClient } from 'graphql-request';

// // GraphQL query to fetch NewsLinkCard data
// const GET_NEWS_LINK_CARD_DATA = gql`
//   query GetNewsLinkCardData($path: String!, $language: String!) {
//     item(path: $path, language: $language) {
//       id
//       name
//       ... on NewsLinkCard {
//         newsTitle {
//           value
//         }
//         newsSubTitle {
//           value
//         }
//         newsImage {
//           src
//           alt
//         }
//         newsLink {
//           value
//         }
//       }
//     }
//   }
// `;

// interface NewsLinkCardProps {
//   path: string;
//   fields: {
//     NewsTitle: { value: string };
//     NewsSubTitle: { value: string };
//     NewsImage: { src: string; alt: string };
//     NewsLink: { value: string };
//   };
// }

// export const Default: React.FC<NewsLinkCardProps> = ({ path, fields }) => {
//   const { sitecoreContext } = useSitecoreContext();
//   const [data, setData] = useState<any>(null); // state to store fetched data
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<Error | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       if (sitecoreContext?.pageState !== 'normal') {
//         // In Experience Editor, use the provided fields
//         setData({ item: fields });
//         return;
//       }

//       setLoading(true);

//       const graphQLClient = new GraphQLClient('/sitecore/api/graph/edge', {
//         headers: {
//           sc_apikey: '',
//         },
//       });

//       try {
//         const result = await graphQLClient.request(GET_NEWS_LINK_CARD_DATA, {
//           path: sitecoreContext.route?.dataSource, // extract path from sitecoreContext
//           language: sitecoreContext.language || 'en',
//         });
//         setData(result);
//       } catch (err) {
//         setError(err as Error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [sitecoreContext, fields]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;
//   if (!data) return null;

//   const { item } = data;

//   return (
//     <Link
//       field={{ value: { href: item.newsLink.value } }}
//       className="block group no-underline mx-10 w-full"
//     >
//       <div className="flex w-full rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
//         {/* Image Section */}
//         <div className="w-2/3 relative overflow-hidden">
//           <Image
//             field={{
//               value: {
//                 src: item.newsImage.src,
//                 alt: item.newsImage.alt,
//               },
//             }}
//             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="w-1/3 bg-gray-100 p-4 flex flex-col justify-center">
//           <Text
//             field={{ value: item.newsTitle.value }}
//             tag="h3"
//             className="text-2xl font-bold mb-2"
//           />
//           <Text
//             field={{ value: item.newsSubTitle.value }}
//             tag="p"
//             className="text-4xl text-gray-600"
//           />
//         </div>
//       </div>
//     </Link>
//   );
// };
