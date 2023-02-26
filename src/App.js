import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./components/RecipeCreate";
import RecipeList from "./components/RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState([...RecipeData]);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  const createRecipe = (recipie) => {
    setRecipes([
      recipie,
      ...recipes
    ])
  } 

  const deleteRecipe = (indexToDelete) => {
    setRecipes(currentRecipes => (
      currentRecipes.filter((recipie, index) => index !== indexToDelete)
    ))
  }


  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;
