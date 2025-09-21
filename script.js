/* carrusel */ 
  const track = document.querySelector(".carrusel-track");
  const images = document.querySelectorAll(".carrusel img");
  const prevBtn = document.querySelector(".carrusel-btn.prev");
  const nextBtn = document.querySelector(".carrusel-btn.next");

  let index = 0;
  let autoSlide;

  function showSlide(i) {
    index = (i + images.length) % images.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  function startAutoSlide() {
    autoSlide = setInterval(() => showSlide(index + 1), 3000); // cada 3 segundos
  }

  function stopAutoSlide() {
    clearInterval(autoSlide);
  }

  prevBtn.addEventListener("click", () => {
    showSlide(index - 1);
    stopAutoSlide();
    startAutoSlide();
  });

  nextBtn.addEventListener("click", () => {
    showSlide(index + 1);
    stopAutoSlide();
    startAutoSlide();
  });

  // Iniciar automático
  startAutoSlide();

/* fin carrusel */