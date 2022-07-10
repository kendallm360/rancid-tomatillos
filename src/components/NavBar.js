import React from "react";
import "./NavBar.css";

const NavBar = ({ isClicked, displayHome }) => {
  return <div className="nav-bar">
      <h1  onClick={displayHome}>Rancid Tomatillos</h1>
    </div>
};

export default NavBar;
