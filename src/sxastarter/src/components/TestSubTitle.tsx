import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type TestSubTitleProps = ComponentProps & {
  fields: {
    SubTitle: Field<string>;
    // SubTitleText: Field<string>;
  };
};

const TestSubTitle = (props: TestSubTitleProps): JSX.Element => (
  <div>
    <Text field={props.fields.SubTitle} />
    {/* <RichText field={props.fields.SubTitleText} /> */}
  </div>
);

export default withDatasourceCheck()<TestSubTitleProps>(TestSubTitle);
