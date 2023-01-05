import React, { useState } from 'react'
import { Switch, Route } from "react-router-dom";


import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';
import RecipeDetail from './RecipeDetail'
import RecipeEditForm from './RecipeEditForm';
// import UserList from './UserList';
import Search from './Search';
import About from './About';

const UserAPI = "http://localhost:9292/users"
const ReviewAPI = "http://localhost:9292/reviews"



const Main = ({ recipes, setRecipes, handleDelete, enterEditMode, recipeId, completeEditing, onUpdateRecipe }) => {
    
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
      <Switch>
      <Route exact path="/">
        <About />
        
      </Route>

    <Route exact path="/recipes">
      <Search 
      search={search} 
      setSearch={setSearch}  
      />

      <RecipeList 
      recipes={searchResult} 
      handleDelete={handleDelete}
      enterEditMode={enterEditMode}
      />
    </Route>
      
    <Route exact path="/recipes/new">
      <RecipeForm 
      recipes={recipes}
      setRecipes={setRecipes}
      />
    </Route>

    <Route path="/recipes/:id/edit">
      <RecipeEditForm
        recipeId={recipeId}
        completeEditing={completeEditing}
        onUpdateRecipe={onUpdateRecipe}
        />
    </Route>

    <Route path="/recipes/:id">
      <RecipeDetail />
    </Route>
     
    </Switch>
    </div>
  )
}

export default Main
