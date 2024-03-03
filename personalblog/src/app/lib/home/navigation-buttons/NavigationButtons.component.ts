// Navigation Buttons.

// Angular Core
import { ChangeDetectionStrategy, Component, ModelSignal, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingFacade } from '../../../services/routing.facade';

@Component({
  standalone: true,
  selector: 'personalblog-navigation-buttons',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './NavigationButtons.component.html',
  styleUrl: './NavigationButtons.component.css',
  providers: [RoutingFacade],
})
export class NavigationButtonsComponent {


  /**
   * Content Active value.
   * 
   * @public
   * @required
   * @memberof NavigationButtonsComponent
   * @type {string}
   * @default false
   */
  contentActive: ModelSignal<string> = model('home')


  /**
   * Activate contentActive value.
   * 
   * @public
   * @memberof NavigationButtonsComponent
   * @type {EventEmitter<string>}
   */
  activateContent(content: string) : void {
    console.log( content)
    this.contentActive.update(() => content );
  }


  // /**
  //  * Content Active value.
  //  * 
  //  * @public
  //  * @required
  //  * @memberof NavigationButtonsComponent
  //  * @type {boolean}
  //  * @default false
  //  */
  // @Input()
  // public contentActive: boolean = false;

  // /**
  //  * Go to content event emitter.
  //  * 
  //  * @public
  //  * @memberof NavigationButtonsComponent
  //  * @type {EventEmitter<string>}
  //  */
  // @Output()
  // public clickToContent: EventEmitter<string> = new EventEmitter<string>();

  // /**
  //  * Go to content.
  //  * 
  //  * @public
  //  * @param {string} content
  //  * @memberof NavigationButtonsComponent
  //  * @returns {void}
  //  */
  // public goToContent(content: string): void {
  //   console.log('Navigating to content...');
  //   console.log(content);
  //   this.clickToContent.emit(content);
  // }

// ------------------------

  // /**
  //  * Routing Facade 
  //  * @private
  //  * @memberof NavigationButtonsComponent
  //  * @returns {RoutingFacade} The routing facade service
  //  */
  // private readonly routingFacade = inject(RoutingFacade);


  // /** 
  //  * Update contentActive value 
  //  * @private
  //  * @memberof NavigationButtonsComponent
  //  * @returns {void} void
  // */
  // private updateContentActive(): void {
  //   this.contentActive = this.routingFacade.isContentActive();
  // }

  // /**
  //  * Routing to Blog. Uses the routing facade to navigate to the blog page.
  //  * @public
  //  * @memberof NavigationButtonsComponent
  //  * @returns {void} void
  //  */
  // public gotoBlog(): void {
  //   this.routingFacade.transitionToBlog();
  //   this.updateContentActive();
  // }
}
