import Image from "next/image";
import React from "react";
import bannerManu from "../../public/manufacturing/banner.jpeg";
import Essentials from "../../essentials.json";
import Integrity from "../../public/manufacturing/Integrity.svg";
import Automation from "../../public/manufacturing/Automation.svg";
import Safety from "../../public/manufacturing/Safety.svg";
import Quality from "../../public/manufacturing/quality.svg";
import Globalisation from "../../public/manufacturing/Globalization.svg";
import Manufacture from "../../public/manufacturing/manufacture.svg";
import Research from "../../public/manufacturing/Research.svg";
import pic1 from "../../public/manufacturing/pic1.jpg";
import pic2 from "../../public/manufacturing/pic2.jpg";
import pic3 from "../../public/manufacturing/pic3.jpg";
import pic4 from "../../public/manufacturing/pic4.jpeg";
import AOSComponent from "@/components/aos/AOS";
function Manufacturing() {
  const perks = [
    {
      icon: Integrity,
      title: "Integrity",
      description: Essentials?.Integrity,
    },
    {
      icon: Automation,
      title: "Automation",
      description: Essentials?.Automation,
    },
    {
      icon: Safety,
      title: "Safety",
      description: Essentials?.Safety,
    },
  ];
  const footer_perks = [
    {
      icon: Quality,
      title: "Quality",
      description: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: Manufacture,
      title: "Manufacture",
      description: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: Globalisation,
      title: "Globalisation",
      description: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: Research,
      title: "Research",
      description: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  const imagur = [
    {
      image: pic1,
      title: "Manufacturing",
    },
    {
      image: pic2,
      title: "Manufacturing",
    },
    {
      image: pic3,
      title: "Manufacturing",
    },
    {
      image: pic4,
      title: "Manufacturing",
    },
  ];
  return (
    <div>
      {/* Banner */}
      <div className="relative bg-cover bg-center h-40rem">
        {/* <!-- Background Image --> */}
        <div className="absolute inset-0 bg-cover bg-center bg-banner-manu"></div>{" "}
        {/* <!-- Gradient Overlay --> */}
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-blue-800"></div>
        {/* <!-- Your content goes here --> */}
        <div className="relative flex-col z-10 flex items-center justify-center h-full text-white px-4">
          <div className="flex flex-col w-full h-full justify-center items-center gap-8">
            <AOSComponent>
              <div
                className="text-white font-medium text-6xl"
                data-aos="fade-right"
              >
                Manufacturing
              </div>
              <div
                className="md:w-2/3 flex justify-center font-light text-3xl text-white"
                data-aos="fade-left"
              >
                <p>{Essentials.ManufacturingBanner}</p>
              </div>
            </AOSComponent>
          </div>
        </div>
      </div>
      {/* three perks */}
      <div className="flex gap-14 md:gap-0 md:flex-row md:justify-evenly my-24 flex-col items-center ">
        {perks?.map((el) => (
          <div className="flex flex-col ">
            <div className="mb-6 flex justify-center">
              <Image src={el?.icon} alt={el?.title} />
            </div>
            <div className="text-center text-4xl font-medium mb-4">
              {el?.title}
            </div>
            <div className="desc text-center text-2xl font-light max-w-md max-h-96 overflow-y-scroll">
              {el?.description}
            </div>
          </div>
        ))}
      </div>
      {/* four pics */}
      <div className="">
        <div className="grid grid-cols-1 p-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {imagur.map((item, index) => (
            <AOSComponent>
              <div key={index} className="p-8" data-aos="flip-up">
                <div className="">
                  <Image
                    src={item?.image}
                    alt={item?.title}
                    className="max-h-maxh-h-30rem rounded-3xl"
                  />
                </div>
              </div>
            </AOSComponent>
          ))}
        </div>
      </div>
      {/* four perks above footer */}
      <div className=" md:my-28">
        <div className="p-4">
          <div className="flex md:flex-row md:justify-evenly gap-16 flex-col">
            {footer_perks?.map((el) => (
              <div className="border-b-8 border-solid border-blue-600 shadow-xl px-7 transform transition-transform duration-300 hover:scale-105">
                <div className="mb-6">
                  <Image src={el?.icon} alt={el?.title} />
                </div>
                <div className="mb-4 text-3xl font-medium">{el?.title}</div>
                <div className="mb-4 text-xl max-h-80 overflow-y-scroll">
                  {el?.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manufacturing;
