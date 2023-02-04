import React, { useContext } from "react";
import SingleProduct from "components/Frontend/Product/SingleProduct";
import { ProductsContext } from "context/ProductsContext";
import { useOutletContext } from "react-router-dom";

const ProductIndex = () => {
  const { allProducts, dataLimit, pages } = useContext(ProductsContext);
  const { setPageTitle } = useOutletContext();
  console.log(allProducts);

  setPageTitle("");
  return (
    <>
      <div className="allProducts products-page">
        <div className="container">
          <h1 className="text-center text-dark my-5">All Products</h1>
          <div className="row">
            {allProducts.map(
              (post) => (
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                  <SingleProduct {...post} />
                </div>
              )
              // <Card post={post} key={post._id} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductIndex;
