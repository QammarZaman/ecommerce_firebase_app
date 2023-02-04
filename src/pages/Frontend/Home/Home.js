import React from "react";
import AboutUs from "./sections/AboutUs";
import Banner from "./sections/Banner";
import InstagramSection from "./sections/InstagramSection";
import PopularProducts from "./sections/PopularProducts";
import ProductYouLike from "./sections/ProductYouLike";
import TopPicks from "./sections/TopPicks";

export default function Home() {
  return (
    <>
      <Banner />
      <PopularProducts />
      <AboutUs />
      <ProductYouLike />
      <InstagramSection />
      <TopPicks />
    </>
  );
}
