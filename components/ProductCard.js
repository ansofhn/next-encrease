import { Pagination, Image } from "antd";
// import Image from "next/image";
import { useRouter } from "next/router";
import React, { use, useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { productsRepository } from "../repository/products";

const ProductCard = ({
  filter,
  selected,
  search,
  type,
  pagePagination,
  setPagePagination,
}) => {
  const router = useRouter();

  //Detail Product Router
  const detailProduct = (id) => {
    router.push({
      pathname: "/product/[id]",
      query: { id: id },
    });
  };

  //Fetching Products Data
  const { data: dataProducts } = productsRepository.hooks.useProducts(
    pagePagination,
    filter,
    selected.value,
    search,
    type
  );
  const products = dataProducts?.data;

  // Rupiah Formatter
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  // Truncate Manual Formatter
  const truncateText = (text) => {
    if (text.split(" ").length > 10) {
      return text.substring(0, 60) + "...";
    } else {
      return text;
    }
  };

  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return (
        <div
          onClick={() => {
            window.scrollTo({ top, behavior: "smooth" });
          }}
        >
          {originalElement}
        </div>
      );
    }
    if (type === "next") {
      return (
        <div
          onClick={() => {
            window.scrollTo({ top, behavior: "smooth" });
          }}
        >
          {originalElement}
        </div>
      );
    }
    return originalElement;
  };
  return (
    <div>
      {products?.length > 0 ? (
        <div className="flex flex-col items-center justify-center gap-20">
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3 font-poppins">
            {products?.map((data) => {
              return (
                <div
                  className="max-w-sm duration-500 rounded-md shadow-lg cursor-pointer bg-slate-50 hover:scale-105"
                  key={data?.id}
                  onClick={() => detailProduct(data?.id)}
                >
                  <div className="p-6 bg-softWhite">
                    <Image
                      src={`http://49.0.2.250:3002/file/${data?.image[0]}`}
                      alt="Product Image"
                      // width={300}
                      // height={300}
                      preview={false}
                      className="w-full"
                    />
                  </div>
                  <div className="p-4 space-y-1 text-background">
                    <div className="text-sm font-semibold uppercase text-softBlue">
                      {data?.category?.name}
                    </div>
                    <h1 className={`text-base font-semibold `}>
                      {truncateText(data?.name)}
                    </h1>
                    <p className="font-light">{rupiah(data?.price)}</p>
                    <span className="flex items-center gap-2 font-bold text-background">
                      <BsStarFill color="orange" />
                      {data?.rate}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <Pagination
            total={dataProducts?.meta?.totalPages * 10}
            pageSize={12}
            current={pagePagination}
            onChange={(current) => {
              setPagePagination(current);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            itemRender={itemRender}
          />
        </div>
      ) : (
        <div className="w-full p-4 text-xl font-bold text-center border border-gray-200 rounded-lg md:text-2xl md:p-20 text-background/80 font-poppins">
          Oops, product not found
          <div className="font-normal text-[11px] md:text-base text-background/70">
            Try different keywords or check out the other product.
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
