import "../css/Order.css";

const Category = ({ icon, type, color }) => {
  return (
    <button
      style={{
        backgroundColor: color === true ? "#DCD7C9" : "white",
        border: "none",
      }}
    >
      <div className="category">
        {icon}
        <div className="category-description">{type}</div>
      </div>
    </button>
  );
};

export default Category;
