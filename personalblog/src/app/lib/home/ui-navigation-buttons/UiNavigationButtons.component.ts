// Navigation Buttons.

// Angular Core
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'personalblog-navigation-buttons',
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
  @Output() contentActive: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Click
   * 
   * @public
   * @memberof UiNavigationButtonsComponent
   * @type {string}
   */
  onClickContent(content: string) : void {
    this.contentActive.emit(content);
  }
}
