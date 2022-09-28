import categories from "../categories";

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
