import style from "./styles.css";
import home from "./pages/home.js";
import menu from "./pages/menu.js";
import contact from "./pages/contact.js";



const content = document.querySelector("#content")
content.appendChild(home());

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactButton = document.querySelector("#contact");

function render(page){
    content.innerHTML="";
    content.appendChild(page());
}

render(home);

homeButton.addEventListener("click", () => {
    render(home);
})

menuButton.addEventListener("click", () => {
    render(menu);
})

contactButton.addEventListener("click", ()=>{
    render(contact);
})
