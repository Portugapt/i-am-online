import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, componentWrapperDecorator  } from '@storybook/angular';

import { model, type ModelSignal } from '@angular/core';

import { NavigationButtonsComponent } from './NavigationButtons.component';

const meta: Meta<NavigationButtonsComponent> = {
  component: NavigationButtonsComponent,
  title: 'Home Navigation Buttons',
  tags: ['Home', 'Navigation'],
  render: (args: NavigationButtonsComponent) => ({
    props: {
      ...args,
    },
    template: `
    <div class="flex justify-center">
        <personalblog-navigation-buttons [()]></personalblog-navigation-buttons>
    </div>
    `,
  }),
  argTypes: {
    contentActive: {
      description: 'Content Active value.',
      type: { name: 'function' },
      defaultValue: 'home',
      control: {
        type: 'string',
      },
    },
    activateContent: {
      description: 'Go to content event emitter.',
      action: 'activateContent',
    },
  },
  parameters: {
    actions: {
      handles: ['activateContent'],
    },
  },
  decorators: [componentWrapperDecorator((story) => `<div style="margin: 3em">${story}</div>`)]
};
export default meta;
type Story = StoryObj<NavigationButtonsComponent>;

export const ContentNotActive: Story = {
  name: 'Default State',
  args: {
    contentActive: model('home'),
  },
};

export const ContentActive: Story = {
  name: 'Hello',
  args: {
    contentActive: model('home'),
  },
  play: async ({ args }) => {
    // Simulate the click to toggle contentActive
      args.activateContent('anything')
  },
};
