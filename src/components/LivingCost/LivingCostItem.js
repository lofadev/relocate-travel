import React from "react";

const LivingCostItem = ({ item }) => {
  const { heading, subItems } = item;

  return (
    <div className="living__cost-items">
      <h2 className="living__cost-heading">{heading}</h2>
      <div className="living__cost-main">
        {subItems.map((item) => (
          <div key={item.id} className="living__cost-sub__item">
            <h3 className="living__cost-sub__heading">{item.subHeading}</h3>
            <span className="living__cost-price">${item.price}</span>
            <p className="living__cost-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LivingCostItem;
