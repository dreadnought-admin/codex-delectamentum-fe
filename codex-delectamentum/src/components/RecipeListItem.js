import React from 'react'

const RecipeListItem = ({ recipe, onClickDelete }) => {

  const { id, title, series, image_url, 
  prep_time, ingredients, instructions, reviews, user } = recipe 

    // coming back  to this
    

    const handleDelete = (e) => {
      onClickDelete(e);
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
        <button type="button" id={id} onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default RecipeListItem
