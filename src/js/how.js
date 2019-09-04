import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const isDesktop = window.matchMedia("(min-width: 1200px)").matches;

    const modalDesktop = (item, describe) => {
      const modal = document.querySelector("#modalHow");
      const close = modal.querySelector(".icon-close");
      const text = modal.querySelector(".modal-how-describe_text");

      const howBlock = document.querySelector(".how_blur-wrap");

      text.innerHTML = describe.innerHTML;

      modal.classList.add("is-active");
      howBlock.classList.add("is-blur");

      disableBodyScroll(modal);

      close.addEventListener("click", () => {
        modal.classList.remove("is-active");
        item.classList.remove("is-active");
        howBlock.classList.remove("is-blur");

        enableBodyScroll(modal);
      });
    };

    const showDescribe = (desktop = false) => {
      const items = document.querySelectorAll(".how-step");

      items.forEach(item => {
        const describe = item.querySelector(".how-step_describe");

        item.addEventListener("click", () => {
          if (desktop) {
            modalDesktop(item, describe);
            item.classList.add("is-active");
          } else {
            const PADDING_TOP = 25;

            items.forEach(elm => {
              if (elm !== item) {
                elm.classList.remove("is-active");
                elm.querySelector(".how-step_describe").style.maxHeight = null;
              }
            });

            item.classList.toggle("is-active");

            if (describe.style.maxHeight) {
              describe.style.maxHeight = null;
            } else {
              describe.style.maxHeight = `${describe.scrollHeight +
                PADDING_TOP}px`;
            }
          }
        });
      });
    };

    showDescribe(isDesktop);
  });
})();
