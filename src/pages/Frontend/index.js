import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import { Navbar } from "../../components/Frontend/Header";
import { Footer } from "../../components/Frontend/Footer";
import Home from "./Home/";
import About from "./About";
import Product from "./Product";
import SingleProductPage from "./SingleProductPage";
import ProductIndex from "./Product/ProductIndex";

export default function index() {
  return (
    <>
      <Layout className="layout">
        <Navbar />
        <Routes path="/*">
          <Route index element={<Home />} />
          <Route path="about/" element={<About />} />
          <Route path="/products" element={<Product />}>
            <Route path="/products/" element={<ProductIndex />} />
            <Route path="/products/:slug" element={<SingleProductPage />} />
          </Route>
          <Route path="*" element={<>404 Page not found</>} />
        </Routes>
        <Footer />
      </Layout>
    </>
  );
}
