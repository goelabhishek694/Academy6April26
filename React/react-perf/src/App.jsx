import { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route , Link} from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import Home from "./Components/Home";
// import About from "./Components/About";
// import Contact from "./Components/Contact";

const HomePage = lazy(() => import("./Components/Home"));
const AboutPage = lazy(() => import("./Components/About"));
const ContactPage = lazy(() => import("./Components/Contact"));

function App() {
  // const [HomePage, setHomePage] = useState(null);
  // const [AboutPage, setAboutPage] = useState(null);
  // const [ContactPage, setContactPage] = useState(null);

  // useEffect(() => {
  //   //preload homepage comp
  //   import("./Components/Home").then((module) => setHomePage(() => module.default));
  // },[]);

  // const loadHomePage = () => {
  //   import("./Components/Home").then((module) => setHomePage(() => module.default));
  // };

  // const loadAboutPage = () => {
  //   import("./Components/About").then((module) => setAboutPage(() => module.default));
  // };

  // const loadContactPage = () => {
  //   import("./Components/Contact").then((module) => setContactPage(() => module.default));
  // };

  return (
    <>
       {/* <nav>
      <ul>
        <li>
          <Link to="/" onClick={loadHomePage}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={loadAboutPage}>About</Link>
        </li>
        <li>
          <Link to="/contact" onClick={loadContactPage}>Contact</Link>
        </li>
      </ul>
    </nav> */}

<nav>
      <ul>
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/about" >About</Link>
        </li>
        <li>
          <Link to="/contact" >Contact</Link>
        </li>
      </ul>
    </nav>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
      </Suspense>
    </>
  );
}

export default App;
