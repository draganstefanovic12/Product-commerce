import { Product } from "../features/products/types";
import { useCart } from "../features/shopping cart/context/ShoppingCartContext";
import { getProduct } from "../api/productApi";
import { Link, useParams } from "react-router-dom";
import { useQuery, UseQueryResult } from "react-query";
import Button from "../components/Button";
import Spinner from "../components/Spinner/Spinner";
import Container from "../components/Container";
import ImageCarousel from "../features/products/components/ImageCarousel";
import ProductReviews from "../features/products/components/ProductReviews";
import EditProduct from "../features/products/components/EditProduct";
import { useState } from "react";
import { useAuth } from "../features/auth/context/AuthContext";

const ProductPage = () => {
  const { id } = useParams();
  const { username } = useAuth();
  const { addToCart } = useCart();
  const [isEditing, setIsEditing] = useState(false);
  const { isLoading, data: product } = useQuery(["product", id], () => {
    return getProduct(id);
  }) as UseQueryResult<Product>;

  if (isLoading) {
    return <Spinner />;
  }

  const handleAddCart = () => {
    addToCart(product);
  };

  const handleEditing = () => {
    setIsEditing(true);
  };

  const trades =
    product?.trade === true ? "Accepting trades" : "Not accepting trades";

  return (
    <Container>
      <div className="flex flex-col md:flex-row">
        <ImageCarousel product={product} />
        <div className="flex flex-col w-full justify-between">
          <div className="flex flex-col p-5 gap-5">
            <h1>
              <Link
                className="hover:underline pr-1"
                to={`/category/${product?.category}/0`}
              >
                {product?.category}
              </Link>
              {">"} {product?.name}
            </h1>
            <h1 className="text-3xl">{product!.name}</h1>
            <div className="flex shadow rounded w-max p-5">
              <h1>
                Seller:
                <Link
                  className="hover:underline pl-1"
                  to={`/profile/${product?.seller}`}
                >
                  {product!.seller}
                </Link>
              </h1>
            </div>
            <div className="flex shadow rounded w-max p-5 h-16">
              <h1>{trades}</h1>
            </div>
            <div className="flex shadow rounded w-max p-5 h-16">
              <h1>Date created: {product!.createdAt!.slice(0, 10)}</h1>
            </div>
          </div>
          <div className="flex-row flex justify-between px-5 md:block mt-5">
            <div className="flex flex-col align-bottom">
              <p className="text-4xl pr-2">{product!.price}$</p>
              <p>In stock: {product!.stock}</p>
            </div>
            <div className="flex gap-5">
              <Button
                onClick={handleAddCart}
                className="w-36 h-10 bg-gray-700 hover:bg-gray-800"
              >
                Add to cart
              </Button>
              {username === product?.seller && (
                <Button onClick={handleEditing}>Edit</Button>
              )}
            </div>
            {/* for later */}
            {/* {username !== product?.seller && (
              <Button className="w-52 h-10 bg-gray-700 hover:bg-gray-800">
                Add to watchlist
              </Button>
            )} */}
          </div>
        </div>
      </div>
      <div className="px-2 w-full border-b-2 border-gray-100 border-solid">
        <p className="text-2xl">Description</p>
        <p className="rounded text-[#728292]">{product?.description}</p>
      </div>
      {isEditing && <EditProduct props={product} setIsEditing={setIsEditing} />}
      <div className="px-2 w-full h-32">
        <p className="text-2xl">Reviews</p>
        <ProductReviews product={product} />
      </div>
    </Container>
  );
};

export default ProductPage;
