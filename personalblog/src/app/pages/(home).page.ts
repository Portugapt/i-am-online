// Angular Core
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

// Services
import { WebPageFacade } from '../services/content.facade';

// Components
import { UiHomeComponent  } from '../lib/home/ui-composition-home/UiHome.component';

@Component({
  selector: 'personalblog-home',
  standalone: true,
  imports: [RouterOutlet, NgIf, UiHomeComponent],
  templateUrl: './home.component.html',
})
export default class HomeComponent {
  constructor(public webpageFacade: WebPageFacade) {}

}
