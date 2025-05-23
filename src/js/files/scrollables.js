import Scrollable from "../lib/Scrollable.js";

export default function scrollables() {
  new Scrollable(".s-team__list");

  if (window.matchMedia("(max-width: 991px)").matches) {
    new Scrollable(".s-news__list");
  }

  new Scrollable(".s-archive-team__list");
  new Scrollable(".s-projects__list");
}
