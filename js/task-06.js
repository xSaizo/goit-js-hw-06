const validationInput = document.querySelector("#validation-input");
validationInput.addEventListener("blur", () => {
  const expectedLength = parseInt(validationInput.getAttribute("data-length"));
  const enteredValueLength = validationInput.value.length;
  if (enteredValueLength === expectedLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.add("invalid");
  }
});
