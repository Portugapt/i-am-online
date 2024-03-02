// Navigation Buttons.

// Angular Core
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingFacade } from '../../../services/routing.facade';

@Component({
  selector: 'personalblog-navigation-buttons',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
  templateUrl: './NavigationButtons.component.html',
  styleUrl: './NavigationButtons.component.css',
  providers: [RoutingFacade],
})
export class NavigationButtonsComponent {
  
  /**
   * Routing Facade 
   * @private
   * @memberof NavigationButtonsComponent
   * @returns {RoutingFacade} The routing facade service
   */
  private readonly routingFacade = inject(RoutingFacade);

  /**
   * Content Active value
   */
  public contentActive: boolean = false;

  /** 
   * Update contentActive value 
   * @private
   * @memberof NavigationButtonsComponent
   * @returns {void} void
  */
  private updateContentActive(): void {
    this.contentActive = this.routingFacade.isContentActive();
  }

  /**
   * Routing to Blog. Uses the routing facade to navigate to the blog page.
   * @public
   * @memberof NavigationButtonsComponent
   * @returns {void} void
   */
  public gotoBlog(): void {
    this.routingFacade.transitionToBlog();
    this.updateContentActive();
  }
}
