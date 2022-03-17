const homeDiv = document.createElement("div");
homeDiv.classList.add("main-div");

const heading = document.createElement("h1");
heading.textContent = "Salasa Resturant";
heading.classList.add("item");

const welcomeText = document.createElement("p");
welcomeText.textContent = `Welcome to Salasa Restaurant,
 Here you will find the best pasta with salasa`;
 welcomeText.classList.add("item", "elements");


const hoursUl = document.createElement("ul");
hoursUl.textContent = "Hours";
hoursUl.classList.add("item", "elements");


const sundayli = document.createElement("li");
sundayli.textContent = "Sunday: 8am - 8pm";
hoursUl.appendChild(sundayli);

const fridayli = document.createElement("li");
fridayli.textContent = "Friday: 6am - 10pm";
hoursUl.appendChild(fridayli);

const saturadayli = document.createElement("li");
saturadayli.textContent = "Saturday: 8am - 8pm";
hoursUl.appendChild(saturadayli);


const locationDiv = document.createElement("div");
locationDiv.textContent = "Location";
locationDiv.classList.add("item", "elements");

const locationPara = document.createElement("p");
locationPara.textContent = "12st Ahmed Orabi, Cairo, Egypt";
locationDiv.appendChild(locationPara);

homeDiv.appendChild(heading);
homeDiv.appendChild(welcomeText);
homeDiv.appendChild(hoursUl);
homeDiv.appendChild(locationDiv);

export { homeDiv };