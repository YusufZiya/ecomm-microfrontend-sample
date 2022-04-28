import { mount } from "products/ProductsIndex";
import { mount as mountCart } from "cart/CartShow";

console.log("Container!");

const products = document.querySelector("#container-products");
if (products) {
  mount(products);
}

const cart = document.querySelector("#container-cart");
if (cart) {
  mountCart(cart);
}
