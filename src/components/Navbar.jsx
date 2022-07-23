import React from "react";
import img from "../images/globe.svg";

function Navbar() {
  return (
    <div className="navbar">
      <img src={img} alt="globe" />
      <h1>my travel journal.</h1>
    </div>
  );
}

export default Navbar;
