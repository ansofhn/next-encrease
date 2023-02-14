import Link from "next/link";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <div className="container px-0 py-28">
      <div className="flex flex-col justify-center gap-y-20">
        <div className="flex flex-col items-start justify-center space-y-6 text-center mx-7 md:space-y-0 md:space-x-6 md:flex-row 2xl:justify-start lg:space-x-10 lg:mx-8 xl:space-x-20 xl:mx-20">
          <div className="font-medium tracking-widest uppercase md:pt-3 lg:pt-4">
            About Us
          </div>
          <h1 className="text-4xl font-semibold text-left w-72 md:w-80 md:text-5xl text-background">
            Together we are strong
          </h1>
          <h2 className="md:pt-3 lg:pt-4 text-sm font-light text-left w-80 md:w-60 lg:w-[450px] lg:text-base">
            Supporting Information System for Entrepreneurial Pioneering School
            is a Web-based Application.
          </h2>
        </div>
        <div className="w-full mt-10 md:px-4 lg:px-10 xl:px-20">
          <div className="grid w-full h-full grid-cols-1 bg-gray-200 lg:grid-cols-2 py-14">
            <div className="order-1 mx-10 my-auto space-y-6 md:mx-12 lg:ml-24 lg:order-1">
              <h1 className="text-xl font-bold uppercase text-background">
                Why Choose Us
              </h1>
              <h2 className="text-sm font-light lg:text-base">
                We provide customer support and regular software updates,
                ensuring that your business always has access to the latest
                technology. We're committed to providing the best customer
                experience, and our website is designed with you in mind.
              </h2>
              <Link href={"/about"}>
                <button className="flex items-center px-6 py-2.5 mt-8 text-sm font-semibold uppercase transition duration-300 bg-transparent border-2 rounded-full cursor-pointer  text-background border-background hover:bg-background hover:text-softWhite">
                  view more
                  <HiArrowNarrowRight className="text-xl" />
                </button>
              </Link>
            </div>
            <div className="w-full md:w-[80%] lg:w-[90%] xl:w-[80%] lg:order-2 pb-10 px-6">
              <div className="p-8 -mt-32 2xl:-mt-36 bg-softWhite">
                <img
                  src="https://source.unsplash.com/random/500x410?setup-pc"
                  className="w-full transition duration-500 hover:scale-95"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
