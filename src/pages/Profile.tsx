import { useAuth } from "../features/auth/context/AuthContext";
import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getProfile } from "../api/userApi";
import ChangeAvatar from "../features/user/components/ChangeAvatar";
import SellingProducts from "../features/user/components/SellingProducts";
import SoldProducts from "../features/user/components/SoldProducts";
import WatchlistProducts from "../features/user/components/WatchlistProducts";

type Selection = "selling" | "sold" | "watchlist";

const Profile = () => {
  const { username } = useParams();
  const { username: currUser } = useAuth();
  const [profileCategory, setProfileCategory] = useState<Selection>("selling");
  const [isEditing, setIsEditing] = useState(false);

  const { isLoading, data: user } = useQuery(
    ["profile", username, isEditing],
    () => {
      return getProfile(username);
    }
  );

  if (isLoading) {
    return <p>spinner</p>;
  }

  const handleSelling = () => {
    setProfileCategory("selling");
  };

  const handleSold = () => {
    setProfileCategory("sold");
  };

  const handleWatchlist = () => {
    setProfileCategory("watchlist");
  };

  const handleEditing = () => {
    setIsEditing(!isEditing);
  };

  const sellingSelected = profileCategory === "selling" ? "shadow-inner" : "";
  const soldSelected = profileCategory === "sold" ? "shadow-inner" : "";
  const watchlistSelected =
    profileCategory === "watchlist" ? "shadow-inner" : "";

  return (
    <div className="flex w-full justify-center bg-gray-50">
      <div className="container shadow h-screen bg-white">
        <div className="flex flex-col md:flex-row gap-5 relative md:child:self-end drop-shadow-sm shadow-sm p-2 pb-0">
          <div>
            <img
              src={user.avatar}
              alt="avatar"
              className="rounded-full w-32 h-32 md:h-44 md:w-44 object-cover mb-2 mx-5"
            />
            {isEditing && <ChangeAvatar setIsEditing={setIsEditing} />}
            {username === currUser && (
              <button
                className="absolute bg-gray-700 hover:bg-gray-800 text-sm shadow text-white px-5 rounded right-5 bottom-2"
                onClick={handleEditing}
              >
                Edit
              </button>
            )}
          </div>
          <h1 className="text-lg">{username}</h1>
          <div className="flex child:cursor-pointer child:px-10 child-hover:bg-gray-100">
            <p className={sellingSelected} onClick={handleSelling}>
              Selling
            </p>
            <p className={soldSelected} onClick={handleSold}>
              Sold
            </p>
            <p className={watchlistSelected} onClick={handleWatchlist}>
              Watchlist
            </p>
          </div>
        </div>
        <div className="grid grid-cols-profile">
          <ul className="h-screen w-full shadow-sm p-2 flex flex-col gap-4">
            <div className="profile-info-box">
              <li>Joined: {user.joined}</li>
            </div>
            <div className="profile-info-box">
              <li>Products sold: </li>
            </div>
            <div className="profile-info-box">
              <li>Location: </li>
            </div>
            <div className="profile-info-box">
              <li>Feedback: Positive</li>
            </div>
          </ul>
          <div className="h-screen w-full p-2 shadow-inner">
            {profileCategory === "selling" && (
              <SellingProducts products={user.products} />
            )}
            {profileCategory === "sold" && (
              <SoldProducts products={user.products} />
            )}
            {profileCategory === "watchlist" && (
              <WatchlistProducts products={user.watchlist} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
