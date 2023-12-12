import LandingBanner from "@/app/landingBanner/LandingBanner";
import React from "react";
import BBanner from "../BBanner/page";
import ProductsHome from "@/components/productsHome/ProductsHome";

function Main() {
  return (
    <div>
      <LandingBanner />
      <BBanner />
      <ProductsHome />
    </div>
  );
}

export default Main;
