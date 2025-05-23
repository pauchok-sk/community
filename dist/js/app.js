(() => {
    "use strict";
    function burger() {
        const burgerOpen = document.querySelector("#burger-open");
        const burgerClose = document.querySelector("#burger-close");
        const burger = document.querySelector("#burger");
        const burgerOverlay = document.querySelector("#burger-overlay");
        if (burger) {
            burger.addEventListener("click", (e => e.stopPropagation()));
            burgerOverlay.addEventListener("click", handlerBurgerClose);
            burgerOpen.addEventListener("click", (e => {
                e.stopPropagation();
                handlerBurgerOpen();
            }));
            burgerClose.addEventListener("click", (e => {
                e.stopPropagation();
                handlerBurgerClose();
            }));
            function handlerBurgerClose() {
                burger.classList.remove("_open");
                burgerOverlay.classList.remove("_active");
                document.body.classList.remove("body-hidden");
                document.body.removeEventListener("click", burgerClose);
            }
            function handlerBurgerOpen() {
                burger.classList.add("_open");
                burgerOverlay.classList.add("_active");
                document.body.classList.add("body-hidden");
                document.body.addEventListener("click", burgerClose);
            }
            function updateHeightBurger() {
                burger.style.maxHeight = `${window.visualViewport.height}px`;
            }
            window.visualViewport.addEventListener("resize", updateHeightBurger);
            window.visualViewport.addEventListener("scroll", updateHeightBurger);
            updateHeightBurger();
        }
    }
    function headerScroll() {
        const header = document.querySelector(".header");
        const headerBottom = document.querySelector(".header__bottom");
        if (header) {
            let lastScrollTop;
            const headerHeight = header.clientHeight;
            window.addEventListener("scroll", (() => {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
                    headerBottom.classList.add("_hide");
                    header.style.height = `${headerHeight - headerBottom.clientHeight}px`;
                    if (window.matchMedia("(max-width: 991px)").matches) header.classList.add("_hide");
                } else {
                    headerBottom.classList.remove("_hide");
                    header.style.height = `${headerHeight}px`;
                    header.classList.remove("_hide");
                }
                lastScrollTop = scrollTop;
            }));
        }
    }
    class Scrollable {
        constructor(selector, options) {
            let defaultOptions = {
                wheelScrolling: true
            };
            this.isGrab = false;
            this.container = document.querySelector(selector);
            this.options = Object.assign(defaultOptions, options);
            if (!this.container) return;
            this.container.classList.add("_scrollable");
            this.childrensSize = Array.from(this.container.children).reduce(((sum, item) => sum + item.clientWidth), 0);
            if (this.container.clientWidth < this.childrensSize) {
                this.container.style = "cursor: grab";
                this.isGrab = true;
            }
            this.isDragging = false;
            this.startX = null;
            this.scrollLeft = null;
            this.events();
        }
        events() {
            if (this.container) {
                this.container.addEventListener("mousedown", (e => {
                    this.isDragging = true;
                    this.startX = e.pageX - this.container.offsetLeft;
                    this.scrollLeft = this.container.scrollLeft;
                }));
                this.container.addEventListener("mouseup", (e => {
                    this.isDragging = false;
                }));
                this.container.addEventListener("mousemove", (e => {
                    if (!this.isDragging) return;
                    const x = e.pageX - this.container.offsetLeft;
                    const walkX = (x - this.startX) * 1;
                    this.container.scrollLeft = this.scrollLeft - walkX;
                }));
                this.container.addEventListener("mouseleave", (e => {
                    if (this.isDragging) this.isDragging = false;
                }));
                if (this.options.wheelScrolling) this.container.addEventListener("mousewheel", (e => {
                    if (this.isGrab) e.preventDefault();
                    this.container.scrollLeft += e.deltaY;
                }));
            }
        }
    }
    function scrollables() {
        new Scrollable(".s-team__list");
        if (window.matchMedia("(max-width: 991px)").matches) new Scrollable(".s-news__list");
        new Scrollable(".s-archive-team__list");
        new Scrollable(".s-projects__list");
    }
    function sliders() {
        const sliderPartners = document.querySelector(".s-partners__slider");
        if (sliderPartners) {
            new Swiper(sliderPartners, {
                speed: 700,
                slidesPerView: "auto",
                spaceBetween: 30,
                autoplay: {
                    delay: 3500
                },
                breakpoints: {
                    1366: {
                        spaceBetween: 80
                    },
                    1200: {
                        spaceBetween: 60
                    },
                    992: {
                        spaceBetween: 40
                    }
                }
            });
        }
        const teamSliders = document.querySelectorAll(".s-team__slider");
        if (teamSliders.length) teamSliders.forEach(((s, i) => {
            new Swiper(s, {
                speed: 700,
                slidesPerView: 1,
                spaceBetween: 20,
                autoplay: {
                    delay: 3e3
                },
                navigation: {
                    prevEl: s.closest(".container").querySelectorAll("[data-add-tab]")[i].querySelector(".slider-btn._prev"),
                    nextEl: s.closest(".container").querySelectorAll("[data-add-tab]")[i].querySelector(".slider-btn._next")
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 24
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    }
                }
            });
        }));
        const newsSliders = document.querySelectorAll(".s-news__slider");
        if (newsSliders.length) newsSliders.forEach(((s, i) => {
            new Swiper(s, {
                speed: 700,
                slidesPerView: 1,
                spaceBetween: 20,
                autoplay: {
                    delay: 3e3
                },
                navigation: {
                    prevEl: s.closest(".container").querySelectorAll("[data-add-tab]")[i].querySelector(".slider-btn._prev"),
                    nextEl: s.closest(".container").querySelectorAll("[data-add-tab]")[i].querySelector(".slider-btn._next")
                },
                breakpoints: {
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    }
                }
            });
        }));
        const gallerySliders = document.querySelectorAll(".gallery-slider");
        if (gallerySliders.length) gallerySliders.forEach((s => {
            new Swiper(s, {
                speed: 700,
                slidesPerView: 1,
                spaceBetween: 20,
                autoplay: {
                    delay: 3e3
                },
                scrollbar: {
                    el: s.closest("section").querySelector(".slider-scrollbar"),
                    draggable: true
                },
                navigation: {
                    prevEl: s.closest("section").querySelector(".slider-btn._prev"),
                    nextEl: s.closest("section").querySelector(".slider-btn._next")
                },
                breakpoints: {
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    }
                }
            });
        }));
        const federalProjectsSlider = document.querySelector(".s-federal-projects__slider");
        if (federalProjectsSlider) {
            new Swiper(federalProjectsSlider, {
                speed: 700,
                slidesPerView: 1,
                spaceBetween: 20,
                autoplay: {
                    delay: 3e3
                },
                navigation: {
                    prevEl: ".s-federal-projects .slider-btn._prev",
                    nextEl: ".s-federal-projects .slider-btn._next"
                },
                breakpoints: {
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    }
                }
            });
        }
        const projectsSliders = document.querySelectorAll(".s-projects__slider");
        if (projectsSliders.length) projectsSliders.forEach(((s, i) => {
            new Swiper(s, {
                speed: 700,
                slidesPerView: 1,
                spaceBetween: 20,
                autoplay: {
                    delay: 3e3
                },
                navigation: {
                    prevEl: s.closest(".container").querySelectorAll("[data-add-tab]")[i].querySelector(".slider-btn._prev"),
                    nextEl: s.closest(".container").querySelectorAll("[data-add-tab]")[i].querySelector(".slider-btn._next")
                },
                breakpoints: {
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    }
                }
            });
        }));
        const booksSlider = document.querySelector(".s-books__slider");
        if (booksSlider) {
            new Swiper(booksSlider, {
                speed: 700,
                slidesPerView: 1,
                spaceBetween: 20,
                autoplay: {
                    delay: 3e3
                },
                navigation: {
                    prevEl: ".s-books .slider-btn._prev",
                    nextEl: ".s-books .slider-btn._next"
                },
                scrollbar: {
                    el: ".s-books__scrollbar",
                    draggable: true
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    }
                }
            });
        }
    }
    function spoller() {
        const spollersArray = document.querySelectorAll("[data-spollers]");
        if (spollersArray.length > 0) {
            const spollersRegular = Array.from(spollersArray).filter((function(item, index, self) {
                return !item.dataset.spollers.split(",")[0];
            }));
            if (spollersRegular.length) initSpollers(spollersRegular);
            let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
            if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                mdQueriesItem.matchMedia.addEventListener("change", (function() {
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
            }));
            function initSpollers(spollersArray, matchMedia = false) {
                spollersArray.forEach((spollersBlock => {
                    spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                    if (matchMedia.matches || !matchMedia) {
                        spollersBlock.classList.add("_spoller-init");
                        initSpollerBody(spollersBlock);
                        spollersBlock.addEventListener("click", setSpollerAction);
                    } else {
                        spollersBlock.classList.remove("_spoller-init");
                        initSpollerBody(spollersBlock, false);
                        spollersBlock.removeEventListener("click", setSpollerAction);
                    }
                }));
            }
            function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                if (spollerTitles.length) {
                    spollerTitles = Array.from(spollerTitles).filter((item => item.closest("[data-spollers]") === spollersBlock));
                    spollerTitles.forEach((spollerTitle => {
                        if (hideSpollerBody) {
                            spollerTitle.removeAttribute("tabindex");
                            if (!spollerTitle.classList.contains("_spoller-active")) spollerTitle.nextElementSibling.hidden = true;
                        } else {
                            spollerTitle.setAttribute("tabindex", "-1");
                            spollerTitle.nextElementSibling.hidden = false;
                        }
                    }));
                }
            }
            function setSpollerAction(e) {
                const el = e.target;
                if (el.closest("[data-spoller]")) {
                    const spollerTitle = el.closest("[data-spoller]");
                    const spollersBlock = spollerTitle.closest("[data-spollers]");
                    const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (!spollersBlock.querySelectorAll("._slide").length) {
                        if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) hideSpollersBody(spollersBlock);
                        spollerTitle.classList.toggle("_spoller-active");
                        _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                    }
                    e.preventDefault();
                }
            }
            function hideSpollersBody(spollersBlock) {
                const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                    spollerActiveTitle.classList.remove("_spoller-active");
                    _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                }
            }
            const spollersClose = document.querySelectorAll("[data-spoller-close]");
            if (spollersClose.length) document.addEventListener("click", (function(e) {
                const el = e.target;
                if (!el.closest("[data-spollers]")) spollersClose.forEach((spollerClose => {
                    const spollersBlock = spollerClose.closest("[data-spollers]");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    spollerClose.classList.remove("_spoller-active");
                    _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                }));
            }));
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
    }
    function tabs() {
        const buttons = document.querySelectorAll("[data-tab-btn]");
        if (buttons.length) buttons.forEach((btn => {
            btn.addEventListener("click", (() => {
                const container = btn.closest(".tabs");
                const tabId = btn.dataset.tabBtn;
                const allButtons = container.querySelectorAll("[data-tab-btn]");
                const allTabs = container.querySelectorAll("[data-tab]");
                const addTabs = container.querySelectorAll("[data-add-tab]");
                const currentTab = container.querySelector(`[data-tab="${tabId}"]`);
                const currentAddTab = container.querySelector(`[data-add-tab="${tabId}"]`);
                allTabs.forEach((t => t.classList.remove("_active")));
                addTabs?.forEach((t => t.classList.remove("_active")));
                currentTab.classList.add("_active");
                currentAddTab?.classList.add("_active");
                allButtons.forEach((b => b.classList.remove("_active")));
                btn.classList.add("_active");
            }));
        }));
    }
    function mediaAdaptive() {
        function DynamicAdapt(type) {
            this.type = type;
        }
        DynamicAdapt.prototype.init = function() {
            const _this = this;
            this.оbjects = [];
            this.daClassname = "_dynamic_adapt_";
            this.nodes = document.querySelectorAll("[data-da]");
            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i];
                const data = node.dataset.da.trim();
                const dataArray = data.split(",");
                const оbject = {};
                оbject.element = node;
                оbject.parent = node.parentNode;
                оbject.destination = document.querySelector(dataArray[0].trim());
                оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.оbjects.push(оbject);
            }
            this.arraySort(this.оbjects);
            this.mediaQueries = Array.prototype.map.call(this.оbjects, (function(item) {
                return "(" + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
            }), this);
            this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, (function(item, index, self) {
                return Array.prototype.indexOf.call(self, item) === index;
            }));
            for (let i = 0; i < this.mediaQueries.length; i++) {
                const media = this.mediaQueries[i];
                const mediaSplit = String.prototype.split.call(media, ",");
                const matchMedia = window.matchMedia(mediaSplit[0]);
                const mediaBreakpoint = mediaSplit[1];
                const оbjectsFilter = Array.prototype.filter.call(this.оbjects, (function(item) {
                    return item.breakpoint === mediaBreakpoint;
                }));
                matchMedia.addListener((function() {
                    _this.mediaHandler(matchMedia, оbjectsFilter);
                }));
                this.mediaHandler(matchMedia, оbjectsFilter);
            }
        };
        DynamicAdapt.prototype.mediaHandler = function(matchMedia, оbjects) {
            if (matchMedia.matches) for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i];
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.moveTo(оbject.place, оbject.element, оbject.destination);
            } else for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i];
                if (оbject.element.classList.contains(this.daClassname)) this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        };
        DynamicAdapt.prototype.moveTo = function(place, element, destination) {
            element.classList.add(this.daClassname);
            if (place === "last" || place >= destination.children.length) {
                destination.insertAdjacentElement("beforeend", element);
                return;
            }
            if (place === "first") {
                destination.insertAdjacentElement("afterbegin", element);
                return;
            }
            destination.children[place].insertAdjacentElement("beforebegin", element);
        };
        DynamicAdapt.prototype.moveBack = function(parent, element, index) {
            element.classList.remove(this.daClassname);
            if (parent.children[index] !== void 0) parent.children[index].insertAdjacentElement("beforebegin", element); else parent.insertAdjacentElement("beforeend", element);
        };
        DynamicAdapt.prototype.indexInParent = function(parent, element) {
            const array = Array.prototype.slice.call(parent.children);
            return Array.prototype.indexOf.call(array, element);
        };
        DynamicAdapt.prototype.arraySort = function(arr) {
            if (this.type === "min") Array.prototype.sort.call(arr, (function(a, b) {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) return 0;
                    if (a.place === "first" || b.place === "last") return -1;
                    if (a.place === "last" || b.place === "first") return 1;
                    return a.place - b.place;
                }
                return a.breakpoint - b.breakpoint;
            })); else {
                Array.prototype.sort.call(arr, (function(a, b) {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if (a.place === "first" || b.place === "last") return 1;
                        if (a.place === "last" || b.place === "first") return -1;
                        return b.place - a.place;
                    }
                    return b.breakpoint - a.breakpoint;
                }));
                return;
            }
        };
        const da = new DynamicAdapt("max");
        da.init();
    }
    function videos() {
        const videos = document.querySelectorAll(".video");
        if (videos.length) videos.forEach((video => {
            new Plyr(video);
        }));
    }
    spoller();
    burger();
    sliders();
    headerScroll();
    scrollables();
    tabs();
    mediaAdaptive();
    videos();
    Fancybox.bind("[data-fancybox]", {});
})();