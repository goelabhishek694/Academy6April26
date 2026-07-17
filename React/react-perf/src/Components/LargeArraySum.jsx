import React, { useState, useMemo } from 'react';

const generateLargeArray = () => {
  const largeArray = [];
  for (let i = 0; i < 1000000; i++) {
    largeArray.push(i);
  }
  return largeArray;
};

const sumArray = (arr) => {
  console.log('Calculating sum...');
  return arr.reduce((acc, curr) => acc + curr, 0);
};

const LargeArraySum = () => {
  const [count, setCount] = useState(0);
  //costly computation
//   Memoizes the large array, so generateLargeArray is only called once when the component mounts.
  const largeArray = useMemo(() => generateLargeArray(), []); 
//   Memoizes the result of sumArray, so it's only recalculated when largeArray changes. Since largeArray doesn't change in this example, sumArray is only called once.
  const sum = useMemo(() => sumArray(largeArray), [largeArray]);

//   optimization: using useMemo, the costly sumArray function is not re-executed on every render unless the dependency (largeArray) changes. This prevents unnecessary recalculations and significantly improves performance.

  return (
    <div>
      <h1>Sum: {sum}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default LargeArraySum;
