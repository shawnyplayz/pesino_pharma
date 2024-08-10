import React from "react";
import "./aboutus.css";
import Image from "next/image";
import values from "../../public/aboutus/Values.svg";
import partnering from "../../public/aboutus/Partnering.svg";
import innovating from "../../public/aboutus/Innovating.svg";
import leading from "../../public/aboutus/Leading.svg";

import Quality from "../../public/aboutus/Quality.svg";
import Export from "../../public/aboutus/Export.svg";
import Globalisation from "../../public/aboutus/Globalization.svg";
import Manufacture from "../../public/aboutus/manufacture.svg";
import Import from "../../public/aboutus/Import.svg";
import Essentials from "../../essentials.json";
import AOSComponent from "@/components/aos/AOS";
import misc from "../../misc.json";
import defaultMetadata from "@/metadata";
import Head from "next/head";
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
export const metadata = {
  ...defaultMetadata,
  title: "About Us",
  description:
    "Learn more about Your Company Name and our commitment to excellence in pharmaceuticals. Discover our history, values, and mission.",
};
function AboutUs() {
  return (
    <div>
      {/* Banner */}
      <div class="relative bg-cover bg-center  md:h-40rem">
        {/* <!-- Background Image --> */}
        <div class="absolute inset-0 bg-cover bg-center bg-about-us"></div>{" "}
        {/* <!-- Gradient Overlay --> */}
        <div class="absolute inset-0 bg-gradient-to-t from-transparent to-black"></div>
        {/* <!-- Your content goes here --> */}
        <div class="relative flex-col z-10 flex items-center justify-center h-full text-white  gap-8 container mx-auto">
          <AOSComponent>
            <div className="flex flex-col w-full h-full justify-center items-center gap-8 my-8 md:my-0">
              <div
                className="text-white font-medium text-6xl"
                data-aos="fade-right"
              >
                About Us
              </div>
              <div
                className="w-full flex justify-center font-light text-3xl text-white"
                data-aos="fade-left"
              >
                <p>{Essentials.aboutusBanner}</p>
              </div>
            </div>
          </AOSComponent>
          <div className="flex flex-col items-center justify-end w-full">
            <div className="w-full md:w-2/3 bottomBanner">
              <div className="grid grid-cols-4 h-full items-center text-center">
                <AOSComponent>
                  <div
                    className="p-1 md:p-4 flex flex-col items-center gap-4 border-r-2 border-cyan-600"
                    data-aos="flip-right"
                  >
                    <div className="h-16">
                      <Image
                        src={values}
                        alt="values"
                        priority
                        loading="eager"
                      />
                    </div>
                    <h1 className="themeColor font-medium text-sm md:text-3xl">
                      Values
                    </h1>
                  </div>
                  <div
                    className="p-1 md:p-4 flex flex-col items-center gap-4 border-r-2 border-cyan-600"
                    data-aos="fade-down-right"
                  >
                    <div className="h-16">
                      <Image
                        src={partnering}
                        alt="partnering"
                        priority
                        loading="eager"
                      />
                    </div>
                    <h1 className="themeColor font-medium text-sm md:text-3xl">
                      Partnering
                    </h1>
                  </div>
                  <div
                    className="p-1 md:p-4 flex flex-col items-center gap-4 border-r-2 border-cyan-600"
                    data-aos="fade-up-right"
                  >
                    <div className="h-16">
                      <Image
                        src={innovating}
                        alt="innovating"
                        priority
                        loading="eager"
                      />
                    </div>
                    <h1 className="themeColor font-medium text-sm md:text-3xl">
                      Innovating
                    </h1>
                  </div>
                  <div
                    className="p-4 flex flex-col items-center gap-4"
                    data-aos="fade-up"
                  >
                    <div className="h-16">
                      <Image
                        src={leading}
                        alt="leading"
                        priority
                        loading="eager"
                      />
                    </div>
                    <h1 className="themeColor font-medium text-sm md:text-3xl">
                      Leading
                    </h1>
                  </div>
                </AOSComponent>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="midPart my-16 p-8 md:p-24">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-16 justify-center">
            <AOSComponent>
              <div className="md:w-1/2" data-aos="fade-right">
                <Image
                  src={misc[2]?.url}
                  className="rounded-3xl object-fill"
                  loading="lazy"
                  alt="AboutPesino"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="WhoweAre md:w-1/2" data-aos="flip-right ">
                <div className="aboutus_titles my-4">
                  {Essentials.aboutusTitle}
                </div>
                <div className="aboutus_desc overflow-y-scroll my-4">
                  {Essentials.aboutusDesc}
                </div>
              </div>
            </AOSComponent>
          </div>
        </div>
      </div>
      <div className="bg-home-start">
        <div className="container mx-auto">
          <div className="flex flex-col">
            <div className="mt-16 text-7xl text-center themeColor flex flex-col items-center">
              <AOSComponent>
                <h1 className="" data-aos="fade-down">
                  Why Choose Us
                </h1>
              </AOSComponent>
            </div>
            <div className="flex flex-wrap justify-center">
              {whychooseUs?.map((item, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 ${
                    index < 3 ? "mb-4" : "mb-0" // Add margin-bottom for items in the first row
                  }`}
                >
                  <div className="flex justify-center flex-col items-center p-4">
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
      </div>
    </div>
  );
}

export default AboutUs;
