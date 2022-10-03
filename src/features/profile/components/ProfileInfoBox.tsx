import { User } from "../../user/types/types";

type ProfileType = {
  user: User;
};

const ProfileInfoBox = ({ user }: ProfileType) => {
  const productsSoldCount = user.products.filter((product) => product.sold).length
  
  return (
    <ul className="hidden h-screen w-full shadow-sm p-2 md:flex flex-col gap-4">
      <div className="profile-info-box">
        <li>Joined: {user.joined}</li>
      </div>
      <div className="profile-info-box">
        <li>Products sold: {productsSoldCount}</li>
      </div>
      <div className="profile-info-box">
        <li>Location: </li>
      </div>
      <div className="profile-info-box">
        <li>Feedback: Positive</li>
      </div>
    </ul>
  );
};

export default ProfileInfoBox;
