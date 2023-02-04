import React from "react";
import Sofa2 from "assets/images/product/sofa_22.jpg";
import { Link } from "react-router-dom";

export default function SingleProduct({
  productImage,
  productTitle,
  productPrice,
  productDetailLink,
  title,
  price,
  images,
}) {
  const slug = title
    ?.toLowerCase()
    .replace(/[^_\w ]+/g, "")
    .replace(/\ +/g, "-");

  return (
    <>
      <Link to={`/products/${slug}`}>
        <div className="card productInfo">
          <img src={productImage || images[0]} alt="" className="img-fluid" />
          <h4 className="text-dark">{productTitle || title}</h4>
          <span className="price">
            {`$`}
            {productPrice || price}
          </span>
        </div>
      </Link>
    </>
  );
}
