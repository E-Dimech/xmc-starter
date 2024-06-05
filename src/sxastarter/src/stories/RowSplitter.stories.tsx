import type { Meta, StoryObj } from '@storybook/react';
import { Default as RowSplitter } from 'src/components/RowSplitter';
import { Default as ContentBlockDefaultStory } from './ContentBlock.stories';

const meta = {
  title: 'Components/RowSplitter',
  component: RowSplitter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RowSplitter>;

export default meta;
type Story = StoryObj<typeof meta>;

const placeholderChildComponent = {
  uid: 'anything',
  ...ContentBlockDefaultStory.args.rendering,
  fields: {
    ...ContentBlockDefaultStory.args.fields,
  },
};

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'RowSplitter',
      params: {
        RenderingIdentifier: 'RowSplitterRenderingIdentifier',
      },
      placeholders: {
        'row-placeholder1-{*}': [placeholderChildComponent],
        'row-placeholder2-{*}': [placeholderChildComponent],
      },
    },
    params: {
      styles: '',
      EnabledPlaceholders: 'placeholder1,placeholder2',
    },
  },
};
