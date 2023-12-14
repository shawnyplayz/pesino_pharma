import LandingBanner from "@/app/landingBanner/LandingBanner";
import React from "react";
import BBanner from "../BBanner/BBanner";
import ProductsHome from "@/components/productsHome/ProductsHome";
import AboutPharma from "../aboutPharma/AboutPharma";
import BetterIngredients from "../ingredients/Ingredients";

function Main() {
  return (
    <div>
      <LandingBanner />
      <BBanner />
      <ProductsHome />
      <AboutPharma />
      <BetterIngredients />
    </div>
  );
}

export default Main;
