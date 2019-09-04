(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".features-tabs_btn");
    const items = document.querySelectorAll(".features-list_item");

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tab.classList.add("is-active");

        items.forEach(item => {
          if (item.dataset.tab === tab.value) {
            item.classList.add("is-active");
          } else {
            item.classList.remove("is-active");
          }
        });

        tabs.forEach(elm => {
          if (elm !== tab && elm.classList.contains("is-active")) {
            elm.classList.remove("is-active");
          }
        });
      });
    });
  });
})();
