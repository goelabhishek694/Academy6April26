import React from 'react'

function DisplayData(props) {
    console.log(props);
  return (
    <div>
      <h2>Fruits List:</h2>
      {/* rendering an array os ok */}
      {/* <h2>{props.fruits}</h2> */}
      <ul>
        {props.fruits.map(fruit => <li>{fruit}</li>)}
      </ul>
      {/* objects cannot be rendered like this in react.  */}
      <h2>{props.person.name}</h2>
      <h2>{props.person.age}</h2>
      <p>
        {/* [name,age] */}
        {Object.keys(props.person).map(key=> <h2>{key}:{props.person[key]}</h2>)}
      </p>
      <div>
        <h1></h1>
      </div>
    </div>
  )
}

export default DisplayData
