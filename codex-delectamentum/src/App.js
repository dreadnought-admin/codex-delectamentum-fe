import React, { useState, useEffect } from "react";
// import { Switch, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';


const RecipeAPI =  "http://localhost:9292/recipes"

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [updateRecipes, setUpdateRecipes] = useState([]);
  const [isMedieval, setIsMedieval] = useState(true);

  useEffect(() => {
    fetch(RecipeAPI)
    .then((r) => r.json())
    .then((data) => {
      setRecipes(data)
    })
  }, [updateRecipes])

  // add a recipe 


  // delete a recipe 
  // will belong to a delete button on each recipe
  // must be fixed! does not work yet

  const onClickDelete = recipe => { 
    fetch(`http://localhost:9292/recipes/${recipe.id}`, {
      method: "DELETE",
    });
    const remainingRecipes = recipes.filter(
      (eachRecipe) => parseInt(eachRecipe.id) !== parseInt(recipe.id)
    );
    setRecipes(remainingRecipes);
  }

  // patch request 
  // intended to update instructions 
  // 10000% need to redo this

  const updateRecipeInstructions = (eachRecipe) => {
    fetch(`http://localhost:9292/recipes/${eachRecipe.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        instructions: eachRecipe.instructions
      }),
    })
  }



  const onToggleMedieval = () => {
    setIsMedieval(!isMedieval)
  }


  return(
    <div className="App">

      <Header 
      isMedieval={isMedieval}
      onToggleMedieval={onToggleMedieval}
      />

      <Main 
      recipes={recipes}
      setRecipes={setRecipes}
      onClickDelete={onClickDelete} 
      />

      <Footer />

    </div>
  )
}


export default App; 
  
