// import Image from "next/image";
import React from "react";
import { BsStarFill } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { productsRepository } from "../repository/products";

const SugestionProducts = () => {
  const { data: dataProducts } = productsRepository.hooks.useProducts(1, " ");
  const Products = dataProducts?.data;

  const category = ["processor", "arduino", "keyboard", "headset", "smartphone"];

  const ProductList = () => {
    return (
      <div
        id="slider"
        className="flex gap-10 px-10 overflow-x-scroll md:px-0 snap-x snap-mandatory md:gap-8 2xl:gap-10 scroll-smooth scrollbar-hide"
      >
        {Products?.map((data, i) => {
          return (
            <div
              className="pb-10 snap-center md:snap-start text-background w-[320px] md:w-[310px] lg:w-[270px] xl:w-[285px] 2xl:w-[278px]"
              key={i}
            >
              <div className="overflow-hidden rounded-sm w-[320px] md:w-[310px] lg:w-[270px] xl:w-[285px] 2xl:w-[278px] h-[320px]">
                <img
                  className="h-[320px]"
                  src={`http://49.0.2.250:3002/file/${data?.image}`}
                />
              </div>
              <div className="px-2 py-4">
                <div className="flex items-start h-20 font-semibold">
                  {data.name}
                </div>
              </div>
              <div className="flex items-center justify-between px-2">
                <div className="text-xs font-medium">Rp. {data.price}</div>
                <div className="flex items-center gap-2 text-xs font-medium">
                  <span className="flex items-center gap-2 font-bold text-background">
                    <BsStarFill color="orange" />
                    4.7
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 200;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 200;
  };

  return (
    <div>
      <div className="flex flex-col gap-10 p-6 md:px-10 lg:px-10 xl:p-6 font-poppins">
        <div className="text-center md:text-left md:grid md:grid-cols-2 md:px-6 lg:px-8 xl:px-0">
          <div className="text-3xl font-bold bg-softWhite">
            Related Products
          </div>
          <div className="flex items-center justify-center pt-10 md:pt-0 md:items-end md:justify-end">
            <div
              className={
                "hidden lg:flex lg:items-center lg:gap-2 lg:text-gray-400 lg:ml-4"
              }
            >
              <div
                onClick={slideLeft}
                className="p-2.5 border-2 border-gray-200 rounded-full cursor-pointer"
              >
                <FaChevronLeft />
              </div>
              <div
                onClick={slideRight}
                className="p-2.5 border-2 border-gray-200 rounded-full cursor-pointer"
              >
                <FaChevronRight />
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex items-center px-2 md:px-8 lg:px-8 xl:px-0">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default SugestionProducts;
