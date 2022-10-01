import { Link } from "react-router-dom";
import ProductCard from "../../products/components/ProductCard";
import { ProfileCategoryProps } from "../types/types";

const SoldProducts = ({ products }: ProfileCategoryProps) => {
  const soldProducts = products
    .filter((product) => product.sold)
    .map((product) => (
      <Link to={`/product/${product._id}`}>
        <ProductCard product={product} />
      </Link>
    ));

  return <>{soldProducts}</>;
};

export default SoldProducts;
