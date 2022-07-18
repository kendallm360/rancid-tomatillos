import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import rancid from "./rancid_toma.png";

const NavBar = ({ displayHome }) => {
  return (
    <Link to={"/"} className="Nav" key={Date.now()}>
      <div className="nav-bar">
        <img className="rancid" src={rancid} alt="Rancid Tomatillo Logo" />
        <h1 className="title" onClick={displayHome}>
          Rancid Tomatillos
        </h1>
        <img className="rancid" src={rancid} alt="Rancid Tomatillo Logo" />
      </div>
    </Link>
  );
};

export default NavBar;
