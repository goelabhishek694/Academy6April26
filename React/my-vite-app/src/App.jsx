import "./App.css";
import { useState } from "react";
import MyComponent from "./components/MyComponent";
import DisplayData from "./components/DisplayData";
import ConditionalRendering from "./components/ConditionalRendering";
import EventHandling from "./components/EventHandling";
import Counter from "./components/Counter";
import UserCard from "./components/UserCard";
import ProductList from "./components/ProductList";
import Todo from "./components/Todo";
import FormHandling from "./components/FormHandling";
import TemperatureInput from "./components/TemperatureInput";
import TemperatureDisplay from "./components/TemperatureDisplay";
function App() {
  // const fruits = [<li>Apple</li>, <li>Banana</li>, <li>Cherry</li>, <li>Pineapple</li>, <li>Mango</li>];
  const fruits = ["Apple", "Banana", "Cherry", "Pineapple", "Mango"];
  const person = {
    name: "Susheel",
    age: 24,
  };

  const products = [
    {name: "Product 1", price: 100},
    {name: "Product 2", price: 200},
    {name: "Product 3", price: 300},
    {name: "Product 4", price: 400},
    {name: "Product 5", price: 500},
  ]

  const [temperature, setTemperature] = useState(32);

  const handleTempChange = (newTemp) => {
    setTemperature(newTemp);
  }
  //a component can only return one parent element .
  return (
    <>
      {/* <MyComponent name="Arul" />
      <MyComponent name="Priya" />
      <MyComponent name="Abhinav" />
      <MyComponent />

      <h1> React Props Example</h1>
      <DisplayData fruits={fruits} person={person} efecedc="qvdc" />

      <ConditionalRendering isLoggedIn={true} username="Arul" />
      <ConditionalRendering isLoggedIn={false} />

      <EventHandling />

      <Counter initialCount={0} />

      <UserCard name="Susheel" email="susheel@gmail.com" age={24} location="India" picture="https://placehold.co/600x400/orange/white" />

      <ProductList products={products}/>

      <Todo/>
      <FormHandling/> */}

      <TemperatureInput temp = {temperature} tempChange = {handleTempChange}/>
      <TemperatureDisplay temp = {temperature}/>
    </>
  );
}

export default App;
