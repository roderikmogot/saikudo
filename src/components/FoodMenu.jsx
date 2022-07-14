import "../css/Edit.css";

const FoodMenu = ({ image, title, description, price }) => {
  return (
    <div class="food">
      <div class="food-image">
        <img class="image" src={image} width="100%" alt="Food" />
      </div>
      <div class="food-id">
        <div class="food-title">{title}</div>
        <div class="food-description">{description}</div>
        <div class="food-end">
          <div class="food-price">Rp {price}</div>
          <div class="food-select">
            <a href="#">Edit</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodMenu;
