import { useAuth } from "../features/auth/context/AuthContext";
import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Selection } from "../features/profile/types/types";
import { getProfile } from "../api/userApi";
import ChangeAvatar from "../features/user/components/ChangeAvatar";
import SellingProducts from "../features/user/components/SellingProducts";
import SoldProducts from "../features/user/components/SoldProducts";
import WatchlistProducts from "../features/user/components/WatchlistProducts";
import ProfileProductSelection from "../features/profile/components/ProfileProducts";

const Profile = () => {
  const { username } = useParams();
  const { username: currUser } = useAuth();
  const [profileProducts, setProfileProducts] = useState<Selection>("selling");
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

  const handleEditing = () => {
    setIsEditing(!isEditing);
  };

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
                className="secondary-btn absolute right-5 bottom-2"
                onClick={handleEditing}
              >
                Edit
              </button>
            )}
          </div>
          <h1 className="text-lg">{username}</h1>
          <ProfileProductSelection
            profileProducts={profileProducts}
            setProfileProducts={setProfileProducts}
          />
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
            {profileProducts === "selling" && (
              <SellingProducts products={user.products} />
            )}
            {profileProducts === "sold" && (
              <SoldProducts products={user.products} />
            )}
            {profileProducts === "watchlist" && (
              <WatchlistProducts products={user.watchlist} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
