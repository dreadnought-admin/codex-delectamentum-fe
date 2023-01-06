import React from 'react'

const UserProfile = ({ user, recipes }) => {

  const {first_name, last_name, birthday, clan, reviews } = user;

  
  const userComments = reviews.map((review) => {
    const recipeObj = (recipes.find(({id}) => id === review.recipe_id))
    console.log(recipeObj)
    return <p className="review"><strong>Recipe:</strong> {recipeObj.title} | <em>"{review.comment}"</em> | {review.star_rating} ⭐'s/10 <hr className="divider"></hr></p> 
  })

  return (
    <div>
      <div>
        <h2 className="reviewHeader">Presenting... 📯</h2>
        <h3 className="userInfo">{first_name} {last_name}, born of the {clan} Tribe (🍰 {birthday})</h3>

        {userComments}
      </div>
    </div>
  )
}

export default UserProfile
