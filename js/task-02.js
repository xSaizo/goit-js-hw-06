const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
const addIngredients = ingredients
  .map((ingredient) => `<li class = "item">${ingredient}</li>`)
  .join("");

ingredientsList.innerHTML = addIngredients;
