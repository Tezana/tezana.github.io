/* ================================================================
   main.js — Tezana White IT Portfolio
   ================================================================ */

/* ── HAMBURGER / DROPDOWN ──────────────────────────────────────── */
const hamburger   = document.getElementById('hamburger');
const navDropdown = document.getElementById('nav-dropdown');

const openDD  = () => { hamburger.classList.add('is-open');    navDropdown.classList.add('is-open'); };
const closeDD = () => { hamburger.classList.remove('is-open'); navDropdown.classList.remove('is-open'); };
const toggleDD = () => hamburger.classList.contains('is-open') ? closeDD() : openDD();

hamburger?.addEventListener('click', e => { e.stopPropagation(); toggleDD(); });

// Close on outside click
document.addEventListener('click', e => {
  if (!hamburger?.contains(e.target) && !navDropdown?.contains(e.target)) closeDD();
});

// Close on Escape
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDD(); });

// Close on any dropdown link click
navDropdown?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDD));

/* ── NAVBAR SCROLL STATE ───────────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ── ACTIVE LINK HIGHLIGHT ─────────────────────────────────────── */
const allSections   = document.querySelectorAll('section[id]');
const desktopLinks  = document.querySelectorAll('.nav-links-desktop a[href^="#"]');
const dropdownLinks = document.querySelectorAll('.dd-list a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  allSections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 80) current = s.id;
  });
  [...desktopLinks, ...dropdownLinks].forEach(a => {
    const active = a.getAttribute('href') === `#${current}`;
    a.style.color = active ? 'var(--c-white)' : '';
  });
}, { passive: true });

/* ── SCROLL REVEAL ─────────────────────────────────────────────── */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const siblings = [...entry.target.parentElement.children]
      .filter(el => el.classList.contains('reveal'));
    const idx = siblings.indexOf(entry.target);
    entry.target.style.transitionDelay = `${idx * 68}ms`;
    entry.target.classList.add('visible');
    revealObs.unobserve(entry.target);
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ── COUNTER ANIMATION ─────────────────────────────────────────── */
const cntObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el     = entry.target;
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    let cur = 0;
    const step = Math.max(1, Math.ceil(target / 50));
    const tick = () => {
      cur = Math.min(cur + step, target);
      el.textContent = cur + suffix;
      if (cur < target) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    cntObs.unobserve(el);
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => cntObs.observe(el));

/* ── TYPEWRITER ────────────────────────────────────────────────── */
const twEl = document.getElementById('typewriter');
if (twEl) {
  const phrases = [
    'IT Support | Cybersecurity | Cloud | Data Center Labs',
    'Building Skills Through Hands-On Labs & Documentation',
    'Troubleshoot · Configure · Document · Deploy'
  ];
  let pi = 0, ci = 0, deleting = false;

  const step = () => {
    const phrase = phrases[pi];
    twEl.textContent = deleting ? phrase.slice(0, --ci) : phrase.slice(0, ++ci);
    let delay = deleting ? 30 : 56;
    if (!deleting && ci === phrase.length) { delay = 2700; deleting = true; }
    else if (deleting && ci === 0)         { deleting = false; pi = (pi + 1) % phrases.length; delay = 360; }
    setTimeout(step, delay);
  };
  setTimeout(step, 950);
}

/* ── SMOOTH SCROLL (offset for fixed nav) ──────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - 70,
      behavior: 'smooth'
    });
  });
});
