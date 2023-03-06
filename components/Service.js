import React from "react";
import { HiOutlineShoppingBag, HiOutlineCreditCard } from "react-icons/hi";
import { GoPackage } from "react-icons/go";
import { RiCustomerService2Line } from "react-icons/ri";

const Service = () => {
  return (
    <div className="container py-28">
      <div className="p-4 mx-auto lg:px-10 xl:px-0 xl:max-w-screen-xl 2xl:max-w-screen-2xl font-poppins">
        <div className="flex flex-col justify-center gap-y-12">
          <div className="flex flex-col items-center justify-center space-y-5 text-center">
            <h1 className="text-4xl font-semibold md:text-5xl text-background">
              Our Services
            </h1>
            <h2 className="text-sm font-light lg:text-base">
              Empowering Student with Innovative Entrepreneurship Services
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 mx-10 md:mx-12 lg:mx-0 xl:mx-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center p-6">
              <div className="p-10 m-2 border-2 rounded-full border-softGray">
                <div className="flex items-center w-12 h-12 text-center">
                  <HiOutlineShoppingBag className="w-full h-full text-background" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-6">
              <div className="p-10 m-2 border-2 rounded-full border-softGray">
                <div className="flex items-center w-12 h-12 text-center">
                  <HiOutlineCreditCard className="w-full h-full text-background" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-6">
              <div className="p-10 m-2 border-2 rounded-full border-softGray">
                <div className="flex items-center w-12 h-12 text-center">
                  <GoPackage className="w-full h-full text-background" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-6">
              <div className="p-10 m-2 border-2 rounded-full border-softGray">
                <div className="flex items-center w-12 h-12 text-center">
                  <RiCustomerService2Line className="w-full h-full text-background" />
                </div>
              </div>
            </div>

            <div className="row-start-2 space-y-5 text-center lg:row-start-2">
              <div className="px-10 text-xl font-bold uppercase text-background">
                Corperative Identity
              </div>
              <div className="px-10 text-background/80">
                Corporate Identity its Importance in Business Success
              </div>
            </div>
            <div className="row-start-4 space-y-5 text-center md:row-start-2 lg:row-start-2">
              <div className="px-10 text-xl font-bold uppercase text-background">
                Competitive Pricing
              </div>
              <div className="px-10 text-background/80">
                Competitive Pricing and Maximizing Profitability in a Marketplace
              </div>
            </div>
            <div className="row-start-6 space-y-5 text-center md:row-start-4 lg:row-start-2">
              <div className="px-10 text-xl font-bold uppercase text-background">
                Report and Analytics
              </div>
              <div className="px-10 text-background/80">
                Reporting and Analytics to Drive Growth and Improve Performance
              </div>
            </div>
            <div className="space-y-5 text-center">
              <div className="px-10 text-xl font-bold uppercase text-background">
                Social Collaboration
              </div>
              <div className="px-10 text-background/80">
                Social Collaboration to Drive Innovation, and Productivity
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
