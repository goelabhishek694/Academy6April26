// Buttons are provided to increment, decrement, and reset the count.
// The initial count is passed as a prop to the Counter component.
// The count cannot be decremented below 0.


import React, {useState} from 'react'

function Counter(props) {
    const [count, setCount] = useState(props.initialCount);
    
    const handleIncrement = () => {
        console.log("Increment");
        setCount(count+1);

    }
    const handleDecrement = () => {
        console.log("Decrement");
        setCount(count-1);
    }
    const handleReset = () => {
        console.log("Reset");
    }
  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
      <p>{count}</p>
    </div>
  )
}

export default Counter
