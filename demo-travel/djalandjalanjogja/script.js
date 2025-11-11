// ===========================
// DJALAN DJALAN JOGJA - JS
// ===========================

// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// BACK TO TOP BUTTON
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// SMOOTH NAVIGATION SCROLL
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
// ANIMASI FADE-IN KARTU SAAT SCROLL
const cards = document.querySelectorAll(".paket-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // kasih delay sedikit biar muncul satu-satu
      setTimeout(() => {
        entry.target.classList.add("show");
      }, i * 150);
      observer.unobserve(entry.target); // biar animasi 1x aja
    }
  });
}, {
  threshold: 0.15 // muncul 15% udah cukup
});

cards.forEach(card => observer.observe(card));

// ANIMASI FADE-IN UNTUK DETAIL CARD SAAT SCROLL
const detailCards = document.querySelectorAll(".detail-card");

const detailObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("show");
      }, i * 200); // delay lebih lama biar smooth & gantian muncul
      detailObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

detailCards.forEach(card => detailObserver.observe(card));

// === SWITCH TAB VIDEO / FOTO ===
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.querySelector(`#tab-${btn.dataset.tab}`).classList.add('active');
  });
});

// === TOGGLE VIDEO ===
const toggleVideoBtn = document.getElementById('toggleVideo');
const videoHidden = document.querySelectorAll('#tab-video .hidden');
let videoExpanded = false;

toggleVideoBtn.addEventListener('click', () => {
  videoHidden.forEach(el => el.classList.toggle('show'));
  videoExpanded = !videoExpanded;
  toggleVideoBtn.textContent = videoExpanded ? 'Tutup Video' : 'Lihat Semua Video';
});

// === TOGGLE FOTO ===
const toggleFotoBtn = document.getElementById('toggleFoto');
const fotoHidden = document.querySelectorAll('#tab-foto .hidden');
let fotoExpanded = false;

toggleFotoBtn.addEventListener('click', () => {
  fotoHidden.forEach(el => el.classList.toggle('show'));
  fotoExpanded = !fotoExpanded;
  toggleFotoBtn.textContent = fotoExpanded ? 'Tutup Foto' : 'Lihat Semua Foto';
});
