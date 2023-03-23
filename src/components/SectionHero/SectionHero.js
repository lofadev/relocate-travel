import React, { useEffect, useState } from "react";

import { destinations } from "../../data.js";
import backgroundLinearWhite from "../../assets/imgs/linear_gradient_white.png";
import CardItem from "../CardItem/CardItem.js";
import { useParams } from "react-router-dom";

const SectionHero = () => {
  const { id } = useParams();

  const [currentCard, setCurrentCard] = useState(null);

  useEffect(() => {
    const card = [
      destinations.find((item) => {
        return item.id === parseInt(id);
      }),
    ].map((item) => {
      return {
        id: item.id,
        country: item.country,
        city: item.city,
        image: item.detailImage,
      };
    })[0];
    setCurrentCard(card);
  }, [id]);
  return (
    <div className="section-hero">
      <div className="background-linear">
        <img src={backgroundLinearWhite} alt="" />
      </div>
      <div className="container">{currentCard && <CardItem item={currentCard}></CardItem>}</div>
    </div>
  );
};

export default SectionHero;
