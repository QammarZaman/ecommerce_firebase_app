import React from "react";
import { Link } from "react-router-dom";
import HeaderBg from "assets/images/h2_hero1.png.webp";

export default function SubHeader({ parentTitle, pageTitle }) {
  // console.log("parentTitle =>", parentTitle, "pageTitle =>", pageTitle);
  return (
    <>
      <div
        className="subHeader"
        style={{
          backgroundImage: `url(${HeaderBg})`,
          padding: "80px 0",
          backgroundPosition: "center top",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <h1>{pageTitle || parentTitle}</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  {pageTitle ? (
                    <>
                      <li className="breadcrumb-item">
                        <Link to={`/${parentTitle.toLowerCase()}`}>
                          {parentTitle}
                        </Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        {pageTitle}
                      </li>
                    </>
                  ) : (
                    <>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        {parentTitle}
                      </li>
                    </>
                  )}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
