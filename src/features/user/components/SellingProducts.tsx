import ProductCard from "../../products/components/ProductCard";
import { ProfileCategoryProps } from "../types/types";

const SellingProducts = ({ products }: ProfileCategoryProps) => {
  const sellingProducts = products
    .filter((currProd) => !currProd.sold)
    .map((product) => <ProductCard product={product} />);

  return <>{sellingProducts}</>;
};

export default SellingProducts;
