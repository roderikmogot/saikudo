import "../css/Edit.css";
import Logo from "../img/logo.png"

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
  let showPacketName = "";
  if (paket) {
    showPacketName = `${title} - ${paket}`;
  } else {
    showPacketName = title;
  }
  return (
    <div className="food">
      <div className="food-image">
        <img
          className="image"
          style={{
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            maxHeight: "25vh",
          }}
          src={(() => {
            const titleImage = title
              .toString()
              .replaceAll(" ", "_")
              .toLowerCase();
            try {
              const image = require(`../img/${titleImage}.jpeg`);
              return image;
            } catch (err) {}
            return Logo;
          })()}
          width="100%"
          alt="Food"
        />
      </div>
      <div className="food-id">
        <div className="food-title">{showPacketName}</div>
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
