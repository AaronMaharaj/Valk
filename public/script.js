// const loadFoodList = async () => {
//   // import axios from 'axios';
//   const options = {
//     method: "GET",
//     url: "https://the-mexican-food-db.p.rapidapi.com/",
//     headers: {
//       "X-RapidAPI-Key": "f1fd744881msh8c22094926a1e18p10f8e4jsnf92d1e81214b",
//       "X-RapidAPI-Host": "the-mexican-food-db.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// Function to generate prices within a given range
const boundedPriceGen = (lo, hi) => {
	return Math.floor(Math.random() * (hi - lo) + lo);
};

// Function to load all the foods from the API
const loadFoodList = async () => {
	try {
		const response = await axios.get("listfoods.json");
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

// Function to filter relevant foods
async function filterRelevantFoods() {
	try {
		const allFoods = await loadFoodList();

		if (allFoods.length === 0) {
			console.log("No data loaded.");
			return;
		}

		const tacoArray = allFoods.filter((food) =>
			food.title.toLowerCase().includes("tacos")
		);
		const guacamoleArray = allFoods.filter((food) =>
			food.title.toLowerCase().includes("guacamole")
		);
		const saladArray = allFoods.filter((food) =>
			food.title.toLowerCase().includes("salad")
		);

		tacoArray.forEach(printProduct);

		guacamoleArray.forEach(printProduct);

		saladArray.forEach(printProduct);
	} catch (error) {
		console.error("Error filtering foods:", error);
	}
}

// Function to print product details
function printProduct(product) {
	console.log(`Title: ${product.title}, Image: ${product.image}`);

	const tacoSection = document.querySelector("#tacos");
  const tacoContainer = tacoSection.querySelector(".menu-item-container");

	const guacamoleSection = document.querySelector("#guacamole");
  const guacamoleContainer = guacamoleSection.querySelector(".menu-item-container");

	const saladSection = document.querySelector("#salads");
  const saladContainer = saladSection.querySelector(".menu-item-container");

	const card = document.createElement("div");
	const img = document.createElement("img");
	const h3 = document.createElement("h3");
	const p = document.createElement("p");
	const button = document.createElement("button");

	card.setAttribute("class", "menu-item-card");
	img.setAttribute("src", `${product.image}`);
	h3.textContent = `${product.title}`;

	if (product.title.toLowerCase().includes("tacos")) {
		p.textContent = `Price: $${boundedPriceGen(20, 40)}`;
	} else if (product.title.toLowerCase().includes("guacamole")) {
		p.textContent = `Price: $${boundedPriceGen(15, 40)}`;
	} else if (product.title.toLowerCase().includes("salad")) {
		p.textContent = `Price: $${boundedPriceGen(15, 30)}`;
	}

	button.textContent = "Add to Cart";

	card.appendChild(img);
	card.appendChild(h3);
	card.appendChild(p);
	card.appendChild(button);

	if (product.title.toLowerCase().includes("tacos")) {
		tacoContainer.appendChild(card);
	} else if (product.title.toLowerCase().includes("guacamole")) {
		guacamoleContainer.appendChild(card);
	} else if (product.title.toLowerCase().includes("salad")) {
		saladContainer.appendChild(card);
	}
}

/* <div class="menu-item-card">
	<img src="https://apipics.s3.amazonaws.com/mexican_api/1.jpg" />
	<h3>Pressure cooker refried beans</h3>
	<p>$50.00</p>
	<button>Add To Cart</button>
</div>; */

filterRelevantFoods();

document.addEventListener("DOMContentLoaded", () => {
	// Toggle menu visibility
	document.querySelector("#menu-icon").addEventListener("click", () => {
		document.querySelector("#nav-pages").classList.toggle("showmenu");
	});

	// Toggle login form visibility
	document.querySelector("#login-icon").addEventListener("click", () => {
		document.querySelector(".login-form").classList.toggle("showlogin");
	});
});
