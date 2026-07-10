import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import counterSlice from '../Redux/CounterSlice';
const actions = counterSlice.actions;

function CounterRedux({initialCount}) {
    const {count, name, age} = useSelector((store) => store.counterState);
    console.log(count, name, age);

    const dispatch = useDispatch();

    const handleIncrement = () => {
        console.log("Increment");
        dispatch(actions.increment());
    }
    const handleDecrement = () => {
        console.log("Decrement");
        dispatch(actions.decrement());
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
