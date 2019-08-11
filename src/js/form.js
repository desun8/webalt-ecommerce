import IMask from 'imask';

document.addEventListener('DOMContentLoaded', () => {
  const desktop = window.matchMedia('(min-width: 60em)');

  const formFeedback = document.querySelector('#mainFeedbackForm');
  const formCall = document.querySelector('#formCall');

  // inputMask
  const formFeedbackMask = new IMask(
    formFeedback.querySelector('.form-feedback_phone'), {
      mask: '+{7} (000) 000-00-00',
    },
  );

  const formCallMask = new IMask(
    formCall.querySelector('input[name=phone]'), {
      mask: '+{7} (000) 000-00-00',
    },
  );

  // submit forms
  formFeedback.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = e.currentTarget.querySelector('input[name=name]');
    const phone = e.currentTarget.querySelector('input[name=phone]');
    const message = e.currentTarget.querySelector('textarea[name=message]');
    const agreements = e.currentTarget.querySelector('#feedback-agreements');

    if (name.value && phone.value.length === 18 && message.value && agreements.checked) {
      const formData = new FormData(e.currentTarget);

      fetch('/cart/registration', {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      }).then((res) => {
        if (res.ok) {

        }
      }).catch((err) => {
        console.log(`Ошибка! ${err}`);
      });
    }
  })

  formCall.addEventListener('submit', (e) => {
    e.preventDefault();

    const phone = e.currentTarget.querySelector('input[name=phone]');

    if (phone.value.length === 18) {
      const formData = new FormData(e.currentTarget);

      fetch('/cart/registration', {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      }).then((res) => {
        if (res.ok) {
          if (desktop.matches) {
            const success = document.querySelector('.hero_success');
            success.classList.add('hero_success--show');
            setTimeout(() => {
              success.classList.remove('hero_success--show');
            }, 1000);
          } else {
            alert('Ваш запрос был успешно отправлен! При желании, вы можете отправить его повторно ;');
          }
        }
      }).catch((err) => {
        console.log(`Ошибка! ${err}`);
      });
    }
  });
});

