// Home Page composition of several components

// Angular Core
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports
import classNames from 'classnames';

// Services
import { WebPageFacade } from '../../../services/content.facade';

// Components
import { SelfHeaderComponent } from '../ui-self-header/UiSelfHeader.component';

@Component({
  selector: 'personalblog-home-composition',
  standalone: true,
  imports: [CommonModule, SelfHeaderComponent],
  templateUrl: './HomeComposition.component.html',
  styleUrl: './HomeComposition.component.css',
  providers: [WebPageFacade],
})
export class HomeCompositionComponent {
  constructor(public readonly webpageFacade: WebPageFacade) {
  }
}
