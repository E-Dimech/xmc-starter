import type { Meta, StoryObj } from '@storybook/react';
import { Default as CarouselComponent } from 'src/components/CarouselComponent';
import force from '../assets/images/force.jpg';
import helix from '../assets/images/helix.jpg';
import alpenFury from '../assets/images/alpenFury.jpg';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs'; // Mock the ComponentRendering type

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

const mockTextField = (value: string) => ({
  value,
});

const mockRendering: ComponentRendering = {
  componentName: 'CarouselComponent',
  dataSource: '/sitecore/content/carousel',
  placeholders: {},
};

export const Default: Story = {
  args: {
    rendering: mockRendering,
    fields: {
      Slides: [
        {
          params: {},
          fields: {
            SlideImage: mockImageField(force.src, 'Force'),
            SlideCaption: mockTextField('Millennium Force'),
          },
        },
        {
          params: {},
          fields: {
            SlideImage: mockImageField(helix.src, 'Helix'),
            SlideCaption: mockTextField('Helix'),
          },
        },
        {
          params: {},
          fields: {
            SlideImage: mockImageField(alpenFury.src, 'Alpen Fury'),
            SlideCaption: mockTextField('Alpen Fury'),
          },
        },
      ],
    },
  },
};
