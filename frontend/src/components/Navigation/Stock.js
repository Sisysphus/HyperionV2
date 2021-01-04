import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Navigation.css";

function Stock({ sim }) {
  let [symbol1, setSymbol1] = useState([]);
  let [exchange1, setExchange1] = useState([]);
  let [address1, setAddress1] = useState([]);
  let [description1, setDescription1] = useState([]);
  const API_KEY = "7B9VRQ2X6FX1KB7N";

  //   // It works it's just a problem with the API KEY and excess calls
  //   let stringBoi1 = async (sim) => {
  //     const data = await axios.get(
  //       `https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo`
  //     );
  //     setSymbol1(data.data.Symbol);
  //     setExchange1(data.data.Exchange);
  //     setAddress1(data.data.Address);
  //     setDescription1(data.data.Description);
  //     console.log(data.data.Symbol);
  //   };

  //   Comment in this one and see the data flow

  let stringBoi1 = async (string) => {
    const data = await axios.get(
      `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${sim}&apikey=${API_KEY}`
    );
    setSymbol1(data.data.Symbol);
    setExchange1(data.data.Exchange);
    setAddress1(data.data.Address);
    setDescription1(data.data.Description);
  };

  stringBoi1(sim);
  return (
    <div className="customizeit">
      <div className="main-content-container">
        <div className="stock-div">
          <h1 className="symbol-style">
            {symbol1}-{exchange1}
          </h1>
          <p className="address">{address1}</p>
          <p className="description">{description1}</p>
        </div>
      </div>
    </div>
  );
}

export default Stock;
