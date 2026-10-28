import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

/**
 * The initial theme is applied before first paint by an inline script in `index.html`;
 * this service only reads it back and handles the toggle.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);
  readonly theme = signal<Theme>('light');

  init(): void {
    const attr = this.doc.documentElement.getAttribute('data-theme');
    if (attr === 'dark' || attr === 'light') {
      this.theme.set(attr);
    }
  }

  toggle(): void {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(next);
    this.doc.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* storage can be unavailable (private mode): the toggle still works for this visit */
    }
  }
}
