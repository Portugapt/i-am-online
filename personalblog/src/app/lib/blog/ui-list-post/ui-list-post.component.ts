import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'jm-analog-webpage-ui-list-post',
  standalone: true,
  imports: [CommonModule, NgIf],
  template: `
    <div
      class="cursor-pointer max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:bg-gray-100"
      (click)="onCardClick()"
    >
      <div class="md:flex">
        <div *ngIf="thumbnail" class="md:flex-shrink-0">
          <img
            class="h-48 w-full object-cover md:w-48"
            [src]="thumbnail"
            alt="Post thumbnail"
          />
        </div>
        <div class="p-8">
          <div
            class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
          >
            {{ title }}
          </div>
          <p class="block mt-1 text-lg leading-tight font-medium text-black">
            {{ date | date : 'longDate' }}
          </p>
          <p class="mt-2 text-gray-500">
            Tags: <span *ngFor="let tag of tags">{{ tag }} </span>
          </p>
        </div>
      </div>
    </div>
  `,
})
export class UiListPostComponent {
  @Input({ required: true })
  title!: string;

  @Input({ required: true })
  date!: string;

  @Input({ required: true })
  tags!: string[];

  @Input({ required: true })
  routeLink!: string;

  @Input()
  thumbnail!: string;

  @Output()
  cardClick = new EventEmitter<string>();

  onCardClick() {
    this.cardClick.emit(this.routeLink);
  }
}
