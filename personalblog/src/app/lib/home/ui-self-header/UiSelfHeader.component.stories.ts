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

export const Default: Story = {
  args: {
    selfDescription: 'I am a software developer',
    selfName: 'John Doe',
  },
};

export const TextWrapped: Story = {
  name: 'Text Wrapped',
  args: {
    selfDescription: 'I am a software developer, this is a very long line',
    selfName: 'John Doe',
  },
};

