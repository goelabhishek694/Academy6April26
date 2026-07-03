import React from "react";
import logo from "../assets/imdb-logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex space-x-8 items-center pl-3 py-4">
      <Link to="/">
        <img className="w-[50px]" src={logo} alt="imdb-logo"></img>
      </Link>
      <Link to="/">Home</Link>
      <Link to="/watchlist">WatchList</Link>
    </div>
  );
}

export default Navbar;
