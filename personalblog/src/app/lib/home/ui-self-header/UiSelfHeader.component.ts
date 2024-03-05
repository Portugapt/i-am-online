import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'personalblog-ui-self-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h1 class="text-3xl font-bold text-gray-800 mt-8">Your Name</h1>
      <p class="text-lg text-gray-700 mb-8">Description about yourself.</p>
    </div>
  `,
})
export class SelfHeaderComponent {}
