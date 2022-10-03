import { Link } from "react-router-dom";
import { Product } from "../../../features/products/types";

type ResultProps = {
  product: Product;
};

const SearchResultsProduct = ({ product }: ResultProps) => {
  return (
    <Link className="flex items-center gap-2" to={`product/${product._id}`}>
      <img
        src={`http://localhost:5006${product.images![0]}`}
        alt=""
        className="rounded-full h-10 w-10"
      />
      <p>{product.name}</p>
    </Link>
  );
};
export default SearchResultsProduct;
