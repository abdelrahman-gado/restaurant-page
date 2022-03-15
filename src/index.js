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


header.appendChild(homeBtn);
header.appendChild(menuBtn);
header.appendChild(contactBtn);


content.appendChild(header);