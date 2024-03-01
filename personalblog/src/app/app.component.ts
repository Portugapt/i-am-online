import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { ContentActiveService } from './services/content.service';

@Component({
  selector: 'personalblog-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private router: Router, public $contentActive: ContentActiveService) {}

  navigateToBlog() {
    console.log('Navigating to blog...');
    console.log(this.$contentActive.contentActive());
    this.$contentActive.contentActive.set(true);
    this.router.navigate(['/blog']);
  }
}
