import type { Meta, StoryObj } from '@storybook/angular';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { NavigationButtonsComponent } from './NavigationButtons.component';


const meta: Meta<NavigationButtonsComponent> = {
  component: NavigationButtonsComponent,
  title: 'NavigationButtonsComponent',
  tags: ['Home','Navigation'],
  
};
export default meta;
type Story = StoryObj<NavigationButtonsComponent>;


export const Primary: Story = {
  args: {},
  render: () => ({
    props: {},
  }),
};

export const Heading: Story = {
  name: 'Hello',
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/NavigationButtons works!/gi)).toBeTruthy();
  },
};
