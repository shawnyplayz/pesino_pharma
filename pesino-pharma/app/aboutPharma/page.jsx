import React from "react";
import Prect from "../../public/homepage/p-rect.jpeg";
import Pcurve from "../../public/homepage/p-curve.jpeg";
import Pcircle from "../../public/homepage/circle-p.svg";
import Pleaf from "../../public/homepage/react-leaf.svg";
import Image from "next/image";
import Essentials from "../../essentials.json";
import { GoOrganization } from "react-icons/go";
import { GiArchiveResearch, GiFactory, GiMedicines } from "react-icons/gi";
import { TbWorldDollar } from "react-icons/tb";

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
    desc: "The Quality Operations team at Pesino Pharm ensures to provide drugs of consistent quality, purity and efficacy to our consumers. In order to achieve this, in-house cGMP Quality Circles ensure that all activities in the manufacturing units are carried out in accordance with cGMP norms. In process controls, usage of efficient & validated machinery, validated manufacturing processes, validated cleaning procedures, strict environmental & microbiological controls in production and packaging areas, training of personnel, maintaining hygiene and cleanliness, proper record keeping, and so on are some of the controls exercised by this section so as to ensure that Quality is built into the final product.",
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
    <div className="bg-home-start w-full h-auto">
      <div className="flex flex-row gap-44 justify-center my-8">
        {/* left side P */}
        <div className="flex flex-row gap-5 my-24 w-1/2 justify-center">
          <div className="p-stand">
            <Image
              src={Prect}
              className="P-rect"
              alt="about us"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-5">
            <div className="p-cur">
              <Image
                src={Pcurve}
                className="p-curve"
                alt="logo"
                loading="lazy"
              />
            </div>
            <div className="flex flex-row w-full gap-5">
              <Image src={Pcircle} className="" alt="logo" loading="lazy" />
              <Image src={Pleaf} className="" alt="logo" loading="lazy" />
            </div>
          </div>
        </div>
        {/* right side content */}
        <div className="flex flex-col gap-5 my-24 w-1/2 items-start pl-16">
          <div className="title text-2xl font-normal tracking-widest ">
            {Essentials.aboutPharma}
          </div>
          <div className="salutation font-normal leading-normal text-5xl w-72">
            <p> {Essentials.aboutTitle}</p>
          </div>
          <div className="desc w-80 text-2xl font-normal not-italic leading-normal">
            <p> {Essentials.aboutDesc}</p>
          </div>
        </div>
      </div>
      <div className="Benefits">
        <div className="flex flex-col px-20">
          <div className="title text-2xl font-normal tracking-widest my-2">
            {Essentials.aboutPharma}
          </div>
          <div className="salutation font-normal leading-normal text-5xl my-2">
            <p> {Essentials.benefitsPharma}</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Benefits.map((el) => (
              <div class="p-4">
                <div className="">
                  <Image src={Pleaf} className="" alt="logo" loading="lazy" />
                  <div className="title my-8 text-3xl font-normal">
                    {el?.title}
                  </div>
                  <div className="text-xl w-96 max-h-52 overflow-scroll font-normal">
                    {el?.desc}
                  </div>
                </div>
              </div>
            ))}
            {/* <!-- Row 1 --> */}
            {/* <div class="p-4">
              <div className="">
                <Image src={Pleaf} className="" alt="logo" loading="lazy" />
                <div className="title my-8 text-3xl font-normal">
                  Lorem, ipsum.
                </div>
                <div className="text-xl w-56 font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Autem, sed.
                </div>
              </div>
            </div>
            <div class="p-4">
              <Image src={Pleaf} className="" alt="logo" loading="lazy" />
            </div>
            <div class="p-4">
              <Image src={Pleaf} className="" alt="logo" loading="lazy" />
            </div> */}

            {/* <!-- Row 2 --> */}
            {/* <div class="p-4">
              <Image src={Pleaf} className="" alt="logo" loading="lazy" />
            </div>
            <div class="p-4">
              <Image src={Pleaf} className="" alt="logo" loading="lazy" />
            </div>
            <div class="p-4">
              <Image src={Pleaf} className="" alt="logo" loading="lazy" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPharma;
