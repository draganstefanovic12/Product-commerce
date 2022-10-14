import { User } from "../features/user/types/types";
import { Product } from "../features/products/types";
import { useQuery } from "react-query";
import { handleSearch } from "../api/userApi";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import Container from "../components/Container";
import ProductCard from "../features/products/components/ProductCard";
import HelmetPageTitle from "../components/HelmetPageTitle";

const Search = () => {
  const { query } = useParams();
  const { isLoading, data: results } = useQuery(["search", query], () => {
    return handleSearch(query);
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Container className="p-2 md:p-5 min-h-screen">
      <HelmetPageTitle title={query!} />
      <h1>{results.length} results</h1>
      <div className="w-max flex gap-3 md:flex-row">
        {results.map(
          (result: Product & User, i: number) =>
            result.name && (
              <Link key={i} to={`/product/${result._id}`}>
                <ProductCard product={result} />
              </Link>
            )
        )}
      </div>
    </Container>
  );
};

export default Search;
