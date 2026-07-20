import React, {useState, useRef, useEffect} from 'react'

function UseRef2() {
    const [seconds, setSeconds] = useState(0); //1
    const intervalRef = useRef(null);

    //internvalid=null
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        return () => clearInterval(intervalRef.current);
    }, []);
    
  return (
    <div>
      <p>Seconds: {seconds}</p>
      <button onClick={() => clearInterval(intervalRef.current)}>Stop Timer</button>
    </div>
  )
}

export default UseRef2
