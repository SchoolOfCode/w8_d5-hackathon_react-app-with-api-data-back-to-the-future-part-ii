async function fetchCocktail() {
   const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/random.php`
   );
   const data = await response.json();
   const cocktail = await data.drinks[0];

   console.log("data", cocktail);
   console.log("ingredient", cocktail.strIngredient1);
   console.log("key access", cocktail[12]);
   console.log("measurement", cocktail.strMeasure1);
   return cocktail;
}

export default fetchCocktail;
