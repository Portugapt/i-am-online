import type { Meta, StoryObj } from '@storybook/angular';
import { SelfHeaderComponent } from './UiSelfHeader.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SelfHeaderComponent> = {
  component: SelfHeaderComponent,
  title: 'SelfHeaderComponent',
};
export default meta;
type Story = StoryObj<SelfHeaderComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/SelfHeader works!/gi)).toBeTruthy();
  },
};
