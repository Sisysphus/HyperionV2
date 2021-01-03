import React from "react";
import "./Navigation.css";

import Helios from "../images/Helios.png";
function Header() {
  return (
    <div className="header-div">
      <div className="h1-wrap">
        <div className="h1-p1-wrap">
          <h1 className="h1-header">Investing for Satyrs</h1>
          <p className="p-header">
            Welcome, Satyr!. Commission-free investing, plus the tools you need
            to put your money in motion. Sign up and get your first stock for
            free. Certain limitations apply.
          </p>
        </div>
        <img className="helios" src={Helios} />
      </div>
    </div>
  );
}

export default Header;
