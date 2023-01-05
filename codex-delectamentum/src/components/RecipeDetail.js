import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState()
  const {id} = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/recipes/${id}`)
    .then(r => r.json())
    .then(data => setRecipe(data))
  })

  return (
    !recipe ? <p>404: Recipe Not Found</p> : (
      <div></div>
    )
  )
}

export default RecipeDetail
