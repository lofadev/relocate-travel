import React from "react";
import LivingCostItem from "./LivingCostItem";
import { livingcosts } from "../../data";

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
