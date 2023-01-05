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

  const onToggleMedieval = () => {
    setIsMedieval(!isMedieval)
  }

  console.log(RecipeAPI);

  return(
    <div className="App">

      <Header 
      isMedieval={isMedieval}
      onToggleMedieval={onToggleMedieval}
      />

      <Main />
      <Footer />
    </div>
  )
}


export default App; 
  
