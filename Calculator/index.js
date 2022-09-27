(function () {
  let buttons = document.querySelector(".buttons");
  let btn = document.querySelectorAll(".btn_calc");
  let value = document.querySelector("#value");

  let body = document.querySelector("body");
  let theme = document.querySelector(".togglebtn");

  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function (e) {
      if (this.innerHTML === "=") {
        value.innerHTML =
          value.innerHTML.length === 0 ? "" : eval(value.innerHTML);
      } else if (this.innerHTML === "C") {
        value.innerHTML = "";
      } else if (this.innerHTML === "CE") {
        value.innerHTML = value.innerHTML.slice(0, -1);
      } else if (
        this.innerHTML === "/" ||
        this.innerHTML === "*" ||
        this.innerHTML === "+" ||
        this.innerHTML === "-"
      ) {
        value.innerHTML +=
          value.innerHTML.slice(-1) === "/" ||
          value.innerHTML.slice(-1) === "*" ||
          value.innerHTML.slice(-1) === "+" ||
          value.innerHTML.slice(-1) === "-"
            ? ""
            : this.innerHTML;
      } else {
        value.innerHTML += this.innerHTML;
      }
    });
  }

  theme.addEventListener("click", function () {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
      theme.style.background = "rgba(255, 255, 255, 0.5)";
      theme.style.transition = "all 0.3s ease";
      theme.innerHTML = "Light";
    } else {
      theme.style.background = "rgba(0, 0, 0, 0.5)";
      theme.style.transition = "all 0.3s ease";
      theme.innerHTML = "Dark";
    }
  });
})();
