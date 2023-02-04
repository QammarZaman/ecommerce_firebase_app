import React from "react";
import SingleProduct from "components/Frontend/Product/SingleProduct";
import Sofa33 from "assets/images/product/sofa_33.jpg";
import Sofa22 from "assets/images/product/sofa_22.jpg";
import Sofa11 from "assets/images/product/sofa_11.jpg";
import { Link } from "react-router-dom";

const sofaDetails = [
  {
    productImage: Sofa11,
    productTitle: 'Bly Microfiber / Microsuede 56" Armless Loveseat',
    productPrice: "367",
    productDetailLink: "#",
  },
  {
    productImage: Sofa22,
    productTitle: 'Bly Microfiber / Microsuede 58" Armless Loveseat',
    productPrice: "370",
    productDetailLink: "#",
  },
  {
    productImage: Sofa33,
    productTitle: 'Bly Microfiber / Microsuede 60" Armless Loveseat',
    productPrice: "380",
    productDetailLink: "#",
  },
];

export default function TopPicks() {
  return (
    <>
      <div className="productsYouLike bg-white py-100 text-black text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="fs-1 fw-500">Top Picks</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis rem maiores, ex, <br /> magnam ullam quidem aliquam
                eum velit magni facere unde impedit numquam vel cumque?
                <br />
                Hic dolor ipsa excepturi amet.
              </p>
              <div className="productdetail">
                <div className="row">
                  {sofaDetails.map((sofas, i) => {
                    return (
                      <div key={i} className="col-md-4 col-lg-4 col-12">
                        <SingleProduct key={i} {...sofas} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <Link
                to="/"
                className="btn global_btn global_btn-outline fw-bold rounded-0 py-3 mt-4 mx-auto"
              >
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
