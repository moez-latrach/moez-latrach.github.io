import { Injectable, Pipe, PipeTransform, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { Angle, L, Lang, isAngle, isLang } from './i18n';

function parse(url: string): { lang: Lang; angle: Angle | null } {
  const [first, second] = url.split(/[?#]/)[0].split('/').filter(Boolean);
  return {
    lang: isLang(first) ? first : 'fr',
    angle: isAngle(second) ? second : null,
  };
}

/** Current language and angle, derived from the URL (`/fr/java`, `/en/ba`, ...). */
@Injectable({ providedIn: 'root' })
export class LangService {
  private readonly router = inject(Router);

  private readonly state = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((e) => parse(e.urlAfterRedirects)),
      startWith(parse(this.router.url)),
    ),
    { initialValue: parse(this.router.url) },
  );

  readonly lang = () => this.state().lang;
  readonly angle = () => this.state().angle;
}

@Pipe({ name: 'loc' })
export class LocPipe implements PipeTransform {
  transform(value: L | undefined, lang: Lang): string {
    return value ? value[lang] : '';
  }
}
