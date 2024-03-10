// Angular Core
import { ChangeDetectionStrategy, Component, OnInit, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';

// Reactivity
import { toSignal } from '@angular/core/rxjs-interop';
import { takeUntil } from 'rxjs';

// Services
import { WebPageFacade } from '../services/webpage.facade';

// Components
import { RouteMeta } from '@analogjs/router';
import { HomeCompositionComponent } from '../lib/home/composition-home/HomeComposition.component';

export const routeMeta: RouteMeta = {
  title: 'Portugapt - Home',
  canActivate: [() => true],
  providers: [WebPageFacade],
};

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterOutlet, NgIf, HomeCompositionComponent],
  selector: 'personalblog-home',
  templateUrl: './home.component.html',
})
export default class HomeComponent {
  public readonly routesList: string[] = ['blog', 'cv', 'about'];

  public displayedContent: Signal<string> = toSignal(
    this.webpageFacade.activeRoute$, {initialValue: ''});

  constructor(private webpageFacade: WebPageFacade) {}

  selfName: string = 'João Monteiro';
  selfDescription: string = 'Software Engineer';
  photoPath: string = 'assets/banana.jpg';
}
