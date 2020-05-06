import pageScroll from "./pageScroll";
import modalSample from "./modalSample";

// 1100px
const isDesktop = window.matchMedia("(min-width: 68.75em)").matches;

if (isDesktop) {
  pageScroll();
}

modalSample(isDesktop);
