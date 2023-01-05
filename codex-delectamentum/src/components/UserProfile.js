import React from 'react'

const UserProfile = ({ user, recipes }) => {

 
  console.log({recipes})

  

  const {first_name, last_name, birthday, clan, reviews } = user;

  const commentArray = [];
  
  const userComments = reviews.map((review) => {
    const recipeObj = (recipes.find(({id}) => id === review.recipe_id))
    console.log(recipeObj)
    return <p>{recipeObj.title} {review.comment} {review.star_rating}</p>
  })

  return (
    <div>
      <h4>Reviews For: {first_name} {last_name}</h4>
      {userComments}
    </div>
  )
}

export default UserProfile
