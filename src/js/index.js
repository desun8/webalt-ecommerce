import pageScroll from "./pageScroll";
import modalSample from "./modalSample";
import initForm from "./form";

// 1100px
const isDesktop = window.matchMedia("(min-width: 68.75em)").matches;

if (isDesktop) {
  pageScroll();
}

modalSample(isDesktop);
initForm();
