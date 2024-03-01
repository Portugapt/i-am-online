// signal.service.ts
import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentActiveService {
  // Generalized content active signal
  contentActive = signal(false);
}