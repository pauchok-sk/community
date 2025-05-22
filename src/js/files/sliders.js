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

  const teamContainer = document.querySelector(".s-team__container");

  if (teamContainer) {
    const sliders = teamContainer.querySelectorAll("[data-slider]");
    let currentSwiper = initSwiper(sliders[0]); // инициализация первого слайдера
    const buttonsSliders = teamContainer.querySelectorAll("[data-slider-btn]");

    buttonsSliders.forEach((btn) => {
      btn.addEventListener("click", () => {
        const sliderId = btn.dataset.sliderBtn;
        const currentSlider = teamContainer.querySelector(
          `[data-slider="${sliderId}"]`
        );

        currentSwiper.destroy(); // уничтожаем текущий swiper
        currentSwiper = initSwiper(currentSlider);
      });
    });

    function initSwiper(slider) {
      const swiper = new Swiper(slider, {
        speed: 700,
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
          delay: 3000,
        },
        navigation: {
          prevEl: teamContainer.querySelector(".slider-btn._prev"),
          nextEl: teamContainer.querySelector(".slider-btn._next"),
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

      return swiper;
    }
  }

  const newsContainer = document.querySelector(".s-news__container");

  if (newsContainer) {
    const sliders = newsContainer.querySelectorAll("[data-slider]");
    let currentSwiper = initSwiper(sliders[0]); // инициализация первого слайдера
    const buttonsSliders = newsContainer.querySelectorAll("[data-slider-btn]");

    buttonsSliders.forEach((btn) => {
      btn.addEventListener("click", () => {
        const sliderId = btn.dataset.sliderBtn;
        const currentSlider = tenewsContaineramContainer.querySelector(
          `[data-slider="${sliderId}"]`
        );

        currentSwiper.destroy(); // уничтожаем текущий swiper
        currentSwiper = initSwiper(currentSlider);
      });
    });

    function initSwiper(slider) {
      const swiper = new Swiper(slider, {
        speed: 700,
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
          delay: 3000,
        },
        navigation: {
          prevEl: newsContainer.querySelector(".slider-btn._prev"),
          nextEl: newsContainer.querySelector(".slider-btn._next"),
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

      return swiper;
    }
  }
}
