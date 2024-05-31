import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type TestTitleProps = ComponentProps & {
  fields: {
    Title: Field<string>;
  };
};

const TestTitle = (props: TestTitleProps): JSX.Element => (
  <div>
    <Text field={props.fields.Title} />
  </div>
);

export default withDatasourceCheck()<TestTitleProps>(TestTitle);
