import { FaPlus } from "react-icons/fa";
import "../css/Order.css";

import Logo from "../img/logo.png";

const FoodItem = ({
  image,
  title,
  description,
  price,
  addItem,
  type,
  packetHandler,
  broth,
}) => {
  const foodItem = {
    title: title,
    price: price,
    quantity: 1,
    type: type,
  };
  return (
    <div className="food">
      <div className="food-image">
        <img
          className="image"
          style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px", maxHeight: "25vh" }}
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
        <div className="food-title">{title}</div>
        <div className="food-description">{description}</div>
        <div className="food-price">Rp {price}</div>
        <div className="food-select">
          <button
            onClick={(e) => {
              if (type === "packet") {
                packetHandler(e, { title, description, broth, type, price });
              } else {
                addItem(e, foodItem);
              }
            }}
          >
            Pilih
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
