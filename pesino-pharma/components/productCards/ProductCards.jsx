import React from "react";

import Image from "next/image";
function ProductCards(props) {
  return (
    <div className="flex flex-col">
      <div className="cardProps ">
        <div className="aasd h-96 w-96 flex justify-center">
          <Image
            src={props?.productIcon}
            className="max-w-5xl"
            alt="logo"
            loading="lazy"
          />
        </div>
      </div>
      <div className="title text-4xl my-8 not-italic text-black font-medium leading-normal">
        <h1>{props?.productTitle}</h1>
      </div>
      <div className="text-xl">
        <h1 className="leading-normal font-normal not-italic text-2xl">
          View Details
        </h1>
      </div>
    </div>
  );
}

export default ProductCards;
