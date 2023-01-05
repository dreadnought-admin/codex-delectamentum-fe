import React from 'react'

const RecipeListItem = ({ recipe }) => {

  const { title, series, image_url, 
  prep_time, ingredients, instructions } = recipe 

    console.log({instructions})

  return (
    <div className="recipeContainer">
      <div>
        <ul className="recipeImg">
          <img src={image_url}></img>
        </ul>
      </div>

      <div>
        <h2>{title} | {series}</h2>
        <h4>{prep_time}</h4>
        <p>{ingredients}</p>
        <p>{instructions}</p>
      </div>
    </div>
  )
}

export default RecipeListItem
