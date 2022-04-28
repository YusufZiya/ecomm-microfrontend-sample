import faker from "faker";

const mount = (el) => {
  let prodcuts = "";

  for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();
    prodcuts += `<div>${name}</div>`;
  }

  el.innerHTML = prodcuts;
};

//Context/Situation 1
//Localde calisma durumu
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");

  if (el) {
    mount(el);
  }
}

//Context/Situation 2
//Container icerisinde calisma durumu
export { mount };
