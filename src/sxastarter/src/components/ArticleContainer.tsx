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

export const Default = (props: ArticleContainerProps): JSX.Element => {
  return (
    <div className="bg-gray-100 rounded-lg p-6 w-full max-w-screen-2xl mx-auto mb-20">
      {/* Title */}
      <div className="text-4xl font-bold pl-2 my-10">
        <Text field={props.fields?.Title} />
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {props.fields.Articles?.map((article, index) => (
          <div key={index} className="p-2 flex">
            <Article fields={article.fields} params={{}} />
          </div>
        ))}
      </div>
    </div>
  );
};
