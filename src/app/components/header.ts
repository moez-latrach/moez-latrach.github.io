import { Component, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Angle, LANGS, UI, isLang } from '../core/i18n';
import { LangService, LocPipe } from '../core/lang.service';
import { ThemeService } from '../core/theme.service';
import { IconComponent } from './icon';

@Component({
  selector: 'app-header',
  imports: [RouterLink, LocPipe, IconComponent],
  template: `
    <header class="bar">
      <div class="container inner">
        <a class="logo" [routerLink]="['/', lang()]" aria-label="Moez Latrach">
          <span class="mark" aria-hidden="true">ML</span>
          <span class="name">Moez Latrach</span>
        </a>

        <nav [attr.aria-label]="ui.mainNav | loc: lang()">
          <ul>
            @for (item of items(); track item.id) {
              <li>
                <a [routerLink]="['/', lang(), angle()]" [fragment]="item.id">{{ item.label | loc: lang() }}</a>
              </li>
            }
          </ul>
        </nav>

        <div class="tools">
          <div class="lang" role="group" [attr.aria-label]="ui.language | loc: lang()">
            @for (l of langs; track l) {
              <a
                [routerLink]="switchLink(l)"
                [class.active]="l === lang()"
                [attr.aria-current]="l === lang() ? 'true' : null"
                [attr.hreflang]="l"
                [attr.lang]="l"
                >{{ l.toUpperCase() }}</a
              >
            }
          </div>
          <button type="button" class="theme" (click)="theme.toggle()" [attr.aria-label]="ui.theme | loc: lang()">
            <app-icon [name]="theme.theme() === 'dark' ? 'sun' : 'moon'" />
          </button>
        </div>
      </div>
    </header>
  `,
  styles: `
    .bar {
      position: sticky;
      top: 0;
      z-index: 20;
      background: color-mix(in srgb, var(--bg) 92%, transparent);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid var(--border);
    }
    .inner { display: flex; align-items: center; gap: 24px; min-height: 64px; }
    .logo { display: flex; align-items: center; gap: 10px; text-decoration: none; color: var(--text); font-weight: 650; }
    .mark {
      display: grid; place-items: center; width: 34px; height: 34px; border-radius: 8px;
      background: var(--text); color: var(--bg); font-size: 0.85rem; font-family: var(--font-mono);
    }
    nav { margin-left: auto; }
    ul { display: flex; gap: 4px; list-style: none; padding: 0; margin: 0; }
    li { margin: 0; }
    nav a {
      display: block; padding: 8px 12px; border-radius: 6px; text-decoration: none;
      color: var(--text-muted); font-size: 0.95rem;
      &:hover { color: var(--text); background: var(--bg-alt); }
    }
    .tools { display: flex; align-items: center; gap: 8px; }
    .lang { display: flex; border: 1px solid var(--border); border-radius: 8px; overflow: hidden; }
    .lang a {
      padding: 6px 10px; font-family: var(--font-mono); font-size: 0.8rem; text-decoration: none; color: var(--text-muted);
      &.active { background: var(--accent); color: var(--accent-contrast); }
    }
    .theme {
      display: grid; place-items: center; width: 36px; height: 36px; border-radius: 8px;
      border: 1px solid var(--border); background: transparent; color: var(--text); cursor: pointer;
      &:hover { background: var(--bg-alt); }
    }
    @media (max-width: 860px) {
      nav { display: none; }
      .tools { margin-left: auto; }
      .name { display: none; }
    }
  `,
})
export class HeaderComponent {
  protected readonly ui = UI;
  protected readonly langs = LANGS;
  protected readonly theme = inject(ThemeService);
  private readonly l = inject(LangService);
  private readonly router = inject(Router);
  protected readonly lang = this.l.lang;
  protected readonly angle = computed<Angle>(() => this.l.angle() ?? 'java');

  protected readonly items = computed(() => [
    { id: 'experiences', label: UI.nav.experiences },
    { id: 'skills', label: UI.nav.skills },
    { id: 'projects', label: UI.nav.projects },
    { id: 'about', label: UI.nav.about },
    { id: 'contact', label: UI.nav.contact },
  ]);

  /** Same page in the other language. */
  protected switchLink(target: string): string[] {
    const segments = this.router.url.split(/[?#]/)[0].split('/').filter(Boolean);
    const rest = isLang(segments[0]) ? segments.slice(1) : segments;
    return ['/', target, ...rest];
  }
}
