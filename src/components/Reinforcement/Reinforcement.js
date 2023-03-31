import React from "react";

import Suitcase from "../../assets/imgs/image_suitcase.png";
import Vali from "../../assets/imgs/image_vali.png";
import Button from "../Button/Button";

const Reinforcement = () => {
  return (
    <div className="container">
      <div className="reinforcement">
        <div className="reinforcement-vali">
          <img src={Vali} alt="" />
          <div className="reinforcement-suitcase">
            <img src={Suitcase} alt="" />
          </div>
        </div>

        <div className="reinforcement-content">
          <h2 className="reinforcement-heading">Are you ready to move?</h2>
          <p className="reinforcement-desc">
            Get in touch and let our team help you put things together and plan your move.
          </p>
        </div>

        <Button classes="secondary">Get in touch</Button>
      </div>
    </div>
  );
};

export default Reinforcement;
