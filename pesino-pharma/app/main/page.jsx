import LandingBanner from "@/app/landingBanner/LandingBanner";
import React from "react";
import BBanner from "../BBanner/page";
import ProductsHome from "@/components/productsHome/ProductsHome";
import AboutPharma from "../aboutPharma/page";

function Main() {
  return (
    <div>
      <LandingBanner />
      <BBanner />
      <ProductsHome />
      <AboutPharma />
    </div>
  );
}

export default Main;
