import React from "react";
import "./Navigation.css";

import Helios from "../images/Helios.png";
function Header() {
  return (
    <div className="header-div">
      <div className="h1-wrap">
        <div className="h1-p1-wrap">
          <h1 className="h1-header">Welcome to Hyperion</h1>
          <p className="p-header">
            Sign up to our HyperionV2 trading system and learn the skills to
            elevate yourself from Satyr to Hyperion. Sign up and get your first
            stock for free. Certain limitations apply.
          </p>
        </div>
        <img className="helios" src={Helios} />
      </div>
    </div>
  );
}

export default Header;
