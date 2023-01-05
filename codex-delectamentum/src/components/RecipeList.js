import RecipeListItem from './RecipeListItem';
 
const RecipeList = ({ recipes, handleDelete }) => {
    const recipeList = recipes.map((recipe) => {
        return <RecipeListItem key={recipe.id} recipe={recipe} handleDelete={handleDelete} />
    })
 
    return (
       <ul className="recipeList">
        {recipeList}
       </ul>
    );
};
 
export default RecipeList;
