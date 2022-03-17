const menuDiv = document.createElement("div");
menuDiv.classList.add("main-div");

const heading = document.createElement("h1");
heading.textContent = "Main Dashes";
heading.classList.add("item");

const dishOneDiv = document.createElement("div");
dishOneDiv.classList.add("item", "element");


const dishOnehead = document.createElement("h3");
dishOnehead.textContent = "Pasta With Salasa";
dishOneDiv.appendChild(dishOnehead);

const dishOneDescription = document.createElement("p");
dishOneDescription.textContent = `uicy ripe tomatoes, fresh fragrant basil and delicious olives, 
all tossed and tangled up in al dente spaghetti. The flavour combo here is mega-simple.`
dishOneDiv.appendChild(dishOneDescription);

const dishTwoDiv = document.createElement("div");
dishTwoDiv.classList.add("item", "element");


const dishTwohead = document.createElement("h3");
dishTwohead.textContent = "Classic tomato spaghetti";
dishTwoDiv.appendChild(dishTwohead);

const dishTwoDescription = document.createElement("p");
dishTwoDescription.textContent = `This pasta sauce takes minutes to cook.
that great about this recipe for beginner cooks is that once you’ve done it a few times you can add other simple ingredients to your basic tomato sauce to completely transform it.`
dishTwoDiv.appendChild(dishTwoDescription);


menuDiv.appendChild(heading);
menuDiv.appendChild(dishOneDiv);
menuDiv.appendChild(dishTwoDiv);

export { menuDiv };