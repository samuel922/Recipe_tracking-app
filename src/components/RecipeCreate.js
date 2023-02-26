import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  const initialFormData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  }

  const [formData, setFormData] = useState({...initialFormData})

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const handleChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  //Handle the submitted form and clear the inputs
  const handleSubmit = (event) => {
    event.preventDefault()

    createRecipe(formData)

    setFormData({...initialFormData})
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input 
                type="text" 
                placeholder="Name" 
                name="name"
                value={formData.name} 
                onChange={handleChange}
             />
            </td>
            <td>
            <input 
                type="text" 
                placeholder="Cuisine" 
                name="cuisine"
                value={formData.cuisine} 
                onChange={handleChange}
             />
            </td>
            <td>
            <input 
                type="url" 
                placeholder="Photo" 
                name="photo"
                value={formData.photo} 
                onChange={handleChange}
             />
            </td>
            <td>
              <textarea 
                name="ingredients"  
                value={formData.ingredients}  
                onChange={handleChange}
                rows="2"
              />
            </td>
            <td>
            <textarea 
                name="preparation"  
                value={formData.preparation}  
                onChange={handleChange} 
                rows="2"
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
