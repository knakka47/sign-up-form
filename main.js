const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const errorMessage = document.querySelector('.errorMessage');

const inputs = [email, phone, password, confirmPassword];

inputs.forEach((item) => {
    item.addEventListener('focusin', () => {
        errorMessage.textContent = '';
        item.classList.remove("error");
        if (item === password || item === confirmPassword) {
            password.classList.remove("error");
            confirmPassword.classList.remove("error");
        }
    });
});

const submit = (e) => {
    e.preventDefault();
    if (password.value !== confirmPassword.value) {
        password.classList.add('error');
        confirmPassword.classList.add('error');
        errorMessage.textContent = "Passwords don't match";
        return;
    }

    console.log(document.querySelector('#password'));
    console.log(document.querySelector('#confirmPassword'));

    if (
        !phone.value.match(
            /^(?:\+?1\s*[-.]?\s*)?(\d{3}[-.]?\s*\d{3}[-.]?\s*\d{4})$/        )
      ) {
        phone.classList.add("error");
        errorMessage.textContent = "Phone number needs to be exactly 10 numbers";
        return;
      }
      if (password.value.length < 8) {
        password.classList.add("error");
        errorMessage.textContent =
          "Password needs to be at least 8 characters long.";
        return;
      }
      if (!password.value.match(/[a-z]/)) {
        password.classList.add("error");
        errorMessage.textContent =
          "Password needs to have at least 1 lower case letter.";
        return;
      }
      if (!password.value.match(/[A-Z]/)) {
        password.classList.add("error");
        errorMessage.textContent =
          "Password needs to have at least 1 upper case letter.";
        return;
      }
      if (!password.value.match(/\d+/g)) {
        password.classList.add("error");
        errorMessage.textContent = "Password needs to have at least 1 number.";
        return;
      }
      errorMessage.textContent = "Form added successfully";
      setTimeout(() => {
        window.location.reload();
      }, 5000);
}

const form = document.querySelector("form");
form.addEventListener("submit", submit);