import { useParams } from "react-router-dom";
import { getProduct } from "../api/productApi";
import { Product as ProductPage } from "../features/products/types";
import { useQuery, UseQueryResult } from "react-query";
import Container from "../components/Container";
import { useState } from "react";

const Product = () => {
  const { id } = useParams();
  const { isLoading, data: product } = useQuery(["product"], () => {
    return getProduct(id);
  }) as UseQueryResult<ProductPage>;
  const [number, setNumber] = useState(0);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleNextImage = () => {
    setNumber((currNum) => currNum + 1);
  };

  const handlePreviousImage = () => {
    setNumber((currNum) => currNum - 1);
  };

  return (
    <Container>
      <div>
        <img
          src={`http://localhost:5006${product?.images![number]}`}
          alt="img"
        />
      </div>
    </Container>
  );
};

export default Product;
