"use client";
import React, { useState } from "react";
import productImages from "../../images.json";
import ProductCards from "@/components/productCards/ProductCards";
import CModal from "@/components/modal/CModal";
import Image from "next/image";
import cap1 from "../../public/products/Capsule_tr.svg";
import cap2 from "../../public/products/Capsule_left.svg";
import cap3 from "../../public/products/Capsule_rb.svg";
import Essentials from "../../Essentials.json";
import "./capsule.css";
import AOSComponent from "@/components/aos/AOS";
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
        <AOSComponent>
          <div className="relative flex-col z-10 flex items-center justify-center h-full text-white px-4">
            <div className="flex flex-col w-full h-full justify-center items-center gap-8">
              <div
                className="text-white font-medium text-6xl"
                data-aos="fade-left"
              >
                Products
              </div>
              <div
                className="w-2/3 flex justify-center font-light text-3xl text-white"
                data-aos="fade-right"
              >
                <p>{Essentials?.productHeader}</p>
              </div>
            </div>
          </div>
        </AOSComponent>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex text-black text-center font-normal leading-normal text-4xl tracking-widest my-8">
          PRODUCTS
        </div>
        <div className="absolute left-0 secondCap">
          <Image src={cap2} alt="capsule" className="w-16 md:w-auto" />
        </div>

        <div className="absolute firstCap">
          <Image src={cap1} alt="capsule" className="w-16 md:w-auto" />
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-20 px-4">
          {productImages?.map((el, index) => (
            <div className="" key={index}>
              <ProductCards
                toggleProductPage={true}
                content={el}
                openModal={toggleModal}
                index={index}
              />
            </div>
          ))}
        </div>
        <div className="absolute thridCap">
          <Image src={cap3} alt="capsule" className="w-10 md:w-auto" />
        </div>
      </div>
    </div>
  );
}

export default Products;
