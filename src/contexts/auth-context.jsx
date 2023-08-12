import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(function () {
    const storedToken = localStorage.getItem("isLoggedIn");
    if (storedToken === "1") setIsLoggedIn(true);
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    console.log(email, password);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, loginHandler, logoutHandler, setIsLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
export default AuthContext;
