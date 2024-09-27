import type { Meta, StoryObj } from '@storybook/react';
import { Default as Card } from 'src/components/Card';
import topthrill from '../assets/images/topthrill.jpg';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockImageField = (src: string, alt: string) => ({
  value: {
    src,
    alt,
  },
});

export const Square: Story = {
  args: {
    params: { rounded: 'false' },
    fields: {
      Title: { value: 'Top Thrill 2 Update' },
      Headline: {
        value:
          'We sincerely appreciate your patience while Top Thrill 2’s manufacturer, Zamperla, has been working diligently to complete a mechanical modification to the coaster vehicles',
      },
      CardImage: mockImageField(topthrill.src, 'TopThrill2'),
      Author: { value: 'CP Resorts' },
    },
  },
};
