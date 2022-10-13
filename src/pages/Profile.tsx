import { useAuth } from "../features/auth/context/AuthContext";
import { useState } from "react";
import { useQuery } from "react-query";
import { Selection } from "../features/profile/types/types";
import { getProfile } from "../api/userApi";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import Container from "../components/Container";
import SoldProducts from "../features/user/components/SoldProducts";
import ProfileInfoBox from "../features/profile/components/ProfileInfoBox";
import SellingProducts from "../features/user/components/SellingProducts";
import WishlistProducts from "../features/user/components/WishlistProducts";
import ProfileProductSelection from "../features/profile/components/ProfileProducts";

const Profile = () => {
  const { username } = useParams();
  const { username: currUser } = useAuth();
  const navigate = useNavigate();
  const [profileProducts, setProfileProducts] = useState<Selection>("selling");
  const { isLoading, data: user } = useQuery(["profile", username], () => {
    return getProfile(username);
  });

  if (isLoading) {
    return <Spinner />;
  }

  const handleMessage = () => {
    navigate(`/messages/${username}`);
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
          {username !== currUser && currUser && (
            <button
              className="secondary-btn absolute right-5 md:bottom-2 sm:bottom-5"
              onClick={handleMessage}
            >
              Send message
            </button>
          )}
        </div>
        <h1 className="text-2Along with the gods: the two worldsxl font-bold font-dark">
          {username}
        </h1>
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
            <WishlistProducts products={user.watchlist} />
          )}
        </div>
      </div>
    </Container>
  );
};

export default Profile;
