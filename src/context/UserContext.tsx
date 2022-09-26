import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";

//Using context to share user username and user token for authorization
type UserContextProps = {
  state: User;
  dispatch: React.Dispatch<Actions>;
};

type PropsProvider = {
  children: ReactNode;
};

type User = {
  username: string;
  token: string;
} | null;

type Actions =
  | { type: "LOGIN"; payload: User }
  | { type: "LOGOUT"; payload: null };

const initialState = null as User;

const userReducer = (user: typeof initialState, action: Actions) => {
  switch (action.type) {
    case "LOGIN":
      return (user = action.payload);
    case "LOGOUT":
      return (user = action.payload);
    default:
      return user;
  }
};

const UserContext = createContext({} as UserContextProps);

export const useUser = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }: PropsProvider) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      dispatch({ type: "LOGIN", payload: JSON.parse(user) });
    }
  }, []);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
