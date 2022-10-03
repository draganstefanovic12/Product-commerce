import { Product } from "../features/products/types";
import { useQuery } from "react-query";
import { categoryCovers } from "../features/categories/categoryCovers";
import { Link, useParams } from "react-router-dom";
import { getCategoryProducts } from "../api/categoryCollectionApi";
import { useEffect, useState } from "react";
import Container from "../components/Container";
import ProductCard from "../features/products/components/ProductCard";
import Spinner from "../components/Spinner/Spinner";

const Categories = () => {
  const [cover, setCover] = useState<string>("");
  const { category, offset } = useParams();
  const { isLoading, data } = useQuery(["category", category, offset], () => {
    return getCategoryProducts(category, offset);
  });

  //Dinamically changing cover backgrounds depending on the category selected
  useEffect(() => {
    categoryCovers.map(
      (cover) => cover.name === category && setCover(cover.link)
    );
  }, [category, data]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Container>
      <img src={cover} alt="" className="h-48 w-full object-cover" />
      <div className="p-2 w-52">
        <h1 className="text-2xl box-border mb-2">{category}</h1>
        <div className="flex flex-col md:flex-row gap-3">
          {data.map((product: Product, i: number) => (
            <Link to={`/product/${product._id}`}>
              <ProductCard key={i} product={product} />
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Categories;
