import { Product, Review } from "../types";

type ReviewProps = {
  product: Product | undefined;
};

const ProductReviews = ({ product }: ReviewProps) => {
  return (
    <>
      {product?.reviews?.length! > 0 ? (
        product?.reviews?.map((review: Review, i: number) => (
          <div key={i} className="w-3/4 shadow rounded">
            <p>{review.user}</p>
            <div>
              <p>{review.stars}</p>
              <p>{review.review}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-[#728292]">This product has no reviews.</p>
      )}
    </>
  );
};

export default ProductReviews;
