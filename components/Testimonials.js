import { Pagination, Rate } from "antd";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import React from "react";
import FilterReview from "./FilterReview";

const Testimonials = () => {
  const data = [1, 2, 3, 4];
  return (
    <div className="max-w-screen-xl mx-8 md:mx-0">
      <div className="flex flex-col gap-10 my-4 md:flex-row">
        <div className="w-full lg:p-2 md:w-[45%] lg:w-[25%] xl:w-[20%] text-start">
          <h2 className="mb-3 text-lg font-bold text-center uppercase text-background">
            Buyer Reviews
          </h2>
          <div className="flex items-end justify-center gap-3 my-4 text-5xl">
            <div>
              <AiFillStar style={{ color: "orange" }} />
            </div>
            <span className="text-6xl font-semibold text-background">4.8</span>
            <span className="text-base text-background/80">/5.0</span>
          </div>
          <p className="mx-2 text-sm text-center text-background/80">
            181 Rating - 24 Testimonials
          </p>
          <FilterReview />
        </div>

        <div className="flex flex-col w-full lg:p-4 gap-14 lg:w-2/3">
          {data?.map((data) => {
            return (
              <div className="flex flex-col gap-5 md:flex-row" key={data}>
                <div>
                  <Image
                    src={"https://source.unsplash.com/random/300x300?male"}
                    width={80}
                    height={80}
                    className={"rounded-full"}
                    alt="Profile Image"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-semibold">Jacob Sugiono</h1>
                  <p className="text-xs">
                    12/09/2020 &nbsp; &nbsp;{" "}
                    <span>
                      <Rate disabled defaultValue={4} />
                    </span>
                  </p>
                  <p>
                    Bad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse
                  </p>
                </div>
              </div>
            );
          })}
          <Pagination
            // simple
            defaultCurrent={1}
            total={50}
            className={"text-center"}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
