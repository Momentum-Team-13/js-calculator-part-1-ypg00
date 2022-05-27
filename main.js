let buttons = document.querySelectorAll(".button");

for (let button of buttons) {
  button.addEventListener("click", function (event) {
    console.log(event.target.textContent);
  });
}
