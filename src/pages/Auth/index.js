import React from "react";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import Register from "./Register";
import RegisterComplete from "./Register/RegisterComplete";

export default function index() {
  return (
    <>
      <Routes path="/*">
        <Route index path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="register-complete" element={<RegisterComplete />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<>404 Page Not Found</>} />
      </Routes>
    </>
  );
}
