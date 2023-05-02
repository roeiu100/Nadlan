import React from "react";

export const CarouselItem = ({ pic }) => {
  return (
    <div className="carousel-item">
      <img className="carousel-img" src={pic} />
    </div>
  );
};