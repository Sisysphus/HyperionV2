import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";
import Header from "./Header";
import Features from "./Features";
import Stock from "./Stock";

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
              <a className="mrhyperion" href="/">
                Hyperion
              </a>
            </NavLink>
            {isLoaded && sessionLinks}
          </li>
        </ul>
      </div>
      <h1 className="faang"></h1>
      {sessionUser ? "" : <Header />}
      {sessionUser ? "" : <Features />}
      {sessionUser ? <Stock sim="FB" /> : ""}
      {sessionUser ? <Stock sim="AAPL" /> : ""}
      {sessionUser ? <Stock sim="AMZN" /> : ""}
      {sessionUser ? <Stock sim="NFLX" /> : ""}
      {sessionUser ? <Stock sim="GOOGL" /> : ""}
      {/*
      - I was going to render 4 
      - different stock divs with their own respective stock information (Symbol, info )
      - API is making too many calls and I am not sure what todo
      - #Covid19 Broke
      - #Stubborn because Finnhub was giving me extreme problems but I made it semi-work with
      Alphavantage*
      - I got it working but when I got to this step... it failed on me, it was too late to switch
      */}

      {/* The next feature is to connect a search bar with the ticker symbol
      automating the manual stock entries to render out the stock data that 
      a customer wants to interact with */}
    </div>
  );
}

export default Navigation;
