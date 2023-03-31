import React from "react";

const CardArticles = ({ item }) => {
  const { id, heading, link, image } = item;
  return (
    <div className="card-articles">
      <div className="card-articles__img">
        <img src={image} alt={`articles-img-${id}`} />
      </div>

      <div className="overlay"></div>
      <div className="card-articles__content">
        <h2 className="card-articles__heading">{heading}</h2>

        <span className="card-articles__link">{link}</span>
      </div>
    </div>
  );
};

export default CardArticles;
