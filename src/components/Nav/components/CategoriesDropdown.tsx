import { Link } from "react-router-dom";
import categories from "../../../features/products/categories";

const CategoriesDropdown = () => {
  return (
    <ul className="dropdown-child">
      {categories.map((category, i) => (
        <li className="p-2 w-full" key={i}>
          <Link className="w-full" to={`/category/${category.name}/0`}>
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesDropdown;
