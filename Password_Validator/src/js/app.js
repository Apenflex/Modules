import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import ui from "./config/ui.config";
import check from "./helpers/regexp-validate";
import { validate } from "./helpers/validate";
import { showInputError, removeInputError } from "./views/form";
import { login } from "./services/auth.service";
import { notify } from "./views/notifications";

import { showHowManyCharacters, checkPassword, checkPasswordFocus, } from "./helpers/regexp-validate";

import { getNews } from "./services/news.service";

const { form, inputEmail, inputPassword } = ui;
const { body, pswrd, toggleBtn, showCharactersModal } = check;
const inputs = [inputEmail, inputPassword];

// Events
form.addEventListener("submit", (e) => {
  e.preventDefault();
  onSubmit();
});

inputs.forEach((el) =>
  el.addEventListener('focus', () => removeInputError(el))
);

// Function to toggle the password
toggleBtn.addEventListener("click", function () {
  if (pswrd.type === "password") {
    pswrd.type = "text";
    toggleBtn.classList.add("hide");
  } else {
    pswrd.type = "password";
    toggleBtn.classList.remove("hide");
  }
});

pswrd.addEventListener("click", showHowManyCharacters);
pswrd.addEventListener("keyup", checkPasswordFocus);
pswrd.addEventListener("keyup", checkPassword);

body.addEventListener("click", function (e) {
  if (e.target !== pswrd && e.target !== toggleBtn) {
    showCharactersModal.classList.remove("show-validation");
  }
});

// Handlers
async function onSubmit() {
    const isValidForm = inputs.every((el) => {
        const isValidInput = validate(el);
        if (!isValidInput) {
            showInputError(el);
        }
        return isValidInput;
    });
    
  if (!isValidForm) return;

  try {
    await login(inputEmail.value, inputPassword.value);
    await getNews();
    form.reset();
    // Show success notify
    notify({ msg: 'Login success', className: 'alert-success' });
  } catch (err) {
    // Show error notify
    notify({ msg: 'Login failed', className: 'alert-danger' });
    console.log(err);

  }
}

// setTimeout(
//   () => notify({ msg: "Login unsuccess1", className: "alert-danger" }),
//   700
// );
// setTimeout(
//   () => notify({ msg: "Login unsuccess2", className: "alert-warning" }),
//   1400
// );
// setTimeout(
//   () => notify({ msg: "Login unsuccess 3", className: "alert-primary" }),
//   2000
// );
