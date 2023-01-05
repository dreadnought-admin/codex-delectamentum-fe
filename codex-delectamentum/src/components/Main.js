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
    
    console.log(recipes)
    const [search, setSearch] = useState("");

    const searchResult = recipes.filter(recipe => {
      return(
        recipe.title.toLowerCase().includes(search.toLowerCase())
      )
    })

    console.log(recipes)
    console.log(UserAPI)
    console.log(ReviewAPI)

  return (
    <div>
      <RecipeList recipes={searchResult} />
      <Search search={search} setSearch={setSearch}  />

      <RecipeForm onAddRecipe={onAddRecipe}/>
    </div>
  )
}

export default Main
