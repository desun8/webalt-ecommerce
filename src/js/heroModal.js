import { TweenLite, TimelineLite } from "gsap";
// import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const nav = _$(".page-header");
    const mainHero = _$(".hero");
    const hero = _$(".hero_wrap");
    const modal = _$("#modalHero");
    const btnClose = modal.querySelector("#modalHeroClose");
    const btnOpen = _$("#showHeroModal");

    const btnsCollapse = _$$(".modal-hero-item_btn-collapse");

    // Открытие модалки
    btnOpen.addEventListener("click", () => {
      const tl = new TimelineLite();

      const top = isDesktop ? -90 : -42;

      tl.to(hero, 0.6, { autoAlpha: 0 }, "first")
        .to(nav, 0.6, { autoAlpha: 0 }, "first")
        .to(mainHero, 0.6, { y: top }, "last")
        .to(modal, 0.6, { x: "0%" }, "last");
      disablePageScroll();
    });

    // Закрытие модалки
    btnClose.addEventListener("click", () => {
      const tl = new TimelineLite();

      tl.to(modal, 0.6, { x: "100%" }, "first")
        .to(mainHero, 0.6, { y: 0 }, "first")
        .to(hero, 0.6, { autoAlpha: 1 }, "last")
        .to(nav, 0.6, { autoAlpha: 1 }, "last");
      enablePageScroll();
    });

    // Раскрытие спойлеров
    btnsCollapse.forEach(btn => {
      btn.addEventListener("click", e => {
        const parent = e.currentTarget.parentElement;
        const list = parent.querySelector(".modal-hero-item_list");

        if (btn.classList.contains("is-active")) {
          TweenLite.to(list, 0.4, { maxHeight: 0 });
        } else {
          TweenLite.to(list, 0.4, { maxHeight: list.scrollHeight });
        }

        btn.classList.toggle("is-active");
      });
    });
  });
})();
