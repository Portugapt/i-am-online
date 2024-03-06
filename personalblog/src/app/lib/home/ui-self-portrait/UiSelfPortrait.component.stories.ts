// Story: SelfPortraitComponent

// Storybook Angular
import type { Meta, StoryObj } from '@storybook/angular';
import { componentWrapperDecorator } from '@storybook/angular';

// Component
import { UISelfPortraitComponent } from './UiSelfPortrait.component';

const meta: Meta<UISelfPortraitComponent> = {
  component: UISelfPortraitComponent,
  title: 'Self Portrait Rounded',
  decorators: [
    componentWrapperDecorator(
      (story) => `<div style="margin: 3em">${story}</div>`
    ),
  ],
};
export default meta;
type Story = StoryObj<UISelfPortraitComponent>;

export const Default: Story = {
  args: {
    photoPath: '/banana.jpg',
  },
};
