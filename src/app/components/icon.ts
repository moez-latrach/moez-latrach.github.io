import { Component, input } from '@angular/core';

export type IconName = 'github' | 'linkedin' | 'mail' | 'download' | 'sun' | 'moon' | 'arrow';

const PATHS: Record<IconName, string> = {
  github:
    'M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.35 1.08 2.92.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z',
  linkedin:
    'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.25H3V9.75Zm6.5 0h3.83v1.54h.05c.53-1 1.84-2.04 3.78-2.04 4.04 0 4.79 2.66 4.79 6.12V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.69V21h-4V9.75Z',
  mail: 'M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1 2.6V17h16V7.6l-8 5.4-8-5.4Zm1.4-.6L12 11.4 18.6 7H5.4Z',
  download: 'M11 3h2v9.17l3.59-3.58L18 10l-6 6-6-6 1.41-1.41L11 12.17V3ZM5 19h14v2H5v-2Z',
  sun: 'M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0-5h1v3h-1V2Zm0 17h1v3h-1v-3ZM2 11h3v1H2v-1Zm17 0h3v1h-3v-1ZM4.93 4.22l.7-.7 2.12 2.12-.7.7-2.12-2.12Zm11.32 11.32.7-.7 2.12 2.12-.7.7-2.12-2.12ZM4.22 18.36l2.12-2.12.7.7-2.12 2.12-.7-.7ZM15.54 7.05l2.12-2.12.7.7-2.12 2.12-.7-.7Z',
  moon: 'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z',
  arrow: 'M13.17 5 19 10.83v2.34L13.17 19l-1.41-1.41L15.34 14H4v-2h11.34l-3.58-3.59L13.17 5Z',
};

@Component({
  selector: 'app-icon',
  template: `
    <svg viewBox="0 0 24 24" width="1.15em" height="1.15em" fill="currentColor" aria-hidden="true" focusable="false">
      <path [attr.d]="path()" />
    </svg>
  `,
  styles: `
    :host { display: inline-flex; }
    svg { display: block; }
  `,
})
export class IconComponent {
  readonly name = input.required<IconName>();
  protected path = () => PATHS[this.name()];
}
