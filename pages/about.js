import Head from "next/head";
import React from "react";
import ScrollToTop from "../components/ScrollToTop";

const about = () => {
  return (
    <div>
      <Head>
        <title>Encrease - About Us</title>
      </Head>
      <div className="py-40">
        <div className="p-4 mx-auto lg:px-10 xl:px-0 xl:max-w-screen-xl 2xl:max-w-screen-2xl font-poppins">
          <div className="flex flex-col justify-center gap-y-20 md:gap-y-32">
            <div className="pb-10 space-y-5 text-center">
              <h1 className="text-5xl font-bold lg:text-6xl text-background">
                About Us
              </h1>
              <h2 className="text-sm font-light lg:text-base">
                Find the product or service you are looking for here
              </h2>
            </div>
            <div className="container">
              <div className="grid grid-cols-1 space-y-6 md:gap-10 lg:mx-10 xl:mx-16 md:grid-cols-2">
                <div className="text-2xl font-bold text-center uppercase md:col-span-2 lg:mx-10 xl:mx-44 2xl:mx-80 text-background/80">
                  LOREM IPSUM DOLOR SEMPER AMET, CONSECTETUR ELIT. INTEGER
                  SEMPER ELIT NEC JUSTO AUCTOR
                </div>
                <div className="text-gray-500">
                  Aliquam vulputate turpis quis nibh tempus finibus. In
                  fringilla nulla quis lacus sagittis, sed malesuada enim
                  faucibus. Nulla interdum dolor mauris, vitae molestie dui
                  bibendum et. Praesent non felis in sem placerat mattis eget et
                  justo. Fusce quis justo et arcu tristique gravida sit amet
                </div>
                <div className="text-gray-500 md:text-right">
                  Donec purus lacus, vehicula vitae posuere quis, dignissim ut
                  lectus. Fusce et purus malesuada, vulputate nisi id, convallis
                  purus. Nam porta ipsum at consequat molestie. In nunc nisl,
                  gravida sed tortor id, consequat mollis quam. Quisque accumsan
                  aucto nisi id, convallis purus
                </div>
              </div>
            </div>
            <div className="w-full mt-10 md:px-4 lg:px-10 xl:px-20">
              <div className="grid w-full h-full grid-cols-1 bg-gray-200 lg:grid-cols-2 py-14">
                <div className="order-1 mx-10 my-auto space-y-6 md:mx-14 lg:ml-24 lg:order-1">
                  <h1 className="text-xl font-bold uppercase text-background">
                    Why Choose Us
                  </h1>
                  <h2 className="text-sm font-light lg:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras elementum id metus ac tempus. consectetur adipiscing.
                  </h2>
                  <button className="px-4 py-2 my-8 text-sm font-semibold text-white uppercase transition duration-300 border-2 cursor-pointer border-background bg-background hover:bg-softWhite hover:text-background">
                    view more
                  </button>
                </div>
                <div className="w-full md:w-[80%] lg:w-[90%] xl:w-[80%] lg:order-2 pb-10 px-6">
                  <div className="p-8 -mt-32 2xl:-mt-36 bg-softWhite">
                    <img
                      src="https://source.unsplash.com/random/500x410?setup-pc"
                      className="w-full transition duration-500 hover:scale-95"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default about;
