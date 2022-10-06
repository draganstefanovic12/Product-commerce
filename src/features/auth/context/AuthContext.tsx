import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { useQuery } from "react-query";
import { getProfile } from "../../../api/userApi";
import { User } from "../../user/types/types";

//Using context to share user username and user token for authorization
type UserContextProps = {
  username?: string | undefined;
  user?: User;
  token?: string | undefined;
  dispatch: React.Dispatch<Actions>;
};

type PropsProvider = {
  children: ReactNode;
};

type AuthUser = {
  username: string;
  token: string;
} | null;

type Actions =
  | { type: "LOGIN"; payload: AuthUser }
  | { type: "LOGOUT"; payload: null };

const initialState = null as AuthUser;

const authReducer = (user: typeof initialState, action: Actions) => {
  switch (action.type) {
    case "LOGIN":
      return (user = action.payload);
    case "LOGOUT":
      return (user = action.payload);
    default:
      return user;
  }
};

const AuthContext = createContext({} as UserContextProps);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }: PropsProvider) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const { data: user } = useQuery(
    ["currentUser"],
    () => {
      return getProfile(state?.username);
    },
    { enabled: !!state?.username, staleTime: Infinity }
  );

  useEffect(() => {
    const user = localStorage.getItem("commUser");

    //Checking if there's a user in local storage
    if (user) {
      dispatch({ type: "LOGIN", payload: JSON.parse(user) });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
