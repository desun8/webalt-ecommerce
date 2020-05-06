import { TweenLite, TimelineLite } from "gsap";
// import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const modal = _$("#modalTemplates");
    const modalItems = modal.querySelectorAll(".modal-template");
    const modalClose = modal.querySelector("#modalTemplatesClose");

    const templateBtns = _$$(".template_btn");

    // Только если десктоп
    let templateReady;
    let templatePersonal;
    let btnReady;
    let btnPersonal;
    let divide;
    let btnsCloseDesktop;

    if (isDesktop) {
      divide = _$(".template-divide");
      btnsCloseDesktop = _$$(".modal-template_close");

      _$$(".template").forEach(item => {
        if (item.dataset.name === "1") {
          templateReady = item;
          btnReady = item.querySelector(".template_btn");
        }

        if (item.dataset.name === "2") {
          templatePersonal = item;
          btnPersonal = item.querySelector(".template_btn");
        }
      });
    }

    const openModal = item => {
      item.classList.add("is-active");
      TweenLite.to(modal, 0.6, { x: "0%" });
    };

    const openModalDesktop = item => {
      const tl = new TimelineLite();
      const itemWrap = item.querySelector(".modal-template_wrap");
      const itemClose = item.querySelector(".modal-template_close");

      item.classList.add("is-active");

      if (item.dataset.name === "1") {
        item.classList.add("is-active--right");

        tl.to(templatePersonal, 0.6, { x: 100, autoAlpha: 0 }, "hide")
          .to(divide, 0.6, { y: 50, autoAlpha: 0 }, "hide")
          .to(btnReady, 0.6, { y: 20, autoAlpha: 0 }, "hide")
          .to(modal, 0, { x: "0%" }, "hide")
          .fromTo(
            itemWrap,
            0.8,
            { x: -100, autoAlpha: 0 },
            { x: 0, autoAlpha: 1 },
            "-=0.3",
          )
          .fromTo(
            itemClose,
            0.6,
            { y: 20, autoAlpha: 0 },
            { y: 0, autoAlpha: 1 },
            "-=0.4",
          );
      }

      if (item.dataset.name === "2") {
        tl.to(templateReady, 0.6, { x: -100, autoAlpha: 0 }, "hide")
          .to(divide, 0.6, { y: 50, autoAlpha: 0 }, "hide")
          .to(btnPersonal, 0.6, { y: 20, autoAlpha: 0 }, "hide")
          .to(modal, 0, { x: "0%" }, "hide")
          .fromTo(
            itemWrap,
            0.8,
            { x: 100, autoAlpha: 0 },
            { x: 0, autoAlpha: 1 },
            "-=0.3",
          )
          .fromTo(
            itemClose,
            0.6,
            { y: 20, autoAlpha: 0 },
            { y: 0, autoAlpha: 1 },
            "-=0.4",
          );
      }
    };

    const closeModalDesktop = item => {
      const tl = new TimelineLite();
      const itemWrap = item.querySelector(".modal-template_wrap");
      const itemClose = item.querySelector(".modal-template_close");

      if (item.dataset.name === "1") {
        tl.fromTo(
          itemClose,
          0.6,
          { y: 0, autoAlpha: 1 },
          { y: 20, autoAlpha: 0 },
        )
          .fromTo(
            itemWrap,
            0.8,
            { x: 0, autoAlpha: 1 },
            { x: -100, autoAlpha: 0 },
            "-=0.4",
          )
          .to(modal, 0, { x: "100%" }, "show")
          .to(btnReady, 0.6, { y: 0, autoAlpha: 1 }, "show")
          .to(divide, 0.6, { y: 0, autoAlpha: 1 }, "show")
          .to(templatePersonal, 0.6, { x: 0, autoAlpha: 1 }, "show");
      }

      if (item.dataset.name === "2") {
        tl.fromTo(
          itemClose,
          0.6,
          { y: 0, autoAlpha: 1 },
          { y: 20, autoAlpha: 0 },
        )
          .fromTo(
            itemWrap,
            0.8,
            { x: 0, autoAlpha: 1 },
            { x: 100, autoAlpha: 0 },
            "-=0.4",
          )
          .to(modal, 0, { x: "100%" }, "show")
          .to(btnPersonal, 0.6, { y: 0, autoAlpha: 1 }, "show")
          .to(divide, 0.6, { y: 0, autoAlpha: 1 }, "show")
          .to(templateReady, 0.6, { x: 0, autoAlpha: 1 }, "show");
      }
    };

    // Открытие модалки
    templateBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        let currModal = null;

        modalItems.forEach(item => {
          item.classList.remove("is-active", "is-active--right");

          if (item.dataset.name === btn.dataset.name) {
            currModal = item;
          }
        });

        if (isDesktop) {
          openModalDesktop(currModal);
        } else {
          openModal(currModal);
        }

        disablePageScroll();
      });
    });

    // Закрытие модалки
    modalClose.addEventListener("click", () => {
      TweenLite.to(modal, 0.6, { x: "100%" });
      enablePageScroll();
    });

    if (isDesktop) {
      btnsCloseDesktop.forEach(btn => {
        btn.addEventListener("click", () => {
          let currModal = null;

          modalItems.forEach(item => {
            if (item.dataset.name === btn.dataset.name) {
              currModal = item;
            }
          });

          if (currModal) {
            closeModalDesktop(currModal);
          }
        });
      });
    }
  });
})();
