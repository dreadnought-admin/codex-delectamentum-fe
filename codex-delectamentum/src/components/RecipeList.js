import RecipeListItem from './RecipeListItem';
 
const RecipeList = ({ recipes }) => {
    const recipeList = recipes.map((recipe) => {
        return <RecipeListItem key={recipe.id} recipe={recipe} />
    })
 
    return (
       <ul className="recipeList">
        {recipeList}
       </ul>
    );
};
 
export default RecipeList;
