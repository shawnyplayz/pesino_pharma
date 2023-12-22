"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
// import NavLogo from "../../public/innocursor.svg";
import logo from "../../public/next.svg";
import Essentials from "../../essentials.json";
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white border-gray-200  text-xl text-black relative z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            className="h-10 w-16"
            alt="logo"
            loading="eager"
            priority={true}
          />
          <span className="hidden md:block md:self-center md:text-3xl md:font-light md:whitespace-nowrap themeColor">
            {Essentials.name}
          </span>
        </Link>
        <button
          onClick={() => {
            setOpen(!open);
          }}
          data-collapse-toggle="navbar-default"
          type="button"
          className=" open:navbar-default inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${!open ? "hidden" : "w-full"} md:block md:w-auto`}
          id="navbar-default"
        >
          <ul
            onClick={() => {
              setOpen(!open);
            }}
            className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white text-black "
          >
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/aboutus"
                className="block py-2 pl-3 pr-4 ounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/manufacturing"
                className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Manufacturing
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
