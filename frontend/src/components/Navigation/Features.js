import React from "react";

function Features() {
  return (
    <div className="feature-wrap">
      <h1 className="tradezz"> Start Investing Today </h1>
      <div className="card-wrapper">
        <div className="card animate__animated animate__slideInLeft">
          <i className="far fa-user-circle icon"></i>
          <h1> User</h1>
          <p className="hyperion-p">
            Create an Account to access all features Hyperion has to offer
          </p>
        </div>
        <div className="card animate__animated animate__slideInUp">
          <i className="fas fa-binoculars icon"></i>
          <h1> Claudius</h1>
          <p className="hyperion-p">
            Create a watchlist to track all the stocks you are interested in
          </p>
        </div>
        <div className="card animate__animated animate__slideInRight">
          <i className="fas fa-money-bill-wave icon"></i>
          <h1> HyperionV2</h1>
          <p className="hyperion-p">
            Trade without risk using our Hyperion V2 trading system. Our paper
            trading feature ensures that you receive the proper education before
            making speculative risks. Become a true Hyperion
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
