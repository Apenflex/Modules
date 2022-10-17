
const check = {
    body: document.querySelector("body"),
    pswrd: document.querySelector("#password"),
    toggleBtn: document.querySelector("#toggleBtn"),
    showCharactersModal: document.querySelector(".validation"),
};
export default check;

// List of all the characters that are allowed in the password
let lowerCase = document.querySelector("#lower");
let upperCase = document.querySelector("#upper");
let digit = document.querySelector("#number");
let specialChar = document.querySelector("#special");
let minLength = document.querySelector("#length");

// Regular expressions for the password
const lowerCaseLetters = new RegExp("(?=.*[a-z])");
const upperCaseLetters = new RegExp("(?=.*[A-Z])");
const numbers = new RegExp("(?=.*[0-9])");
const specialCharacters = new RegExp("(?=.*[!@#$%^&*])");
const minimumLength = new RegExp("(?=.{8,})");

// Function to show how many characters are in the password
export function showHowManyCharacters() {
    check.showCharactersModal.classList.add("show-validation");
    if(lowerCaseLetters.test(check.pswrd.value) === true &&
      upperCaseLetters.test(check.pswrd.value) === true &&
      numbers.test(check.pswrd.value) === true &&
      specialCharacters.test(check.pswrd.value) === true &&
      minimumLength.test(check.pswrd.value) === true) {
        check.showCharactersModal.classList.remove("show-validation");
    } else {
        check.showCharactersModal.classList.add("show-validation");
    }
}

// Function to check the password
export function checkPassword() {
  if (lowerCaseLetters.test(check.pswrd.value)) {
    lowerCase.classList.add("valid");
  } else {
    lowerCase.classList.remove("valid");
  }

  if (upperCaseLetters.test(check.pswrd.value)) {
    upperCase.classList.add("valid");
  } else {
    upperCase.classList.remove("valid");
  }

  if (numbers.test(check.pswrd.value)) {
    digit.classList.add("valid");
  } else {
    digit.classList.remove("valid");
  }

  if (specialCharacters.test(check.pswrd.value)) {
    specialChar.classList.add("valid");
  } else {
    specialChar.classList.remove("valid");
  }

  if (minimumLength.test(check.pswrd.value)) {
    minLength.classList.add("valid");
  } else {
    minLength.classList.remove("valid");
  }
}

export function checkPasswordFocus() {
    if (
      lowerCaseLetters.test(check.pswrd.value) === true &&
      upperCaseLetters.test(check.pswrd.value) === true &&
      numbers.test(check.pswrd.value) === true &&
      specialCharacters.test(check.pswrd.value) === true &&
      minimumLength.test(check.pswrd.value) === true
    ) {
      check.showCharactersModal.classList.remove("show-validation");
    } else {
      check.showCharactersModal.classList.add("show-validation");
    }
}