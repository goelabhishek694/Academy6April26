import React, {useState} from 'react'

function TemperatureInput({temp, tempChange}) {
  return (
    <div>
      <label>Temperature:</label>
      <input type="text" value={temp} onChange={(e) => tempChange(e.target.value)} />x
    </div>
  )
}

export default TemperatureInput
