import Image from "next/image";
import React from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import LandingPageLayout from "../layouts/LandingPageLayout";

const cart = () => {
  return (
    <div className="w-full h-screen pt-[92px] md:pt-28">
      <RemoveScrollBar />
      <div className="fixed bottom-0 z-10 w-full bg-softGray">
        <div className="flex items-center justify-between p-6 bg-softWhite rounded-t-3xl">
          <div className="flex items-center justify-end text-sm font-bold md:text-base text-background">
            Rp. 3.500.000,00
          </div>
          <button className="px-4 py-2.5 text-xs md:text-sm bg-background rounded-xl font-semibold uppercase text-softWhite">
            Proceed to Checkout
          </button>
        </div>
      </div>
      <div className="h-full p-6 pb-40 space-y-3 overflow-y-auto rounded-t-3xl bg-softGray">
        <div className="flex w-full bg-softWhite rounded-3xl">
          <div className="flex items-center w-full gap-4 p-6">
            <div className="p-3 w-28 bg-softGray">
              <Image
                src={"https://source.unsplash.com/random/300x300?Headphone"}
                width={300}
                height={300}
              />
            </div>
            <div className="flex flex-col justify-between h-full w-[70%]">
              <div className="space-y-2">
                <div className="font-semibold text-background">
                  Headphone Gaming
                </div>
                <div className="text-xs font-semibold text-background/70">
                  Rp. 250.000,00
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
                src={"https://source.unsplash.com/random/300x300?monitor"}
                width={300}
                height={300}
              />
            </div>
            <div className="flex flex-col justify-between h-full w-[70%]">
              <div className="space-y-2">
                <div className="font-semibold text-background">
                  Monitor Gaming
                </div>
                <div className="text-xs font-semibold text-background/70">
                  Rp. 300.000,00
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
                src={"https://source.unsplash.com/random/300x300?laptop"}
                width={300}
                height={300}
              />
            </div>
            <div className="flex flex-col justify-between h-full w-[70%]">
              <div className="space-y-2">
                <div className="font-semibold text-background">
                  Laptop Ultrabook
                </div>
                <div className="text-xs font-semibold text-background/70">
                  Rp. 350.000,00
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
                src={"https://source.unsplash.com/random/300x300?monitor"}
                width={300}
                height={300}
              />
            </div>
            <div className="flex flex-col justify-between h-full w-[70%]">
              <div className="space-y-2">
                <div className="font-semibold text-background">
                  Monitor Gaming
                </div>
                <div className="text-xs font-semibold text-background/70">
                  Rp. 300.000,00
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
    </div>
  );
};

export default cart;

cart.getLayout = (page) => (
  <LandingPageLayout title="Encrease - My Cart" children={page} />
);
