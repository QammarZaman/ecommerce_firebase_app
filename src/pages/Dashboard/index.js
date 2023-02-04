import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";

const index = () => {
  return (
    <Routes path="/*">
      <Route index element={<Home />} />
      <Route path="users" element={<Users />} />
    </Routes>
  );
};

export default index;
