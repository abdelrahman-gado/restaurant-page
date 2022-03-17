const homeDiv = document.createElement("div");
homeDiv.style.width = "100%";
homeDiv.style.height = "100vh";
homeDiv.style.display = "flex";
homeDiv.style.flexDirection = "column";
homeDiv.style.alignItems = "center";
homeDiv.style.justifyContent = "space-around";
homeDiv.style.backgroundColor = "red"


const heading = document.createElement("h1");
heading.textContent = "Salasa Resturant";

const welcomeText = document.createElement("p");
welcomeText.textContent = `Welcome to Salasa Restaurant,
 Here you will find the best pasta with salasa`;

const hoursUl = document.createElement("ul");
hoursUl.textContent = "Hours";

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

const locationPara = document.createElement("p");
locationPara.textContent = "12st Ahmed Orabi, Cairo, Egypt";
locationDiv.appendChild(locationPara);

homeDiv.appendChild(heading);
homeDiv.appendChild(welcomeText);
homeDiv.appendChild(hoursUl);
homeDiv.appendChild(locationDiv);

export { homeDiv };