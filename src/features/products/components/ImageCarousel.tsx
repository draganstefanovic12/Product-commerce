import { Product } from "../types";
import { useState } from "react";
import arrowLeft from "../../../assets/images/arrowleft.svg";
import arrowRight from "../../../assets/images/arrowright.svg";

type CarouselProps = {
  product: Product | undefined;
};

const ImageCarousel = ({ product }: CarouselProps) => {
  const [number, setNumber] = useState(0);

  const handleNextImage = () => {
    setNumber((currNum) =>
      number === product?.images!.length! - 1 ? 0 : currNum + 1
    );
  };

  const handlePreviousImage = () => {
    setNumber((currNum) =>
      number === 0 ? product?.images!.length! - 1 : currNum - 1
    );
  };

  return (
    <div className="relative w-2/4 h-128 flex justify-center items-center shadow overflow-hidden">
      <img
        src={`http://localhost:5006${product?.images![number]}`}
        alt="img"
        className="h-128"
      />
      <img
        onClick={handlePreviousImage}
        className="h-10 absolute top-2/4 left-5 cursor-pointer"
        src={arrowLeft}
        alt="arrow"
      />
      <img
        onClick={handleNextImage}
        className="h-10 absolute top-2/4 right-5 cursor-pointer"
        src={arrowRight}
        alt="arrow"
      />
    </div>
  );
};

export default ImageCarousel;
