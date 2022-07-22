import "../css/Order.css";

const Category = ({ icon, type, color }) => {
  return (
    <button style={{ backgroundColor: color === true ? "#eee":"white", border: "1px solid #eee" }}>
      <div className="category">
        {icon}
        <div className="category-description">{type}</div>
      </div>
    </button>
  );
};

export default Category;
