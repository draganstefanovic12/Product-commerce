import { useAuth } from "../features/auth/context/AuthContext";
import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Selection } from "../features/profile/types/types";
import { getProfile } from "../api/userApi";
import Container from "../components/Container";
import ChangeAvatar from "../features/user/components/ChangeAvatar";
import SoldProducts from "../features/user/components/SoldProducts";
import ProfileInfoBox from "../features/profile/components/ProfileInfoBox";
import SellingProducts from "../features/user/components/SellingProducts";
import WatchlistProducts from "../features/user/components/WatchlistProducts";
import ProfileProductSelection from "../features/profile/components/ProfileProducts";
import Spinner from "../components/Spinner/Spinner";

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
    return <Spinner />;
  }

  const handleEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Container className="h-max">
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
              className="secondary-btn absolute right-5 md:bottom-2 sm:bottom-5"
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
      <div className="block md:grid md:grid-cols-profile">
        <ProfileInfoBox user={user} />
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
    </Container>
  );
};

export default Profile;
