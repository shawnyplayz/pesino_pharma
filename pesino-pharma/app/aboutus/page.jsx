import React from "react";
import "./aboutus.css";
import Image from "next/image";
import values from "../../public/aboutus/values.svg";
import partnering from "../../public/aboutus/partnering.svg";
import innovating from "../../public/aboutus/innovating.svg";
import leading from "../../public/aboutus/leading.svg";
import aboutBanner from "../../public/aboutus/aboutBanner.jpeg";
import aboutPesino from "../../public/aboutus/aboutPesino.jpeg";
import Quality from "../../public/aboutus/quality.svg";
import Export from "../../public/aboutus/Export.svg";
import Globalisation from "../../public/aboutus/Globalization.svg";
import Manufacture from "../../public/aboutus/manufacture.svg";
import Import from "../../public/aboutus/Import.svg";
import Essentials from "../../essentials.json";
const whychooseUs = [
  {
    icon: Quality,
    title: "QUALITY",
    description:
      "The Quality Operations team at Pesino Pharma ensures to provide drugs of consistent quality, purity and efficacy to our consumers. In order to achieve this, in-house cGMP Quality Circles ensure that all activities in the manufacturing units are carried out in accordance with cGMP norms.",
  },
  {
    icon: Export,
    title: "EXPORT MARKETS",
    description:
      "Pesino Pharma have achieved substantial growth in exports to Central and South America, Africa and Middle East countries. Pesino Pharma Brand Marketing through promotions and propaganda has carved a niche place in the international market.",
  },
  {
    icon: Globalisation,
    title: "GLOBALIZATION",
    description:
      "Total Satisfaction to our customers and further to his consumers would be possible by way of a Joint Venture in Marketing and Distribution of our Brands and for which we look for good Business Partners to realize our plan.",
  },
  {
    icon: Manufacture,
    title: "MANUFACTURING",
    description:
      "Pesino Pharma adheres to the strict cGMP norms as per WHO standards. With latest automated, ultramodern Plant and Machinery for highest efficiency with Total Quality Management [TQM] covering areas like Production, stores, Quality Control, Quality Assurance and Engineering Services.",
  },
  {
    icon: Import,
    title: "IMPORTS",
    description:
      "At Pesino Pharma, we prioritize sourcing the finest ingredients globally to produce pharmaceuticals of the highest standard. Trust us for reliable imports that contribute to the superior quality and efficacy of our pharmaceutical offerings. Explore the world of Pesino Pharma for excellence in pharmaceutical imports and cutting-edge healthcare solutions.",
  },
];
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
      <div className="midPart my-16 p-24">
        <div className="flex flex-row gap-16 justify-center">
          <div className="w-1/2 ">
            <Image
              src={aboutPesino}
              className="rounded-3xl"
              loading="lazy"
              alt="AboutPesino"
            />
          </div>
          <div className="WhoweAre w-1/2">
            <div className="aboutus_titles my-4">{Essentials.aboutusTitle}</div>
            <div className="aboutus_desc max-w-xl max-h-96 overflow-y-scroll my-4">
              {Essentials.aboutusDesc}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-home-start">
        <div className="flex flex-col">
          <div className=" mt-16 text-7xl  themeColor flex flex-col items-center">
            <h1 className="">Why Choose Us</h1>
          </div>
          <div className="flex flex-wrap justify-center">
            {whychooseUs?.map((item, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 ${
                  index < 3 ? "mb-4" : "mb-0" // Add margin-bottom for items in the first row
                }`}
              >
                {/* Your content goes here, each item in a flex box */}
                <div className=" flex justify-center flex-col items-center p-16">
                  <div className="my-8">
                    <Image src={item?.icon} alt="whychooseUs" />
                  </div>
                  <div className="aboutus_titles themeColor mb-8 ">
                    {item?.title}
                  </div>
                  <div className="aboutus_desc text-center max-w-7xl overflow-scroll">
                    {item?.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Main Part */}
    </div>
  );
}

export default AboutUs;
