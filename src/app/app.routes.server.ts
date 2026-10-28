import { RenderMode, ServerRoute } from '@angular/ssr';
import { projectSlugs } from './pages/project.page';

export const serverRoutes: ServerRoute[] = [
  ...['fr', 'en'].map(
    (lang): ServerRoute => ({
      path: `${lang}/projects/:slug`,
      renderMode: RenderMode.Prerender,
      getPrerenderParams: async () => projectSlugs.map((slug) => ({ slug })),
    }),
  ),
  { path: '**', renderMode: RenderMode.Prerender },
];
