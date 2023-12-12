import React from "react";
import UnderLine from "../../public/BannerUnderLiner.svg";
import whiteOval from "../../public/whiteOval.svg";
import medsClub from "../../public/meds_club.svg";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import Essentials from "../../essentials.json";

function LandingBanner() {
  return (
    <div className="bg-home-start flex w-full h-auto">
      <div className="flex  justify-center items-center w-full my-16">
        <div className="grid grid-cols-6 gap-32">
          <div className="col-span-2">
            <div className="text-7xl font-thin leading-normal my-2">
              <h1 className="mb-0">{Essentials.Banner_Left_First}</h1>
              <div className="">
                <h1 className="mb-0"> {Essentials.Banner_Left_Second}</h1>
                <div className="flex w-full ">
                  <Image
                    src={UnderLine}
                    className="h-10 w-40 ml-14 -mt-5"
                    alt="logo"
                    loading="eager"
                    priority={true}
                  />
                </div>
              </div>
            </div>
            <div className="font-thin text-2xl leading-normal max-w-sm my-2">
              <p>{Essentials.Banner_Salutation}</p>
              <p>{Essentials.Banner_Salutation2}</p>
            </div>
            <button className="button rounded-3xl bg-themeColor flex flex-row justify-center items-center my-4">
              <h2 className="text-white text-2xl p-3">Learn More</h2>
              <div className="bg-white rounded-full p-2 mx-2">
                <FaLongArrowAltRight className="text-lg font-light text-blue-600" />
              </div>
            </button>
          </div>
          <div className="col-span-4 flex justify-center items-center">
            <div
              className=" flex bg-white-oval bg-contain"
              style={{
                transform: "scale(0.7)",
                height: "129%",
                width: "42.7vw",
              }}
            ></div>
            <Image
              src={medsClub}
              className="w-2/3 absolute -ml-60"
              alt="logo"
              loading="eager"
              priority={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingBanner;
