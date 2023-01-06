import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

const initialState = {
  title: "",
  series: "",
  image_url: "",
  prep_time: "",
  ingredients: "",
  instructions: ""
}

const RecipeEditForm = ({ onUpdateRecipe }) => {
  const [formData, setFormData] = useState(initialState);
  const [recipe, setRecipe] = useState({});

  const { title, series, image_url, 
    prep_time, ingredients, instructions } = formData;

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:9292/recipes/${id}`)
    .then((res) => res.json())
    .then((recipe) => setFormData(recipe));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({ ...formData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRecipe = {
      title: formData.title,
      series: formData.series,
      image_url: formData.image_url,
      prep_time: formData.prep_time,
      ingredients: formData.ingredients,
      instructions: formData.instructions
    }
    fetch(`http://localhost:9292/recipes/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRecipe)
    })
    .then((res) => res.json())
    .then((updatedRecipe) => {
      onUpdateRecipe(updatedRecipe);
    history.push("/recipes")
  })}

  return (
    <div>
    <form onSubmit={handleSubmit} className="editForm" autoComplete="off">
      <h3 className="editHeader">Ye Olde Recipe Editor 📜✍🏿</h3>
      <fieldset className="editField">
        <legend className="legend">
          What Brave New Adventure Shall This Recipe Take? 🧝🏽‍♂️
        </legend>
      <ul className="editList">
      <li className="editListItem">
      <label htmlFor="title">Title: </label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={handleChange}
      />
      </li>

      <li className="editListItem">
      <label htmlFor="series">Series: </label>
      <input
        type="text"
        id="series"
        name="series"
        value={series}
        onChange={handleChange}
      />
      </li>

      <li className="editListItem">
      <label htmlFor="image">Image: </label>
      <input
        type="text"
        id="image_url"
        name="image_url"
        value={image_url}
        onChange={handleChange}
      />
      </li>

      <li className="editListItem">
      <label htmlFor="prep_time">Prep Time: </label>
      <input
        type="text"
        id="prep_time"
        name="prep_time"
        value={prep_time}
        onChange={handleChange}
      />
      </li>

      <li className="editListItem">
      <label htmlFor="ingredients">Ingredients: </label>
      <input
        type="text"
        id="ingredients"
        name="ingredients"
        value={ingredients}
        onChange={handleChange}
      />
      </li>

      <li className="editListItem">
      <label htmlFor="instructions">Instructions: </label>
      <input
        type="text"
        id="instructions"
        name="instructions"
        value={instructions}
        onChange={handleChange}
      />
      </li>
      </ul>

      <button className="button" type="submit">Update Recipe! 🪄</button>
      </fieldset>
    </form>
    </div>
  )

}


export default RecipeEditForm
