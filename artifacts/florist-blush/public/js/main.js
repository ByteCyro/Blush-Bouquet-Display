/* ── Navbar scroll effect ─────────────────── */
const navbar = document.querySelector('.navbar');
function updateNavbar() {
  if (window.scrollY > 20) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();

/* ── Active nav link ─────────────────────── */
const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
document.querySelectorAll('.navbar-links a, .mobile-menu a').forEach(link => {
  const href = link.getAttribute('href')?.replace(/\/$/, '') || '/';
  if (href === currentPath || (href !== '/' && currentPath.startsWith(href))) {
    link.classList.add('active');
  }
});

/* ── Mobile menu ─────────────────────────── */
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu?.classList.toggle('open');
});
mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger?.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

/* ── Scroll-triggered fade-up animations ──── */
const fadeEls = document.querySelectorAll('.fade-up');
if (fadeEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
  fadeEls.forEach(el => observer.observe(el));
}

/* ── Shop filter tabs ────────────────────── */
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card[data-category]');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;
    productCards.forEach(card => {
      if (cat === 'all' || card.dataset.category === cat) {
        card.classList.remove('product-hidden');
      } else {
        card.classList.add('product-hidden');
      }
    });
  });
});

/* ── Contact form ────────────────────────── */
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  if (contactForm && formSuccess) {
    contactForm.style.display = 'none';
    formSuccess.classList.add('visible');
  }
});

/* ── Copyright year ──────────────────────── */
document.querySelectorAll('.copyright-year').forEach(el => {
  el.textContent = new Date().getFullYear();
});
