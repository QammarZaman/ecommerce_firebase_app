import React, { useContext } from "react";
import SingleProduct from "components/Frontend/Product/SingleProduct";
import chair1 from "assets/images/likedProducts/chair1.jpg";
import chair2 from "assets/images/likedProducts/chair2.jpg";
import chair3 from "assets/images/likedProducts/chair3.jpg";
import { Link } from "react-router-dom";

const sofaDetails = [
  {
    id: 1,
    productImage: chair1,
    productTitle: 'Bly Microfiber / Microsuede 56" Armless Loveseat',
    productPrice: "367",
    productDetailLink: "#",
  },
  {
    id: 2,
    productImage: chair2,
    productTitle: 'Bly Microfiber / Microsuede 58" Armless Loveseat',
    productPrice: "370",
    productDetailLink: "#",
  },
  {
    id: 3,
    productImage: chair3,
    productTitle: 'Bly Microfiber / Microsuede 60" Armless Loveseat',
    productPrice: "380",
    productDetailLink: "#",
  },
];

export default function ProductYouLike() {
  return (
    <>
      <div className="productsYouLike bg-white py-100 text-black text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="fs-1 fw-500">Products you may like</h3>
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
              <button
                className="btn global_btn global_btn-outline fw-bold rounded-0 my-3 mx-auto"
                onClick={() => window.toastify("Working", "success")}
              >
                Discover More
              </button>
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
