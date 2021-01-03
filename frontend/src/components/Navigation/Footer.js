import React from "react";
import "./Navigation.css";

import Helios from "../images/Helios.png";
function Footer() {
  return (
    <div className="footer-div">
      <div className="footer-wrapper">
        <h1 className="footer-logo" href="/">
          Hyperion
        </h1>
        <ul className="footer-ul">
          <li>
            <i class="fas fa-home icon2"></i>
            <a href="/" className="footer-a">
              Home
            </a>
          </li>
          <li>
            <i class="fab fa-github icon2"></i>
            <a href="https://github.com/Sisysphus" className="footer-a">
              Github
            </a>
          </li>
          <li>
            <i class="fab fa-linkedin icon2"></i>
            <a
              href="https://www.linkedin.com/in/adam-faidy-bb8784105/"
              className="footer-a"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
