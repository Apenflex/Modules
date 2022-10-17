/**
 * Function inputErrorTemplate
 * @param {String} msg
 */
function inputErrorTemplate(msg) {
  return `
    <div class="invalid-feedback">${msg}</div>
  `;
}

/**
 * Function showInputError. Add input error
 * @param {HTMLInputElement} el
 */
export function showInputError(el) {
  const parent = el.parentElement;
  const msg = el.dataset.invalidMessage || "Invalid input";
  const template = inputErrorTemplate(msg);
  if (!el.classList.contains("is-invalid")) {
    el.classList.add("is-invalid");
    parent.insertAdjacentHTML("beforeend", template);
  }
}
/**
 * Function removeInputError. Remove input error
 * @param {HTMLInputElement} el
 */
export function removeInputError(el) {
  const parent = el.parentElement;
  const err = parent.querySelector(".invalid-feedback");
  if (!err) return;

  el.classList.remove("is-invalid");
  parent.removeChild(err);
}
