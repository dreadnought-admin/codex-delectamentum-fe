import React, { useState } from 'react'

import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';
import RecipeDetail from './RecipeDetail'
import RecipeEditForm from './RecipeEditForm';
// import UserList from './UserList';
import Search from './Search';
import About from './About';

const UserAPI = "http://localhost:9292/users"
const ReviewAPI = "http://localhost:9292/reviews"



const Main = ({ recipes, onAddRecipe, onClickDelete }) => {
    
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

      <About />

      <Search 
      search={search} 
      setSearch={setSearch}  
      />

      <RecipeList 
      recipes={searchResult} 
      onClickDelete={onClickDelete}
      />
      
      <RecipeForm 
      onAddRecipe={onAddRecipe}
      />

     

    </div>
  )
}

export default Main
