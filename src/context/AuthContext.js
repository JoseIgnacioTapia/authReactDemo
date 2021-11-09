import { useState, createContext } from 'react';

export const AuthContext = createContext();

const initialAuth = {
  token: '',
  isLoggedIn: false,
  login: token => {},
  logout: () => {},
};

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const userIsLoggedIn = !!token;

  const loginHandler = token => {
    setToken(token);
  };

  const logoutHandler = () => {
    setToken(null);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;