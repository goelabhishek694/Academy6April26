import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext.jsx'

function Navbar() {
    const {user} = useContext(UserContext);
    console.log(user);
    
  return (
    <div>
      <h2>Navbar</h2>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
    </div>
  )
}

export default Navbar
