import type { Meta, StoryObj } from '@storybook/react';
import { Default as FooterComponent } from 'components/NewsFooter'; // Adjust the path as needed
import logoImage from '../assets/images/sitecoreLogo.svg';
import image1 from '../assets/images/alpenFury.jpg';
import image2 from '../assets/images/alpenFury.jpg';

const meta = {
  title: 'Components/FooterComponent',
  component: FooterComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FooterComponent>;

export default meta;

type Story = StoryObj<typeof FooterComponent>;

// Mock functions to create Image and Link fields
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
      FooterLogo: mockImageField(logoImage.src, 'Footer Logo'),
      FooterLogoLink: mockLinkField('https://www.sitecore.com', 'Sitecore'),
      GeneralText: mockTextField(
        '<p>Download our mobile apps to personalize your Scremscape experience.</p>'
      ),
      WatchText: mockTextField('WATCH'),
      // Instead of WatchLinks array, we now define individual WatchLink fields
      WatchLink1: mockLinkField('https://screamscape.com', 'Schedule'),
      WatchLink2: mockLinkField('https://screamscape.com', 'Subscribe'),
      WatchLink3: mockLinkField('https://screamscape.com', 'Support'),
      WatchLink4: mockLinkField('https://screamscape.com', 'Scremscape+'),
      DownloadAppText: mockTextField('Download the app'),
      DownloadAppImage: mockImageField(image1.src, 'Download App Image'),
      DownloadAppLink: mockLinkField('https://appstore.com', 'Download App Link'),
      ConnectText: mockTextField('Connect'),
      ConnectImage: mockImageField(image2.src, 'Connect Image'),
      ConnectLink: mockLinkField('https://screamscape.com', 'Connect Link'),
    },
  },
};
