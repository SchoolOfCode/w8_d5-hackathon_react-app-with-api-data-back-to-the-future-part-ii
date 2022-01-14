import "./App.css";
import React, { useEffect, useState } from "react";
import fetchCocktail from "./data";

function App() {
  const [cocktail, setCocktail] = useState("");

  useEffect(async () => {
    setCocktail(await fetchCocktail());
  }, []);

  //I know it's complaining but it works 🤷

  // console.log("detail info", cocktail.drinks);

  return cocktail ? (
    <div className="App">
      <header className="App-header">
        <h1>Is this your drink?</h1>

        <h2>{cocktail[1][1]}</h2>
        <img src={cocktail[16][1]} className="App-logo" alt="logo" />
        <h3>Ingredients</h3>

        <p></p>
      </header>
    </div>
  ) : (
    <></>
  );
}

export default App;
