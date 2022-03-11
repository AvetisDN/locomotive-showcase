import "./style.css";
import "locomotive-scroll/dist/locomotive-scroll.min.css";
import LocomotiveScroll from "locomotive-scroll";

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  smartphone: {
    smooth: true,
  },
  tablet: {
    smooth: true,
  },
});
