const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const contador = document.querySelector('.contador');
let index = 0;
let autoPlayTimer;

function mostrarSlide(n) {
  slides.forEach(s => {
    s.classList.remove('active');
    const video = s.querySelector('video');
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  });

  const slideActual = slides[n];
  slideActual.classList.add('active');
  if (contador) contador.textContent = `${n + 1} / ${slides.length}`;

  const video = slideActual.querySelector('video');
  clearTimeout(autoPlayTimer);

  if (video) {
    video.play();
    video.onended = siguiente;
  } else {
    autoPlayTimer = setTimeout(siguiente, 5000);
  }
}

function siguiente() {
  index = (index + 1) % slides.length;
  mostrarSlide(index);
}

function anterior() {
  index = (index - 1 + slides.length) % slides.length;
  mostrarSlide(index);
}

// 👇👇👇 FIX DEL ERROR QUE ROMPÍA EL MENÚ 👇👇👇
if (next) next.addEventListener('click', siguiente);
if (prev) prev.addEventListener('click', anterior);
if (contador) contador.textContent = `1 / ${slides.length}`;

// --- MENÚ HAMBURGUESA ---
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});
