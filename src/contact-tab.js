const contactDiv = document.createElement("div");
contactDiv.classList.add("main-div");

const heading = document.createElement("h1");
heading.textContent = "Contact Us";
heading.classList.add("item");

const contactOneDiv = document.createElement("div");
contactOneDiv.classList.add("item", "element");


const contactOnehead = document.createElement("h3");
contactOnehead.textContent = "Mama Salasa";
contactOneDiv.appendChild(contactOnehead);

const contactOneDescription = document.createElement("p");
contactOneDescription.innerHTML = `<h4>chef</h4><h4>555-555-5554</h4><h4>totallyRealEmail@notfake.com</h4>`
contactOneDescription.style.width = "240px";
contactOneDescription.style.padding = "20px";
contactOneDiv.appendChild(contactOneDescription);

const contactTwoDiv = document.createElement("div");
contactTwoDiv.classList.add("item", "element");


const contactTwohead = document.createElement("h3");
contactTwohead.textContent = "Papa Salasa";
contactTwoDiv.appendChild(contactTwohead);

const contactTwoDescription = document.createElement("p");
contactTwoDescription.innerHTML = `<h4>chef</h4><h4>555-555-5554</h4><h4>totallyRealEmail@notfake.com</h4>`
contactTwoDescription.style.width = "240px";
contactTwoDescription.style.padding = "20px";
contactTwoDiv.appendChild(contactTwoDescription);


contactDiv.appendChild(heading);
contactDiv.appendChild(contactOneDiv);
contactDiv.appendChild(contactTwoDiv);


export { contactDiv };