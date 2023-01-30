import React from "react";
import Filter from "../../components/Filter";
import ProductCard from "../../components/ProductCard";
import SearchBar from "../../components/SearchBar";
import SortBar from "../../components/SortBar";
import LandingPageLayout from "../../layouts/LandingPageLayout";

const product = () => {
  return (
    <div>
      <div className="py-40">
        <div className="p-4 mx-auto lg:px-10 xl:px-0 xl:max-w-screen-xl 2xl:max-w-screen-2xl font-poppins">
          <div className="flex flex-col justify-center gap-y-12 md:p-2">
            <div className="pb-10 space-y-5 text-center">
              <h1 className="text-5xl font-semibold lg:text-6xl text-background">
                Products
              </h1>
              <h2 className="text-sm font-light md:text-base">
                Find the product or service you are looking for here
              </h2>
            </div>
            <div className="flex flex-col items-center gap-4 lg:justify-between lg:flex-row">
              <div className="w-full lg:w-[24%] xl:w-[23%] 2xl:w-[25%]">
                <SearchBar />
              </div>
              <div className="w-full lg:w-[23%]">
                <SortBar />
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="lg:pl-4 lg:order-1">
                <ProductCard />
              </div>
              <div className="px-2 py-6 lg:py-0 lg:w-1/3 xl:w-1/4">
                <Filter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default product;

product.getLayout = (page) => (
  <LandingPageLayout title="Encrease - Products" children={page} />
);
