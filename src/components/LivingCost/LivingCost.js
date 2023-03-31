import React from "react";

import { livingcosts } from "../../data";
import LivingCostItem from "./LivingCostItem";

const LivingCost = () => {
  return (
    <div className="living-cost">
      {livingcosts.map((item) => (
        <LivingCostItem key={item.id} item={item}></LivingCostItem>
      ))}
    </div>
  );
};

export default LivingCost;
