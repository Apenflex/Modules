let pswrd = document.querySelector("#pswrd");
let toggleBtn = document.querySelector("#toggleBtn");

let lowerCase = document.querySelector("#lower");
let upperCase = document.querySelector("#upper");
let digit = document.querySelector("#number");
let specialChar = document.querySelector("#special");
let minLength = document.querySelector("#length");

toggleBtn.addEventListener('click', function () {
    if (pswrd.type === "password") {
        pswrd.type = "text";
        toggleBtn.classList.add("hide");
    } else {
        pswrd.type = "password";
        toggleBtn.classList.remove("hide");
    }
});

pswrd.addEventListener('keyup', checkPassword);

function checkPassword() {
    const lowerCaseLetters = new RegExp('(?=.*[a-z])');
    const upperCaseLetters = new RegExp ('(?=.*[A-Z])');
    const numbers = new RegExp ('(?=.*[0-9])');
    const specialCharacters = new RegExp ('(?=.*[!@#\$%\^&\*])');
    const minimumLength = new RegExp ('(?=.{8,})');

    if (lowerCaseLetters.test(pswrd.value)) {
        lowerCase.classList.add("valid");
    } else {
        lowerCase.classList.remove("valid");
    }

    if (upperCaseLetters.test(pswrd.value)) {
        upperCase.classList.add("valid");
    } else {
        upperCase.classList.remove("valid");
    }

    if (numbers.test(pswrd.value)) {
        digit.classList.add("valid");
    } else {
        digit.classList.remove("valid");
    }

    if (specialCharacters.test(pswrd.value)) {
        specialChar.classList.add("valid");
    } else {
        specialChar.classList.remove("valid");
    }

    if (minimumLength.test(pswrd.value)) {
        minLength.classList.add("valid");
    } else {
        minLength.classList.remove("valid");
    }

        const unFocus = document.querySelector(".inputBox");
        unFocus.addEventListener("focusin", function () {
          if (
            lowerCaseLetters.test(pswrd.value) === true &&
            upperCaseLetters.test(pswrd.value) === true &&
            numbers.test(pswrd.value) === true &&
            specialCharacters.test(pswrd.value) === true &&
            minimumLength.test(pswrd.value) === true
          ) {
            unFocus.classList.add("focusedPassword");
          } else {
            unFocus.classList.remove("focusedPassword");
          }
        });
}

