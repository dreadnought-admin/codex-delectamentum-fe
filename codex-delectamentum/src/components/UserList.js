import React, { useState, useEffect } from 'react'
import UserProfile from './UserProfile'

const UserList = ({ users, recipes }) => {

  console.log(users)

  const userList = users.map((user) => {
    return <UserProfile key={user.id} user={user} recipes={recipes}/>
})

  

  return (
    <div>
        <ul>
            {userList}
        </ul>
    </div>
  )
}

export default UserList
