import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useState,
} from "react";
import User from "../types/user.types";

interface IUserContext {
  currentUser: User | null;
  isAuthenticated: boolean;
  loginUser: (user: User) => void;
  logoutUser: () => void;
}

export const UserContext = createContext<IUserContext>({
  currentUser: null,
  isAuthenticated: false,
  loginUser: () => {},
  logoutUser: () => {},
});

const UserContexrProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const isAuthenticated = currentUser !== null;

  const loginUser = (user: User) => {
    setCurrentUser(user);
  };

  const logoutUser = () => {
    setCurrentUser(null);
  };

  return (
    <UserContext.Provider
      value={{ currentUser, isAuthenticated, loginUser, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContexrProvider;
