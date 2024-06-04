import type { Meta, StoryObj } from '@storybook/react';
import ContentBlock from 'src/components/ContentBlock';

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

export const EmptyFieldValues: Story = {
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
