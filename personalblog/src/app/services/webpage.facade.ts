// webpage.facade.ts

// Angular Core
import { Injectable } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';
import { BehaviorSubject, map, startWith, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebPageFacade {
  private activeRouteSubject = new BehaviorSubject<string>('');

  public readonly activeRoute$ = this.activeRouteSubject.asObservable();

  constructor(private router: Router) {
    // Listen for router events and update active route
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.router.url),
        startWith(this.router.url.split('/')[1]),
        map((url) => url.split('/')[1])
      )
      .subscribe((url: string) => {
        console.log('url', url);
        this.activeRouteSubject.next(url);
      });
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }

}
