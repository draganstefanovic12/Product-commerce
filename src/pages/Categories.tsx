import { Product } from "../features/products/types";
import { useQuery } from "react-query";
import { categoryCovers } from "../features/categories/categoryCovers";
import { Link, useLocation, useParams } from "react-router-dom";
import { getCategoryProducts } from "../api/categoryCollectionApi";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner/Spinner";
import Container from "../components/Container";
import ProductCard from "../features/products/components/ProductCard";
import HelmetPageTitle from "../components/HelmetPageTitle";
import Pagination from "../components/Pagination/Pagination";

const Categories = () => {
  const [cover, setCover] = useState<string>("");
  const { pathname } = useLocation();
  const { category, offset } = useParams();
  const { isLoading, data } = useQuery(["category", category, offset], () => {
    return getCategoryProducts(category, offset);
  });

  useEffect(() => {
    //Dinamically changing cover backgrounds depending on the category selected
    categoryCovers.map(
      (cover) => cover.name === category && setCover(cover.link)
    );
  }, [category, data]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Container className="min-h-screen pb-1 flex flex-col justify-between h-full">
      <HelmetPageTitle title={category!} />
      <div className="w-full p-2">
        <img src={cover} alt="" className="h-48 w-full object-cover" />
        <h1 className="text-2xl box-border border-bottom font-bold mb-5">
          {category}
        </h1>
        <div className="flex flex-row flex-wrap gap-3">
          {data.products.map((product: Product, i: number) => (
            <Link key={i} to={`/product/${product._id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
      <Pagination query={pathname.slice(0, -1)} total={data.total} />
    </Container>
  );
};

export default Categories;
