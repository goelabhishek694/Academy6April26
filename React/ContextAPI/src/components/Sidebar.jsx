import React, {useContext} from 'react'
import {UserContext} from '../Context/UserContext.jsx'

function Sidebar() {
    const {user} = useContext(UserContext);
    console.log(user);
    
  return (
    <aside>
        <h2>Sidebar</h2>
        <p>Name: {user.name}</p>
        <p>Role: {user.role}</p>
    </aside>
  )
}

export default Sidebar
