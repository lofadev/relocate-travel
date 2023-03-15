import React from "react";
import btnDown from "../../assets/imgs/btn_down.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-main">
          <h1 className="title">
            <span className="title-top">make the sight</span>
            <span className="title-bottom">move.</span>
          </h1>

          <div className="hero-more">
            <button className="btn-down">
              <img src={btnDown} alt="btnDown" />
            </button>
            <div className="hero-text">
              <span>Explore</span>
              <span>Destinations</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
