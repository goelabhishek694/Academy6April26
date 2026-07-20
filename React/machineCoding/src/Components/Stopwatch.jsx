import React, { useState, useRef } from 'react'

function Stopwatch() {
    const [time, setTime] = useState(0);
    const timerRef = useRef(null);

    const startTimer = () => {
        timerRef.current = setInterval(() => {
            setTime(prev => prev + 1);
        }, 1000);
    }

    const stopTimer = () => {
        clearInterval(timerRef.current);
    }

    const resetTimer = () => {
        clearInterval(timerRef.current);
        setTime(0);
        
    }

    const formatTime = (time) => {
        const getSeconds = `0${time % 60}`.slice(-2);
        const minutes = Math.floor(time/60);
        const getMinutes = `0${minutes}`.slice(-2);
        const getHours = `0${Math.floor(time/3600)}`.slice(-2);
        return `${getHours}:${getMinutes}:${getSeconds}`;
    }

  return (
    <div>
      <h1>{formatTime(time)}</h1>
      <button onClick={startTimer}> Start</button>
      <button onClick={stopTimer}> Stop</button>
      <button onClick={resetTimer}> Reset</button>
    </div>
  )
}

export default Stopwatch
