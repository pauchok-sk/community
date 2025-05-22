import Scrollable from "../lib/Scrollable.js";

export default function scrollables() {
  new Scrollable(".s-team__list");

  if (window.matchMedia('(max-width: 991px)').matches) {
    new Scrollable(".s-news__list");
  }
}