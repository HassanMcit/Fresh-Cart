import { createContext, useEffect, useState } from "react";

export const Tkn = createContext("token");

export default function AuthContext({ children }) {
  const [token, setToken] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);
  return <Tkn.Provider value={{ token, setToken }}>{children}</Tkn.Provider>;
}
