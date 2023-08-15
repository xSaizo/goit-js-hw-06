const listElem = document.querySelector("#categories");
const firstUlElem = listElem.querySelectorAll("ul")[0];
const firstH2Elem = listElem.querySelectorAll("h2")[0];
const secondUlElem = listElem.querySelectorAll("ul")[1];
const secondH2Elem = listElem.querySelectorAll("h2")[1];
const thirdUlElem = listElem.querySelectorAll("ul")[2];
const thirdH2Elem = listElem.querySelectorAll("h2")[2];

console.log(`Number of categories: ${listElem.children.length}`);

console.log(`Category: ${firstH2Elem.textContent}
Elements: ${firstUlElem.children.length}`);

console.log(`Category: ${secondH2Elem.textContent}
Elements: ${secondUlElem.children.length}`);

console.log(`Category: ${thirdH2Elem.textContent}
Elements: ${thirdUlElem.children.length}`);


