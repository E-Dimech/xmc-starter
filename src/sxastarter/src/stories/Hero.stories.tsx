import type { Meta, StoryObj } from '@storybook/react';
import { Default as Hero } from 'src/components/Hero';
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

export const Square: Story = {
  args: {
    params: { rounded: 'false' },
    fields: {
      Title: { value: 'Sitecore Customer Data Platform' },
      BodyText: {
        value:
          'With our platform expertise and Sitecore CDP up-to-the-minute business intelligence we can do things.',
      },
      BackgroundImage: mockImageField(fugi.src, 'Background'),
      LogoImage: mockImageField(sitecoreLogo.src, 'Logo'),
      CTALabel: { value: 'Learn more' },
      CTALink: mockLinkField('https://screamscape.com/', 'Learn more'),
    },
  },
};

export const Round: Story = {
  args: {
    params: { rounded: 'true' },
    fields: {
      Title: { value: 'Sitecore Customer Data Platform' },
      BodyText: {
        value:
          'With our platform expertise and Sitecore CDP up-to-the-minute business intelligence we can do things.',
      },
      BackgroundImage: mockImageField(fugi.src, 'Background'),
      LogoImage: mockImageField(sitecoreLogo.src, 'Logo'),
      CTALabel: { value: 'Learn more' },
      CTALink: mockLinkField('https://screamscape.com/', 'Learn more'),
    },
  },
};
