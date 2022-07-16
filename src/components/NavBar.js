import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = ({ displayHome }) => {
  return (
    <Link to={"/"} className="Nav" key={Date.now()}>
      <div className="nav-bar">
        <h1 onClick={displayHome}>Rancid Tomatillos</h1>
      </div>
    </Link>
  );
};

export default NavBar;
