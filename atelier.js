/* Event-driven motion: no animation loop while the page is idle. */
(() => {
  'use strict';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const hero = document.querySelector('.hero');
  const media = document.querySelector('.hero-media');
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  let queued = false, visible = true;
  function paint() {
    queued = false;
    if (!media) return;
    if (reduced.matches || innerWidth < 901) { media.style.transform = ''; return; }
    if (!visible) return;
    const y = Math.min(hero.offsetHeight, Math.max(0, scrollY));
    media.style.transform = `translate3d(0,${(y * .16).toFixed(1)}px,0)`;
  }
  function requestPaint() { if (!queued) { queued = true; requestAnimationFrame(paint); } }
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; if (visible) requestPaint(); });
    if (hero) observer.observe(hero);
  }
  addEventListener('scroll', requestPaint, { passive: true });
  addEventListener('resize', requestPaint, { passive: true });
  reduced.addEventListener('change', requestPaint);
  // A soft response to the pointer, only on devices with a precise pointer.
  document.querySelectorAll('.project-cover').forEach(cover => {
    let moveQueued = false, x = 0, y = 0;
    const reset = () => { cover.style.transform = ''; };
    cover.addEventListener('pointermove', event => {
      if (!fine.matches || reduced.matches) return;
      const r = cover.getBoundingClientRect();
      x = (event.clientX - r.left) / r.width - .5;
      y = (event.clientY - r.top) / r.height - .5;
      if (!moveQueued) { moveQueued = true; requestAnimationFrame(() => { moveQueued = false; if (cover.matches(':hover') && !reduced.matches) cover.style.transform = `perspective(1400px) rotateX(${(-y * 2).toFixed(2)}deg) rotateY(${(x * 2).toFixed(2)}deg)`; }); }
    });
    cover.addEventListener('pointerleave', reset);
    cover.addEventListener('blur', reset);
    reduced.addEventListener('change', reset);
  });
  requestPaint();
})();
