(() => {
  'use strict';
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('primary-navigation');
  const nav = toggle?.closest('nav');
  if (!toggle || !menu || !nav) return;

  document.documentElement.classList.add('js');
  nav.classList.add('menu-enhanced');
  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? toggle.dataset.closeLabel : toggle.dataset.openLabel);
    menu.classList.toggle('is-open', open);
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      setOpen(false);
      const href = link.getAttribute('href');
      if (href?.startsWith('#')) {
        const target = document.getElementById(href.slice(1));
        if (target) {
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
        }
      }
    });
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target)) setOpen(false);
  });
  nav.addEventListener('focusout', (event) => {
    if (event.relatedTarget && !nav.contains(event.relatedTarget)) setOpen(false);
  });
  const desktop = window.matchMedia('(min-width: 1101px)');
  desktop.addEventListener('change', (event) => {
    if (event.matches) setOpen(false);
  });

  // Reflect the reading position without hiding or animating page content.
  if ('IntersectionObserver' in window) {
    const links = Array.from(menu.querySelectorAll('a[href^="#"]'));
    const markSection = (id) => links.forEach((link) => {
      if (link.getAttribute('href') === '#' + id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) markSection(entry.target.id);
      });
    }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });
    document.querySelectorAll('main > section[id], .hero').forEach((section) => observer.observe(section));
  }

  // Keep the selected section when switching language.
  document.querySelectorAll('.language-switcher a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.location.hash) {
        const destination = new URL(link.href);
        destination.hash = window.location.hash;
        link.href = destination.href;
      }
    });
  });
})();
