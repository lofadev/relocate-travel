import React from "react";
import backgroundLinearWhite from "../../assets/imgs/linear_gradient_white.png";

const SectionHero = () => {
  return (
    <div className="section-hero">
      <div className="background-linear">
        <img src={backgroundLinearWhite} alt="" />
      </div>
      <div className="container"></div>
    </div>
  );
};

export default SectionHero;
