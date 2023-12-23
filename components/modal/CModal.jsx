import Image from "next/image";
import React from "react";

function CModal(props) {
  if (props?.toggle) {
    return (
      <div className="absolute inset-0" onClick={() => props?.modalFunc(false)}>
        <div
          className="flex flex-col fixed z-50 w-full h-full justify-center items-center bg-opacity-60"
          style={{ background: "rgba(169, 169, 169, 0.8)" }}
        >
          <div className="bg-white rounded-2xl flex md:w-2/3 md:h-96 flex-col md:flex-row gap-6 p-5 justify-around items-center ">
            <div className="max-w-xs p-4 ">
              <Image
                src={props?.content?.url}
                alt={props?.content?.title}
                width={600}
                height={600}
                loading="eager"
                priority
              />
            </div>

            <div className="">
              <div className="right_side flex flex-col gap-4">
                <div className="themeColor text-2xl ">Pesino Pharma</div>
                <div className="text-4xl font-medium max-w-lg overflow-y-scroll">
                  {props?.content?.title}
                </div>
                <div className="text-xl font-medium max-w-lg overflow-y-scroll">
                  {props?.content?.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CModal;
