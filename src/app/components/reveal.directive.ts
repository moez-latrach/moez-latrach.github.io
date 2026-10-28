import { Directive, ElementRef, afterNextRender, inject } from '@angular/core';

/**
 * Fade-in on scroll. The `reveal` class is only added in the browser,
 * so prerendered HTML stays fully visible without JavaScript.
 */
@Directive({ selector: '[appReveal]' })
export class RevealDirective {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {
    afterNextRender(() => {
      const node = this.el.nativeElement;
      if (typeof IntersectionObserver === 'undefined') return;
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight) return; // already on screen: no animation, no flash
      node.classList.add('reveal');
      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              node.classList.add('in');
              io.disconnect();
            }
          }
        },
        { threshold: 0.08 },
      );
      io.observe(node);
    });
  }
}
