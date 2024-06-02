import React from "react";

export const ProductCard = (item) => {
  return (
    <div className="flex flex-col">
      <img src={item.imgURL} alt={item.name} />
      <p></p>
      <span className="text-coral-red text-md">{item.price}</span>
    </div>
  );
};
