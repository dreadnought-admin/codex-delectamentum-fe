import React, { useState, useEffect } from "react";
// import { Switch, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';


const RecipeAPI =  "http://localhost:9292/recipes"
const UserAPI = "http://localhost:9292/users"
const ReviewAPI = "http://localhost:9292/reviews"

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [updateRecipes, setUpdateRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(RecipeAPI)
    .then((r) => r.json())
    .then((recipes) => {
      setRecipes(recipes)
    })
  }, [updateRecipes])

  const handleAddRecipe = newRecipe => {
    setRecipes([...recipes, newRecipe]);
    setUpdateRecipes(updateRecipes)
  }

  const onClickDelete = id => { 
    fetch(`http://localhost:9292/recipes/${id}`, {
      method: "DELETE",
    });
    setUpdateRecipes(!updateRecipes)
  }

  return(
    <div className="App">
      <Header />
      <Main/>
      <Footer />
    </div>
  )
}


export default App; 
  
