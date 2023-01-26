import { authentication } from "../utils/authentication";
import jwtDecode from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const decodedToken = () => {
    const token = authentication.isVerified();
    if (token) {
      const decodedToken = jwtDecode(token);
      setUser(decodedToken);
    }
  };

  useEffect(() => {
    decodedToken();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
