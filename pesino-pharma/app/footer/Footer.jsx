"use client";
import React, { useState } from "react";
import logo from "../../public/next.svg";
import Image from "next/image";
import Essentials from "../../essentials.json";
import Link from "next/link";
import { FaArrowCircleRight, FaRegArrowAltCircleRight } from "react-icons/fa";

function Footer() {
  const [email, setEmail] = useState(null);
  return (
    <div className="flex px-28 py-8 w-full mt-20">
      <div class="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-16">
        <div classname="p-4">
          <div className="flex flex-row mt-8">
            <div className="flex flex-col gap-3">
              <div className="flex flex-row mb-16">
                <Image
                  src={logo}
                  className="h-10 w-16"
                  alt="logo"
                  loading="eager"
                  priority={true}
                />
                <div className="companyName flex flex-col ">
                  <span className="self-center text-4xl font-medium whitespace-nowrap themeColor">
                    {Essentials.name}
                  </span>
                  <div className="flex w-full justify-start">
                    <span className="self-center text-3xl font-medium whitespace-nowrap themeColor">
                      Pvt. Ltd
                    </span>
                  </div>
                </div>
              </div>
              <div className="ml-4 flex flex-col font-normal text-xl gap-2 max-w-sm">
                <p>{Essentials?.footer_address}</p>
                <p>{Essentials?.footer_address2}</p>
                <p>{Essentials?.footer_contact}</p>
                <p>{Essentials?.footer_email1}</p>
                <p>{Essentials?.footer_email2}</p>
              </div>
            </div>
          </div>
        </div>
        <div classname="p-4">
          <div className="flex flex-row mt-8 mb-16">
            <span className="self-center text-4xl font-medium whitespace-nowrap text-black">
              Our Company
            </span>{" "}
          </div>
          <div className="flex flex-col gap-8 font-normal text-2xl">
            <Link href="/about">About Us</Link>
            <Link href="/products">Products</Link>
            <Link href="/manufacturing">Manufacturing</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col h-full p-4">
            <div className="flex flex-row mt-4 mb-10">
              <span className="self-center text-4xl font-medium whitespace-nowrap text-black">
                Subscribe
              </span>
            </div>
            <div className="flex flex-col justify-center gap-10 h-full font-normal text-2xl">
              <div className="">{Essentials?.footer_Subscribe}</div>
              <div className="Inputs relative">
                <input
                  className="w-96 h-16 border border-solid border-gray-500 p-2 text-lg"
                  style={{ borderRadius: "100px" }}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your e-mail"
                />
                <FaArrowCircleRight className="absolute left-80 top-2 text-white text-5xl bg-home-start rounded-full border-none hover:cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
