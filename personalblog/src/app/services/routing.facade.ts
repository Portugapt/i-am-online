// routing.facade.ts

// Angular Core
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

// Facades
import { WebPageFacade } from './content.facade';


@Injectable({
  providedIn: 'root',
})
export class RoutingFacade {

    private router = inject(Router);
    private webpageFacade = inject(WebPageFacade);

    public readonly $contentActive = this.webpageFacade.contentActive();

    // Routing to Home
    transitionToHome() {
        console.log('Navigating to home...');
        this.webpageFacade.setContentActive(false);
        this.router.navigate(['/home']);
    }

    // Routing to Blog
    transitionToRoute(route: string) {
        console.log('Navigating to blog...');
        this.webpageFacade.setContentActive(true);
        this.router.navigate([route]);
    }
}
