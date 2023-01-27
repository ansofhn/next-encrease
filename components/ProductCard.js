import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { productsRepository } from "../repository/products";

const ProductCard = () => {
  const router = useRouter();

  //Detail Product Router
  const detailProduct = (id) => {
    router.push({
      pathname: "/product/[id]",
      query: { id: id },
    });
  };

  //Fetching Products Data
  const { data: dataProducts } = productsRepository.hooks.useProducts();
  const products = dataProducts?.data;

  // Rupiah Formatter
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 font-poppins">
      {products?.map((data) => {
        return (
          <div
            className="max-w-sm duration-500 rounded-md shadow-lg cursor-pointer bg-slate-50 hover:scale-105"
            key={data?.id}
            onClick={() => detailProduct(data?.id)}
          >
            <div className="p-6 bg-softWhite">
              <Image
                src={
                  data?.image ||
                  "https://source.unsplash.com/random/300x300?ethernet"
                }
                alt="Product Image"
                width={300}
                height={300}
                className="w-full"
              />
            </div>
            <div className="p-4 space-y-1 text-background">
              <h1 className="text-lg font-semibold">{data?.name}</h1>
              <p className="font-light">{rupiah(data?.price)}</p>
              <span className="flex items-center gap-2 font-bold text-background">
                {" "}
                <BsStarFill color="orange" />
                4.7
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
