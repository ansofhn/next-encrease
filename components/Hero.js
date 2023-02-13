import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

const Hero = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        direction="horizontal"
        pagination={{ clickable: true }}
        speed={2000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
      >
        <SwiperSlide className="w-full h-full">
          <div className="py-24 overflow-hidden md:pt-32 md:pb-20 md:px-10 lg:pb-16 lg:pl-32 lg:pr-24 xl:pt-38 xl:px-0 2xl:pt-48 2xl:pb-28 2xl:pr-0 xl:ml-10">
            <div
              className="flex justify-center w-full h-full bg-center bg-no-repeat lg:justify-start py-44 md:p-10 lg:p-0 2xl:scale-105"
              style={{
                backgroundImage:
                  "url(https://source.unsplash.com/random/1024x620?laptop)",
              }}
            >
              <div className="lg:py-32 lg:-ml-20 xl:-ml-0 xl:pl-20 xl:py-40 2xl:pl-48">
                <div className="w-[345px] h-[238px] md:w-[470px] md:h-[325px] bg-gray-200 p-6 md:p-10">
                  <img
                    src="https://source.unsplash.com/random/409x257?touchscreen"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-24 overflow-hidden md:pt-32 md:pb-20 md:px-10 lg:pb-16 lg:pl-32 lg:pr-24 xl:pt-38 xl:px-0 2xl:pt-48 2xl:pb-28 2xl:pr-0 xl:ml-10">
            <div
              className="flex justify-center w-full h-full bg-center bg-no-repeat lg:justify-start py-44 md:p-10 lg:p-0 2xl:scale-105"
              style={{
                backgroundImage:
                  "url(https://source.unsplash.com/random/1024x620?pc)",
              }}
            >
              <div className="lg:py-32 lg:-ml-20 xl:-ml-0 xl:pl-20 xl:py-40 2xl:pl-48">
                <div className="w-[345px] h-[238px] md:w-[470px] md:h-[325px] bg-gray-200 p-6 md:p-10">
                  <img
                    src="https://source.unsplash.com/random/409x257?monitor"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-24 overflow-hidden md:pt-32 md:pb-20 md:px-10 lg:pb-16 lg:pl-32 lg:pr-24 xl:pt-38 xl:px-0 2xl:pt-48 2xl:pb-28 2xl:pr-0 xl:ml-10">
            <div
              className="flex justify-center w-full h-full bg-center bg-no-repeat lg:justify-start py-44 md:p-10 lg:p-0 2xl:scale-105"
              style={{
                backgroundImage:
                  "url(https://source.unsplash.com/random/1024x620?keyboard)",
              }}
            >
              <div className="lg:py-32 lg:-ml-20 xl:-ml-0 xl:pl-20 xl:py-40 2xl:pl-48">
                <div className="w-[345px] h-[238px] md:w-[470px] md:h-[325px] bg-gray-200 p-6 md:p-10">
                  <img
                    src="https://source.unsplash.com/random/409x257?mousepad"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-24 overflow-hidden md:pt-32 md:pb-20 md:px-10 lg:pb-16 lg:pl-32 lg:pr-24 xl:pt-38 xl:px-0 2xl:pt-48 2xl:pb-28 2xl:pr-0 xl:ml-10">
            <div
              className="flex justify-center w-full h-full bg-center bg-no-repeat lg:justify-start py-44 md:p-10 lg:p-0 2xl:scale-105"
              style={{
                backgroundImage:
                  "url(https://source.unsplash.com/random/1024x620?motherboard)",
              }}
            >
              <div className="lg:py-32 lg:-ml-20 xl:-ml-0 xl:pl-20 xl:py-40 2xl:pl-48">
                <div className="w-[345px] h-[238px] md:w-[470px] md:h-[325px] bg-gray-200 p-6 md:p-10">
                  <img
                    src="https://source.unsplash.com/random/409x257?processor"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
