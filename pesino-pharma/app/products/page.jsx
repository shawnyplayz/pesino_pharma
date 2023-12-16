"use client";
import React, { useState } from "react";
import productImages from "../../images.json";
import ProductCards from "@/components/productCards/ProductCards";
import CModal from "@/components/modal/CModal";
import Image from "next/image";
import cap1 from "../../public/products/Capsule_tr.svg";
import cap2 from "../../public/products/Capsule_left.svg";
import cap3 from "../../public/products/Capsule_rb.svg";
function Products() {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = (verdict) => {
    setOpenModal(verdict);
  };
  return (
    <div>
      <div className="relative bg-cover bg-center h-40rem">
        {/* <!-- Background Image --> */}
        <div className="absolute inset-0 bg-cover bg-center bg-banner-manu"></div>{" "}
        {/* <!-- Gradient Overlay --> */}
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-blue-800"></div>
        {/* <!-- Your content goes here --> */}
        <div className="relative flex-col z-10 flex items-center justify-center h-full text-white px-4">
          <div className="flex flex-col w-full h-full justify-center items-center gap-8">
            <div className="text-white font-medium text-6xl">Products</div>
            <div className="w-2/3 flex justify-center font-light text-3xl text-white">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cupiditate, velit!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex text-black text-center font-normal leading-normal text-4xl tracking-widest my-8">
          PRODUCTS
        </div>
        <div className="absolute left-0 " style={{ top: "170%" }}>
          <Image
            src={cap2}
            alt="capsule"
            // className="sticky"
            // style={{ left: "0rem", top: "170%" }}
          />
        </div>
        <div className="absolute" style={{ top: "70%", right: "3rem" }}>
          <Image src={cap1} alt="capsule" />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-20 px-40">
          {productImages?.map((el, index) => (
            <div className="p-16 " key={index}>
              <ProductCards
                toggleProductPage={true}
                content={el}
                openModal={toggleModal}
                index={index}
              />
            </div>
          ))}
          {/* <CModal toggle={openModal} index={index}/> */}
        </div>
        <div className="absolute" style={{ top: "270%", right: "0rem" }}>
          <Image src={cap3} alt="capsule" />
        </div>
      </div>
    </div>
  );
}

export default Products;
