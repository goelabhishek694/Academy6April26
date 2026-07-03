import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import WatchList from "./Components/WatchList";
import NotFound from "./Components/NotFound";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/watchlist" element = {<WatchList />}></Route>
        <Route path="*" element = {<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
