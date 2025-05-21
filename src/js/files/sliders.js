export default function sliders() {
  const sliderPartners = document.querySelector(".s-partners__slider");

  if (sliderPartners) {
    const swiper = new Swiper(sliderPartners, {
      speed: 700,
      slidesPerView: "auto",
      spaceBetween: 30,
      autoplay: {
        delay: 3500
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
      }
    })
  }
}