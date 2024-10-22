import type { Meta, StoryObj } from '@storybook/react';
import { Default as NewsLinkCard } from 'src/components/NewsLinkCard';
import alpenfury from '../assets/images/alpenFury.jpg';

const meta = {
  title: 'Components/NewsLinkCard',
  component: NewsLinkCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NewsLinkCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockImageField = (src: string, alt: string) => ({
  value: {
    src,
    alt,
  },
});

const mockTextField = (value: string) => ({
  value,
});

const mockLinkField = (href: string, text: string) => ({
  value: {
    href,
    text,
    target: '_blank',
  },
});

export const Default: Story = {
  args: {
    params: {},
    fields: {
      NewsTitle: mockTextField('Screamscape'),
      NewsSubTitle: mockTextField('Checkout the latest news'),
      NewsImage: mockImageField(alpenfury.src, 'Alpen Fury'),
      NewsLink: mockLinkField('https://screamscape.com', 'Learn More'),
    },
  },
};
