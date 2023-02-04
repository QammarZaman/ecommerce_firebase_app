import React, { useContext } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { ProductsContext } from "context/ProductsContext";

export default function SingleProduct() {
  const { allProducts } = useContext(ProductsContext);
  const { setPageTitle } = useOutletContext();
  const { slug } = useParams();
  let productTitle = slug.replace(/-/g, " ");
  const product = allProducts.find(
    (prod) => prod.title.toLowerCase() === productTitle
  );

  setPageTitle(product.title);

  return <>Single Product</>;
}
