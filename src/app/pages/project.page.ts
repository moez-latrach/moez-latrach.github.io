import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IconComponent } from '../components/icon';
import { Lang, UI, isLang } from '../core/i18n';
import { LocPipe } from '../core/lang.service';
import { SeoService } from '../core/seo.service';
import { PROFILE } from '../data/profile';
import { PROJECTS, Project, findProject } from '../data/projects';

@Component({
  selector: 'app-project-page',
  imports: [RouterLink, LocPipe, IconComponent],
  template: `
    @if (project; as p) {
      <article class="container wrap">
        <a class="back" [routerLink]="['/', lang, 'java']" fragment="projects">{{ ui.backToProjects | loc: lang }}</a>

        <header>
          <p class="eyebrow">{{ (p.kind === 'personal' ? ui.project.personal : ui.project.caseStudy) | loc: lang }} · {{ p.period | loc: lang }}</p>
          <h1>{{ p.title | loc: lang }}</h1>
          <p class="lead">{{ p.summary | loc: lang }}</p>
          @if (p.kind === 'case-study') {
            <p class="note muted">{{ ui.project.confidential | loc: lang }}</p>
          }
        </header>

        <section>
          <h2>{{ ui.project.context | loc: lang }}</h2>
          <p>{{ p.context | loc: lang }}</p>
          <h2>{{ ui.project.goal | loc: lang }}</h2>
          <p>{{ p.goal | loc: lang }}</p>
          <h2>{{ ui.project.role | loc: lang }}</h2>
          <p>{{ p.role | loc: lang }}</p>
        </section>

        @if (p.ingestion && p.question) {
          <section>
            <h2>{{ ui.project.architecture | loc: lang }}</h2>
            <h3>{{ ui.project.flowIngestion | loc: lang }}</h3>
            <ol class="flow">
              @for (s of p.ingestion; track $index) {
                <li><strong>{{ s.label | loc: lang }}</strong>@if (s.sub) {<span>{{ s.sub | loc: lang }}</span>}</li>
              }
            </ol>
            <h3>{{ ui.project.flowQuestion | loc: lang }}</h3>
            <ol class="flow">
              @for (s of p.question; track $index) {
                <li><strong>{{ s.label | loc: lang }}</strong>@if (s.sub) {<span>{{ s.sub | loc: lang }}</span>}</li>
              }
            </ol>
            @if (p.architectureNote) {
              <p class="muted">{{ p.architectureNote | loc: lang }}</p>
            }
          </section>
        } @else if (p.architectureNote) {
          <section>
            <h2>{{ ui.project.architecture | loc: lang }}</h2>
            <p>{{ p.architectureNote | loc: lang }}</p>
          </section>
        }

        <section>
          <h2>{{ ui.project.stack | loc: lang }}</h2>
          <p class="tags">
            @for (t of p.stack; track t) {
              <span class="tag">{{ t }}</span>
            }
          </p>
        </section>

        <section class="two">
          <div>
            <h2>{{ ui.project.difficulties | loc: lang }}</h2>
            <ul>@for (d of p.difficulties[lang]; track $index) {<li>{{ d }}</li>}</ul>
          </div>
          <div>
            <h2>{{ ui.project.solutions | loc: lang }}</h2>
            <ul>@for (d of p.solutions[lang]; track $index) {<li>{{ d }}</li>}</ul>
          </div>
        </section>

        <section>
          <h2>{{ ui.project.results | loc: lang }}</h2>
          <ul>@for (d of p.results[lang]; track $index) {<li>{{ d }}</li>}</ul>
        </section>

        @if (p.next) {
          <section>
            <h2>{{ ui.project.next | loc: lang }}</h2>
            <ul>@for (d of p.next[lang]; track $index) {<li>{{ d }}</li>}</ul>
          </section>
        }

        @if (p.demo; as demo) {
          <section>
            <h2>{{ ui.project.demo | loc: lang }}</h2>
            <video controls preload="metadata" [attr.poster]="demo.poster ?? null" [attr.aria-label]="demo.alt | loc: lang">
              <source [src]="demo.src" />
            </video>
          </section>
        }

        @if (p.links.length) {
          <section>
            <h2>{{ ui.project.links | loc: lang }}</h2>
            <p class="links">
              @for (l of p.links; track l.url) {
                <a class="btn" [href]="l.url" target="_blank" rel="noopener"><app-icon name="github" />{{ l.label | loc: lang }}</a>
              }
            </p>
          </section>
        }
      </article>
    } @else {
      <div class="container wrap"><h1>{{ ui.notFound.title | loc: lang }}</h1></div>
    }
  `,
  styles: `
    .wrap { padding-block: clamp(32px, 6vw, 72px); max-width: 860px; }
    .back { display: inline-block; margin-bottom: 1.6em; text-decoration: none; font-weight: 600; }
    h1 { font-size: clamp(1.8rem, 4vw, 2.6rem); }
    .lead { font-size: 1.15rem; color: var(--text-muted); }
    .note { font-size: 0.92rem; }
    section { margin-top: 2.2em; }
    h2 { font-size: 0.8rem; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.06em; color: var(--accent); margin: 1.6em 0 0.5em; font-weight: 500; }
    section > h2:first-child { margin-top: 0; }
    h3 { font-size: 1rem; margin: 1.2em 0 0.6em; }
    .tags { display: flex; flex-wrap: wrap; gap: 6px; }
    .two { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
    .flow { list-style: none; padding: 0; margin: 0 0 8px; display: flex; flex-wrap: wrap; gap: 8px; counter-reset: step; }
    .flow li {
      margin: 0; display: flex; flex-direction: column; gap: 2px; padding: 10px 14px; min-width: 130px;
      border: 1px solid var(--border); border-radius: 8px; background: var(--surface);
      counter-increment: step; position: relative;
    }
    .flow li::before { content: counter(step); font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent); }
    .flow li span { font-size: 0.82rem; color: var(--text-muted); }
    video { width: 100%; border-radius: var(--radius); border: 1px solid var(--border); }
    .links { display: flex; flex-wrap: wrap; gap: 10px; }
    @media (max-width: 700px) {
      .two { grid-template-columns: 1fr; }
      .flow { flex-direction: column; }
      }
  `,
})
export class ProjectPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);

  protected readonly ui = UI;
  protected lang: Lang = 'fr';
  protected project?: Project;

  ngOnInit(): void {
    const snap = this.route.snapshot;
    this.lang = isLang(snap.data['lang']) ? snap.data['lang'] : 'fr';
    this.project = findProject(snap.paramMap.get('slug'));
    if (this.project) {
      this.seo.set({
        title: `${this.project.title[this.lang]} | ${PROFILE.name}`,
        description: this.project.summary[this.lang],
        lang: this.lang,
        path: `projects/${this.project.slug}`,
      });
    }
  }
}

export const projectSlugs = PROJECTS.map((p) => p.slug);
