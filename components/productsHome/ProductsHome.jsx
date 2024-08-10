import React from "react";
import Essentials from "../../essentials.json";
import ProductCards from "../productCards/ProductCards";
import Link from "next/link";
import images from "../../images.json";
const ProductHomePage = [
  {
    title: images[12]?.title,
    image: images[12]?.url,
  },
  {
    title: images[5]?.title,
    image: images[5]?.url,
  },
  {
    title: images[10]?.title,
    image: images[10]?.url,
  },
];
function ProductsHome() {
  return (
    <div className="container max-w-full">
      <div className="flex justify-center flex-col items-center">
        <div className="title my-4">
          <h1 className="text-black text-center font-normal leading-normal text-4xl tracking-widest my-8">
            {Essentials.pTitle}
          </h1>
        </div>
        <div className="flex flex-col my-8 ">
          <div className="flex flex-col lg:flex-row justify-evenly">
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
    </div>
  );
}

export default ProductsHome;
