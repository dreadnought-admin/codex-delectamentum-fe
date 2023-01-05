import React, { useState, useEffect } from 'react'
import { Switch, Route } from "react-router-dom";


import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';
import RecipeDetail from './RecipeDetail'
import RecipeEditForm from './RecipeEditForm';
import UserList from './UserList';
import Search from './Search';
import About from './About';

const UserAPI = "http://localhost:9292/users"
const ReviewAPI = "http://localhost:9292/reviews"



const Main = ({ recipes, setRecipes, handleDelete, enterEditMode, recipeId, completeEditing, onUpdateRecipe }) => {
    
    
    const [search, setSearch] = useState("");

    const searchResult = recipes.filter(recipe => {
      return(
        recipe.title.toLowerCase().includes(search.toLowerCase())
      )
    })

    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch(UserAPI)
      .then((r) => r.json())
      .then((userData) => {
        setUsers(userData)
      })
    }, [])


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

    <Route path="/users">
      <UserList users={users}
      recipes={recipes}/>
    </Route>
     
    </Switch>
    </div>
  )
}

export default Main
