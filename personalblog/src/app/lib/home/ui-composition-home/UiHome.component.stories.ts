// Story: SelfHeaderComponent

// Storybook Angular
import type { Meta, StoryObj } from '@storybook/angular';
import {
  componentWrapperDecorator,
  moduleMetadata,
  argsToTemplate,
} from '@storybook/angular';

// Components
import { UiHomeComponent } from './UiHome.component';
import { UiNavigationButtonsComponent } from '../ui-navigation-buttons/UiNavigationButtons.component';
import { UiSelfHeaderComponent } from '../ui-self-header/UiSelfHeader.component';
import { UISelfPortraitComponent } from '../ui-self-portrait/UiSelfPortrait.component';

// Stories
import * as SelfPortraitStories from '../ui-self-portrait/UiSelfPortrait.component.stories';
import * as NavigationButtonsStories from '../ui-navigation-buttons/UiNavigationButtons.component.stories';

const meta: Meta<UiHomeComponent> = {
  component: UiHomeComponent,
  title: 'Home Component UI',
  tags: ['autodoc'],
  decorators: [
    moduleMetadata({
      imports: [
        UiHomeComponent,
        UISelfPortraitComponent,
        UiSelfHeaderComponent,
        UiNavigationButtonsComponent,
      ],
    }),
    componentWrapperDecorator(
      (story) => `<div style="margin: 3em">${story}</div>`
    ),
  ],
  render: (args) => ({
    props: {
      ...args,

      onContentActivated: NavigationButtonsStories.actionsUIData.onContentActivated,
    },
    template: `<personalblog-ui-composition-home ${argsToTemplate(args)}></personalblog-ui-composition-home>`,
  }),
};
export default meta;
type Story = StoryObj<UiHomeComponent>;

export const Primary: Story = {
  args: {
    ...SelfPortraitStories.Default.args,
  },
};
