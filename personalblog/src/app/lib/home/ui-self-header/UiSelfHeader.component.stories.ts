// Story: SelfHeaderComponent

// Storybook Angular
import type { Meta, StoryObj } from '@storybook/angular';
import { componentWrapperDecorator } from '@storybook/angular';

// Component
import { UiSelfHeaderComponent } from './UiSelfHeader.component';


const meta: Meta<UiSelfHeaderComponent> = {
  component: UiSelfHeaderComponent,
  title: 'Self Description Component',
  decorators: [
    componentWrapperDecorator(
      (story) => `<div style="margin: 3em">${story}</div>`
    ),
  ],
};
export default meta;
type Story = StoryObj<UiSelfHeaderComponent>;

export const Primary: Story = {
  args: {},
};

