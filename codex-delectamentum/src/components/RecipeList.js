import RecipeListItem from './RecipeListItem';
 
const RecipeList = ({ recipes, onClickDelete }) => {
    const recipeList = recipes.map((recipe) => {
        return <RecipeListItem key={recipe.id} recipe={recipe} onClickDelete={onClickDelete} />
    })
 
    return (
       <ul className="recipeList">
        {recipeList}
       </ul>
    );
};
 
export default RecipeList;
