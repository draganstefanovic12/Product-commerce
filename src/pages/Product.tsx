import { useCart } from "../features/shopping cart/context/ShoppingCartContext";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../api/productApi";
import { Product as ProductPage } from "../features/products/types";
import { useQuery, UseQueryResult } from "react-query";
import Container from "../components/Container";
import ImageCarousel from "../features/products/components/ImageCarousel";
import Button from "../components/Button";

const Product = () => {
  const { id } = useParams();
  const { cart, addToCart } = useCart();
  const { isLoading, data: product } = useQuery(["product", id], () => {
    return getProduct(id);
  }) as UseQueryResult<ProductPage>;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleAddCart = () => {
    addToCart(product);
  };

  const trades =
    product?.trade === true ? "Accepting trades" : "Not accepting trades";

  return (
    <Container>
      <div className="flex flex-col md:flex-row">
        <ImageCarousel product={product} />
        <div className="flex flex-col p-5 shadow w-full justify-between">
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl">{product!.name}</h1>
            <div className="flex shadow rounded w-max p-5 h-16">
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
              <h1>Date created: {product!.createdAt.slice(0, 10)}</h1>
            </div>
          </div>
          <div>
            <div className="flex flex-col align-bottom">
              <p className="text-4xl pr-2">{product!.price}$</p>
              <p>In stock: {product!.stock}</p>
            </div>
            <Button
              onClick={handleAddCart}
              className="w-36 bg-gray-700 hover:bg-gray-800"
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
      <div className="px-5 w-full h-32">
        <p>Description</p>
        <p className="shadow-sm rounded h-32 p-3">{product?.description}</p>
      </div>
    </Container>
  );
};

export default Product;
