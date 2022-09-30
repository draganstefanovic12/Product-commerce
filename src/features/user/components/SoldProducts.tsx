import ProductCard from "../../products/components/ProductCard";
import { ProfileCategoryProps } from "../types/types";

const SoldProducts = ({ products }: ProfileCategoryProps) => {
  const soldProducts = products
    .filter((product) => product.sold)
    .map((product) => <ProductCard product={product} />);

  return <>{soldProducts}</>;
};

export default SoldProducts;
