// Story Name: Home Navigation Buttons

// Storybook Angular
import type { Meta, StoryObj } from '@storybook/angular';

// Components
import { NavigationButtonsComponent } from './NavigationButtons.component';

// Services
import { RoutingFacade } from '../../../services/routing.facade';

const meta: Meta<NavigationButtonsComponent> = {
  component: NavigationButtonsComponent,
  title: 'Home Navigation Buttons',
  tags: ['Home', 'Navigation'],
  argTypes: {
    clickContent: { 
      description: 'Go to content',
      control: { type: 'function' },
      action: 'clickContent' },
  },
};
export default meta;
type Story = StoryObj<NavigationButtonsComponent>;

export const Default: Story = {
  name: 'Default State',
};
