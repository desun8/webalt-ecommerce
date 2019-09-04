import SimpleBar from "simplebar";

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    // Custom scrollBar
    if (isDesktop) {
      Array.from(_$$(".modal-sample_details")).forEach(
        el =>
          new SimpleBar(el, {
            autoHide: false,
          }),
      );
    }
  });
})();
