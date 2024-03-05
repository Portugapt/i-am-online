// Story Name: Home Navigation Buttons
import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, componentWrapperDecorator } from '@storybook/angular';

// Angular Core
import { Component, OnChanges, SimpleChanges, model, signal } from '@angular/core';

// Components
import { NavigationButtonsComponent } from './NavigationButtons.component';

const actionsData = {
  activateContent: (content: string) => content,
};

@Component({
  standalone: true,
  selector: 'dummy-parent',
  template: `
    <div>
      <h1>Parent Component</h1>
      <ng-content>
      </ng-content>
    </div>
  `,
  imports: [NavigationButtonsComponent],
})
class DummyParentComponent implements OnChanges {
  contentActive: string = 'home';

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes);
  }
}

const meta: Meta<NavigationButtonsComponent> = {
  component: NavigationButtonsComponent,
  title: 'Home Navigation Buttons',
  tags: ['Home', 'Navigation'],
  render: (args: NavigationButtonsComponent) => ({
    props: {
      ...args,
      contentActive: actionsData.activateContent('home'),
    },
    template: `
    <div class="flex justify-center">
        <p> {{ contentActive }} </p>

        <personalblog-navigation-buttons ${argsToTemplate(args)}></personalblog-navigation-buttons>
    </div>
    `,
  }),
  argTypes: {
    contentActive: {
      description: 'Content Active value.',
      type: { name: 'function' },
      control: { type: 'select' },
    },
  },
  parameters: {
    actions: {
      handles: ['activateContent'],
    },
    
  },
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
  name: 'In Content State',
  render: (args: NavigationButtonsComponent) => ({
    props: {
      ...args,
      contentActive: model('anything'),
    },
    template: `
    <div class="flex justify-center">
        <personalblog-navigation-buttons [(contentActive)]="contentActive"></personalblog-navigation-buttons>
    </div>
    `,
  }),
};


// render: (args: NavigationButtonsComponent) => ({
//   props: {
//     ...args,
//     thisModel: model('home'),
//   },
//   template: `
//   <div class="flex justify-center">
//       <personalblog-navigation-buttons [(contentActive)]="thisModel"></personalblog-navigation-buttons>
//   </div>
//   `,
// }),