import { Product } from "../../../features/products/types";

type ResultProps = {
  product: Product;
};

const SearchResultsProduct = ({ product }: ResultProps) => {
  return <div>{product.name}</div>;
};
export default SearchResultsProduct;
