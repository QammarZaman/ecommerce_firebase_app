import React, { useContext } from "react";
import { AuthContext } from "context/AuthContext";
import Login from "pages/Auth/Login";

const PrivateRoute = ({ Component }) => {
  const { authentication } = useContext(AuthContext);
  const { isAuthenticated } = authentication;
  if (!isAuthenticated) return <Login />;

  return <Component />;
};

export default PrivateRoute;
