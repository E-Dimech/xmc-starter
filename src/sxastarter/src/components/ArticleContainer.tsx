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
    <div className="w-full bg-gray-100 mx-10 mb-10 rounded-lg">
      <div className="max-w-screen-2xl mx-auto">
        {/* Title */}
        <div className="text-4xl font-bold pl-6 my-10">
          <Text field={props.fields?.Title} />
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {props.fields.Articles?.map((article, index) => (
            <div key={index} className="p-2">
              <Article fields={article.fields} params={{}} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
