import React from 'react'

const UserProfile = ({ users }) => {

  const {first_name, last_name, birthday, clan } = users;

  return (
    <div>
      <h4>This is the user profile section</h4>
    </div>
  )
}

export default UserProfile
