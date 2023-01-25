import React from "react";

const Promotion = () => {
  return (
    <div className="bg-softDark">
      <div className="px-8 py-20 md:px-20 xl:px-32 2xl:px-40 bg-background/70 text-softWhite">
        <div className="grid grid-cols-1 gap-10 space-y-6 lg:gap-40 2xl:gap-60 lg:space-y-0 lg:grid-cols-2">
          <div className="flex items-center justify-center text-[44px] font-medium md:text-6xl md:pr-40 lg:pr-0 lg:text-5xl xl:text-6xl 2xl:text-7xl">
            be the best version of you
          </div>
          <div className="flex flex-col justify-center space-y-8 lg:text-left">
            <div className="text-xs md:text-sm text-softWhite/70">
              Let's Subscribe us to know our newsletter.
            </div>
            <div className="">
              <input
                placeholder="Enter your email"
                className="w-full md:w-[90%] px-6 py-4 text-sm text-softWhite/70 rounded-lg border-softWhite/70 border bg-background/5 focus:outline-none"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
