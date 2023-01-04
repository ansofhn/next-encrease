import Head from "next/head";
import React from "react";
import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";
import ScrollToTop from "../components/ScrollToTop";
import SearchBar from "../components/SearchBar";
import SortBar from "../components/SortBar";

const product = () => {
  return (
    <div>
      <Head>
        <title>Encrease - Products</title>
      </Head>
      <div class="py-40">
        <div class="p-4 mx-auto lg:px-10 xl:px-0 xl:max-w-screen-xl 2xl:max-w-screen-2xl font-poppins">
          <div class="flex flex-col justify-center gap-y-12">
            <div class="pb-10 space-y-5 text-center">
              <h1 class="text-5xl font-bold lg:text-6xl text-background">
                Products
              </h1>
              <h2 class="text-sm font-light lg:text-base">
                Find the product or service you are looking for here
              </h2>
            </div>
            <div class="flex flex-col items-center gap-4 lg:justify-between lg:flex-row">
              <div class="w-full lg:w-[23%]">
                <SearchBar />
              </div>
              <div class="w-full lg:w-[27%]">
                <SortBar />
              </div>
            </div>
            <div class="flex flex-col gap-4 lg:flex-row">
              <div class="lg:pl-4 lg:order-1">
                <ProductCard />
              </div>
              <div class="px-2 py-6 lg:py-0 lg:w-1/3 xl:w-1/4">
                <Filter />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default product;
