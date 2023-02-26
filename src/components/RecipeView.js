import React from "react"
import "./RecipeView.css"

const RecipeView = ({recipe, deleteRecipe}) => {

  const imageStyle = {
    objectFit: "scale-down",
    width: "100%",
    height: "100%"
  }
 
  return (
    <tr className="recipe">
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td >{<img type="url" style={imageStyle} src={recipe.photo} alt="recipe" />}</td>
      <td className="content_td"><p>{recipe.ingredients}</p></td>
      <td className="content_td"><p>{recipe.preparation}</p></td>
      <td>
        <button name="delete" onClick={deleteRecipe}>Delete</button>
      </td>
    </tr>
  )
}   
export default RecipeView