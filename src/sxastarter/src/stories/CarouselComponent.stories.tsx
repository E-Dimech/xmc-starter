import type { Meta, StoryObj } from '@storybook/react';
import Carousel from 'src/components/Carousel';
import force from '../assets/images/force.jpg';
import helix from '../assets/images/helix.jpg';
import alpenFury from '../assets/images/alpenFury.jpg';

const meta = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockImageField = (src: string, alt: string) => ({
  value: {
    src,
    alt,
  },
});

export const Default: Story = {
  args: {
    fields: {
      slides: [
        {
          slideImage: mockImageField(force.src, 'Force'),
          // slideAltText: {
          //   value: 'Force',
          // },
          slideCaption: {
            value: 'Millennium Force',
          },
        },
        {
          slideImage: mockImageField(helix.src, 'Helix'),
          // slideAltText: {
          //   value: 'Helix',
          // },
          slideCaption: {
            value: 'Helix',
          },
        },
        {
          slideImage: mockImageField(alpenFury.src, 'Alpen Fury'),
          // slideAltText: {
          //   value: 'Alpen Fury',
          // },
          slideCaption: {
            value: 'Alpen Fury',
          },
        },
      ],
    },
  },
};
