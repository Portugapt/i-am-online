// Story: SelfHeaderComponent

// Storybook Angular
import type { Meta, StoryObj } from '@storybook/angular';
import {
  componentWrapperDecorator,
  moduleMetadata,
} from '@storybook/angular';
import { action } from '@storybook/addon-actions';

// Components
import { UiListPostComponent } from './ui-list-post.component';

export const actionsUIData = {
  onCardClick: action('onContentActivated'),
};

const meta: Meta<UiListPostComponent> = {
  component: UiListPostComponent,
  title: 'Ui Blog Post Card',
  tags: ['autodoc'],
  excludeStories: /.*UIData$/,
  argTypes: {
    title: { control: 'text', description: 'Title of the post', defaultValue: 'Post Title' },
    date: { control: 'date', description: 'Date of the post', defaultValue: new Date().toISOString() },
    tags: { control: 'array', description: 'Tags for the post', defaultValue: ['tag1', 'tag2'] },
    thumbnail: { control: 'text', description: 'Thumbnail URL', defaultValue: 'https://example.com/thumbnail.jpg' },
    routeLink: { control: 'text', description: 'Route link', defaultValue: '/route-link' },
    cardClick: { action: 'clicked', description: 'Event emitted when card is clicked' },
  },
  decorators: [
    moduleMetadata({
      imports: [
        UiListPostComponent,
      ],
    }),
    componentWrapperDecorator(
      (story) => `<div style="margin: 3em">${story}</div>`
    ),
  ],
  render: (args) => ({
    props: {
      ...args,
      onCardClick: actionsUIData.onCardClick,
    },
  }),
};
export default meta;
type Story = StoryObj<UiListPostComponent>;

export const Default: Story = {
  args: {
    title: 'Post Title',
    date: new Date().toISOString(),
    tags: ['tag1', 'tag2'],
    thumbnail: 'https://example.com/thumbnail.jpg',
    routeLink: '/route-link',
  },
};

export const NoThumbnail: Story = {
  name: 'No Thumbnail',
  args: {
    title: 'Post Title',
    date: new Date().toISOString(),
    tags: ['tag1', 'tag2'],
    routeLink: '/route-link',
  },
};
