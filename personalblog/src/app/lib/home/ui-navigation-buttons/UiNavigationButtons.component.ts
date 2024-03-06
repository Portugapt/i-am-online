// Navigation Buttons.

// Angular Core
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'personalblog-ui-navigation-buttons',
  imports: [CommonModule],
  templateUrl: './UiNavigationButtons.component.html',
})
export class UiNavigationButtonsComponent {

  /**
   * Output contentActive value.
   * 
   * @public
   * @memberof UiNavigationButtonsComponent
   * @type {EventEmitter<string>}
   */
  @Output() contentActivated: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Content Active
   * 
   * @public
   * @memberof UiNavigationButtonsComponent
   * @type {string}
   */
  onContentActivated(content: string) : void {
    this.contentActivated.emit(content);
  }
}
