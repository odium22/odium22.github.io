// ===== КАСТОМНЫЙ КУРСОР =====
const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');
let mx = window.innerWidth / 2, my = window.innerHeight / 2;
let rx = mx, ry = my;

window.addEventListener('mousemove', (e) => {
  mx = e.clientX;
  my = e.clientY;
  dot.style.left = mx + 'px';
  dot.style.top  = my + 'px';
});

// кольцо с лёгким запозданием (инерция)
function loop() {
  rx += (mx - rx) * 0.18;
  ry += (my - ry) * 0.18;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(loop);
}
loop();

// hover на интерактивных элементах — кольцо растёт и розовеет
const hoverSel = 'a, button, .cell, .work-item, .proj, .mini-card, .nav-cta, .btn';
document.querySelectorAll(hoverSel).forEach((el) => {
  el.addEventListener('mouseenter', () => { dot.classList.add('hover'); ring.classList.add('hover'); });
  el.addEventListener('mouseleave', () => { dot.classList.remove('hover'); ring.classList.remove('hover'); });
});

// ===== ПРОГРЕСС-БАР СКРОЛЛА =====
const progress = document.querySelector('.scroll-progress');
function updateProgress() {
  const h = document.documentElement.scrollHeight - window.innerHeight;
  const p = (window.scrollY / h) * 100;
  progress.style.width = p + '%';
}
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

// ===== REVEAL ПРИ СКРОЛЛЕ =====
const revealTargets = document.querySelectorAll(
  '.section-label, .section-title, .section-lead, .about-text p, .mini-card, .cell, .work-item, .proj, .contact-row, .hero-badge, .hero h1, .hero-sub, .hero-actions, .hero-stats'
);
revealTargets.forEach((el) => el.classList.add('reveal'));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealTargets.forEach((el) => io.observe(el));

// ===== СЧЁТЧИКИ В HERO =====
const counters = document.querySelectorAll('[data-count]');
const counterIO = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      let cur = 0;
      const step = Math.max(1, Math.ceil(target / 30));
      const tick = () => {
        cur += step;
        if (cur >= target) { el.textContent = target; return; }
        el.textContent = cur;
        requestAnimationFrame(tick);
      };
      tick();
      counterIO.unobserve(el);
    });
  },
  { threshold: 0.5 }
);
counters.forEach((el) => counterIO.observe(el));

// ===== РАДИУС-СВЕЧЕНИЕ В КАРТОЧКАХ СТЕКА =====
document.querySelectorAll('.cell').forEach((cell) => {
  cell.addEventListener('mousemove', (e) => {
    const r = cell.getBoundingClientRect();
    cell.style.setProperty('--mx', ((e.clientX - r.left) / r.width) * 100 + '%');
    cell.style.setProperty('--my', ((e.clientY - r.top) / r.height) * 100 + '%');
  });
});

// ===== ГОД В ФУТЕРЕ =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== ЛЁГКИЙ ПАРАЛЛАКС ФОНА ПОД КУРСОР =====
const bg = document.querySelector('.bg-gradient');
window.addEventListener('mousemove', (e) => {
  const dx = (e.clientX / window.innerWidth - 0.5) * 20;
  const dy = (e.clientY / window.innerHeight - 0.5) * 20;
  bg.style.transform = `translate(${dx}px, ${dy}px)`;
});
