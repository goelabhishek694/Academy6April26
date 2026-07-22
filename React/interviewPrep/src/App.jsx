import './App.css'
// import CbIntro from './Components/CbIntro'
// import Todo from './Components/Todo'
// import TodoFunc from './Components/TodoFunc'
import DataComp from './Components/DataComp'
import WithLoading from './Components/WithLoading'

const EnhancedComp = WithLoading(DataComp);

function App() {

  return (
    // <CbIntro name="John"/>
    // <Todo/>
    // <TodoFunc/>
    <EnhancedComp data="Hello, World!" />

  )
}

export default App
