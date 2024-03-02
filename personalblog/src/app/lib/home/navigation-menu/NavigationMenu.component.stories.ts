import type { Meta, StoryObj } from '@storybook/angular';
import { NavigationMenuComponent } from './NavigationMenu.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<NavigationMenuComponent> = {
  component: NavigationMenuComponent,
  title: 'NavigationMenuComponent',
};
export default meta;
type Story = StoryObj<NavigationMenuComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/NavigationMenu works!/gi)).toBeTruthy();
  },
};
