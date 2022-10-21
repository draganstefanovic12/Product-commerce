import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { User } from "../types/types";
import { Message } from "../../messages/types";
import { useQuery } from "react-query";
import { getProfile } from "../../../api/userApi";
import { UserMessage } from "../../../components/Nav/Nav";

type UserContextProps = {
  user: User;
  unreadMessages: number;
  setUnreadMessages: Dispatch<SetStateAction<number>>;
};

type ProviderProps = {
  children: ReactNode;
};

const UserContext = createContext({} as UserContextProps);

export const useUser = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }: ProviderProps) => {
  //everytime I increment this number i'm refetching user data
  //keeping the messages synced
  const [unreadMessages, setUnreadMessages] = useState<number>(0);
  const [loggedIn, setLoggedIn] = useState<User>();

  const { data: user } = useQuery(
    ["currentUser"],
    () => {
      return getProfile(loggedIn?.username);
    },
    { enabled: !!loggedIn?.username }
  );

  useEffect(() => {
    //getting the unread message number
    const unreadMessages = user?.messages
      .map((msg: UserMessage) =>
        msg.messages.filter((msg: Message) => msg.read === false && msg.from !== user?.username)
      )
      .reduce((f: Message[], s: Message[]) => [...f, ...s], []).length;
    setUnreadMessages(unreadMessages);
  }, [user?.messages, user?.username]);

  useEffect(() => {
    const user = localStorage.getItem("commUser")!;
    if (user) {
      setLoggedIn(JSON.parse(user));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, unreadMessages, setUnreadMessages }}>
      {children}
    </UserContext.Provider>
  );
};
