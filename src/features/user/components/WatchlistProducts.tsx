import { Link } from "react-router-dom";
import ProductCard from "../../products/components/ProductCard";
import { ProfileCategoryProps } from "../types/types";

const WatchlistProducts = ({ products }: ProfileCategoryProps) => {
  const watchlistProducts = products.map((watchProd) => (
    <Link to={`/product/${watchProd._id}`}>
      <ProductCard product={watchProd} />
    </Link>
  ));

  return <>{watchlistProducts}</>;
};
export default WatchlistProducts;
