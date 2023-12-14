import LandingBanner from "@/app/landingBanner/LandingBanner";
import React, { Suspense } from "react";
import BBanner from "../BBanner/BBanner";
import ProductsHome from "@/components/productsHome/ProductsHome";
import AboutPharma from "../aboutPharma/AboutPharma";
import BetterIngredients from "../ingredients/Ingredients";
import Loading from "../loading";

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
