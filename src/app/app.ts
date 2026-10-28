import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer';
import { HeaderComponent } from './components/header';
import { UI } from './core/i18n';
import { LangService, LocPipe } from './core/lang.service';
import { ThemeService } from './core/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, LocPipe],
  template: `
    <a class="skip" href="#main">{{ ui.skipToContent | loc: lang() }}</a>
    <app-header />
    <main id="main"><router-outlet /></main>
    <app-footer [lang]="lang()" />
  `,
  styles: `
    .skip {
      position: absolute; left: 8px; top: -60px; z-index: 30; padding: 10px 14px;
      background: var(--accent); color: var(--accent-contrast); border-radius: 6px;
      &:focus { top: 8px; }
    }
    main { min-height: 70vh; }
  `,
})
export class App implements OnInit {
  protected readonly ui = UI;
  protected readonly lang = inject(LangService).lang;
  private readonly theme = inject(ThemeService);

  ngOnInit(): void {
    this.theme.init();
  }
}
