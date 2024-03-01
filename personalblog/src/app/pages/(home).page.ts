import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'personalblog-home',
  standalone: true,
  imports: [AnalogWelcomeComponent, RouterLink, RouterOutlet],
  templateUrl: './home.component.html',
})
export default class HomeComponent {
}
