const recipes = [
  {
    name: "Sweet Potato Waffles",
    tags: ["Waffles", "Sweet Potato", "Side"],
    description: "Savory waffles made with Sweet potato with a hint of Ginger",
    image: "./images/sweet-potato-waffle-md.jpg",
    rating: 4
  },
  {
    name: "Escalope de Poulet a la Creme with steamed green beans (Chicken with Cream)",
    tags: ["Chicken", "Entree"],
    description: "Delicious quick and easy creamy rice dish. The mustard, mushrooms, and lemon all blend together wonderfully",
    image: "./images/escalopes-de-poulet-a-la-creme.webp",
    rating: 4.5
  },
  {
    name: "Oven Roasted potato slices",
    tags: ["Potatoes", "side"],
    description: "Easy and delicious oven roasted potatoes that go great with almost anything.",
    image: "./images/roasted-potatoes.webp",
    rating: 4
  },
  {
    name: "Black Beans and Rice",
    tags: ["Southwest", "entree"],
    description: "Black beans and tomatoes served over a bed of rice. Top with cheese and scoop up with tortilla chips for maximum enjoyment.",
    image: "./images/black-beans-and-rice.jpg",
    rating: 3
  },
  {
    name: "Chicken Curry",
    tags: ["chicken", "entree", "Indian"],
    description: "Quick and easy Chicken curry recipe made with easy to find ingredients.",
    image: "./images/chicken-curry.webp",
    rating: 5
  },
  {
    name: "Chocolate Chip Cookies",
    tags: ["dessert"],
    description: "Delicious soft chocolate chip cookies with coconut.",
    image: "./images/chocolate-chip-cookies.jpg",
    rating: 5
  },
  {
    name: "Gooseberry cake with vanilla cream and crumble",
    tags: ["dessert", "German"],
    description: "This gooseberry cake with crumble is easy to follow, a bit tart and not too sweet.",
    image: "./images/german-gooseberry-cake.jpg",
    rating: 5
  },
  {
    name: "Apple Crisp",
    tags: ["dessert"],
    description: "This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream.",
    image: "./images/apple-crisp.jpg",
    rating: 4
  }
];

const recipeContainer = document.querySelector("#recipe-container");
const searchForm = document.querySelector(".search");
const searchInput = document.querySelector(".search input");

searchForm.addEventListener("submit", searchRecipes);

function searchRecipes(event) {
  event.preventDefault();

  const query = searchInput.value.toLowerCase();

  const filteredRecipes = recipes.filter(function(recipe) {
    return (
      recipe.name.toLowerCase().includes(query) ||
      recipe.description.toLowerCase().includes(query) ||
      recipe.tags.find(function(tag) {
        return tag.toLowerCase().includes(query);
      })
    );
  });

  const sortedRecipes = filteredRecipes.sort(compareRecipes);

  recipeContainer.innerHTML = "";

  sortedRecipes.forEach(function(recipe) {
    renderRecipe(recipe);
  });
}

function compareRecipes(a, b) {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  }

  return 0;
}

function tagTemplate(tags) {
  return tags.map(function(tag) {
    return `<span class="tag">${tag}</span>`;
  }).join(" ");
}

function ratingTemplate(rating) {
  let html = `
    <span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">
  `;

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      html += `<span aria-hidden="true">⭐</span>`;
    } else {
      html += `<span aria-hidden="true">☆</span>`;
    }
  }

  html += `</span>`;

  return html;
}

function recipeTemplate(recipe) {
  return `
    <section class="recipe-card">
      <img class="recipe-img" src="${recipe.image}" alt="${recipe.name}">

      <div class="recipe-info">
        ${tagTemplate(recipe.tags)}
        <h2>${recipe.name}</h2>
        ${ratingTemplate(recipe.rating)}
        <p class="description">${recipe.description}</p>
      </div>
    </section>
  `;
}

function renderRecipe(recipe) {
  recipeContainer.innerHTML += recipeTemplate(recipe);
}

function init() {
  const randomNum = Math.floor(Math.random() * recipes.length);
  renderRecipe(recipes[randomNum]);
}

init();