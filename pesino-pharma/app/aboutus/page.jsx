import React from "react";
import "./aboutus.css";
import Image from "next/image";
import values from "../../public/aboutus/values.svg";
import partnering from "../../public/aboutus/partnering.svg";
import innovating from "../../public/aboutus/innovating.svg";
import leading from "../../public/aboutus/leading.svg";
import aboutBanner from "../../public/aboutus/aboutBanner.jpeg";
import Essentials from "../../essentials.json";
function AboutUs() {
  return (
    <div>
      {/* Banner */}
      <div class="relative bg-cover bg-center h-40rem">
        {/* <!-- Background Image --> */}
        <div
          class="absolute inset-0 bg-cover bg-center bg-about-us"
          style={{
            backgroundImage: { aboutBanner },
          }}
        ></div>{" "}
        {/* <!-- Gradient Overlay --> */}
        <div class="absolute inset-0 bg-gradient-to-t from-transparent to-black"></div>
        {/* <!-- Your content goes here --> */}
        <div class="relative flex-col z-10 flex items-center justify-center h-full text-white px-4">
          <div className="flex flex-col w-full h-full justify-center items-center gap-8">
            <div className="text-white font-medium text-6xl">About Us</div>
            <div className="w-2/3 flex justify-center font-light text-3xl text-white">
              <p>{Essentials.aboutusBanner}</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end w-full">
            <div className="w-2/3 bottomBanner">
              <div className="grid grid-cols-4 h-full items-center text-center">
                <div className="p-4 flex flex-col items-center gap-4 border-r-2 border-cyan-600">
                  <div className="">
                    <Image src={values} alt="values" priority loading="eager" />
                  </div>
                  <h1 className="themeColor font-medium text-3xl">Values</h1>
                </div>
                <div className="p-4 flex flex-col items-center gap-4 border-r-2 border-cyan-600">
                  <div className="">
                    <Image
                      src={partnering}
                      alt="partnering"
                      priority
                      loading="eager"
                    />
                  </div>
                  <h1 className="themeColor font-medium text-3xl">
                    Partnering
                  </h1>
                </div>
                <div className="p-4 flex flex-col items-center gap-4 border-r-2 border-cyan-600">
                  <div className="">
                    <Image
                      src={innovating}
                      alt="innovating"
                      priority
                      loading="eager"
                    />
                  </div>
                  <h1 className="themeColor font-medium text-3xl">
                    Innovating
                  </h1>
                </div>
                <div className="p-4 flex flex-col items-center gap-4">
                  <div className="">
                    <Image
                      src={leading}
                      alt="leading"
                      priority
                      loading="eager"
                    />
                  </div>
                  <h1 className="themeColor font-medium text-3xl">Leading</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Part */}
    </div>
  );
}

export default AboutUs;
