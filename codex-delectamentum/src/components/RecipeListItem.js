import React from 'react'

const RecipeListItem = ({ recipe, handleDelete }) => {

  const { id, title, series, image_url, 
  prep_time, ingredients, instructions, reviews, user } = recipe 


  return (
    <div className="recipeContainer">
      <div>
        <ul className="recipeImg">
          <img className="image" src={image_url}></img>
        </ul>
      </div>

      <div>
        <h2>{title} | {series}</h2>
        <h4>{prep_time}</h4>
        <p>{ingredients}</p>
        <p>{instructions}</p>
        <button type="button" id={id} onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </div>
  )
}

export default RecipeListItem
