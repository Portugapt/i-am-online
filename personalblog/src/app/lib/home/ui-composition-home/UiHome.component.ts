import { Component, Output, Input, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { UiNavigationButtonsComponent } from '../ui-navigation-buttons/UiNavigationButtons.component';
import { UiSelfHeaderComponent } from '../ui-self-header/UiSelfHeader.component';
import { UISelfPortraitComponent } from '../ui-self-portrait/UiSelfPortrait.component';

@Component({
  selector: 'personalblog-ui-composition-home',
  standalone: true,
  imports: [CommonModule, UiNavigationButtonsComponent, UiSelfHeaderComponent, UISelfPortraitComponent],
  templateUrl: './UiHome.component.html'
})
export class UiHomeComponent {
  /**
   * Photo Path
   * 
   * @public
   * @memberof UiHomeComponent
   * @type {string}
   */
  @Input({required: true}) photoPath!: string;

  /**
   * Self Name
   * 
   * @public
   * @memberof UiHomeComponent
   * @type {string}
   */
  @Input({required: true}) selfName!: string;

  /**
   * Self Description
   * 
   * @public
   * @memberof UiHomeComponent
   * @type {string}
   */
  @Input({required: true}) selfDescription!: string;

  /**
   * Content Active
   * 
   * @public
   * @memberof UiHomeComponent
   * @type {string}
   */
  @Output() 
  contentActivated: EventEmitter<string> = new EventEmitter<string>();

  onContentActivated(content: string) : void {
    this.contentActivated.emit(content);
  }

}


