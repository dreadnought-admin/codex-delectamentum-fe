import React, { useState, useEffect } from "react";

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';


const RecipeAPI =  "http://localhost:9292/recipes"

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [updateRecipes, setUpdateRecipes] = useState([]);
  const [recipeId, setRecipeId] = useState(null);
  const [isMedieval, setIsMedieval] = useState(true);

  // retrives recipe data

  useEffect(() => {
    fetch(RecipeAPI)
    .then((r) => r.json())
    .then((data) => {
      setRecipes(data)
    })
  }, [])
  
  // delete
  const handleDelete = (id) => {
    fetch(`http://localhost:9292/recipes/${id}`,
    { 
      method: "DELETE",
    }
  )
    .then((res) => res.json())
    .then(() => {
      setRecipes((recipes) => recipes.filter((item) => item.id !== id));
    });
  }

  // patch
  const onUpdateRecipe = (updatedRecipe) => {
    const updatedRecipes = recipes.map((ogRecipe) => {
      if (ogRecipe.id === updatedRecipe.id) {
        return updatedRecipe;
      } else {
        return ogRecipe;
      }
    });
    setRecipes(updatedRecipes);
  }

  // to complete editing

  const completeEdit = () => {
    setRecipeId(null);
  }

  // re-route and enter editing mode
  const enterEditMode = (recipeId) => {
    setRecipeId(recipeId);
  }

  // eventual css state change
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
      handleDelete={handleDelete} 
      recipeId={recipeId}
      completeEdit={completeEdit}
      onUpdateRecipe={onUpdateRecipe}
      enterEditMode={enterEditMode}
      />

      <Footer />

    </div>
  )
}


export default App; 
  
