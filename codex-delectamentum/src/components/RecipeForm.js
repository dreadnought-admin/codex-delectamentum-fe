import React, { useState } from 'react'

const RecipeAPI = "http://localhost:9292/recipes"

const RecipeForm = ({ recipes, setRecipes }) => {
  const [formData, setFormData] = useState({
    title: "",
    series: "",
    image_url: "",
    prep_time: "",
    ingredients: "",
    instructions: ""
  });

  const handleChange = (e) => {
    let newInfo = {...formData}
    newInfo[e.target.id] = e.target.value
    setFormData(newInfo)
  }

  // submit must be fixed! it DOES post to the db, but with no values :( everything returns null

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.title === "" ||
        formData.series === "" ||
        formData.image_url === "" ||
        formData.prep_time === "" ||
        formData.ingredients === "" ||
        formData.instructions === "") {
          alert("Ye shall not pass! 🛡️ Please complete form to submit!") 
          return 
        }

        fetch("http://localhost:9292/recipes", 
                {   method: "POST",
                    headers: {"Content-Type" : "application/json"},
                    body: JSON.stringify(formData)
                }
            ).then(res => res.json())
            .then(data => setRecipes([...recipes, data]))

            setFormData({
              title: "",
              series: "",
              image_url: "",
              prep_time: "",
              ingredients: "",
              instructions: ""
            })
    }

        
    

  return (
    <div className="form-container" id="form-container">
      <form id="recipe-form" autoComplete="off" onSubmit={handleSubmit}>
      <fieldset className="newFormField">
        <legend className="legend">
          Stop Right There, Criminal Scum--I Mean, Chef!
        </legend>
        <h2 className="newRecipeHeader">
          Submit a New Recipe!
        </h2>
        <ul className="inputList">
          <li>
            <label className="label">Title: </label>
            <input
            className="formInput"
            type="text"
            name="title"
            id="title"
            placeholder="Enter your recipe's name"
            value={formData.title}
            onChange={handleChange}
            />
          </li>
          <li>
            <label className="label">Series: </label>
            <input
            className="formInput"
            type="text"
            name="series"
            id="series"
            placeholder="What series is it from?"
            value={formData.series}
            onChange={handleChange}
            />
          </li>
          <li>
            <label className="label">Image URL: </label>
            <input
            className="formInput"
            type="text"
            name="image_url"
            id="image_url"
            placeholder="Please enter an image URL"
            value={formData.image_url}
            onChange={handleChange}
            />
          </li>

          <li>
            <label className="label">Prep Time: </label>
            <input
            className="formInput"
            type="text"
            name="prep_time"
            id="prep_time"
            placeholder="How long does it take to prepare?"
            value={formData.prep_time}
            onChange={handleChange}
            />
          </li>

          <li>
            <label className="label">Ingredients: </label>
            <input
            className="formInput"
            type="text"
            name="ingredients"
            id="ingredients"
            placeholder="What ingredients do you need?"
            value={formData.ingredients}
            onChange={handleChange}
            />
          </li>

          <li>
            <label className="label">Instructions: </label>
            <input
            className="formInput"
            type="text"
            name="instructions"
            id="instructions"
            placeholder="Please enter your instructions"
            value={formData.instructions}
            onChange={handleChange}
            />
          </li>

        <li>
          <button className="newSubmitButton" type="button" onClick={handleSubmit}>Submit! 🏹</button>
        </li>

        </ul>

      </fieldset>
        
      </form>
    </div>
  )
}

export default RecipeForm
