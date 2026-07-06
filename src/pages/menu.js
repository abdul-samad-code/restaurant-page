import home from "./home.js";

function menu (){


const container = document.createElement("div");
container.classList.add("menu");
const pizza = document.createElement("h1");
pizza.textContent= "Pizza";
const burger = document.createElement("h1");
burger.textContent= "Burger";
const sandwitch = document.createElement("h1");
sandwitch.textContent= "Sandwitch"
const momo = document.createElement("h1");
momo.textContent= "momo";

container.append(
    pizza,
    burger,
    sandwitch,
    momo
);

return container;

}

export default menu;

