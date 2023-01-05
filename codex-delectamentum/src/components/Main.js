import React, { useState } from 'react'

import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';
import RecipeDetail from './RecipeDetail'
import RecipeEditForm from './RecipeEditForm';
import Search from './Search';
import About from './About';

const UserAPI = "http://localhost:9292/users"
const ReviewAPI = "http://localhost:9292/reviews"


const Main = ({ recipes, onAddRecipe }) => {
    
    const [search, setSearch] = useState("");

    console.log(recipes)
    console.log(UserAPI)
    console.log(ReviewAPI)

  return (
    <div>
      <RecipeList recipes={recipes} />

      <RecipeForm onAddRecipe={onAddRecipe}/>
    </div>
  )
}

export default Main
