import React from 'react';
import { Default as Article, CoasterArticleProps } from './Article';

type ArticleContainerProps = {
  articles: CoasterArticleProps[];
};

export const ArticleContainer = (props: ArticleContainerProps): JSX.Element => {
  return (
    <div className="flex flex-wrap justify-between gap-4">
      {props.articles.map((article, index) => (
        <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-2">
          <Article fields={article.fields} params={{}} />
        </div>
      ))}
    </div>
  );
};
