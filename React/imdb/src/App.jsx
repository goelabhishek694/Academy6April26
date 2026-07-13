import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import WatchList from "./Pages/WatchList";
import NotFound from "./Pages/NotFound";
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
