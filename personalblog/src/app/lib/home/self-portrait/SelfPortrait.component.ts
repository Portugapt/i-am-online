// Angular Core
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'personalblog-self-portrait',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './SelfPortrait.component.html',
  styleUrl: './SelfPortrait.component.css'
})
export class SelfPortraitComponent {
  @Input() photoPath: string = 'assets/banana.jpg';
}
