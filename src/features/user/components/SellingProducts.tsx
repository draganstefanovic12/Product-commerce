import { Link } from "react-router-dom";
import ProductCard from "../../products/components/ProductCard";
import { ProfileCategoryProps } from "../types/types";

const SellingProducts = ({ products }: ProfileCategoryProps) => {
  const sellingProducts = products
    .filter((currProd) => !currProd.sold)
    .map((product) => (
      <Link to={`/product/${product._id}`}>
        <ProductCard product={product} />
      </Link>
    ));

  return <>{sellingProducts}</>;
};

export default SellingProducts;
