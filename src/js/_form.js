import IMask from "imask";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const formFeedback = _$("#mainFeedbackForm");
    const modalFeedback = _$("#modalFeedback");
    const btnHeaderOpenModal = _$("#headerPhoneModal");
    const btnHeroOpenModal = _$("#js-heroBtn");
    const btnOpenModal = _$("#showModalForm");
    const btnCloseModal = _$("#modalFeedbackClose");
    const btnModalFeedbackSubmit = _$("#modalFormSubmit");
    const modalFeedbackForm = modalFeedback.querySelector("#modalForm");
    const modalOk = _$("#modalOk");

    const sampleBlock = _$(".sample_blur-wrap");

    const feebackActionUrl = formFeedback.action || "/feedback-lp/ecommercelp";

    const showSuccessMessage = () => {
      disablePageScroll();

      modalOk.style.transform = "translateX(0)";
      modalOk.style.visibility = "visible";
      modalOk.style.opacity = 1;
      modalOk.style.height = "100vh";
      // setTimeout(() => {
      //   mainPage.style.filter = "blur(5px)";
      // }, 200);

      // document.body.style.cssText = `height: 100%; overflow: hidden; padding-right: ${scrollbarWidth}px`;

      setTimeout(() => {
        enablePageScroll();

        modalOk.style.transform = null;
        modalOk.style.visibility = null;
        modalOk.style.opacity = null;
        modalOk.style.height = null;
        // modalFeedback.style.height = null;
        modalFeedback.classList.remove("is-active");
        // mainPage.style.filter = null;

        modalFeedback.style.right = "-14px";
        document.body.style.cssText = null;
      }, 5000);
    };

    // Открытие/закрытие модальной формы
    [btnHeaderOpenModal, btnHeroOpenModal, btnOpenModal].forEach(btn => {
      btn.addEventListener("click", () => {
        if (isDesktop) {
          sampleBlock.classList.add("is-blur");
        }

        disablePageScroll();
        modalFeedback.classList.add("is-active");
      });
    });

    btnCloseModal.addEventListener("click", () => {
      if (isDesktop) {
        sampleBlock.classList.remove("is-blur");
      }

      enablePageScroll();
      modalFeedback.classList.remove("is-active");
    });

    // inputMask
    IMask(formFeedback.querySelector(".form-feedback_phone"), {
      mask: "+{7} (000) 000-00-00",
    });
    IMask(modalFeedback.querySelector(".form-feedback_phone"), {
      mask: "+{7} (000) 000-00-00",
    });

    // submit forms
    formFeedback.addEventListener("submit", e => {
      e.preventDefault();

      const name = e.currentTarget.querySelector("input[name=name]");
      const phone = e.currentTarget.querySelector("input[name=phone]");
      const message = e.currentTarget.querySelector("textarea[name=message]");
      const agreements = e.currentTarget.querySelector("#feedback-agreements");

      if (
        name.value &&
        phone.value.length === 18 &&
        message.value &&
        agreements.checked
      ) {
        const formData = new FormData(e.currentTarget);

        fetch(feebackActionUrl, {
          method: "POST",
          mode: "no-cors",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
          body: formData,
        })
          .then(res => {
            if (res.ok) {
              showSuccessMessage();
            }
          })
          .catch(err => {
            console.log(`Ошибка! ${err}`);
          });
      }
    });

    btnModalFeedbackSubmit.addEventListener("click", () => {
      // e.preventDefault();
      modalFeedback.addEventListener("submit", e => {
        e.preventDefault();
      });

      const name = modalFeedbackForm.querySelector("input[name=name]");
      const phone = modalFeedbackForm.querySelector("input[name=phone]");
      const message = modalFeedbackForm.querySelector("textarea[name=message]");
      const agreements = modalFeedbackForm.querySelector(
        "#modal-feedback-agreements",
      );

      if (phone.value.length < 18) {
        phone.classList.add("error");
      } else {
        phone.classList.remove("error");
      }

      // grecaptcha.getResponse()
      if (
        name.value &&
        phone.value.length === 18 &&
        message.value &&
        agreements.checked
      ) {
        const formData = new FormData(modalFeedbackForm);

        fetch(feebackActionUrl, {
          method: "POST",
          mode: "no-cors",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
          body: formData,
        })
          .then(res => {
            if (res.ok) {
              showSuccessMessage();
            }
          })
          .catch(err => {
            console.log(`Ошибка! ${err}`);
          });
      }
    });
  });
})();
