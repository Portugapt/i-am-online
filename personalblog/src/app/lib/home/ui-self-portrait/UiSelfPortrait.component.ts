// Angular Core
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'personalblog-ui-self-portrait',
  standalone: true,
  imports: [CommonModule],
  template: `<img
      src="{{ photoPath }}"
      class="h-32 w-32 rounded-full"
      alt="Self Portrait"
    />`,
})
export class UISelfPortraitComponent {
  @Input() photoPath: string = '';
}
