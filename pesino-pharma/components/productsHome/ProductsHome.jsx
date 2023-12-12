import React from "react";
import Essentials from "../../essentials.json";

function ProductsHome() {
  return (
    <div>
      <div className="title my-4">
        <h1 className="text-black text-center font-normal leading-normal text-4xl tracking-widest my-8">
          {Essentials.pTitle}
        </h1>
      </div>
    </div>
  );
}

export default ProductsHome;
