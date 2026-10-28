import { Routes } from '@angular/router';
import { LANGS, Lang } from './core/i18n';
import { AnglePage } from './pages/angle.page';
import { HomePage } from './pages/home.page';
import { NotFoundPage } from './pages/not-found.page';
import { ProjectPage } from './pages/project.page';

/** `/fr/...` and `/en/...`: the language and angle travel as route data, which keeps routes prerenderable. */
function localized(lang: Lang): Routes {
  return [
    {
      path: lang,
      children: [
        { path: '', component: HomePage, data: { lang } },
        { path: 'java', component: AnglePage, data: { lang, angle: 'java' } },
        { path: 'ba', component: AnglePage, data: { lang, angle: 'ba' } },
        { path: 'ia', component: AnglePage, data: { lang, angle: 'ia' } },
        { path: 'projects/:slug', component: ProjectPage, data: { lang } },
      ],
    },
  ];
}

export const routes: Routes = [
  // The root serves the French home page directly (no redirect, friendlier to static hosting).
  { path: '', component: HomePage, data: { lang: 'fr' }, pathMatch: 'full' },
  ...LANGS.flatMap(localized),
  { path: '**', component: NotFoundPage },
];
