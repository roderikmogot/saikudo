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
}) => {
  const [showModal, setShowModal] = useState(false);
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
          <div className="food-edit" onClick={() => setShowModal(true)}>
            <a href="#">Edit</a>
          </div>
          <EditMenuModal
            onClose={() => setShowModal(false)}
            show={showModal}
            id={id}
            allData={allData}
            foodType={foodType}
            image={image}
            title={title}
            description={description}
            price={price}
            paket={paket}
          />
        </div>
      </div>
    </div>
  );
};

export default FoodMenu;
