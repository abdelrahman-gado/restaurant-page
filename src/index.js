import { menuDiv } from "./menu-tab.js";
import { homeDiv } from "./home-tab.js";
import { contactDiv } from "./contact-tab.js";


function createButton(name, className) {
    const btn = document.createElement("button");
    btn.textContent = name;
    btn.classList.add(className);
    return btn;
}


const content = document.querySelector("#content");

const header = document.createElement("header");
header.classList.add("header");



const homeBtn = createButton("Home", "nav-btn");
const menuBtn = createButton("Menu", "nav-btn");
const contactBtn = createButton("Contact", "nav-btn");


const tabDiv = document.createElement("div");
tabDiv.style.width = "100%";
tabDiv.style.height = "100vh";

homeBtn.addEventListener("click", (e) => {
    tabDiv.innerHTML = "";
    tabDiv.appendChild(homeDiv);
});

menuBtn.addEventListener("click", (e) => {
    tabDiv.innerHTML = "";
    tabDiv.appendChild(menuDiv);
});

contactBtn.addEventListener("click", (e) => {
    tabDiv.innerHTML = "";
    tabDiv.appendChild(contactDiv);
});


header.appendChild(homeBtn);
header.appendChild(menuBtn);
header.appendChild(contactBtn);


content.appendChild(header);
content.appendChild(tabDiv);