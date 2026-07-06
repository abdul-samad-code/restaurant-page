function contact(){


const container = document.createElement("div");
container.classList.add("contact");
const contactMe = document.createElement("h1");
contactMe.textContent="Contact Me";
const phoneNumber = document.createElement("h3");
phoneNumber.textContent="Phone No: 9594138854";
const mail = document.createElement("h3")
mail.textContent="samad@gmail.com";

container.append(
    contactMe,
    phoneNumber,
    mail
)
return container;

}

export default contact;

