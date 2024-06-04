import type { Meta, StoryObj } from '@storybook/react';
import { Default as RichText } from 'src/components/RichText';

const meta = {
  title: 'Components/RichText',
  component: RichText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RichText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'RichText',
      params: {
        RenderingIdentifier: 'RichTextRenderingIdentifier',
      },
    },
    params: {
      styles: '',
    },
  },
};

export const WithContent: Story = {
  args: {
    rendering: {
      componentName: 'RichText',
      params: {
        RenderingIdentifier: 'RichTextRenderingIdentifier',
      },
    },
    params: {
      styles: '',
    },
    fields: {
      Text: {
        value: '<p>This is a rich text content example.</p>',
      },
    },
  },
};

export const EmptyContent: Story = {
  args: {
    rendering: {
      componentName: 'RichText',
      params: {
        RenderingIdentifier: 'RichTextRenderingIdentifier',
      },
    },
    params: {
      styles: '',
    },
    fields: {
      Text: {
        value: '',
      },
    },
  },
};

export const LongContent: Story = {
  args: {
    rendering: {
      componentName: 'RichText',
      params: {
        RenderingIdentifier: 'RichTextRenderingIdentifier',
      },
    },
    params: {
      styles: '',
    },
    fields: {
      Text: {
        value: '<p>' + 'This is a very long RichText test. '.repeat(100) + '</p>',
      },
    },
  },
};

export const HTMLContent: Story = {
  args: {
    rendering: {
      componentName: 'RichText',
      params: {
        RenderingIdentifier: 'RichTextRenderingIdentifier',
      },
    },
    params: {
      styles: '',
    },
    fields: {
      Text: {
        value: '<p>This is a <strong>rich</strong> text content with <em>HTML</em> elements.</p>',
      },
    },
  },
};
