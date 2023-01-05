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

  useEffect(() => {
    fetch(RecipeAPI)
    .then((r) => r.json())
    .then((data) => {
      setRecipes(data)
    })
  }, [])

  // delete a recipe 
  // will belong to a delete button on each recipe
  // must be fixed! does not work yet

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

  // patch request 
  // intended to update instructions 
  // 10000% need to redo this

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

  const completeEdit = () => {
    setRecipeId(null);
  }

  const enterEditMode = (recipeId) => {
    setRecipeId(recipeId);
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
  
