import "./App.css";
import MyComponent from "./components/MyComponent";
import DisplayData from "./components/DisplayData";
import ConditionalRendering from "./components/ConditionalRendering";
import EventHandling from "./components/EventHandling";
import Counter from "./components/Counter";
function App() {

  // const fruits = [<li>Apple</li>, <li>Banana</li>, <li>Cherry</li>, <li>Pineapple</li>, <li>Mango</li>];
  const fruits = ["Apple", "Banana", "Cherry", "Pineapple", "Mango"];
  const person = {
    name: "Susheel",
    age: 24
  }
  //a component can only return one parent element .
  return (
    <>
      <MyComponent name="Arul"/>
      <MyComponent name="Priya"/>
      <MyComponent name="Abhinav"/>
      <MyComponent/>

      <h1> React Props Example</h1>
      <DisplayData fruits={fruits} person={person} efecedc="qvdc"/>

      <ConditionalRendering isLoggedIn={true} username="Arul"/>
      <ConditionalRendering isLoggedIn={false}/>

      <EventHandling/>

      <Counter/>
    </>
  );
}

export default App;
