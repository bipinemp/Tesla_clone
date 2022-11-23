import React from "react";
import tsla from "../assets/tsla.png";
import "./css/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={tsla} alt="tesla_logo" />
      </div>
      <div className="nav-links first">
        <div>
          <h1>Model S</h1>
        </div>
        <div>
          <h1>Model 3</h1>
        </div>
        <div>
          <h1>Model X</h1>
        </div>
        <div>
          <h1>Model Y</h1>
        </div>
        <div>
          <h1>Solar Roof</h1>
        </div>
        <div>
          <h1>Solar Panels</h1>
        </div>
      </div>
      <div className="nav-links">
        <div>
          <h1>Shop</h1>
        </div>
        <div>
          <h1>Account</h1>
        </div>
        <div>
          <h1>Menu</h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
