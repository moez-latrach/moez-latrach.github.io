import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Angle, L, Lang, UI } from '../core/i18n';
import { LocPipe } from '../core/lang.service';
import { ABOUT, LEARNING, LEARNING_INTRO } from '../data/learning';
import { EXPERIENCES, Experience } from '../data/experiences';
import { CVS, PROFILE } from '../data/profile';
import { PROJECTS } from '../data/projects';
import { SKILLS, Level } from '../data/skills';
import { IconComponent } from './icon';
import { RevealDirective } from './reveal.directive';

/* ---------- About ---------- */

@Component({
  selector: 'app-about',
  imports: [LocPipe, RevealDirective],
  template: `
    <section id="about" class="section" aria-labelledby="about-title">
      <div class="container">
        <p class="eyebrow">{{ ui.nav.about | loc: lang() }}</p>
        <h2 id="about-title">{{ about.title | loc: lang() }}</h2>
        <div class="grid">
          <div class="text">
            @for (p of about.paragraphs; track $index) {
              <p>{{ p | loc: lang() }}</p>
            }
          </div>
          <ul class="strengths">
            @for (s of about.strengths; track $index) {
              <li appReveal>
                <h3>{{ s.title | loc: lang() }}</h3>
                <p class="muted">{{ s.text | loc: lang() }}</p>
              </li>
            }
          </ul>
        </div>
      </div>
    </section>
  `,
  styles: `
    .grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: clamp(24px, 5vw, 56px); }
    .text { max-width: 62ch; }
    .strengths { list-style: none; padding: 0; display: grid; gap: 12px; }
    .strengths li { margin: 0; padding: 16px 18px; border: 1px solid var(--border); border-radius: var(--radius); background: var(--surface); }
    .strengths h3 { margin-bottom: 0.25em; font-size: 1.05rem; }
    .strengths p { margin: 0; font-size: 0.97rem; }
    @media (max-width: 800px) { .grid { grid-template-columns: 1fr; } }
  `,
})
export class AboutComponent {
  readonly lang = input.required<Lang>();
  protected readonly ui = UI;
  protected readonly about = ABOUT;
}

/* ---------- Skills ---------- */

@Component({
  selector: 'app-skills',
  imports: [LocPipe, RevealDirective],
  template: `
    <section id="skills" class="section alt" aria-labelledby="skills-title">
      <div class="container">
        <p class="eyebrow">{{ ui.nav.skills | loc: lang() }}</p>
        <h2 id="skills-title">{{ ui.nav.skills | loc: lang() }}</h2>
        <div class="cards">
          @for (g of groups; track g.id) {
            <article appReveal>
              <h3>{{ g.title | loc: lang() }}</h3>
              @for (lvl of levels; track lvl) {
                @if (g.items[lvl]; as items) {
                  <div class="row">
                    <span class="lvl">{{ ui.levels[lvl] | loc: lang() }}</span>
                    <span class="tags">
                      @for (it of items; track it) {
                        <span class="tag" [class.new]="lvl === 'learning'">{{ it }}</span>
                      }
                    </span>
                  </div>
                }
              }
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; }
    article { padding: 20px; border: 1px solid var(--border); border-radius: var(--radius); background: var(--surface); }
    h3 { margin-bottom: 0.8em; }
    .row { display: grid; gap: 6px; margin-bottom: 12px; }
    .row:last-child { margin-bottom: 0; }
    .lvl { font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.05em; text-transform: uppercase; color: var(--text-muted); }
    .tags { display: flex; flex-wrap: wrap; gap: 6px; }
  `,
})
export class SkillsComponent {
  readonly lang = input.required<Lang>();
  protected readonly ui = UI;
  protected readonly groups = SKILLS;
  protected readonly levels: Level[] = ['daily', 'practised', 'learning'];
}

/* ---------- Learning timeline ---------- */

