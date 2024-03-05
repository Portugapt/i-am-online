// webpage.facade.ts

// Angular Core
import { Injectable, Signal, computed, signal } from '@angular/core';

// Interface
interface WebpageState {
  contentActive: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class WebPageFacade {
  private state = signal<WebpageState>({
    contentActive: false,
  });

  readonly contentActive: Signal<boolean> = computed<boolean>(
    () => this.state().contentActive
  );

  // Provide a simplified API for updating the state
  setContentActive(status: boolean): void {
    console.log('Setting content status to ' + status);
    this.state.update(
      (state: WebpageState): WebpageState => ({
        ...state,
        contentActive: status,
      })
    );
  }
}
