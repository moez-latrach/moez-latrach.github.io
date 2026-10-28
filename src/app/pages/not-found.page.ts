import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UI } from '../core/i18n';
import { LangService, LocPipe } from '../core/lang.service';
import { SeoService } from '../core/seo.service';

@Component({
  selector: 'app-not-found-page',
  imports: [RouterLink, LocPipe],
  template: `
    <div class="container wrap">
      <h1>{{ ui.notFound.title | loc: lang() }}</h1>
      <p class="muted">{{ ui.notFound.text | loc: lang() }}</p>
      <a class="btn primary" [routerLink]="['/', lang()]">{{ ui.home | loc: lang() }}</a>
    </div>
  `,
  styles: `.wrap { padding-block: clamp(48px, 10vw, 120px); }`,
})
export class NotFoundPage implements OnInit {
  protected readonly ui = UI;
  protected readonly lang = inject(LangService).lang;
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.set({ title: `${UI.notFound.title[this.lang()]} | Moez Latrach`, description: UI.notFound.text[this.lang()], lang: this.lang(), path: '' });
  }
}
