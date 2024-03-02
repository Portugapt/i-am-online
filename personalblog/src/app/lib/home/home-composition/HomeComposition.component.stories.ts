import type { Meta, StoryObj } from '@storybook/angular';
import { HomeCompositionComponent } from './HomeComposition.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HomeCompositionComponent> = {
  component: HomeCompositionComponent,
  title: 'Home Main Component',
};
export default meta;
type Story = StoryObj<HomeCompositionComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/HomeComposition works!/gi)).toBeTruthy();
  },
};
