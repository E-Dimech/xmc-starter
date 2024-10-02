import type { Meta, StoryObj } from '@storybook/react';
import { Default as Article, CoasterArticleProps } from 'src/components/Article';
import topthrill from '../assets/images/topthrill.jpg';

const meta = {
  title: 'Components/Article',
  component: Article,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Article>;

export default meta;

type Story = StoryObj<CoasterArticleProps>;

const mockImageField = (src: string, alt: string) => ({
  value: {
    src,
    alt,
  },
});
const mockLinkField = (href: string, text: string) => ({
  value: {
    href,
    text,
    target: '_blank',
    title: text,
  },
});

export const Default: Story = {
  args: {
    fields: {
      Title: { value: 'Top Thrill 2 Update' },
      Description: {
        value: 'We appreciate your patience',
      },
      Image: mockImageField(topthrill.src, 'TopThrill2'),
      ButtonLink: mockLinkField('https://topthrill.com/', 'Top Thrill 2'),
      ButtonText: { value: 'Learn more' },
    },
  },
};
