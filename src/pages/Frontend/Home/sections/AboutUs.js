import React from "react";
import aboutCompanyImage from "assets/images/aboutCompany.JPG";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <>
      <div className="aboutCompany">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-6 col-lg-6 col-sm-12"
              style={{
                backgroundImage: `url(${aboutCompanyImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            ></div>
            <div className="col-md-6 col-lg-6 col-sm-12 bg-primary">
              <div className="inner text-dark py-100 px-5">
                <h3>Best Furniture Manufacturer</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id,
                  nobis! Facilis natus sunt neque magni dolor quibusdam
                  distinctio velit praesentium? Tempore, laudantium molestiae!
                  Aspernatur optio iusto illo omnis deleniti est.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id,
                  nobis! Facilis natus sunt neque magni dolor quibusdam
                  distinctio velit praesentium? Tempore, laudantium molestiae!
                  Aspernatur optio iusto illo omnis deleniti est.
                </p>
                <Link
                  to="/"
                  className="btn btn-lg mt-3 me-auto rounded-0 global_btn"
                >
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
