import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { LANGS, Lang } from './i18n';
import { PROFILE } from '../data/profile';

export interface PageMeta {
  title: string;
  description: string;
  lang: Lang;
  /** Path without the language prefix, e.g. `java` or `projects/rag-assistant`. */
  path: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly doc = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  set(page: PageMeta): void {
    const url = this.url(page.lang, page.path);
    this.title.setTitle(page.title);
    this.doc.documentElement.lang = page.lang;

    this.meta.updateTag({ name: 'description', content: page.description });
    this.meta.updateTag({ property: 'og:title', content: page.title });
    this.meta.updateTag({ property: 'og:description', content: page.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: `${PROFILE.siteUrl}/${PROFILE.photo}` });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });

    this.link('canonical', url);
    for (const lang of LANGS) {
      this.link('alternate', this.url(lang, page.path), lang);
    }
  }

  private url(lang: Lang, path: string): string {
    return `${PROFILE.siteUrl}/${lang}${path ? '/' + path : ''}`;
  }

  private link(rel: 'canonical' | 'alternate', href: string, hreflang?: string): void {
    const selector = hreflang
      ? `link[rel="${rel}"][hreflang="${hreflang}"]`
      : `link[rel="${rel}"]:not([hreflang])`;
    let el = this.doc.head.querySelector<HTMLLinkElement>(selector);
    if (!el) {
      el = this.doc.createElement('link');
      el.rel = rel;
      if (hreflang) el.setAttribute('hreflang', hreflang);
      this.doc.head.appendChild(el);
    }
    el.href = href;
  }
}
