import { Product } from "../features/products/types";
import { useQuery } from "react-query";
import { categoryCovers } from "../features/categories/categoryCovers";
import { Link, useParams } from "react-router-dom";
import { getCategoryProducts } from "../api/categoryCollectionApi";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner/Spinner";
import Container from "../components/Container";
import ProductCard from "../features/products/components/ProductCard";
import HelmetPageTitle from "../components/HelmetPageTitle";

const Categories = () => {
  const [cover, setCover] = useState<string>("");
  const { category, offset } = useParams();
  const { isLoading, data } = useQuery(["category", category, offset], () => {
    return getCategoryProducts(category, offset);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    //Dinamically changing cover backgrounds depending on the category selected
    categoryCovers.map(
      (cover) => cover.name === category && setCover(cover.link)
    );
  }, [category, data]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Container>
      <HelmetPageTitle title={category!} />
      <img src={cover} alt="" className="h-48 w-full object-cover" />
      <div className="p-2 w-full">
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
    </Container>
  );
};

export default Categories;
