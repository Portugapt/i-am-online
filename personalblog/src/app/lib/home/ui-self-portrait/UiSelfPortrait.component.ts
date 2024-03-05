// Angular Core
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'personalblog-self-portrait',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="relative h-64 w-64">
    <!-- Adjust the size as needed -->
    <img
      src="{{ photoPath }}"
      class="h-24 w-24 rounded-full"
      alt="Self Portrait"
    />
  </div>`,
})
export class UISelfPortraitComponent {
  @Input() photoPath: string = 'assets/banana.jpg';
}
