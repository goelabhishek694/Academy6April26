import UseRef from './POC/UseRef'
import './App.css'
import UseRef2 from './POC/UseRef2'
import Stopwatch from './Components/Stopwatch'
import ImageCaraousel from './Components/ImageCaraousel'
import Modal from './Components/Modal/Modal'
import useVisibility from './useVisibility'

function App() {

  const {isVisible, show, hide, toggle} = useVisibility(false);

  return (
    // <UseRef />
    // <UseRef2/>
    // <Stopwatch/>
    // <ImageCaraousel/>
    <div className='App'>
      <h1> Custom hook Example</h1>
      <button onClick={show}>Show Modal</button>
      <button onClick={toggle}>Toggle Modal</button>
      <Modal isVisible={isVisible} hide={hide}/>
    </div>

  )
}

export default App
