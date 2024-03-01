// Navigation Menu for the home page.

// Angular Core
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { NavigationButtonsComponent } from '../navigation-buttons/NavigationButtons.component';
import { SelfPortraitComponent } from '../self-portrait/SelfPortrait.component';

@Component({
  selector: 'personalblog-navigation-menu',
  standalone: true,
  imports: [CommonModule, NavigationButtonsComponent, SelfPortraitComponent],
  templateUrl: './NavigationMenu.component.html',
  styleUrl: './NavigationMenu.component.css'
})
export class NavigationMenuComponent {}
