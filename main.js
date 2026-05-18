/* ════════════════════════════════════════════════════
   DINESH KUMAR — PORTFOLIO  |  main.js
   ════════════════════════════════════════════════════ */

/* ── CURSOR ── */
(function () {
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursorRing');
  if (!cursor || !ring) return;
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });
  (function anim() {
    rx += (mx - rx) * 0.13;
    ry += (my - ry) * 0.13;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(anim);
  })();
  document.querySelectorAll('a,button,.project-card,.service-card,.skill-tag').forEach((el) => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
})();

/* ── NAV SCROLL ── */
(function () {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
})();

/* ── SCROLL REVEAL ── */
(function () {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach((el) => obs.observe(el));
})();

/* ── PROJECT CARDS REVEAL ── */
(function () {
  const cards = document.querySelectorAll('.project-card');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  cards.forEach((card, i) => {
    card.style.transitionDelay = (i * 0.08) + 's';
    obs.observe(card);
  });
})();

/* ── COUNTER ANIMATION ── */
(function () {
  const c1 = document.getElementById('counter1');
  const c2 = document.getElementById('counter2');
  if (!c1 || !c2) return;
  function count(el, target, suffix, duration) {
    let start = null;
    (function step(ts) {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(step);
    })(performance.now());
  }
  let done = false;
  const obs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !done) {
      done = true;
      count(c1, 20, '+', 1800);
      count(c2, 15, '+', 1800);
    }
  }, { threshold: 0.5 });
  const hero = document.getElementById('hero');
  if (hero) obs.observe(hero);
})();

/* ── HERO PHOTO PARALLAX ── */
(function () {
  const photo = document.querySelector('.hero-photo');
  if (!photo) return;
  window.addEventListener('scroll', () => {
    photo.style.transform = `translateY(${window.scrollY * 0.12}px)`;
  }, { passive: true });
})();

/* ── SMOOTH ANCHORS ── */
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});