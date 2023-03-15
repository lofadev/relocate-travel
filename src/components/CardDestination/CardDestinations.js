import React from "react";

const CardDestinations = ({ id, image, country, city }) => {
  return (
    <div className="card">
      <img src={image} alt={`Img-${id}`} />

      <div className="card-overlay"></div>
      <span className="card-text">
        <h2 className="card-city">{city}</h2>
        <h2 className="card-country">{country}</h2>
      </span>
    </div>
  );
};

export default CardDestinations;
