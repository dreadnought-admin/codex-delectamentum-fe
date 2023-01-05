import RecipeListItem from './RecipeListItem';
 
const RecipeList = ({ recipes, handleDelete, enterEditMode }) => {
    const recipeList = recipes.map((recipe) => {
        return <RecipeListItem key={recipe.id} recipe={recipe} enterEditMode={enterEditMode} handleDelete={handleDelete} />
    })
 
    return (
       <ul className="recipeList">
        {recipeList}
       </ul>
    );
};
 
export default RecipeList;
