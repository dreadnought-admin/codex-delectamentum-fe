import React, { useState } from 'react'

const RecipeAPI = "http://localhost:9292/recipes"

const RecipeForm = ({ onAddRecipe }) => {
  const [formData, setFormData] = useState({
    title: "",
    series: "",
    image_url: "",
    prep_time: "",
    ingredients: [""],
    instructions: [""]
  });

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData((formData) => ({...formData, [name]: value}))
  }

  const handleSubmit = data => {
    
    onAddRecipe(data)
    

    setFormData({
      title: "",
      series: "",
      image_url: "",
      prep_time: "",
      ingredients: [""],
      instructions: [""]
    });
  }  

  return (
    <div className="form-container" id="form-container">
      <form id="recipe-form" autoComplete="off" onSubmit={handleSubmit}>
      <fieldset className="newFormField">
        <legend>
          Stop Right There, Criminal Scum--I Mean, Chef!
        </legend>
        <h2>
          Submit a New Recipe!
        </h2>
        <ul className="inputList">
          <li>
            <label className="label">Title:</label>
            <input
            className="formInput"
            type="text"
            name="title"
            placeholder="Enter your recipe's name"
            value={formData.title}
            onChange={handleChange}
            />
          </li>
          <li>
            <label className="label">Series:</label>
            <input
            className="formInput"
            type="text"
            name="series"
            placeholder="What series is it from?"
            value={formData.series}
            onChange={handleChange}
            />
          </li>
          <li>
            <label className="label">Image URL:</label>
            <input
            className="formInput"
            type="text"
            name="image_url"
            placeholder="Please enter an image URL"
            value={formData.image_url}
            onChange={handleChange}
            />
          </li>

          <li>
            <label className="label">Prep Time:</label>
            <input
            className="formInput"
            type="text"
            name="prep_time"
            placeholder="How long does it take to prepare?"
            value={formData.prep_time}
            onChange={handleChange}
            />
          </li>

          <li>
            <label className="label">Ingredients:</label>
            <input
            className="formInput"
            type="text"
            name="ingredients"
            placeholder="What ingredients do you need?"
            value={formData.ingredients}
            onChange={handleChange}
            />
          </li>

          <li>
            <label className="label">Instructions:</label>
            <input
            className="formInput"
            type="text"
            name="instructions"
            placeholder="Please enter your instructions"
            value={formData.instructions}
            onChange={handleChange}
            />
          </li>

        </ul>
      </fieldset>
        <button className="button" type="button" onClick={handleSubmit}>Submit!</button>
      </form>
    </div>
  )
}

export default RecipeForm
