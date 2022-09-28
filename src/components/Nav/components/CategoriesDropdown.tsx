import categories from "../../../features/products/categories";

const CategoriesDropdown = () => {
  return (
    <ul className="dropdown-child">
      {categories.map((category, i) => (
        <li key={i}>{category.name}</li>
      ))}
    </ul>
  );
};

export default CategoriesDropdown;
