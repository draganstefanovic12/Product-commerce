import { Link } from "react-router-dom";
import { User } from "../../../features/user/types/types";

type ResultProps = {
  user: User;
};

const SearchResultsUser = ({ user }: ResultProps) => {
  return (
    <Link className="flex items-center gap-2" to={`profile/${user.username}`}>
      <img src={user.avatar} alt="" className="rounded-full h-10 w-10" />
      <p>{user.username}</p>
    </Link>
  );
};

export default SearchResultsUser;
