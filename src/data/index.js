async function fetchCocktail() {
   const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/random.php`
   );
   const data = await response.json();
   const cocktail = await Object.entries(data.drinks[0]);

   // const entries = Object.entries(cocktail);
   // const key = Object.keys(cocktail);

   console.log("data", cocktail);
   // console.log("ingredient", cocktail.strIngredient1);
   // console.log("measurement", cocktail.strMeasure1);
   // console.log("object.entries log", entries);
   // console.log("object.key log", key);

   return cocktail;
}

export default fetchCocktail;
