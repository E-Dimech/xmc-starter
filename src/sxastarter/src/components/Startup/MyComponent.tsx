import React from 'react';
import {
  ComponentParams,
  ComponentRendering,
  Text,
  Field,
  RichText as JssRichText,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  heading: Field<string>;
  body: Field<string>;
}

type MyComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: MyComponentProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div className={`component ${props.params.styles}`} id={id ? id : undefined}>
      <div className="component-content">
        <p>MyComponent Component</p>
        <Text field={props.fields.heading} />
        <JssRichText field={props.fields.body} />
      </div>
    </div>
  );
};
