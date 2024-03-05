import type { Meta, StoryObj } from '@storybook/angular';
import { UISelfPortraitComponent } from './UiSelfPortrait.component';

const meta: Meta<UISelfPortraitComponent> = {
  component: UISelfPortraitComponent,
  title: 'Self Portrait Rounded',
};
export default meta;
type Story = StoryObj<UISelfPortraitComponent>;

export const Default: Story = {
  args: {},
  render: () => ({
    props: {
      photoPath: '/banana.jpg',
    },
  }),
};
