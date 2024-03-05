// Story Name: Home Navigation Buttons

// Storybook Angular
import type { Meta, StoryObj } from '@storybook/angular';
import { componentWrapperDecorator, argsToTemplate } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

// Components
import { UiNavigationButtonsComponent } from './UiNavigationButtons.component';

export const actionsUIData = {
  onClickContent: action('onClickContent'),
};

const meta: Meta<UiNavigationButtonsComponent> = {
  component: UiNavigationButtonsComponent,
  title: 'Home Navigation Buttons',
  tags: ['autodoc'],
  excludeStories: /.*UIData$/,
  argTypes: {
    contentActive: {
      description: 'Output contentActive value.',
      table: {
        category: 'Output',
        type: {
          summary: 'EventEmitter<string>',
        },
      },
    },
  },
  render: (args) => ({
    props: {
      ...args,
      onClickContent: actionsUIData.onClickContent,
    },
    template: `<personalblog-navigation-buttons ${argsToTemplate(args)}></personalblog-navigation-buttons>`,
  }),
  decorators: [
    componentWrapperDecorator(
      (story) => `<div style="margin: 3em">${story}</div>`
    ),
  ],
};
export default meta;
type Story = StoryObj<UiNavigationButtonsComponent>;

export const Default: Story = {
  name: 'Default State',
};
