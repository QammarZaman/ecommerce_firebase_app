import React from "react";
import { Tabs } from "antd";
import SingleProduct from "components/Frontend/Product/SingleProduct";
import Sofa33 from "assets/images/product/sofa_33.jpg";
import Sofa22 from "assets/images/product/sofa_22.jpg";
import Sofa11 from "assets/images/product/sofa_11.jpg";

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

const tabItems = [
  {
    label: `Sofa`,
    key: "1",
    children: (
      <>
        <section className="productdetail">
          <div className="container">
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
        </section>
      </>
    ),
  },
  {
    label: `Table`,
    key: "2",
    children: "Contents of Bed Pane",
  },
  {
    label: `Chair`,
    key: "3",
    children: "Contents of Bed Pane",
  },
  {
    label: `Bed`,
    key: "4",
    children: "Contents of Bed Pane",
  },
];
export default function PopularProducts() {
  return (
    <>
      <div className="popularProducts bg-white py-100 text-black text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Popular Products</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis rem maiores, ex, <br /> magnam ullam quidem aliquam
                eum velit magni facere unde impedit numquam vel cumque?
                <br />
                Hic dolor ipsa excepturi amet.
              </p>
              <Tabs
                defaultActiveKey="1"
                centered
                items={tabItems}
                tabBarGutter={50}
                tabBarStyle={{ fontSize: "40px" }}
                className="productTabs"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
