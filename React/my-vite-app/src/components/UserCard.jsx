// Create a User Card component that:

// Accepts a user details object (name, email, age, location, picture) as prop.
// Displays user details in a card format.
// Conditionally renders "Adult" or "Minor" based on age.
// Adds a button to toggle email visibility.

import React, {useState} from 'react'

function UserCard({name,email,age,location,picture}) {
    const [isEmailShown, setIsEmailShown]= useState(true);
    const toggleEmail = () => {
        setIsEmailShown(!isEmailShown);
    }
  return (
    <div>
      <img style={{borderRadius:"100%", height:"100px", width:"100px"}} src={picture}></img>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{age>18 ? "Adult":"Minor"}</p>
      <p>{location}</p>
      <button onClick={toggleEmail}>
        {isEmailShown ? (<i class="fa-solid fa-eye"></i>) : (<i class="fa-solid fa-eye-slash"></i>)}
      </button>
      <p>{isEmailShown ? email : "*********"}</p>
    </div>
  )
}

export default UserCard

