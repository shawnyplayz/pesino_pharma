import React from "react";
import Pcircle from "../../public/homepage/circle-p.svg";
import Pleaf from "../../public/homepage/react-leaf.svg";
import Image from "next/image";
import Essentials from "../../essentials.json";
import { GoOrganization } from "react-icons/go";
import { GiArchiveResearch, GiFactory, GiMedicines } from "react-icons/gi";
import { TbWorldDollar } from "react-icons/tb";
import AOSComponent from "@/components/aos/AOS";
import images from "../../images.json";
import misc from "../../misc.json";
import "./aboutPharma.css";
import { FaGlobeAmericas } from "react-icons/fa";
const Benefits = [
  {
    icon: <GoOrganization />,
    title: "COMPANY",
    desc: "Pesino Pharmaceuticals Pvt. Ltd., incorporated in 1992 is a professionally managed integrated innovative organization with an objective of providing quality medicines at an affordable price. As a vision to provide excellence in product development, Pesino Pharma followed a mission of improved human healthcare.",
  },
  {
    icon: <GiMedicines />,
    title: "QUALITY",
    desc: "Pesino Pharma's Quality Operations team upholds rigorous standards to deliver consistently high-quality, pure, and effective drugs to consumers. Our in-house cGMP Quality Circles enforce adherence to cGMP norms across manufacturing units.",
  },
  {
    icon: <GiFactory />,
    title: "MANUFACTURING",
    desc: "Pesino Pharma adheres to the strict cGMP norms as per WHO standards. With latest automated, ultramodern Plant and Machinery for highest efficiency with Total Quality Management [TQM] covering areas like Production, stores, Quality Control, Quality Assurance and Engineering Services.",
  },
  {
    icon: <TbWorldDollar />,
    title: "EXPORT MARKETS",
    desc: "Pesino Pharma have achieved substantial growth in exports to Central and South America, Africa and Middle East countries. Pesino Pharma Brand Marketing through promotions and propaganda has carved a niche place in the international market",
  },
  {
    icon: <GiArchiveResearch />,
    title: "RESEARCH & DEVELOPMENT",
    desc: "The R&D team consists of highly competent professionals including Experts with more than 20 yrs of experience in the Pharmaceuticals who are passionately dedicated to the craft of Formulations and Development.",
  },
  {
    icon: <FaGlobeAmericas />,
    title: "GLOBALIZATION",
    desc: "Total Satisfaction to our customers and further to his consumers would be possible by way of a Joint Venture in Marketing and Distribution of our Brands and for which we look for good Business Partners to realize our plan",
  },
];
function AboutPharma() {
  return (
    <div className="bg-home-start">
      <div className="container mx-auto">
        <div className="flex flex-col p-4 md:flex-row gap-44 justify-center mt-8">
          {/* left side P */}
          <AOSComponent>
            <div
              className="flex flex-row gap-5 mt-14 md:w-1/2 justify-center"
              data-aos="fade-right"
            >
              <div className="p-stand">
                <Image
                  src={misc[0]?.url}
                  className="P-rect"
                  alt="about us"
                  loading="lazy"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="flex flex-col gap-5">
                <div className="p-cur">
                  <Image
                    src={misc[1]?.url}
                    className="p-curve"
                    alt="logo"
                    loading="lazy"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="flex flex-col md:flex-row w-full gap-5">
                  <Image src={Pcircle} className="" alt="logo" loading="lazy" />
                  <Image src={Pleaf} className="" alt="logo" loading="lazy" />
                </div>
              </div>
            </div>
            {/* right side content */}
            <div
              className="flex flex-col gap-5 my-24 md:w-1/2 items-start "
              data-aos="zoom-in"
            >
              <div className="title text-2xl font-normal tracking-widest ">
                {Essentials.aboutPharma}
              </div>
              <div className="salutation font-normal leading-normal text-5xl">
                <p> {Essentials.aboutTitle}</p>
              </div>
              <div className="desc text-2xl font-normal not-italic leading-normal">
                <p> {Essentials.aboutDesc}</p>
              </div>
            </div>
          </AOSComponent>
        </div>
        <AOSComponent>
          <div className="Benefits md:px-10">
            <div className="flex flex-col px-4" data-aos="zoom-in-up">
              <div className="title text-2xl font-normal tracking-widest my-2">
                {Essentials.aboutPharma}
              </div>
              <div className="salutation font-normal leading-normal text-5xl my-2">
                <p> {Essentials.benefitsPharma}</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4">
                {Benefits.map((el) => (
                  <div class="p-4">
                    <div className="">
                      <div className=" flex justify-start items-center bg-react-leaf bg-no-repeat bg-10% h-36 w-auto">
                        <div className="flex justify-start text-white  text-4xl ml-16 w-full">
                          {el.icon}
                        </div>
                        {/* <Image src={Pleaf} className="" alt="logo" loading="lazy" /> */}
                        {/* <div className="absolute -mt-14 ml-20 text-white text-3xl">
                      {el?.icon}
                    </div> */}
                      </div>

                      <div className="title  my-8 text-3xl font-normal">
                        {el?.title}
                      </div>
                      <div className="text-xl max-w-96 max-h-52 overflow-scroll font-normal">
                        {el?.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AOSComponent>
      </div>
    </div>
  );
}

export default AboutPharma;
