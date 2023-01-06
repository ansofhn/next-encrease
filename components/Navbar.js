import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="fixed top-0 z-10 w-full bg-softWhite">
        <div className="flex flex-wrap items-center justify-between p-6 mx-auto sm:px-10 sm:py-8">
          <Link href={"/"}>
            <div className="flex items-center text-2xl font-bold uppercase cursor-pointer text-background">
              encrease
            </div>
          </Link>

          <div className="flex items-center gap-2 lg:order-2">
            <Link href={"/auth/login"}>
              <button className="px-4 py-2 font-bold uppercase transition duration-300 border-2 rounded-md cursor-pointer text-background border-background">
                sign in
              </button>
            </Link>
            <button
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm rounded-lg text-background focus:outline-none focus:ring-0 lg:hidden"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden w-full mt-10 rounded-lg xl:ml-[500px] 2xl:ml-[900px] lg:mt-0 lg:justify-between lg:items-center lg:flex lg:w-auto lg:order-1 bg-softGray lg:bg-transparent lg:p-0">
            <div className="flex flex-col gap-4 p-2 font-medium lg:p-0 lg:flex-row lg:gap-10 lg:font-medium text-background">
              <Link href={"/"}>
                <div className="p-2 cursor-pointer">
                  Home
                </div>
              </Link>
              <Link href={"/product"}>
                <div className="p-2 cursor-pointer">
                  Products
                </div>
              </Link>
              <Link href={"/about"}>
                <div className="p-2 cursor-pointer">
                  About
                </div>
              </Link>
              <Link href={"/contact"}>
                <div className="p-2 cursor-pointer">
                  Contact
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
