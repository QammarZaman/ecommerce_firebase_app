import React from "react";
import Inspired_1 from "assets/images/inspired_1.JPG";
import Inspired_2 from "assets/images/inspired_2.JPG";
import { AiOutlineInstagram } from "react-icons/ai";
import { IconContext } from "react-icons";

export default function InstagramSection() {
  return (
    <>
      <div className="get_inspired bg-white">
        <div className="container-fluid">
          <div className="row g-0">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="inner px-5 py-4">
                <IconContext.Provider value={{ className: "insta-icon mb-3" }}>
                  <AiOutlineInstagram />
                </IconContext.Provider>
                <h3 className="fs-1 text-black text-uppercase fw-bolder">
                  Get Inspired with Instagram
                </h3>
                <p className="my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  tempora illo fugiat pariatur, molestias cum qui asperiores
                  mollitia similique! Repudiandae sunt dicta minima vitae
                  possimus sequi ipsam animi rem nulla!
                </p>
                <a
                  href="/"
                  className="btn global_btn global_btn-outline fw-bold rounded-0 py-3 mt-4"
                >
                  Discover More
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="row g-0">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <img src={Inspired_1} className="img-fluid" t="" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <img src={Inspired_2} className="img-fluid" t="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
