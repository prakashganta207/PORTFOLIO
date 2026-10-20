// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  const setOpen = (open) => {
    navLinks.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  };

  navToggle.addEventListener('click', () => {
    setOpen(!navLinks.classList.contains('open'));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Placeholder links (e.g. resume before a PDF is added) shouldn't jump to top.
document.querySelectorAll('a[data-placeholder]').forEach((link) => {
  link.addEventListener('click', (e) => {
    if (link.getAttribute('href') === '#') e.preventDefault();
  });
});

// Reveal-on-scroll (progressive enhancement — content is visible by
// default; JS only adds the fade/slide-in class).
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealTargets = document.querySelectorAll(
  '.section-tag, .section-title, .about-grid > *, .skill-card, .project-card, ' +
  '.timeline-item, .callout-lg, .contact-card'
);

if (!reduceMotion && 'IntersectionObserver' in window && revealTargets.length) {
  // Stagger siblings inside grids so cards cascade in rather than pop together.
  revealTargets.forEach((el) => {
    const siblings = Array.from(el.parentElement.children).filter((c) =>
      c.matches('.skill-card, .project-card, .contact-card, .timeline-item, .about-grid > *')
    );
    const i = siblings.indexOf(el);
    if (i > 0) el.style.setProperty('--reveal-delay', `${Math.min(i, 5) * 70}ms`);
    el.classList.add('reveal');
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  revealTargets.forEach((el) => observer.observe(el));
}
