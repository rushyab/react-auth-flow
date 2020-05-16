import React from "react";
import getUserFromLocalStorage from "../utils/getUserFromLocalStorage";
import useAuthHandler, {
  UserAuth,
  DEFAULT_USER_AUTH,
} from "../customHooks/AuthHandler";

interface AuthContextInterface {
  auth: UserAuth;
  setAuthStatus: (userAuth: UserAuth) => void;
  setUnAuthStatus: () => void;
}

const initialState: AuthContextInterface = {
  auth: DEFAULT_USER_AUTH,
  setAuthStatus: () => {},
  setUnAuthStatus: () => {},
};

export const authContext = React.createContext(initialState);

const { Provider } = authContext;

const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { auth, setAuthStatus, setUnAuthStatus } = useAuthHandler(
    getUserFromLocalStorage()
  );

  return (
    <Provider value={{ auth, setAuthStatus, setUnAuthStatus }}>
      {children}
    </Provider>
  );
};

export default AuthContextProvider;
