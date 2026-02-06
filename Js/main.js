// ============================
// NAVBAR SCROLL EFFECT
// ============================

window.addEventListener("scroll", () => {

  const nav = document.querySelector(".custom-navbar");
  if (!nav) return;

  nav.classList.toggle("scrolled", window.scrollY > 20);

});


// ============================
// ACTIVE LINK ON SCROLL
// ============================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${entry.target.id}`) {
          link.classList.add("active");
        }

      });

    }

  });

}, {
  rootMargin: "-120px 0px -50% 0px"
});

sections.forEach(section => observer.observe(section));

// ============================
// TRENDING DRONE SLIDER
// ============================
const testimonialSlider = new Swiper(".testimonial-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  },
});
