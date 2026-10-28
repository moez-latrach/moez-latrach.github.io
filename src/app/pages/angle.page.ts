import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  AboutComponent,
  ContactComponent,
  ExperiencesComponent,
  LearningComponent,
  ProjectsComponent,
  SkillsComponent,
} from '../components/sections';
import { Angle, Lang, UI, isAngle, isLang } from '../core/i18n';
import { LocPipe } from '../core/lang.service';
import { SeoService } from '../core/seo.service';
import { ANGLE_DATA } from '../data/angles';
import { PROFILE } from '../data/profile';

@Component({
  selector: 'app-angle-page',
  imports: [
    RouterLink, LocPipe, AboutComponent, ContactComponent, ExperiencesComponent,
    LearningComponent, ProjectsComponent, SkillsComponent,
  ],
  template: `
    <section class="intro" aria-labelledby="angle-title">
      <div class="container">
        <nav class="crumb" aria-label="Breadcrumb">
          <a [routerLink]="['/', lang]">{{ ui.home | loc: lang }}</a>
        </nav>
        <p class="eyebrow">{{ data.card | loc: lang }}</p>
        <h1 id="angle-title">{{ data.headline | loc: lang }}</h1>
        <p class="lead">{{ data.lead | loc: lang }}</p>
      </div>
    </section>

    @for (s of data.sections; track s) {
      @switch (s) {
        @case ('experiences') { <app-experiences [lang]="lang" [angle]="angle" /> }
        @case ('skills') { <app-skills [lang]="lang" /> }
        @case ('projects') { <app-projects [lang]="lang" /> }
        @case ('learning') { <app-learning [lang]="lang" /> }
        @case ('about') { <app-about [lang]="lang" /> }
        @case ('contact') { <app-contact [lang]="lang" [angle]="angle" /> }
      }
    }
  `,
  styles: `
    .intro { padding-block: clamp(32px, 6vw, 72px) clamp(24px, 4vw, 40px); }
    .crumb { margin-bottom: 1.4em; font-size: 0.92rem; }
    h1 { font-size: clamp(1.7rem, 3.6vw, 2.5rem); max-width: 24ch; }
    .lead { font-size: 1.15rem; max-width: 62ch; color: var(--text-muted); }
  `,
})
export class AnglePage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);

  protected readonly ui = UI;
  protected lang: Lang = 'fr';
  protected angle: Angle = 'java';
  protected data = ANGLE_DATA.java;

  ngOnInit(): void {
    const d = this.route.snapshot.data;
    this.lang = isLang(d['lang']) ? d['lang'] : 'fr';
    this.angle = isAngle(d['angle']) ? d['angle'] : 'java';
    this.data = ANGLE_DATA[this.angle];
    this.seo.set({
      title: `${this.data.card[this.lang]} | ${PROFILE.name}`,
      description: this.data.seoDescription[this.lang],
      lang: this.lang,
      path: this.angle,
    });
  }
}
