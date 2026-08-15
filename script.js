// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Reveal-on-scroll for cards (progressive enhancement — content is
// visible by default; JS only adds the fade/slide-in class).
const revealTargets = document.querySelectorAll(
  '.skill-card, .project-card, .contact-card, .timeline-item'
);

if ('IntersectionObserver' in window && revealTargets.length) {
  revealTargets.forEach((el) => el.classList.add('reveal'));

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

  // Safety net: if anything is somehow still hidden after 2s, reveal it.
  setTimeout(() => {
    revealTargets.forEach((el) => el.classList.add('in-view'));
  }, 2000);
}
