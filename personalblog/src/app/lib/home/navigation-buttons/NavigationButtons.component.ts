// Navigation Buttons.

// Angular Core
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ContentActiveService } from '../../../services/content.service';

@Component({
  selector: 'personalblog-navigation-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './NavigationButtons.component.html',
  styleUrl: './NavigationButtons.component.css'
})
export class NavigationButtonsComponent {
  constructor(private router: Router, private $contentActive: ContentActiveService) {}

  transitionToContent() {
    console.log('Navigating to blog...');
    this.router.navigate(['/blog']);
    this.$contentActive.contentActive.set(true);
    console.log(this.$contentActive.contentActive())
  }
}
