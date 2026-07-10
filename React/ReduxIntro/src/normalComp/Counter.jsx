import React, {useState} from 'react'

function Counter({initialCount}) {
    const [count, setCount] = useState(initialCount);
    
    const handleIncrement = () => {
        setCount(count+1);
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
