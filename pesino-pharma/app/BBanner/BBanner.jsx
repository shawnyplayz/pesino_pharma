import React from "react";
import Essentials from "../../essentials.json";
function BBanner() {
  return (
    <div className="flex w-full bg-themeColor justify-center items-center">
      <div className="flex text-white text-3xl leading-normal font-light my-2">
        <p>{Essentials.BBanner}</p>
      </div>
    </div>
  );
}

export default BBanner;
