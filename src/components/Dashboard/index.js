import Home from "pages/Frontend/Home/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Users from "./Users";

const index = () => {
  return (
    <>
      <Routes path="/*">
        <Route index element={<Home />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </>
  );
};

export default index;
