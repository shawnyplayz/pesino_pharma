"use client";
import React, { useEffect, useState } from "react";
import UnderLine from "../../public/homepage/BannerUnderLiner.svg";
import whiteOval from "../../public/homepage/whiteOval.svg";
import medsClub from "../../public/homepage/meds_club.svg";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import Essentials from "../../essentials.json";
import Link from "next/link";

import images from "../../images.json";
import styles from "./ImageSlider.module.css";
import AOSComponent from "@/components/aos/AOS";
function LandingBanner(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  useEffect(() => {
    // Autoplay functionality
    const intervalId = setInterval(() => {
      handleNext();
    }, 53000); // Adjust the interval (in milliseconds) based on your preference

    return () => {
      // Cleanup the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, [currentIndex, images.length]);
  const extendedImages = [...images, images[0]];
  return (
    <div className="bg-home-start flex w-full h-auto">
      <div className="flex  justify-center items-center w-full my-16">
        <div className="grid md:grid-cols-2 gap-4 w-2/3">
          <div className="">
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
            <Link href="/aboutus">
              <button className="button rounded-3xl bg-themeColor flex flex-row justify-center items-center my-4">
                <h2 className="text-white text-2xl p-3">Learn More</h2>
                <div className="bg-white rounded-full p-2 mx-2">
                  <FaLongArrowAltRight className="text-lg font-light text-blue-600" />
                </div>
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <div
              className=" flex justify-center items-center"
              // style={{
              //   transform: "scale(1.5)",
              //   backgroundSize: "100% 100%",
              // }}
            >
              <div className={styles.slider}>
                <div
                  className={styles.sliderContent}
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                >
                  <AOSComponent>
                    {images.map((image, index) => (
                      <Image
                        key={index}
                        src={image?.url}
                        width={image?.width ? image.width : "600"}
                        height={image?.height ? image.height : "600"}
                        alt={`Slide ${index + 1}`}
                        className={`${styles.slide} w-full max-w-2xl`}
                        data-aos="fade-in"
                      />
                    ))}
                  </AOSComponent>
                  {/* {images.map((image, index) => (
                    <Image
                      key={index}
                      src={image?.url}
                      width={image?.width ? image.width : "600"}
                      height={image?.height ? image.height : "600"}
                      alt={`Slide ${index + 1}`}
                      className={styles.slide}
                    />
                  ))} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingBanner;
