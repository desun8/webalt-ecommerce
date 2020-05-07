/* eslint-disable no-unused-expressions */
// import { throttle } from "lodash";
import Inputmask from "inputmask";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

// Функционал:
// - инициализация инпут-маски
// - валидация
// - отправка формы
// - отображение сообщения об успешной отправке
// - очистка полей формы
// *
// В форме используется инпутмаска
// https://github.com/RobinHerbots/Inputmask
// *
// Соответственно вся валидация учитывает наличие данной библиотеки
class Form {
  constructor(elm) {
    this.$elm = {
      form: elm,
      name: elm.querySelector("[data-name=name]"),
      phone: elm.querySelector("[data-name=phone]"),
      email: elm.querySelector("[data-name=email]"),
      agreement: elm.querySelector("[data-name=agreement]"),
      successMessage: {
        elm: document.querySelector("#modalOk"),
      },
    };

    this.captchaKey = "6LfuGfMUAAAAACRlKv0QH2jEz3Ei79ac-QYVRa9E";
    this.submitUrl = this.$elm.form.action || "ajax.php";
    this.errorClassName = "has-error";
    this.regex = {
      name: "^[А-Яа-я]+( [А-Яа-я]+)*$",
      email: /^[a-z]+([.-]?[a-z]+)*@[a-z]+([.-]?[a-z]+)*(\.[a-z]{2,3})+$/,
    };

    this.init();
  }

  onValidateName() {
    // если такого поля нет, то вовзращаем true
    if (!this.$elm.name) return true;

    // проверка на количество символов
    const input = this.$elm.name;

    const { value } = input;
    const isValid = value.length > 3;

    if (isValid === false) {
      input.classList.add(this.errorClassName);
    }

    return isValid;
  }

  onValidateEmail() {
    // если такого поля нет, то вовзращаем true
    if (!this.$elm.email) return true;

    const input = this.$elm.email;
    const { value } = input;
    const isValid = value.toLowerCase().match(this.regex.email) !== null;

    console.log(
      "Form -> onValidateEmail -> value.toLowerCase().match(this.regex.email)",
      value.toLowerCase().match(this.regex.email),
    );

    if (isValid === false) {
      input.classList.add(this.errorClassName);
    }

    return isValid;
  }

  onValidatePhone() {
    // если такого поля нет, то вовзращаем true
    if (!this.$elm.phone) return true;

    // проверка на заполненность
    const input = this.$elm.phone;
    const isValid = input.inputmask.isComplete();

    if (isValid === false) {
      input.classList.add(this.errorClassName);
    }

    return isValid;
  }

  onValidateAgreement() {
    // если такого поля нет, то вовзращаем true
    if (!this.$elm.agreement) return true;

    // проверка на checked
    const input = this.$elm.agreement;
    const isValid = input.checked;

    if (isValid === false) {
      input.classList.add(this.errorClassName);
    }

    return isValid;
  }

  onValidate() {
    return (
      this.onValidateName()
      && this.onValidatePhone()
      && this.onValidateEmail()
      && this.onValidateAgreement()
    );
  }

  setInputMask() {
    const onKeyDown = (event) => {
      const { target } = event;
      target.classList.remove(this.errorClassName);
    };

    const imName = new Inputmask({
      regex: this.regex.name,
      placeholder: "",
      showMaskOnHover: false,
      onKeyDown,
    });
    const imEmail = new Inputmask({
      placeholder: "",
      showMaskOnHover: false,
      onKeyDown,
    });
    const imPhone = new Inputmask("+7 (999) 999 99 99", {
      placeholder: "x",
      onKeyDown,
    });

    this.$elm.name && imName.mask(this.$elm.name);
    this.$elm.phone && imPhone.mask(this.$elm.phone);
    this.$elm.email && imEmail.mask(this.$elm.email);
  }

  toggleSuccessMessage() {
    disablePageScroll();

    const modalOk = this.$elm.successMessage.elm;

    modalOk.style.transform = "translateX(0)";
    modalOk.style.visibility = "visible";
    modalOk.style.opacity = 1;
    modalOk.style.height = "100vh";

    setTimeout(() => {
      enablePageScroll();

      modalOk.style.transform = null;
      modalOk.style.visibility = null;
      modalOk.style.opacity = null;
      modalOk.style.height = null;
    }, 3000);
  }

  clearForm() {
    const items = [];

    this.$elm.name && items.push(this.$elm.name);
    this.$elm.email && items.push(this.$elm.email);
    this.$elm.phone && items.push(this.$elm.phone);
    this.$elm.agreement && items.push(this.$elm.agreement);

    items.forEach((item) => {
      if (item.type === "checkbox") {
        // eslint-disable-next-line no-param-reassign
        item.checked = false;
      } else {
        item.inputmask.setValue("");
      }
    });
  }

  createFormData() {
    // можно проще - new FormData(form)
    // Но это более гибкий вариант
    const formData = new FormData();
    const items = [];

    this.$elm.name && items.push(this.$elm.name);
    this.$elm.email && items.push(this.$elm.email);
    this.$elm.phone && items.push(this.$elm.phone);
    this.$elm.agreement && items.push(this.$elm.agreement);

    items.forEach((item) => {
      if (item.type === "checkbox") {
        formData.append(item.name, item.checked);
      } else {
        formData.append(item.name, item.value);
      }
    });

    return formData;
  }

  onSubmit() {
    if (this.onValidate() === false) {
      console.log(
        "%c Поля заполнены с ошибками",
        "color: #212121; font-weight: bold; padding: 1em; background: #fa9f0c",
      );
      return false;
    }

    const formData = this.createFormData();
    // for (const pair of formData.entries()) {
    //   console.log(`${pair[0]}, ${pair[1]}`);
    // }

    const handleErrors = (response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      if (!response.ok) {
        throw Error(response.statusText);
      }

      return response;
    };

    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(this.captchaKey, { action: "form" })
        .then((token) => {
          formData.append("recaptcha_response", token);

          const params = {
            method: "POST",
            mode: "no-cors",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "X-Requested-With": "XMLHttpRequest",
            },
            body: formData,
          };

          // const params = {
          //   method: "get",
          //   // body: formData,
          // };

          fetch(this.submitUrl, params)
            .then(handleErrors)
            .then((res) => {
              this.toggleSuccessMessage();
              this.clearForm();
              console.log("форма отправилась");
              console.log(res.json());
              console.log(res.json().status);
            })
            .catch((error) => console.error("Форма не отправилась", error));
        });
    });

    return true;
  }

  init() {
    this.setInputMask();

    // удаляем пробелы по краям
    const trimInputs = [];
    this.$elm.name && trimInputs.push(this.$elm.name);
    this.$elm.email && trimInputs.push(this.$elm.email);

    trimInputs.forEach((elm) => elm.addEventListener("change", (e) => {
      const { target } = e;
      const { value } = target;
      const valueTrim = value.trim();

      target.inputmask.setValue(valueTrim);
    }));

    // убираем класс ошибки у чекбокса
    this.$elm.agreement
      && this.$elm.agreement.addEventListener("change", (e) => {
        const ct = e.currentTarget;

        if (ct.classList.contains(this.errorClassName) && ct.checked) {
          ct.classList.remove(this.errorClassName);
        }
      });

    // показываем форму
    // this.$elm.successMessage.btn.addEventListener("click", () => this.toggleSuccessMessage(false));

    // отправка формы
    this.$elm.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.onSubmit();
    });
  }
}

export default Form;
