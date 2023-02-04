import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Frontend from "./Frontend";
import Dashboard from "./Dashboard";
import Auth from "pages/Auth";
import PrivateRoute from "./privateRoute/PrivateRoute";
import { AuthContext } from "context/AuthContext";

export default function Index() {
  const { authentication } = useContext(AuthContext);
  const { isAuthenticated } = authentication;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Frontend />} />
        <Route
          path="auth/*"
          element={!isAuthenticated ? <Auth /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="dashboard/*"
          element={<PrivateRoute Component={Dashboard} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
