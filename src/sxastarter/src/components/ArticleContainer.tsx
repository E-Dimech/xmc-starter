import React from 'react';
import { Field, Text, ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';
import { Default as Article, CoasterArticleProps } from './Article';

interface Fields {
  Title: Field<string>;
  Articles: CoasterArticleProps[];
}

type ArticleContainerProps = {
  rendering: ComponentRendering;
  fields: Fields;
};

export const ArticleContainer = (props: ArticleContainerProps): JSX.Element => {
  return (
    <div className="bg-gray-100 rounded-lg p-6">
      {/* Title */}
      <Text field={props.fields?.Title} className="text-center text-4xl font-bold mb-6" />

      {/* Articles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {props.fields.Articles?.map((article, index) => (
          <div key={index} className="p-2 flex">
            <Article fields={article.fields} params={{}} />
          </div>
        ))}
      </div>
    </div>
  );
};
