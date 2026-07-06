function home (){
const container = document.createElement("div");
container.classList.add("hero");
const heading = document.createElement("h1");
heading.textContent= "welcome to our restaurant";
const para = document.createElement("p");
para.textContent="best food in lucknow";

container.append(
    heading,
    para

);
    return container;
}

export default home;
