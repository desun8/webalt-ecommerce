import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";
import SimpleBar from "simplebar";

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const blurWrap = _$(".sample_blur-wrap");
    const cards = _$$(".sample-item");

    const modalWrap = _$("#modalSample");
    const modalWrapScroll = _$(".modal-sample-wrap_scroll-wrap");
    const modalItems = _$$(".modal-sample");
    const modalClose = _$("#modalSampleClose");
    const modalFullscreen = _$$(".modal-sample_fullscreen");

    let allowHover = true;

    cards.forEach(card => {
      // При ховере на карточку (кейс)
      // Только для десктопа
      if (isDesktop) {
        card.addEventListener("mouseenter", () => {
          if (!allowHover) return;

          cards.forEach(item => {
            if (card !== item) {
              item.classList.add("is-blur");
            }
          });

          modalItems.forEach(item => {
            if (item.dataset.name === card.dataset.name) {
              item.classList.add("is-active");
              // modalWrap.classList.add("is-active");

              modalWrap.classList.add("is-hover--pre");
              // setTimeout(() => modalWrap.classList.add("is-hover"), 200);
              modalWrap.classList.add("is-hover");
            } else {
              item.classList.remove("is-active");
            }
          });
        });

        card.addEventListener("mouseleave", () => {
          cards.forEach(item => {
            item.classList.remove("is-blur");
          });

          modalWrap.classList.remove("is-hover");
          // setTimeout(() => modalWrap.classList.remove("is-hover--pre"), 400);
        });
      }

      card.addEventListener("click", () => {
        disableBodyScroll(modalWrap);

        if (isDesktop) {
          allowHover = false;

          modalWrap.classList.remove("is-hover");
          modalWrap.classList.remove("is-hover--pre");
        }

        modalItems.forEach(item => {
          if (item.dataset.name === card.dataset.name) {
            item.classList.add("is-active");
            modalWrap.classList.add("is-active");

            if (isDesktop) {
              blurWrap.classList.add("is-blur");
            }
          } else {
            item.classList.remove("is-active");
          }
        });
      });
    });

    const closeModal = () => {
      modalWrap.classList.remove("is-active");

      if (isDesktop) {
        blurWrap.classList.remove("is-blur");

        setTimeout(() => {
          allowHover = true;
        }, 500);

        if (modalWrap.classList.contains("is-fullscreen")) {
          modalWrap.classList.remove("is-fullscreen");
        }
      }

      enableBodyScroll(modalWrap);
    };

    modalClose.addEventListener("click", closeModal);
    modalWrap.addEventListener("click", e => {
      if (e.target === e.currentTarget) {
        closeModal();
      }
    });

    if (isDesktop) {
      modalFullscreen.forEach(btn => {
        btn.addEventListener("click", () => {
          modalWrap.classList.add("is-fullscreen");
        });
      });
    }

    // Custom scrollBar
    if (isDesktop) {
      // modal-sample_content
      // new SimpleBar(modalWrapScroll, { autoHide: false });
      new SimpleBar(modalWrap, { autoHide: false, scrollbarMinSize: 1 });

      // Array.from(_$$(".modal-sample_content")).forEach(
      //   el =>
      //     new SimpleBar(el, {
      //       autoHide: false,
      //     }),
      // );
    }
  });
})();
