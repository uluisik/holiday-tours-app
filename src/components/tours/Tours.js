import React from "react";
import "./Tours.css";
import Tour from "../tour/Tour";
const Tours = ({ tours, removeTour }) => {
  return (
    <div className="title">
      <h2>Our Tours</h2>
      <div className="line"></div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </div>
  );
};

export default Tours;
