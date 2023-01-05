import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState(null)
  const {id} = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/recipes/${id}`)
    .then(r => r.json())
    .then(data => setRecipe(data))
  }, [id])

  if(!recipe) { return <div></div>}

  const { title, series, image_url, prep_time, ingredients, instructions } = recipe;

  return(
    <section>
      <div>
        <div>
          <img src={image_url} alt={title}/>
        </div>
        <div>
          <h2>{title}</h2>
          <h3>{series}</h3>
          <p>{prep_time}</p>
          <p>{ingredients}</p>
          <p>{instructions}</p>
        </div>
      </div>
    </section>
)};

export default RecipeDetail
