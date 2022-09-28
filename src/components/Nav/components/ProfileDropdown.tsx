import { useAuth } from "../../../features/auth/context/AuthContext";
import { useLogout } from "../../../features/auth/hooks/useLogout";
import { useNavigate } from "react-router-dom";

const ProfileMenu = () => {
  const { username } = useAuth();
  const { logout } = useLogout();
  const navigate = useNavigate();

  const handleSettings = () => {
    navigate("/settings");
  };

  const handleProfile = () => {
    navigate(`/profile/${username}`);
  };

  return (
    <ul className="dropdown-child">
      <li onClick={handleProfile}>Profile</li>
      <li onClick={handleSettings}>Settings</li>
      <li onClick={logout}>Logout</li>
    </ul>
  );
};

export default ProfileMenu;
