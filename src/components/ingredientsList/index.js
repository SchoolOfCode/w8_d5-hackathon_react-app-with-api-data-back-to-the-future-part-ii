import React, { useState } from "react";

/*
GOAL: create a listitem for each ingredient and add it to unordered list

Requires: information on ingredients
! - Info: get and store the date in an "ingredients" array → take this as function input

let ingredients = [
    "ingredient1", "ingredient2", "ingredient3"
]

- map over ingredients array
- create li for each

returns: li for each ingredient




*/

function IngredientList({ strIngredient1, strIngredient2 }) {
   const [ingredients, setIngredients] = useState([]);

   return <ul></ul>;
}
