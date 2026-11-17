/* Minimal, accessible interactions. No dependencies. */
(() => {
  'use strict';
  const nav = document.getElementById('primary-nav');
  const toggle = document.querySelector('.nav-toggle');
  if (nav && toggle) {
    const closeMenu = () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation menu');
    };
    toggle.addEventListener('click', () => {
      const opened = toggle.getAttribute('aria-expanded') !== 'true';
      nav.classList.toggle('is-open', opened);
      toggle.setAttribute('aria-expanded', String(opened));
      toggle.setAttribute('aria-label', opened ? 'Close navigation menu' : 'Open navigation menu');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    window.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
    window.matchMedia('(min-width: 901px)').addEventListener('change', e => { if (e.matches) closeMenu(); });
  }
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