@Component({
  selector: 'app-learning',
  imports: [LocPipe, RevealDirective],
  template: `
    <section id="learning" class="section" aria-labelledby="learning-title">
      <div class="container">
        <p class="eyebrow">{{ title | loc: lang() }}</p>
        <h2 id="learning-title">{{ title | loc: lang() }}</h2>
        <p class="intro muted">{{ intro | loc: lang() }}</p>
        <ol class="timeline">
          @for (s of steps; track s.period) {
            <li appReveal>
              <span class="period mono">{{ s.period }}</span>
              <span class="where">{{ s.where | loc: lang() }}</span>
              <span class="tech">{{ s.tech }}</span>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: `
    .intro { max-width: 70ch; }
    .timeline { list-style: none; margin: 32px 0 0; padding: 0 0 0 22px; border-left: 2px solid var(--border); display: grid; gap: 22px; }
    li { position: relative; margin: 0; display: grid; gap: 2px; }
    li::before {
      content: ''; position: absolute; left: -29px; top: 0.5em; width: 12px; height: 12px;
      border-radius: 50%; background: var(--accent); border: 3px solid var(--bg);
    }
    .period { color: var(--accent); }
    .where { font-weight: 600; }
    .tech { color: var(--text-muted); }
  `,
})
export class LearningComponent {
  readonly lang = input.required<Lang>();
  protected readonly steps = LEARNING;
  protected readonly intro = LEARNING_INTRO;
  protected readonly title: L = { fr: 'Montée en compétence', en: 'Learning curve' };
}

/* ---------- Experiences ---------- */

@Component({
  selector: 'app-experiences',
  imports: [LocPipe, RevealDirective],
  template: `
    <section id="experiences" class="section alt" aria-labelledby="exp-title">
      <div class="container">
        <p class="eyebrow">{{ ui.nav.experiences | loc: lang() }}</p>
        <h2 id="exp-title">{{ ui.nav.experiences | loc: lang() }}</h2>
        <div class="list">
          @for (e of experiences; track e.id) {
            <article appReveal>
              <header>
                <h3>{{ e.company }}</h3>
                <p class="meta">
                  <span>{{ e.role | loc: lang() }}</span>
                  <span class="mono">{{ e.period | loc: lang() }}</span>
                </p>
              </header>
              <p>{{ e.context | loc: lang() }}</p>
              @if (e.team) {
                <p class="muted small"><strong>{{ ui.exp.team | loc: lang() }}.</strong> {{ e.team | loc: lang() }}</p>
              }
              <h4>{{ ui.exp.role | loc: lang() }}</h4>
              <ul>
                @for (b of bullets(e); track $index) {
                  <li>{{ b | loc: lang() }}</li>
                }
              </ul>
              <h4>{{ ui.exp.results | loc: lang() }}</h4>
              <ul>
                @for (r of e.results; track $index) {
                  <li>{{ r | loc: lang() }}</li>
                }
              </ul>
              @if (e.learned) {
                <p class="learned">
                  <span class="small muted">{{ ui.exp.learned | loc: lang() }} :</span>
                  @for (t of e.learned; track t) {
                    <span class="tag new">{{ t }}</span>
                  }
                </p>
              }
              <p class="stack small muted"><strong>{{ ui.exp.stack | loc: lang() }}.</strong> {{ e.stack }}</p>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .list { display: grid; gap: 20px; }
    article { padding: clamp(18px, 3vw, 28px); border: 1px solid var(--border); border-radius: var(--radius); background: var(--surface); }
    h3 { margin-bottom: 0.2em; font-size: 1.3rem; }
    h4 { font-size: 0.8rem; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.06em; color: var(--accent); margin: 1.2em 0 0.5em; }
    .meta { display: flex; flex-wrap: wrap; gap: 4px 16px; justify-content: space-between; margin: 0 0 1em; color: var(--text-muted); }
    .small { font-size: 0.92rem; }
    .learned { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; margin: 1em 0 0; }
    .stack { margin: 1em 0 0; }
  `,
})
export class ExperiencesComponent {
  readonly lang = input.required<Lang>();
  readonly angle = input<Angle>('java');
  protected readonly ui = UI;
  protected readonly experiences = EXPERIENCES;

  /** Bullets written for the current angle come first; the original order is kept otherwise. */
  protected bullets(e: Experience): L[] {
    const a = this.angle();
    const rank = (b: Experience['bullets'][number]) => (b.first?.includes(a) ? 0 : 1);
    return e.bullets
      .map((b, i) => ({ b, i }))
      .sort((x, y) => rank(x.b) - rank(y.b) || x.i - y.i)
      .map(({ b }) => b.text);
  }
}

/* ---------- Projects list ---------- */

@Component({
  selector: 'app-projects',
  imports: [LocPipe, RouterLink, RevealDirective, IconComponent],
  template: `
    <section id="projects" class="section" aria-labelledby="projects-title">
      <div class="container">
        <p class="eyebrow">{{ ui.nav.projects | loc: lang() }}</p>
        <h2 id="projects-title">{{ ui.nav.projects | loc: lang() }}</h2>
        <div class="cards">
          @for (p of projects; track p.slug) {
            <a class="card" appReveal [routerLink]="['/', lang(), 'projects', p.slug]">
              <span class="kind mono">{{ (p.kind === 'personal' ? ui.project.personal : ui.project.caseStudy) | loc: lang() }}</span>
              <h3>{{ p.title | loc: lang() }}</h3>
              <p class="muted">{{ p.summary | loc: lang() }}</p>
              <span class="tags">
                @for (t of p.stack.slice(0, 5); track t) {
                  <span class="tag">{{ t }}</span>
                }
              </span>
              <span class="more">{{ ui.seeMore | loc: lang() }} <app-icon name="arrow" /></span>
            </a>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; }
    .card {
      display: flex; flex-direction: column; gap: 10px; padding: 22px; text-decoration: none; color: inherit;
      border: 1px solid var(--border); border-radius: var(--radius); background: var(--surface);
      transition: border-color 0.15s ease, transform 0.15s ease;
      &:hover { border-color: var(--accent); transform: translateY(-2px); }
    }
    h3 { margin: 0; }
    p { margin: 0; flex: 1; }
    .kind { color: var(--accent); text-transform: uppercase; letter-spacing: 0.05em; }
    .tags { display: flex; flex-wrap: wrap; gap: 6px; }
    .more { display: inline-flex; align-items: center; gap: 6px; color: var(--accent); font-weight: 600; }
    @media (prefers-reduced-motion: reduce) { .card { transition: none; &:hover { transform: none; } } }
  `,
})
export class ProjectsComponent {
  readonly lang = input.required<Lang>();
  protected readonly ui = UI;
  protected readonly projects = PROJECTS;
}

/* ---------- Contact ---------- */

@Component({
  selector: 'app-contact',
  imports: [LocPipe, IconComponent, RevealDirective],
  template: `
    <section id="contact" class="section alt" aria-labelledby="contact-title">
      <div class="container" appReveal>
        <p class="eyebrow">{{ ui.nav.contact | loc: lang() }}</p>
        <h2 id="contact-title">{{ ui.contactMe | loc: lang() }}</h2>
        <p class="status"><span class="dot" aria-hidden="true"></span>{{ ui.available | loc: lang() }}</p>
        <ul class="links">
          <li>
            <a class="btn primary" [href]="'mailto:' + profile.email"><app-icon name="mail" />{{ profile.email }}</a>
          </li>
          <li>
            <a class="btn" [href]="profile.linkedin" rel="noopener" target="_blank"><app-icon name="linkedin" />LinkedIn</a>
          </li>
          <li>
            <a class="btn" [href]="profile.github" rel="noopener" target="_blank"><app-icon name="github" />GitHub</a>
          </li>
        </ul>
        <h3>{{ ui.downloadCv | loc: lang() }}</h3>
        <ul class="links">
          @for (cv of cvs(); track cv.file) {
            <li>
              <a class="btn" [href]="cv.file" download><app-icon name="download" />{{ cv.label | loc: lang() }}</a>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: `
    .links { display: flex; flex-wrap: wrap; gap: 10px; list-style: none; padding: 0; margin: 0 0 28px; }
    li { margin: 0; }
    .status { display: inline-flex; align-items: center; gap: 8px; font-weight: 600; }
    .dot { width: 10px; height: 10px; border-radius: 50%; background: #1a9b5b; }
    h3 { font-size: 1rem; }
  `,
})
export class ContactComponent {
  readonly lang = input.required<Lang>();
  readonly angle = input<Angle>('java');
  protected readonly ui = UI;
  protected readonly profile = PROFILE;
  protected readonly cvs = computed(() => CVS[this.angle()]);
}
