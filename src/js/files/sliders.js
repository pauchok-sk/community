export default function sliders() {
  const sliderPartners = document.querySelector(".s-partners__slider");

  if (sliderPartners) {
    const swiper = new Swiper(sliderPartners, {
      speed: 700,
      slidesPerView: "auto",
      spaceBetween: 30,
      autoplay: {
        delay: 3500,
      },
      breakpoints: {
        1366: {
          spaceBetween: 80,
        },
        1200: {
          spaceBetween: 60,
        },
        992: {
          spaceBetween: 40,
        },
      },
    });
  }

  const teamSliders = document.querySelectorAll(".s-team__slider");

  if (teamSliders.length) {
    teamSliders.forEach((s, i) => {
      const swiper = new Swiper(s, {
        speed: 700,
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
          delay: 3000,
        },
        navigation: {
          prevEl: s
            .closest(".container")
            .querySelectorAll("[data-add-tab]")
            [i].querySelector(".slider-btn._prev"),
          nextEl: s
            .closest(".container")
            .querySelectorAll("[data-add-tab]")
            [i].querySelector(".slider-btn._next"),
        },
        breakpoints: {
          1200: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        },
      });
    });
  }

  const newsSliders = document.querySelectorAll(".s-news__slider");

  if (newsSliders.length) {
    newsSliders.forEach((s, i) => {
      const swiper = new Swiper(s, {
        speed: 700,
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
          delay: 3000,
        },
        navigation: {
          prevEl: s
            .closest(".container")
            .querySelectorAll("[data-add-tab]")
            [i].querySelector(".slider-btn._prev"),
          nextEl: s
            .closest(".container")
            .querySelectorAll("[data-add-tab]")
            [i].querySelector(".slider-btn._next"),
        },
        breakpoints: {
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        },
      });
    });
  }

  const gallerySliders = document.querySelectorAll(".gallery-slider");

  if (gallerySliders.length) {
    gallerySliders.forEach((s) => {
      const swiper = new Swiper(s, {
        speed: 700,
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
          delay: 3000,
        },
        scrollbar: {
          el: s.closest("section").querySelector(".slider-scrollbar"),
          draggable: true,
        },
        navigation: {
          prevEl: s.closest("section").querySelector(".slider-btn._prev"),
          nextEl: s.closest("section").querySelector(".slider-btn._next"),
        },
        breakpoints: {
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        },
      });
    });
  }

  const federalProjectsSlider = document.querySelector(
    ".s-federal-projects__slider"
  );

  if (federalProjectsSlider) {
    const swiper = new Swiper(federalProjectsSlider, {
      speed: 700,
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        prevEl: ".s-federal-projects .slider-btn._prev",
        nextEl: ".s-federal-projects .slider-btn._next",
      },
      breakpoints: {
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });
  }

  const projectsSliders = document.querySelectorAll(".s-projects__slider");

  if (projectsSliders.length) {
    projectsSliders.forEach((s, i) => {
      const swiper = new Swiper(s, {
        speed: 700,
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
          delay: 3000,
        },
        navigation: {
          prevEl: s
            .closest(".container")
            .querySelectorAll("[data-add-tab]")
            [i].querySelector(".slider-btn._prev"),
          nextEl: s
            .closest(".container")
            .querySelectorAll("[data-add-tab]")
            [i].querySelector(".slider-btn._next"),
        },
        breakpoints: {
          992: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        },
      });
    });
  }

  const booksSlider = document.querySelector(".s-books__slider");

  if (booksSlider) {
    const swiper = new Swiper(booksSlider, {
      speed: 700,
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        prevEl: ".s-books .slider-btn._prev",
        nextEl: ".s-books .slider-btn._next",
      },
      scrollbar: {
        el: ".s-books__scrollbar",
        draggable: true
      },
      breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });
  }
}
