// import Image from "next/image";
import React from "react";
import { BsStarFill } from "react-icons/bs";
import { productsRepository } from "../repository/products";

const SugestionProducts = () => {
  const { data: dataProducts } = productsRepository.hooks.useProducts(1);
  const Products = dataProducts?.data;

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
              <div className="overflow-hidden rounded-sm w-[320px] md:w-[300px] lg:w-[270px] xl:w-[285px] 2xl:w-[278px] h-[320px] md:h-[300px] lg:h-[270px] xl:h-[285px] 2xl:h-[278px]">
                <img
                  src={`http://49.0.2.250:3002/file/${data?.image[0]}`}
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

  return (
    <div>
      <div className="flex flex-col gap-10 p-6 md:px-10 lg:px-10 xl:p-6 font-poppins">
        <div className="text-center md:text-left md:grid md:grid-cols-2 md:px-6 lg:px-8 xl:px-0">
          <div className="text-3xl font-bold bg-softWhite">
            Related Products
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
