import "../css/Edit.css";

import { useState } from "react";
import EditMenuModal from "./EditMenuModal";

const FoodMenu = ({
  id,
  allData,
  foodType,
  image,
  title,
  description,
  price,
  paket,
  onClose,
  editModal,
  displayModal,
}) => {
  return (
    <div className="food">
      <div className="food-image">
        <img className="image" src={image} width="100%" alt="Food" />
      </div>
      <div className="food-id">
        <div className="food-title">{title}</div>
        <div className="food-description">{description}</div>
        <div className="food-end">
          <div className="food-price">Rp {price}</div>
          <div
            className="food-edit"
            onClick={(e) => {
              editModal({
                id,
                allData,
                foodType,
                image,
                title,
                description,
                price,
                paket,
              });
              displayModal(true);
            }}
          >
            <a href="#">Edit</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodMenu;
