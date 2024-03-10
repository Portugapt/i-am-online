import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'personalblog-ui-self-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class='w-64 h-64'>
      <h1 class="text-3xl font-bold text-gray-800 mt-8">{{ selfName }}</h1>
      <p class="text-lg text-gray-700 text-wrap mb-8">{{ selfDescription }}</p>
    </div>
  `,
})
export class UiSelfHeaderComponent {

  @Input({required: true}) selfName!: string;

  @Input({required: true}) selfDescription!: string;

}
