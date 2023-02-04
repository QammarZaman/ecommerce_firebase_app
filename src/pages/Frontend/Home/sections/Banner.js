import React from "react";
import BannerImage from "../../../../assets/images/home/home-banner.jpg";

export default function Banner() {
  return (
    <>
      <div className="bg-primary banner-area position-relative">
        <div className="ms-2 me-3">
          <div className="h-75">
            <img src={BannerImage} className="img-fluid" alt="hero_img" />
            <div className="offer-area">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 offset-md-1 col-sm-8 offset-sm-2 col-12">
                    <div className="card">
                      <span>70% Sale Off</span>
                      <h3>Furniture At Cost</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur eius blanditiis vero qui officiis iure
                        animi, enim at dignissimos a quia soluta eligendi
                        molestias sapiente modi doloremque aliquid ullam
                        inventore?
                      </p>
                      <a
                        href="/"
                        className="btn btn-primary-outline global_btn"
                      >
                        Discover More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
