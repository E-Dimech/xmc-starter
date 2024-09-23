import type { Meta, StoryObj } from '@storybook/react';
import Hero from 'src/components/Hero';
import fugi from '../assets/images/fugi.jpg';
import sitecoreLogo from '../assets/images/sitecoreLogo.svg';

const meta = {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Square: Story = {
  args: {
    title: 'Sitecore Customer Data Platform',
    content:
      'With our platform expertise and Sitecore CDP up-to-the-minute business intelligence we can do things.',
    backgroundImage: fugi,
    logoImage: sitecoreLogo,
    ctaLabel: 'Learn more',
    ctaLink: 'https://screamscape.com/',
    rounded: false,
  },
};

export const Round: Story = {
  args: {
    title: 'Sitecore Customer Data Platform',
    content:
      'With our platform expertise and Sitecore CDP up-to-the-minute business intelligence we can do things.',
    backgroundImage: fugi,
    logoImage: sitecoreLogo,
    ctaLabel: 'Learn more',
    ctaLink: 'https://screamscape.com/',
    rounded: true,
  },
};
