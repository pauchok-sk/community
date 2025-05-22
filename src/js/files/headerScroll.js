export default function headerScroll() {
  const header = document.querySelector(".header");
  const headerBottom = document.querySelector(".header__bottom");

  if (header) {
    let lastScrollTop;
    const headerHeight = header.clientHeight;

    window.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
        headerBottom.classList.add("_hide");
        header.style.height = `${headerHeight - headerBottom.clientHeight}px`;
        if (window.matchMedia('(max-width: 991px)').matches) {
          header.classList.add("_hide")
        }
      } else {
        headerBottom.classList.remove("_hide");
        header.style.height = `${headerHeight}px`;
        header.classList.remove("_hide")
      }
      lastScrollTop = scrollTop;
    });
  }
}
