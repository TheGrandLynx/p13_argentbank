import React from "react";

function Card({ image, descriptionImage, title, description }) {
  return (
    <div className="card">
      <img src={image} alt={descriptionImage} className="card__icon" />
      <h3 className="card__title">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
