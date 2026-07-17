import React, { useState, useCallback } from 'react';

const ItemList = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  //returns a memoized version of the function. it only chnages if one if the dependecies has changed, we have no dependencies so removeItem will be memoized and will not chnage across renders. 
//   optimization: since removeItem is now memoized, it maintains the same ref b/w renders unless state chnages. this prevents uncecessary r-rnders fo child comp . thus improiving perf.
  const removeItem = useCallback((itemToRemove) => {
    setItems((prevItems) => prevItems.filter((item) => item !== itemToRemove));
  },[]);

  return (
    <div>
      {items.map((item) => (
        <div key={item}>
          {item} 
          <button onClick={() => removeItem(item)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

// 50 item -> 50 time removeItem fn is is created/initiliazed. this occupies a lot of memory . 