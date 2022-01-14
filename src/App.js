import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
   const [cocktail, setCocktail] = useState("");

   useEffect(() => {
      async function fetchCocktail() {
         const response = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/random.php`
         );
         const data = await response.json();
         setCocktail(data);
      }
      fetchCocktail();
   }, []);

   // console.log(cocktail);
   console.log("detail info", cocktail.drinks);

   return cocktail ? (
      <div className="App">
         <header className="App-header">
            <h1>Is this your drink?</h1>

            <h2>{cocktail.drinks[0].strDrink}</h2>
            <img
               src={cocktail.drinks[0].strDrinkThumb}
               className="App-logo"
               alt="logo"
            />
            <h3>Ingredients</h3>
            <p></p>
         </header>
      </div>
   ) : (
      <></>
   );
}

export default App;
