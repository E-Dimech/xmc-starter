import type { Meta, StoryObj } from '@storybook/react';
import CardComponentTemplate from 'src/components/CardComponentTemplate';
import topthrill from '../assets/images/topthrill.jpg';

const meta = {
  title: 'Components/CardComponentTemplate',
  component: CardComponentTemplate,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardComponentTemplate>;

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

export const Default: Story = {
  args: {
    fields: {
      Title: { value: 'Cards Section' },
      Description: { value: 'Here is a collection of our top rides' },
    },
    cards: [
      {
        params: {}, // first card
        fields: {
          cardTitle: { value: 'Top Thrill 2 Update' },
          cardBody: {
            value: 'We appreciate your patience',
          },
          cardImage: mockImageField(topthrill.src, 'TopThrill2'),
          cardLink: mockLinkField('https://topthrill.com/', 'Top Thrill 2'),
          cardButtonText: { value: 'Learn more' },
        },
      },
      {
        params: {}, // second card
        fields: {
          cardTitle: { value: 'Steel Vengeance' },
          cardBody: {
            value: 'The wildest ride in the West.',
          },
          cardImage: mockImageField(topthrill.src, 'SteelVengeance'),
          cardLink: mockLinkField('https://steelvengeance.com/', 'Steel Vengeance'),
          cardButtonText: { value: 'Explore Ride' },
        },
      },
      {
        params: {}, // third card
        fields: {
          cardTitle: { value: 'Millennium Force' },
          cardBody: {
            value: 'A force to be reckoned with.',
          },
          cardImage: mockImageField(topthrill.src, 'MillenniumForce'),
          cardLink: mockLinkField('https://millenniumforce.com/', 'Millennium Force'),
          cardButtonText: { value: 'Join the Force' },
        },
      },
    ],
    renderingParams: {
      NumberOfCards: '3', // Set to display 3 cards
    },
  },
};
