document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.form');
  form.addEventListener('submit', formSend);

  async function formSend(event) {
    event.preventDefault();

    const error = formValidate(form);

    const formData = new FormData(form);

    if (error === 0) {
      form.classList.add('_sending');
      const response = await fetch('sendmail.php', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json;
        alert(result.message);
        console.log(result);
        form.reset();
      } else {
        alert('ошибка');
      }
    } else {
      alert('Заполните обязательные поля');
    }
  }

  function formValidate(form) {
    let error = 0;
    const formReq = document.querySelectorAll('._req');

    for (let i = 0; i < formReq.length; i += 1) {
      const input = formReq[i];
      formRemoveError(input);

      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          formAddError(input);
          error += 1;
        }
      } else if (
        input.getAttribute('type') === 'checkbox' &&
        input.checked === false
      ) {
        formAddError(input);
        error += 1;
      } else {
        if (input.value === '') {
          formAddError(input);
          error += 1;
        }
      }
    }
    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }

  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});
