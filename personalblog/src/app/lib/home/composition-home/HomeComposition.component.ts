// Home Page composition of several components

// Angular Core
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { WebPageFacade } from '../../../services/webpage.facade';

// Components
import { UiHomeComponent } from '../ui-composition-home/UiHome.component';
import { RouteMeta } from '@analogjs/router';

export const routeMeta: RouteMeta = {
  providers: [WebPageFacade],
};

@Component({
  selector: 'personalblog-composition-home',
  standalone: true,
  imports: [CommonModule, UiHomeComponent],
  template: `<div>
    <div>
      <personalblog-ui-composition-home
        [selfName]="selfName"
        [selfDescription]="selfDescription"
        [photoPath]="photoPath"
        (contentActivated)="onContentActivated($event)"
      ></personalblog-ui-composition-home>
    </div>
  </div> `,
})
export class HomeCompositionComponent extends UiHomeComponent {
  constructor(public readonly webpageFacade: WebPageFacade) {
    super();
  }

  /**
   * Content Activated
   *
   * @public
   * @memberof HomeCompositionComponent
   * @type {string}
   */
  override onContentActivated(content: string): void {
    this.webpageFacade.navigate(content);
  }
}
