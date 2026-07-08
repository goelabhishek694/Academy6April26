import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

function Profile() {
    const {user, setUser} = useContext(UserContext);
    const handleChangeUser = () => {
        setUser({
            name: "John",
            role: "Admin"
        })
    }
  return (
    <div>
      <div>
        <h2>Profile</h2>
        <p>Name: {user.name}</p>
        <p>Role: {user.role}</p>

        <button onClick={handleChangeUser}>Change User</button>
      </div>
    </div>
  )
}

export default Profile
