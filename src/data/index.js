async function fetchCocktail() {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/random.php`
  );
  const data = await response.json();
  const cocktail = await Object.entries(data.drinks[0]);
  const listOfIngredients = [];
  for (const key in Object.keys(cocktail)) {
    if (parseInt(key) >= 17 && parseInt(key) <= 31) {
      listOfIngredients.push(cocktail[key][1]);
    }
  }
  function isString(ingredient) {
    if (typeof ingredient === "string") {
      return ingredient;
    }
  }
  const ingredientsList = listOfIngredients.filter(isString);
  console.log(listOfIngredients);
  // const entries = Object.entries(cocktail);
  // const key = Object.keys(cocktail);
  console.log(ingredientsList);
  console.log("data", cocktail);

  // console.log("ingredient", cocktail.strIngredient1);
  // console.log("measurement", cocktail.strMeasure1);
  // console.log("object.entries log", entries);
  // console.log("object.key log", key);

  return cocktail;
}

export default fetchCocktail;
