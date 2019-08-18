(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const isDesktop = window.matchMedia("(min-width: 1200px)").matches;

    const showDescribe = (desktop = false) => {
      const items = document.querySelectorAll(".how-step");

      items.forEach(item => {
        const describe = item.querySelector(".how-step_describe");

        item.addEventListener("click", () => {
          items.forEach(elm => {
            if (elm !== item) {
              elm.classList.remove("is-active");
              elm.querySelector(".how-step_describe").style.maxHeight = null;
            }
          });

          item.classList.toggle("is-active");

          if (desktop) {
            console.log("desktop");
          } else {
            const PADDING_TOP = 25;

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
