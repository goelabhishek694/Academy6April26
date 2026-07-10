import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';

function CounterRedux({initialCount}) {
    const {count, name, age} = useSelector((store) => store.counterState);
    console.log(count, name, age);
    
    const handleIncrement = () => {
        console.log("Increment");
    }
    const handleDecrement = () => {
        console.log("Decrement");
    }

  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <p>{count}</p>
    </div>
  )
}

export default CounterRedux;
