import React from "react";
import { cityDetails } from "../../data";

const CityDetails = () => {
  return (
    <div className="city-details">
      {cityDetails.map((item) => (
        <div className={`city-details__items ${item.id === 2 ? "spacing" : ""}`} key={item.id}>
          <h2 className="city-details__heading">{item.heading}</h2>
          <div className="city-details__main">
            {item.itemDatas.map((itemData) => (
              <div key={itemData.id} className="city-details__item-data">
                <span className="city-details__icon">
                  {itemData.icon ? (
                    <img src={itemData.icon} alt={`icon-${itemData.id}`} />
                  ) : (
                    <span className="icon-empty"></span>
                  )}
                </span>

                <span className={`city-details__text ${itemData.icon ? "" : "text-normal"}`}>
                  {itemData.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CityDetails;
