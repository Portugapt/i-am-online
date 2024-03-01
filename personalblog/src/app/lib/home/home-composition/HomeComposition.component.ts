// Home Page composition of several components

// Angular Core
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports
import classNames from 'classnames';

// Services
import { ContentActiveService } from '../../../services/content.service';

// Components
import { NavigationMenuComponent } from '../navigation-menu/NavigationMenu.component';
import { SelfHeaderComponent } from '../self-header/SelfHeader.component';

@Component({
  selector: 'personalblog-home-composition',
  standalone: true,
  imports: [CommonModule, NavigationMenuComponent, SelfHeaderComponent],
  templateUrl: './HomeComposition.component.html',
  styleUrl: './HomeComposition.component.css'
})
export class HomeCompositionComponent {
  constructor(private $contentActive: ContentActiveService) {


  }
}
