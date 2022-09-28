import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getProfile } from "../../api/backendApi";

const Profile = () => {
  const { username } = useParams();
  const { isLoading, data: user } = useQuery(["profile"], () => {
    return getProfile(username);
  });

  if (isLoading) {
    return <p>spinner</p>;
  }

  return (
    <div className="flex w-full justify-center">
      <div className="container">
        <h1>{username}</h1>
      </div>
    </div>
  );
};

export default Profile;
