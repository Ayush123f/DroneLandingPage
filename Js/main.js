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

if (sections.length && navLinks.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      });
    },
    {
      rootMargin: "-120px 0px -50% 0px",
    }
  );

  sections.forEach((section) => observer.observe(section));
}


// ============================
// TESTIMONIAL SLIDER
// ============================
if (document.querySelector(".testimonial-slider")) {
  new Swiper(".testimonial-slider", {
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
}


// ============================
// TRENDING DRONE SLIDER
// ============================
if (document.querySelector(".trending-slider")) {
  new Swiper(".trending-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".trending-next",
      prevEl: ".trending-prev",
    },

    pagination: {
      el: ".trending-pagination",
      clickable: true,
    },

    breakpoints: {
      0: { slidesPerView: 1 },
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
    },
  });
}


// ============================
// PRODUCT SHOWCASE (DRONE HERO)
// ============================
const thumbs = document.querySelectorAll(".drone-thumb");
const mainImage = document.getElementById("mainDroneImage");
const title = document.getElementById("droneTitle");
const specs = document.getElementById("droneSpecs");
const hero = document.getElementById("droneHero");

if (thumbs.length && mainImage && title && specs && hero) {
  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      // Active state
      thumbs.forEach((t) => t.classList.remove("active"));
      thumb.classList.add("active");

      // Fade out image
      mainImage.style.opacity = "0";

      setTimeout(() => {
        mainImage.src = thumb.dataset.large;
        title.textContent = thumb.dataset.title;
        specs.textContent = thumb.dataset.specs;
        mainImage.style.opacity = "1";
      }, 250);

      // Smooth scroll to hero
      hero.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
}
