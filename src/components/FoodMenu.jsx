import "../css/Edit.css";

const FoodMenu = ({ image, title, description, price }) => {
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
          <div className="food-edit">
            <a href="#">Edit</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodMenu;
