import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import LandingPageLayout from "../layouts/LandingPageLayout";
import { productsRepository } from "../repository/products";

const cart = () => {
  //Fetching Products Data
  const { data: Products } = productsRepository.hooks.useProducts();

  useEffect(() => {
    console.log(Products);
  }, [Products]);

  // Rupiah Formatter
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <div className="w-full h-screen pt-[92px] md:pt-28">
      <RemoveScrollBar />
      <div className="h-[85%] md:h-[76%] p-6 space-y-2 overflow-y-auto  rounded-t-3xl bg-softGray">
        <div className="flex w-full bg-softWhite rounded-3xl">
          <div className="flex items-center w-full gap-4 p-6">
            <div className="p-3 w-28 bg-softGray">
              <Image
                src={Products ? Products[0]?.image : ""}
                width={300}
                height={300}
              />
            </div>
            <div className="flex flex-col justify-between h-full w-[70%]">
              <div className="space-y-2">
                <div className="font-semibold text-background">
                  {Products ? Products[0]?.title : ""}
                </div>
                <div className="text-xs font-semibold text-background/70">
                  {Products ? rupiah(Products[0]?.price) : ""}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaCaretLeft
                    //   onClick={decreaseQty}
                    className="cursor-pointer text-background/50"
                  />
                  <input
                    type={"number"}
                    min={1}
                    minLength={1}
                    value={1}
                    className="w-10 p-2 text-sm text-center text-background bg-softWhite focus:outline-none"
                  />
                  <FaCaretRight
                    //   onClick={increaseQty}
                    className="cursor-pointer text-background/50"
                  />
                </div>
                <button className="p-4 text-sm text-background/70">
                  <FiTrash2 />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full bg-softWhite rounded-3xl">
          <div className="flex items-center w-full gap-4 p-6">
            <div className="p-3 w-28 bg-softGray">
              <Image
                src={Products ? Products[1]?.image : ""}
                width={300}
                height={300}
              />
            </div>
            <div className="flex flex-col justify-between h-full w-[70%]">
              <div className="space-y-2">
                <div className="font-semibold text-background">
                  {Products ? Products[1]?.title : ""}
                </div>
                <div className="text-xs font-semibold text-background/70">
                  {Products ? rupiah(Products[1]?.price) : ""}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaCaretLeft
                    //   onClick={decreaseQty}
                    className="cursor-pointer text-background/50"
                  />
                  <input
                    type={"number"}
                    min={1}
                    minLength={1}
                    value={1}
                    className="w-10 p-2 text-sm text-center text-background bg-softWhite focus:outline-none"
                  />
                  <FaCaretRight
                    //   onClick={increaseQty}
                    className="cursor-pointer text-background/50"
                  />
                </div>
                <button className="p-4 text-sm text-background/70">
                  <FiTrash2 />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full bg-softWhite rounded-3xl">
          <div className="flex items-center w-full gap-4 p-6">
            <div className="p-3 w-28 bg-softGray">
              <Image
                src={Products ? Products[2]?.image : ""}
                width={300}
                height={300}
              />
            </div>
            <div className="flex flex-col justify-between h-full w-[70%]">
              <div className="space-y-2">
                <div className="font-semibold text-background">
                  {Products ? Products[2]?.title : ""}
                </div>
                <div className="text-xs font-semibold text-background/70">
                  {Products ? rupiah(Products[2]?.price) : ""}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaCaretLeft
                    //   onClick={decreaseQty}
                    className="cursor-pointer text-background/50"
                  />
                  <input
                    type={"number"}
                    min={1}
                    minLength={1}
                    value={1}
                    className="w-10 p-2 text-sm text-center text-background bg-softWhite focus:outline-none"
                  />
                  <FaCaretRight
                    //   onClick={increaseQty}
                    className="cursor-pointer text-background/50"
                  />
                </div>
                <button className="p-4 text-sm text-background/70">
                  <FiTrash2 />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-lg bg-softGray">
        <div className="flex items-center justify-between p-6 bg-softWhite rounded-3xl">
          <div className="flex items-center justify-end text-sm font-bold md:text-base text-background">
            {Products
              ? rupiah(
                  Products[0]?.price + Products[1]?.price + Products[2]?.price
                )
              : ""}
          </div>
          <button className="px-4 py-2.5 text-xs md:text-sm bg-background rounded-xl font-semibold uppercase text-softWhite">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default cart;

cart.getLayout = (page) => (
  <LandingPageLayout title="Encrease - My Cart" children={page} />
);
