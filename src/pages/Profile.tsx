import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getProfile } from "../api/backendApi";
import ChangeAvatar from "../features/user/components/ChangeAvatar";

const Profile = () => {
  const { username } = useParams();

  const { isLoading, data: user } = useQuery(["profile"], () => {
    return getProfile(username);
  });

  if (isLoading) {
    return <p>spinner</p>;
  }

  console.log(user);

  return (
    <div className="flex w-full justify-center">
      <div className="container">
        <div>
          <img
            src={user.avatar}
            alt="avatar"
            className="rounded-full w-32 h-32 md:h-44 md:w-44 object-cover"
          />
          <h1 className="text-lg">{username}</h1>
        </div>
        <ChangeAvatar />
      </div>
    </div>
  );
};

export default Profile;
