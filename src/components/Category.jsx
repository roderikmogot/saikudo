import '../css/Order.css'

const Category = ({ icon, type }) => {
  return (
    <button>
      <div className="category">
        {icon}
        <div className="category-description">{type}</div>
      </div>
    </button>
  );
};

export default Category;
