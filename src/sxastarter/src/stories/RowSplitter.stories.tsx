// import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Default as RowSplitter } from 'src/components/RowSplitter';
// import ContentBlock from '../components/ContentBlock';

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

const placeholderComponent = {
  uid: 'anything',
  componentName: 'ContentBlock',
  dataSource: 'dataSourceValue',
  fields: {
    heading: { value: 'Column Heading' },
    content: { value: '<p>Column Content</p>' },
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
        'row-1': [placeholderComponent],
        'row-2': [placeholderComponent],
      },
    },
    params: {
      styles: '',
      EnabledPlaceholders: '1,2',
    },
  },
};
