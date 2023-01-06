import React, { useState } from 'react'
import { Link } from "react-router-dom"

const RecipeListItem = ({ recipe, handleDelete, enterEditMode }) => {

  const { id, title, series, image_url, 
  prep_time, ingredients, instructions } = recipe 

  const handleEditClick = () => {
    enterEditMode(id);
  }


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
        <Link to={`recipes/${id}/edit`}>
          <button onClick={handleEditClick}>Edit this shit
          </button>
        </Link>
      </div>
    </div>
  )
}

export default RecipeListItem
