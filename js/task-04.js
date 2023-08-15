const counterValue = document.querySelector("#value");
const buttons = document.querySelectorAll("[data-action]");
let counter = 0;
function updateCounterValue() {
  counterValue.textContent = counter;
}

function handlerCounterAction(action) {
  if (action === "increment") {
    counter++;
  } else if (action === "decrement") {
    counter--;
  }
  updateCounterValue();
}
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.getAttribute("data-action");
    handlerCounterAction(action);
  });
});
