"use client";
import React, { useEffect, useState } from "react";
import UnderLine from "../../public/homepage/BannerUnderLiner.svg";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import Essentials from "../../essentials.json";
import Link from "next/link";
import images from "../../images.json";
import styles from "./ImageSlider.module.css";
import AOSComponent from "@/components/aos/AOS";
import { Motion, spring } from "react-motion";
function LandingBanner(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  useEffect(() => {
    const visibilityInterval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        handleNext();
        setVisible(true);
      }, 1000); // Adjust the delay to match the fade-out duration
    }, 2000);

    return () => {
      clearInterval(visibilityInterval);
    };
  }, [currentIndex, images.length]);
  const extendedImages = [...images, images[0]];
  return (
    <div className="bg-home-start flex  justify-center items-center w-full">
      <div className="container">
        <div className="flex py-20 px-2 justify-around flex-col md:flex-row">
          <div className="left_side flex flex-col">
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
          </div>
          <div className="right_side">
            <Motion
              defaultStyle={{ opacity: 0, translateX: 100 }}
              style={{
                opacity: spring(visible ? 1 : 0),
                translateY: spring(visible ? 0 : 100),
              }}
            >
              {({ opacity, translateY }) => (
                <div
                  className="flex min-h-[30rem] max-w-[30rem]"
                  style={{
                    opacity,
                    transform: `translateY(${translateY}px)`,
                  }}
                >
                  <Image
                    src={images[currentIndex]?.url}
                    width={1000}
                    height={1000}
                    alt="Dynamic Content"
                    className="object-contain"
                  />
                </div>
              )}
            </Motion>
          </div>
        </div>
        {/* <div className="flex justify-center py-20">
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
          <Motion
            defaultStyle={{ opacity: 0, translateX: 100 }}
            style={{
              opacity: spring(visible ? 1 : 0),
              translateX: spring(visible ? 0 : 100),
            }}
          >
            {({ opacity, translateX }) => (
              <div
                className="flex min-h-[30rem] max-w-[30rem]"
                style={{
                  opacity,
                  transform: `translateX(${translateX}px)`,
                }}
              >
                <Image
                  src={images[currentIndex]?.url}
                  width={500}
                  height={500}
                  alt="Dynamic Content"
                  className="object-contain"
                />
              </div>
            )}
          </Motion>
          {/* <div className="flex justify-center items-center  mb-8 md:mb-0">
              <div className=" flex justify-center items-center">
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
                  </div>
                </div>
              </div>
            </div> */}
        {/* </div>  */}
      </div>
    </div>
  );
}

export default LandingBanner;
