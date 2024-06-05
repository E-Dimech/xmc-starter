import {
  LayoutServicePageState,
  SitecoreContextReactContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import type { Meta, StoryObj } from '@storybook/react';
import ContentBlock from 'src/components/ContentBlock';
import { mockLayoutData } from '../../.storybook/preview';

const meta = {
  title: 'Components/ContentBlock',
  component: ContentBlock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContentBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

const commonArgs = {
  rendering: {
    componentName: 'ContentBlock',
    dataSource: 'truthyValue',
    params: {
      RenderingIdentifier: 'ContentBlockRenderingIdentifier',
    },
  },
  params: {
    styles: '',
  },
};

export const Default: Story = {
  args: {
    ...commonArgs,
    fields: {
      heading: {
        value: 'Heading',
      },
      content: {
        value: 'Content',
      },
    },
  },
};

export const EmptyContent: Story = {
  args: {
    ...commonArgs,
    fields: {
      heading: {
        value: '',
      },
      content: {
        value: '',
      },
    },
  },
};

export const LongContent: Story = {
  args: {
    ...commonArgs,
    fields: {
      heading: {
        value: 'This is a very long content test.',
      },
      content: {
        value: '<p>' + 'This is a very long content test. '.repeat(100) + '</p>',
      },
    },
  },
};

export const NoDatasource: Story = {
  args: {
    ...Default.args,
    rendering: {
      ...commonArgs.rendering,
      dataSource: '',
    },
  },
};

const noDatasourceInEditModeMockLayoutData = {
  sitecore: {
    ...mockLayoutData.sitecore,
    context: {
      pageEditing: true,
      pageState: LayoutServicePageState.Edit,
    },
  },
};

export const NoDatasourceInEditMode: Story = {
  args: {
    ...NoDatasource.args,
  },
  decorators: [
    (Story) => (
      <SitecoreContextReactContext.Provider value={noDatasourceInEditModeMockLayoutData.sitecore}>
        <Story />
      </SitecoreContextReactContext.Provider>
    ),
  ],
};
