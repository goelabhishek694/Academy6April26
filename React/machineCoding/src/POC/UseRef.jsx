import React, {useRef} from 'react'

function UseRef() {

    const input = useRef(null);

    const focusInput = () => {
      console.log(input);
      
        const inputRef = input.current.focus();
        console.log(inputRef);
        
    }
  return (
    <div>
      <input type="text" ref={input}/>
      <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default UseRef
