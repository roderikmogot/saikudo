import { FaPlus } from "react-icons/fa";
import "../css/Order.css";

const FoodItem = ({ image, title, description, price, addItem, type }) => {
  const foodItem = {
    title: title,
    price: price,
    quantity: 1,
    type: type
  };
  return (
    <div className="food">
      <div className="food-image">
        <img className="image" src={image} width="100%" alt="Food" />
      </div>
      <div className="food-id">
        <div className="food-title">{title}</div>
        <div className="food-description">{description}</div>
        <div className="food-price">Rp {price}</div>
        <div className="food-select">
          <button onClick={(e) => addItem(e, foodItem)}>
            Pilih
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
