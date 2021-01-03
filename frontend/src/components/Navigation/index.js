import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";
import Header from "./Header";
import Features from "./Features";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <div className="sign-up-thing">
        <NavLink to="/signup" className="nav-form">
          Sign Up
        </NavLink>
        <LoginFormModal />
      </div>
    );
  }

  return (
    <div>
      <div className="nav-div">
        <ul className="nav-ul">
          <li className="nav-li">
            <NavLink exact to="/">
              <a href="/">Hyperion</a>
            </NavLink>
            {isLoaded && sessionLinks}
          </li>
        </ul>
      </div>
      <Header />
      <Features />
    </div>
  );
}

export default Navigation;
