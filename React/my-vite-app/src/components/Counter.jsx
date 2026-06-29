// Buttons are provided to increment, decrement, and reset the count.
// The initial count is passed as a prop to the Counter component.
// The count cannot be decremented below 0.


import React, {useState} from 'react'

function Counter({initialCount}) {
    // useState is a func/hook which we call with a initial value. it returns us an array with 2 ele. the first ele is the currentValue of the state and 2nd ele is a function used to update the value of state. 
    const [count, setCount] = useState(initialCount);
    
    const handleIncrement = () => {
        console.log("Increment");
        //count values is captured during the current render. 
        // react sees multiple updates, it batches the the update . 
        setCount(count+1); //setCount(1)
        setCount(count+1); //setCount(1)
        setCount(count+1); //setCount(1)
        setCount(count+1); //setCount(1)
        // get the latest state , and increment 1 to it . 
        setCount(count=> count+1);
        setCount(count=> count+1);
    }
    const handleDecrement = () => {
        console.log("Decrement");
        if(count>0){
            setCount(count-1);
        }else{
            alert("Count cannot be negative");
        }
    }
    const handleReset = () => {
        console.log("Reset");
        setCount(initialCount);
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
