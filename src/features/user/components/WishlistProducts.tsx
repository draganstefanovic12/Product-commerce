import { Link } from "react-router-dom";
import { ProfileCategoryProps } from "../types/types";
import ProductCard from "../../products/components/ProductCard";

const WishlistProducts = ({ products }: ProfileCategoryProps) => {
  const watchlistProducts = products.map((watchProd) => (
    <Link to={`/product/${watchProd._id}`}>
      <ProductCard product={watchProd} />
    </Link>
  ));

  return <>{watchlistProducts}</>;
};
export default WishlistProducts;
