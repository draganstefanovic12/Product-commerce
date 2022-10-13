import { Selection } from "../types/types";

type Props = {
  setProfileProducts: React.Dispatch<React.SetStateAction<Selection>>;
  profileProducts: Selection;
};

const ProfileProductSelection = ({
  setProfileProducts,
  profileProducts,
}: Props) => {
  const handleSelling = () => {
    setProfileProducts("selling");
  };

  const handleSold = () => {
    setProfileProducts("sold");
  };

  const handleWishlist = () => {
    setProfileProducts("watchlist");
  };

  const sellingSelected =
    profileProducts === "selling" ? "shadow-inner text-dark" : "text-gray-800";
  const soldSelected =
    profileProducts === "sold" ? "shadow-inner text-dark" : "text-gray-800";
  const watchlistSelected =
    profileProducts === "watchlist"
      ? "shadow-inner text-dark"
      : "text-gray-800";

  return (
    <div className="flex child:cursor-pointer child:px-10 child-hover:bg-gray-100">
      <p className={sellingSelected} onClick={handleSelling}>
        Selling
      </p>
      <p className={soldSelected} onClick={handleSold}>
        Sold
      </p>
      <p className={watchlistSelected} onClick={handleWishlist}>
        Wishlist
      </p>
    </div>
  );
};

export default ProfileProductSelection;
