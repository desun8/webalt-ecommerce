import Fullpage from "fullpage.js";

const pageScroll = () => {
  const fullPageInstance = new Fullpage("#fullPage", {
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
    lockAnchors: false,
    normalScrollElements:
      "#modalHow, #modalSample, #modalTemplates, #modalFeedback, #modalHero",
  });
};

export default pageScroll;
