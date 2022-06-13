import React, { useState } from "react";

export const AuthContext = React.createContext<{
  isLoggedIn: boolean;
  userToken: string;
  updateIsLoggedIn: (cond: boolean) => void;
  updateUserToken: (s: string) => void;
}>({
  isLoggedIn: false,
  userToken: "",
  updateIsLoggedIn: () => {},
  updateUserToken: () => {},
});

type Props = {
  children: React.ReactNode;
};
const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userToken, setUserToken] = useState("");

  const updateIsLoggedIn = (cond: boolean) => {
    setIsLoggedIn(cond);
  };

  const updateUserToken = (token: string) => {
    setUserToken(token);
  };

  const contextValue = {
    isLoggedIn,
    updateIsLoggedIn,
    userToken,
    updateUserToken,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
