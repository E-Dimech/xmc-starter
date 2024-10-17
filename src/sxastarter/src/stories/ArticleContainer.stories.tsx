import type { Meta, StoryObj } from '@storybook/react';
import { ArticleContainer } from 'src/components/ArticleContainer';
import topthrill from '../assets/images/topthrill.jpg';
import force from '../assets/images/force.jpg';
import alpenfury from '../assets/images/alpenFury.jpg';

const meta = {
  title: 'Components/ArticleContainer',
  component: ArticleContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleContainer>;

export default meta;

type Story = StoryObj<typeof ArticleContainer>;

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
const mockTextField = (value: string) => ({
  value,
});

export const Default: Story = {
  args: {
    fields: {
      Title: mockTextField('Coaster News'),
      Articles: [
        {
          params: {},
          fields: {
            Title: { value: 'Top Thrill 2 Update' },
            Description: {
              value: 'We appreciate your patience',
            },
            Image: mockImageField(topthrill.src, 'Top Thrill 2'),
            ButtonLink: mockLinkField('https://topthrill.com/', 'Top Thrill 2'),
            ButtonText: { value: 'Learn more' },
          },
        },
        {
          params: {},
          fields: {
            Title: { value: 'Best All Time?' },
            Description: {
              value: 'Is Millenium Force still every enthusiast’s #1?',
            },
            Image: mockImageField(force.src, 'Millenium Force'),
            ButtonLink: mockLinkField('https://millenniumforce.com/', 'Millenium Force'),
            ButtonText: { value: 'MF Link' },
          },
        },
        {
          params: {},
          fields: {
            Title: { value: 'Alpen Fury' },
            Description: {
              value: 'Coming soon to Canada’s Wonderland',
            },
            Image: mockImageField(alpenfury.src, 'Alpen Fury'),
            ButtonLink: mockLinkField('https://alpenfury.com/', 'Alpen Fury'),
            ButtonText: { value: 'CW Link' },
          },
        },
      ],
    },

    rendering: {
      componentName: 'ArticleContainer',
      placeholders: {},
    },
  },
};
