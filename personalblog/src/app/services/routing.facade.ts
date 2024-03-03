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

    // check if the router is active
    isContentActive() {
        return this.webpageFacade.contentActive();
    }

    // Routing to Home
    transitionToHome() {
        console.log('Navigating to home...');
        this.webpageFacade.setContentActive(false);
        this.router.navigate(['/home']);
    }

    // Routing to Blog
    transitionToBlog() {
        console.log('Navigating to blog...');
        this.webpageFacade.setContentActive(true);
        this.router.navigate(['/blog']);
    }

    // Routing to About
    transitionToAbout() {
        console.log('Navigating to about...');
        this.webpageFacade.setContentActive(false);
        this.router.navigate(['/about']);
    }
}
