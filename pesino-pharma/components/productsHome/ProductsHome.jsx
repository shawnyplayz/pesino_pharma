import React from "react";
import Essentials from "../../essentials.json";
import ProductCards from "../productCards/ProductCards";
import VitaminSyrup from "../../public/products/99Vitamin_Syrup.svg";
import Pesiplex from "../../public/products/Pesiplex.svg";
import Pesivit from "../../public/products/Pesivit.svg";
import Link from "next/link";
const ProductHomePage = [
  {
    title: "99 Vitamin Syrup",
    image: VitaminSyrup,
  },
  {
    title: "Pesiplex Syrup",
    image: Pesiplex,
  },
  {
    title: "Pesivit Syrup",
    image: Pesivit,
  },
];
function ProductsHome() {
  return (
    <div>
      <div className="title my-4">
        <h1 className="text-black text-center font-normal leading-normal text-4xl tracking-widest my-8">
          {Essentials.pTitle}
        </h1>
      </div>
      <div className="flex flex-col my-8">
        <div className="flex flex-row justify-evenly">
          {ProductHomePage?.map((el) => {
            return (
              <ProductCards productIcon={el.image} productTitle={el?.title} />
            );
          })}
        </div>
        <div className="my-16 w-full flex justify-center">
          <Link
            href="/products"
            className="themeColor text-2xl font-medium  h-1 decoration-solid  underline underline-offset-4"
          >
            <span>VIEW ALL</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductsHome;
