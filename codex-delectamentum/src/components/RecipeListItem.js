import React, { useState } from 'react'
import { Link } from "react-router-dom"

const RecipeListItem = ({ recipe, handleDelete, enterEditMode }) => {

  const { id, title, series, image_url, 
  prep_time, ingredients, instructions } = recipe 

  const handleEditClick = () => {
    enterEditMode(id);
  }

  console.log({ingredients})

 
  return (
    <div className="recipeContainer">
      <div>
        <ul className="recipeImg">
          <img className="image" src={image_url}></img>
        </ul>
      </div>

      <div>
        <h2 className="title">{title} | {series}</h2>
        <h3 className="prep">Total Time to Prepare: {prep_time}</h3>
        <h2 className="subheader">Scavenge For:</h2>
        <p className="ingredients">{ingredients}</p>
        <h2 className="subheader">Prepare yourselves!</h2>
        <p className="instructions">{instructions}</p>
        <button className="button" type="button" id={id} onClick={() => handleDelete(id)}>🗑️ Bin it!</button>
        <Link to={`recipes/${id}/edit`}>
          <button className="button" onClick={handleEditClick}>
            ✒️Edit This Recipe!
          </button>
        </Link>
      </div>
    </div>
  )
}

export default RecipeListItem
