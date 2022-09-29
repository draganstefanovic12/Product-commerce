import { Product } from "../features/products/types";
import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getProfile } from "../api/userApi";
import ProductCard from "../features/products/components/ProductCard";
import ChangeAvatar from "../features/user/components/ChangeAvatar";

const Profile = () => {
  const { username } = useParams();
  //add edit option later
  const [isEditing, setIsEditing] = useState(false);

  const { isLoading, data: user } = useQuery(["profile", username], () => {
    return getProfile(username);
  });

  if (isLoading) {
    return <p>spinner</p>;
  }

  return (
    <div className="flex w-full justify-center">
      <div className="container shadow h-screen">
        <div className="flex flex-col md:flex-row gap-12 md:child:self-end drop-shadow-sm shadow-sm p-2 pb-0">
          <img
            src={user.avatar}
            alt="avatar"
            className="rounded-full w-32 h-32 md:h-44 md:w-44 object-cover"
          />
          <h1 className="text-lg font-bold">{username}</h1>
          <div className="flex child:cursor-pointer child:w-20 child-hover:bg-gray-100">
            <p>Selling</p>
            <p>Sold</p>
            <p>Watchlist</p>
          </div>
        </div>
        <div className="grid grid-cols-profile">
          <ul className="h-screen w-full shadow-sm p-2">
            <li>Joined: {user.joined}</li>
            <li>Products sold: </li>
            <li>Location: </li>
            <li>Feedback: </li>
          </ul>
          <div className="h-screen w-full p-2 shadow-inner">
            {user.products.map((product: Product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
        {isEditing && <ChangeAvatar />}
      </div>
    </div>
  );
};

export default Profile;
