import React from "react";
import "./Tours.css";
import Tour from "../tour/Tour";
const Tours = ({ tours }) => {
  return (
    <div className="title">
      <h2>Our Tours</h2>
      <div className="line"></div>
      <Tour />
    </div>
  );
};

export default Tours;
