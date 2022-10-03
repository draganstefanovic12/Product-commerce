import { User } from "../features/user/types/types";
import { Product } from "../features/products/types";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { handleSearch } from "../api/userApi";
import ProductCard from "../features/products/components/ProductCard";
import Container from "../components/Container";
import Spinner from "../components/Spinner/Spinner";

const Search = () => {
  const { query } = useParams();
  const { isLoading, data: results } = useQuery(["search", query], () => {
    return handleSearch(query);
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Container className="p-5">
      <h1>{results.length} results</h1>
      <div className="w-max child:w-60">
        {results.map(
          (result: Product & User) =>
            result.name && (
              <Link to={`/product/${result._id}`}>
                <ProductCard product={result} />
              </Link>
            )
        )}
      </div>
    </Container>
  );
};

export default Search;
