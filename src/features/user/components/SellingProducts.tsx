import { Link } from "react-router-dom";
import { ProfileCategoryProps } from "../types/types";
import ProductCard from "../../products/components/ProductCard";

const SellingProducts = ({ products }: ProfileCategoryProps) => {
  const sellingProducts = products
    .filter((currProd) => !currProd.sold)
    .map((product, i) => (
      <Link key={i} to={`/product/${product._id}`}>
        <ProductCard product={product} />
      </Link>
    ));

  return (
    <div className="flex flex-col md:flex-row gap-3">{sellingProducts}</div>
  );
};

export default SellingProducts;
