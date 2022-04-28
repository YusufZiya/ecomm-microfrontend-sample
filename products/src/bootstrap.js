import faker from "faker";

let prodcuts = "";

for (let i = 0; i < 3; i++) {
  const name = faker.commerce.productName();
  prodcuts += `<div>${name}</div>`;
}

document.querySelector("#dev-products").innerHTML = prodcuts;
