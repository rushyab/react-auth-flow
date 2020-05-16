import React from "react";
import LOCAL_STORAGE_KEYS from "../constants/localStorageKeys";

export type UserAuth = {
  id: number;
  token?: string;
  [key: string]: any;
};

export const DEFAULT_USER_AUTH = {
  id: 0,
};

const useAuthHandler = (initialState: UserAuth) => {
  const [auth, setAuth] = React.useState(initialState);

  const setAuthStatus = (userAuth: UserAuth) => {
    window.localStorage.setItem(
      LOCAL_STORAGE_KEYS.USER_AUTH,
      JSON.stringify(userAuth)
    );
    setAuth(userAuth);
  };

  const setUnAuthStatus = () => {
    window.localStorage.clear();
    setAuth(DEFAULT_USER_AUTH);
  };

  return {
    auth,
    setAuthStatus,
    setUnAuthStatus,
  };
};

export default useAuthHandler;
