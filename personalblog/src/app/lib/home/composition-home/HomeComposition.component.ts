// Home Page composition of several components

// Angular Core
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { WebPageFacade } from '../../../services/content.facade';

// Components
import { UiSelfHeaderComponent } from '../ui-self-header/UiSelfHeader.component';

@Component({
  selector: 'personalblog-composition-home',
  standalone: true,
  imports: [CommonModule, UiSelfHeaderComponent],
  templateUrl: './HomeComposition.component.html',
  styleUrl: './HomeComposition.component.css',
  providers: [WebPageFacade],
})
export class HomeCompositionComponent {
  constructor(public readonly routerFacade: WebPageFacade) {
  }
}
