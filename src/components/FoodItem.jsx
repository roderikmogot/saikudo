import { FaPlus } from "react-icons/fa";
import '../css/Order.css'

const FoodItem = ({ image, title, description, price }) => {
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
          <a href="#">
            Pilih
            <FaPlus />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
