import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

const Hero = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        speed={1000}
        loop
      >
        <SwiperSlide className="w-full h-full">
          <div class="py-24 overflow-hidden md:pt-32 md:pb-20 md:px-10 lg:pb-16 lg:pl-32 lg:pr-24 xl:pt-38 xl:px-0 2xl:pt-48 2xl:pb-28 2xl:pr-0 xl:ml-10">
            <div
              class="w-full h-full flex justify-center lg:justify-start py-44 bg-center bg-no-repeat md:p-10 lg:p-0 2xl:scale-105"
              style={{
                backgroundImage:
                  "url(https://source.unsplash.com/random/1024x620?laptop)",
              }}
            >
              <div class="lg:py-32 lg:-ml-20 xl:-ml-0 xl:pl-20 xl:py-40 2xl:pl-48">
                <div class="w-[345px] h-[238px] md:w-[470px] md:h-[325px] bg-gray-200 p-6 md:p-10">
                  <img
                    src="https://source.unsplash.com/random/409x257?touchscreen"
                    class="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="py-24 overflow-hidden md:pt-32 md:pb-20 md:px-10 lg:pb-16 lg:pl-32 lg:pr-24 xl:pt-38 xl:px-0 2xl:pt-48 2xl:pb-28 2xl:pr-0 xl:ml-10">
            <div
              class="w-full h-full flex justify-center lg:justify-start py-44 bg-center bg-no-repeat md:p-10 lg:p-0 2xl:scale-105"
              style={{
                backgroundImage:
                  "url(https://source.unsplash.com/random/1024x620?pc)",
              }}
            >
              <div class="lg:py-32 lg:-ml-20 xl:-ml-0 xl:pl-20 xl:py-40 2xl:pl-48">
                <div class="w-[345px] h-[238px] md:w-[470px] md:h-[325px] bg-gray-200 p-6 md:p-10">
                  <img
                    src="https://source.unsplash.com/random/409x257?monitor"
                    class="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="py-24 overflow-hidden md:pt-32 md:pb-20 md:px-10 lg:pb-16 lg:pl-32 lg:pr-24 xl:pt-38 xl:px-0 2xl:pt-48 2xl:pb-28 2xl:pr-0 xl:ml-10">
            <div
              class="w-full h-full flex justify-center lg:justify-start py-44 bg-center bg-no-repeat md:p-10 lg:p-0 2xl:scale-105"
              style={{
                backgroundImage:
                  "url(https://source.unsplash.com/random/1024x620?keyboard)",
              }}
            >
              <div class="lg:py-32 lg:-ml-20 xl:-ml-0 xl:pl-20 xl:py-40 2xl:pl-48">
                <div class="w-[345px] h-[238px] md:w-[470px] md:h-[325px] bg-gray-200 p-6 md:p-10">
                  <img
                    src="https://source.unsplash.com/random/409x257?mousepad"
                    class="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="py-24 overflow-hidden md:pt-32 md:pb-20 md:px-10 lg:pb-16 lg:pl-32 lg:pr-24 xl:pt-38 xl:px-0 2xl:pt-48 2xl:pb-28 2xl:pr-0 xl:ml-10">
            <div
              class="w-full h-full flex justify-center lg:justify-start py-44 bg-center bg-no-repeat md:p-10 lg:p-0 2xl:scale-105"
              style={{
                backgroundImage:
                  "url(https://source.unsplash.com/random/1024x620?motherboard)",
              }}
            >
              <div class="lg:py-32 lg:-ml-20 xl:-ml-0 xl:pl-20 xl:py-40 2xl:pl-48">
                <div class="w-[345px] h-[238px] md:w-[470px] md:h-[325px] bg-gray-200 p-6 md:p-10">
                  <img
                    src="https://source.unsplash.com/random/409x257?processor"
                    class="w-full h-full"
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
