import { Component, input } from '@angular/core';
import { Lang, UI } from '../core/i18n';
import { LocPipe } from '../core/lang.service';
import { PROFILE } from '../data/profile';
import { IconComponent } from './icon';

@Component({
  selector: 'app-footer',
  imports: [LocPipe, IconComponent],
  template: `
    <footer>
      <div class="container inner">
        <p>© {{ year }} {{ ui.footer.rights | loc: lang() }} {{ ui.footer.built | loc: lang() }}</p>
        <ul>
          <li><a [href]="'mailto:' + profile.email" aria-label="Email"><app-icon name="mail" /></a></li>
          <li><a [href]="profile.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn"><app-icon name="linkedin" /></a></li>
          <li><a [href]="profile.github" target="_blank" rel="noopener" aria-label="GitHub"><app-icon name="github" /></a></li>
        </ul>
      </div>
    </footer>
  `,
  styles: `
    footer { border-top: 1px solid var(--border); padding-block: 24px; font-size: 0.9rem; color: var(--text-muted); }
    .inner { display: flex; flex-wrap: wrap; gap: 12px; justify-content: space-between; align-items: center; }
    p { margin: 0; }
    ul { display: flex; gap: 14px; list-style: none; padding: 0; margin: 0; font-size: 1.25rem; }
    li { margin: 0; }
    a { color: var(--text-muted); &:hover { color: var(--accent); } }
  `,
})
export class FooterComponent {
  readonly lang = input.required<Lang>();
  protected readonly ui = UI;
  protected readonly profile = PROFILE;
  protected readonly year = new Date().getFullYear();
}
