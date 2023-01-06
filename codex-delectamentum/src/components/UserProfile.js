import React from 'react'

const UserProfile = ({ user, recipes }) => {

  const {first_name, last_name, birthday, clan, reviews } = user;

  
  const userComments = reviews.map((review) => {
    const recipeObj = (recipes.find(({id}) => id === review.recipe_id))
    console.log(recipeObj)
    return <p><strong>Recipe: {recipeObj.title}</strong> | <em>"{review.comment}"</em> | {review.star_rating} ⭐'s/10 <hr></hr></p> 
  })

  return (
    <div>
      <h3>Reviews For: {first_name} {last_name}, born of the {clan} Tribe (🍰 {birthday})</h3>

      {userComments}
    </div>
  )
}

export default UserProfile
