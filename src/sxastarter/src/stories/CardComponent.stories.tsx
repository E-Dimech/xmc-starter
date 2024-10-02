import type { Meta, StoryObj } from '@storybook/react';
import { Default as CardComponent } from 'src/components/CardComponent';
import topthrill from '../assets/images/topthrill.jpg';

const meta = {
  title: 'Components/CardComponent',
  component: CardComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardComponent>;

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
    cards: [
      {
        params: {}, // Params for first card
        fields: {
          CardTitle: { value: 'Top Thrill 2 Update' },
          CardBody: {
            value: 'We appreciate your patience',
          },
          CardImage: mockImageField(topthrill.src, 'TopThrill2'),
          CardLink: mockLinkField('https://topthrill.com/', 'Top Thrill 2'),
          CardButtonText: { value: 'Learn more' },
        },
      },
      {
        params: {}, // Params for second card
        fields: {
          CardTitle: { value: 'Steel Vengeance' },
          CardBody: {
            value: 'The wildest ride in the West.',
          },
          CardImage: mockImageField(topthrill.src, 'SteelVengeance'),
          CardLink: mockLinkField('https://steelvengeance.com/', 'Steel Vengeance'),
          CardButtonText: { value: 'Explore Ride' },
        },
      },
      {
        params: {}, // Params for third card
        fields: {
          CardTitle: { value: 'Millennium Force' },
          CardBody: {
            value: 'A force to be reckoned with.',
          },
          CardImage: mockImageField(topthrill.src, 'MillenniumForce'),
          CardLink: mockLinkField('https://millenniumforce.com/', 'Millennium Force'),
          CardButtonText: { value: 'Join the Force' },
        },
      },
    ],
    renderingParams: {
      NumberOfCards: '3', // Set to display 3 cards
    },
  },
};
