// content-active-facade.service.ts
import { Injectable, Signal, computed, signal } from '@angular/core';
import { ContentActiveService } from './content.service';

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
  setContentActive(activeStatus: boolean): void {
    this.state.update(
      (state: WebpageState): WebpageState => ({
        ...state,
        contentActive: activeStatus,
      })
    );
  }
}
