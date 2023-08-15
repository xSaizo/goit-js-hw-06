function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");
const colorSpan = document.querySelector(".color");
const button = document.querySelector(".change-color");
button.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  colorSpan.textContent = getRandomHexColor();
});
