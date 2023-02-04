import React from "react";
import { IconContext } from "react-icons";
import { RiFacebookFill, RiTwitterFill } from "react-icons/ri";

import { TiSocialPinterest } from "react-icons/ti";
import { TbTruckDelivery } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";

import FooterLogo from "../../../assets/images/footer-logo.png";

export default function Index() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer>
        <div className="services me-3 bg-primary text-black">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="service-box">
                  <IconContext.Provider value={{ size: "50px" }}>
                    <TbTruckDelivery />
                  </IconContext.Provider>
                  <h5>Fast & Free Delivery</h5>
                  <p className="m-0">Free Delivery on all orders</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="service-box">
                  <IconContext.Provider value={{ size: "50px" }}>
                    <MdPayment />
                  </IconContext.Provider>
                  <h5>Secure Payment</h5>
                  <p className="m-0">Free Delivery on all orders</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="service-box">
                  <IconContext.Provider value={{ size: "50px" }}>
                    <GiTakeMyMoney />
                  </IconContext.Provider>
                  <h5>Money Back Guarantee</h5>
                  <p className="m-0">Free Delivery on all orders</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="service-box">
                  <IconContext.Provider value={{ size: "50px" }}>
                    <BiSupport />
                  </IconContext.Provider>
                  <h5>Online Support</h5>
                  <p className="m-0">Free Delivery on all orders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary">
          <div className="sub-footer bg-secondary text-light ms-3">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="logo-box">
                    <img src={FooterLogo} alt="Footer Logo" className="w-25" />
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Perferendis saepe, non molestias omnis, repudiandae minus
                      deserunt, reiciendis soluta consectetur tempora eius
                      repellat. Eos harum fuga, error molestias tenetur rerum
                      nihil?
                    </p>
                    <ul>
                      <li>
                        <a href="/">
                          <IconContext.Provider value={{ size: "22px" }}>
                            <RiTwitterFill />
                          </IconContext.Provider>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <IconContext.Provider value={{ size: "22px" }}>
                            <RiFacebookFill />
                          </IconContext.Provider>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <IconContext.Provider value={{ size: "22px" }}>
                            <TiSocialPinterest />
                          </IconContext.Provider>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6">
                  <div className="quickLinks">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-12">
                        <h5 className="mb-5">Quick Links</h5>
                        <ul>
                          <li>
                            <a href="/">Image Liscensin</a>
                          </li>
                          <li>
                            <a href="/">Style Guide</a>
                          </li>
                          <li>
                            <a href="/">Privacy Policy</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12">
                        <h5 className="mb-5">Shop Category</h5>
                        <ul>
                          <li>
                            <a href="/">Image Liscensin</a>
                          </li>
                          <li>
                            <a href="/">Style Guide</a>
                          </li>
                          <li>
                            <a href="/">Privacy Policy</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12">
                        <h5 className="mb-5">Partners</h5>
                        <ul>
                          <li>
                            <a href="/">Image Liscensin</a>
                          </li>
                          <li>
                            <a href="/">Style Guide</a>
                          </li>
                          <li>
                            <a href="/">Privacy Policy</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center m-0 py-3">
              Copyright &copy;{year} All Rights Reserved | Developed by{" "}
              <a href="http://qammarzaman.com">qammarzaman.com</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
