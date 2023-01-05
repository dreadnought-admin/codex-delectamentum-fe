import React from 'react'
import UserProfile from './UserProfile'

const UserList = ({ users }) => {

    const userList = users.map((user) => {
        return <UserProfile key={user.id} user={user} />
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
