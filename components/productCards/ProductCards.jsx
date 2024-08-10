"use client";
import React, { useState } from "react";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import CModal from "../modal/CModal";
function ProductCards(props) {
  const [openModal, setOpenModal] = useState(false);
  const modalFunc = (verdict) => {
    setOpenModal(verdict);
  };
  if (!props?.toggleProductPage) {
    return (
      <div className="flex flex-col p-4">
        <div className="cardProps ">
          <div className="aasd h-96 flex justify-center">
            <Image
              src={props?.productIcon}
              //When using CldImage
              //className="object-none !max-w-none md:max-w-lg"
              // When using Next-Image component
              className="md:m-5 !max-w-sm md:max-w-lg"
              width="400"
              height="600"
              alt="logo"
              loading="lazy"
            />
          </div>
        </div>
        <div className="title flex justify-center text-4xl my-8 not-italic text-black font-medium leading-normal">
          <h1>{props?.productTitle}</h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center -z-30">
        <div className="cardProps flex">
          <div className="aasd h-96 flex justify-center">
            <Image
              src={props?.content?.url}
              width="400"
              height="100"
              //When using CldImage
              // className="object-none !max-w-none md:max-w-lg"
              // When using Next-Image component
              className=" m-5 !max-w-none md:max-w-lg"
              alt="logo"
            />
          </div>
        </div>
        <div className="title text-4xl my-8 not-italic text-black font-medium leading-normal">
          <h1>{props?.content?.title}</h1>
        </div>
        <button
          className="text-xl bg-white border-2 px-6 py-2 border-solid border-blue-600  transform transition-transform duration-300 hover:scale-105"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <h1 className="leading-normal font-normal not-italic text-2xl">
            Read More
          </h1>
        </button>
        <CModal
          toggle={openModal}
          index={props?.index}
          {...props}
          modalFunc={modalFunc}
        />
      </div>
    );
  }
}

export default ProductCards;
