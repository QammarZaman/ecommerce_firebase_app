import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import SubHeader from "components/Frontend/SubHeader";
import { ProductsContext } from "context/ProductsContext";

const Products = () => {
  const { allProducts, dataLimit, pages } = useContext(ProductsContext);

  //   const { page: currentPage } = useParams(); // from react-router, this is the `:page` parameter defined on the route.
  //   const navigate = useNavigate();

  //   const goToNextPage = () => {
  //     navigate(`../${currentPage + 1}`); // you may have to tweak this based on your routing. See the link above about useNavigate()
  //   };

  //   const goToPreviousPage = () => {
  //     navigate(`../${currentPage - 1}`);
  //   };

  //   const changePage = (e) => {
  //     const pageNumber = Number(e.target.textContent);
  //     navigate(`../${pageNumber}`);
  //   };

  //   const getPaginatedData = () => {
  //     const startIndex = currentPage * dataLimit - dataLimit;
  //     const endIndex = startIndex + dataLimit;
  //     return allProducts.slice(startIndex, endIndex);
  //   };

  //   const getPaginationGroup = () => {
  //     let start = Math.floor((currentPage - 1) / pages) * pages;
  //     return new Array(pages).fill().map((_, i) => start + i + 1);
  //   };

  const [pageTitle, setPageTitle] = useState("");

  return (
    <>
      <SubHeader parentPage="Products" pageName={pageTitle} />
      <Outlet context={{ setPageTitle }} />
    </>
  );
};

export default Products;
