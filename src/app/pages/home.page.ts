import { Component, OnInit, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IconComponent } from '../components/icon';
import { RevealDirective } from '../components/reveal.directive';
import { ANGLES, Lang, UI, isLang } from '../core/i18n';
import { LocPipe } from '../core/lang.service';
import { SeoService } from '../core/seo.service';
import { ANGLE_DATA } from '../data/angles';
import { CVS, PROFILE } from '../data/profile';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, LocPipe, IconComponent, RevealDirective],
  template: `
    <section class="hero" aria-labelledby="hero-title">
      <div class="container hero-grid">
        <div class="copy">
          <p class="status"><span class="dot" aria-hidden="true"></span>{{ ui.available | loc: lang }}</p>
          <h1 id="hero-title">
            {{ profile.title | loc: lang }}
            <span class="sub">{{ profile.subtitle | loc: lang }}</span>
          </h1>
          <p class="lead">{{ profile.tagline | loc: lang }}</p>
          <p class="muted">{{ profile.intro | loc: lang }}</p>
          <div class="actions">
            <a class="btn primary" [routerLink]="['/', lang, 'java']" fragment="projects">{{ ui.seeProjects | loc: lang }}</a>
            <a class="btn" [href]="cv.file" download><app-icon name="download" />{{ ui.downloadCv | loc: lang }}</a>
            <a class="link" [routerLink]="['/', lang, 'java']" fragment="contact">{{ ui.contactMe | loc: lang }} →</a>
          </div>
        </div>
        <img class="photo" [src]="profile.photo" [alt]="profile.photoAlt | loc: lang" width="320" height="320" fetchpriority="high" />
      </div>
    </section>

    <section class="stats" aria-label="Key figures">
      <div class="container stats-grid">
        @for (s of profile.stats; track $index) {
          <div appReveal>
            <p class="value">{{ s.value | loc: lang }}</p>
            <p class="label muted">{{ s.label | loc: lang }}</p>
          </div>
        }
      </div>
    </section>

    <section class="section" aria-labelledby="angles-title">
      <div class="container">
        <h2 id="angles-title">{{ ui.chooseAngle | loc: lang }}</h2>
        <div class="angles">
          @for (a of angles; track a) {
            <a class="card" appReveal [routerLink]="['/', lang, a]">
              <h3>{{ data[a].card | loc: lang }}</h3>
              <p class="muted">{{ data[a].cardText | loc: lang }}</p>
              <span class="more">{{ ui.seeMore | loc: lang }} <app-icon name="arrow" /></span>
            </a>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .hero { padding-block: clamp(40px, 7vw, 88px) clamp(32px, 5vw, 56px); }
    .hero-grid { display: grid; grid-template-columns: 1fr 320px; gap: clamp(24px, 6vw, 72px); align-items: center; }
    .status { display: inline-flex; align-items: center; gap: 8px; font-size: 0.92rem; font-weight: 600; margin-bottom: 1.2em; }
    .dot { width: 10px; height: 10px; border-radius: 50%; background: #1a9b5b; }
    h1 .sub { display: block; color: var(--accent); font-weight: 600; font-size: 0.62em; margin-top: 0.3em; }
    .lead { font-size: 1.2rem; max-width: 56ch; }
    .actions { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; margin-top: 1.6em; }
    .link { font-weight: 600; text-decoration: none; padding: 0.7em 0.4em; &:hover { text-decoration: underline; } }
    .photo {
      width: 100%; max-width: 320px; height: auto; aspect-ratio: 1; object-fit: cover;
      border-radius: 18px; border: 1px solid var(--border); background: #fff; justify-self: end;
    }
    .stats { border-block: 1px solid var(--border); background: var(--bg-alt); }
    .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; padding-block: 28px; }
    .value { font-family: var(--font-mono); font-size: clamp(1.3rem, 3vw, 1.8rem); font-weight: 500; margin: 0 0 4px; }
    .label { margin: 0; font-size: 0.95rem; }
    .angles { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; }
    .card {
      display: flex; flex-direction: column; gap: 8px; padding: 22px; text-decoration: none; color: inherit;
      border: 1px solid var(--border); border-radius: var(--radius); background: var(--surface);
      transition: border-color 0.15s ease, transform 0.15s ease;
      &:hover { border-color: var(--accent); transform: translateY(-2px); }
    }
    .card h3 { margin: 0; }
    .card p { margin: 0; flex: 1; }
    .more { display: inline-flex; align-items: center; gap: 6px; color: var(--accent); font-weight: 600; margin-top: 8px; }
    @media (max-width: 800px) {
      .hero-grid { grid-template-columns: 1fr; }
      .photo { order: -1; max-width: 200px; justify-self: start; }
      .stats-grid { grid-template-columns: 1fr; gap: 16px; }
    }
    @media (prefers-reduced-motion: reduce) { .card { transition: none; &:hover { transform: none; } } }
  `,
})
export class HomePage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);

  protected readonly ui = UI;
  protected readonly profile = PROFILE;
  protected readonly angles = ANGLES;
  protected readonly data = ANGLE_DATA;
  protected lang: Lang = 'fr';
  protected cv = CVS.java[0];

  ngOnInit(): void {
    const l = this.route.snapshot.data['lang'];
    this.lang = isLang(l) ? l : 'fr';
    this.cv = CVS.java.find((c) => c.docLang === this.lang) ?? CVS.java[0];
    this.seo.set({
      title: `${PROFILE.name} | ${PROFILE.title[this.lang]}, ${PROFILE.subtitle[this.lang].toLowerCase()}`,
      description: `${PROFILE.tagline[this.lang]} ${PROFILE.intro[this.lang]}`,
      lang: this.lang,
      path: '',
    });
  }
}
