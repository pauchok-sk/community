import "../scss/style.scss";
import burger from "./files/burger.js";
import headerScroll from "./files/headerScroll.js";
import scrollables from "./files/scrollables.js";
import sliders from "./files/sliders.js";
import spoller from "./files/spoller.js";
import tabs from "./files/tabs.js";
import mediaAdaptive from "./files/mediaAdaptive.js";
import videos from "./files/videos.js";

spoller();
burger();
sliders();
headerScroll();
scrollables();
tabs();
mediaAdaptive();
videos();

Fancybox.bind("[data-fancybox]", {});
