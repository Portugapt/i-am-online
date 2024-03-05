import type { Meta, StoryObj } from '@storybook/angular';
import { SelfPortraitComponent } from './SelfPortrait.component';

const meta: Meta<SelfPortraitComponent> = {
  component: SelfPortraitComponent,
  title: 'Self Portrait Rounded',
};
export default meta;
type Story = StoryObj<SelfPortraitComponent>;

export const Default: Story = {
  args: {},
  render: () => ({
    props: {
      photoPath: '/banana.jpg',
    },
  }),
};
