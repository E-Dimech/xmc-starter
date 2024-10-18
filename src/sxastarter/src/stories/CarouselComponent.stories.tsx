import type { Meta, StoryObj } from '@storybook/react';
import CarouselComponent from 'src/components/CarouselComponent';
import force from '../assets/images/force.jpg';
import helix from '../assets/images/helix.jpg';
import alpenFury from '../assets/images/alpenFury.jpg';

const meta = {
  title: 'Components/CarouselComponent',
  component: CarouselComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CarouselComponent>;

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
          SlideImage: mockImageField(force.src, 'Force'),
          SlideCaption: {
            value: 'Millennium Force',
          },
        },
        {
          SlideImage: mockImageField(helix.src, 'Helix'),
          SlideCaption: {
            value: 'Helix',
          },
        },
        {
          SlideImage: mockImageField(alpenFury.src, 'Alpen Fury'),
          SlideCaption: {
            value: 'Alpen Fury',
          },
        },
      ],
    },
  },
};
