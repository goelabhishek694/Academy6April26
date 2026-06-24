import React from 'react'

function EventHandling() {
    const handleClick = () => {
        console.log("Button clicked");
    }
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default EventHandling
