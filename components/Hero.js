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
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        speed={1000}
        loop
      >
        <SwiperSlide className="w-full h-full">
          <div class="py-24 overflow-hidden md:py-32 md:px-10 lg:py-32 lg:pl-32 lg:pr-24 xl:py-0 xl:px-0 2xl:pr-0 xl:ml-10">
            <div
              class="w-full h-full px-4 py-40 bg-center bg-no-repeat md:p-10 lg:p-0 2xl:scale-105"
              style={{
                backgroundImage:
                  "url(https://source.unsplash.com/random/1024x620?laptop)",
              }}
            >
              <div class="md:ml-20 lg:py-32 lg:-ml-20 xl:-ml-0 xl:pl-20 xl:py-72 2xl:pl-48">
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
          <div class="py-24 overflow-hidden md:py-32 md:px-10 lg:py-32 lg:pl-32 lg:pr-24 xl:py-0 xl:px-0 2xl:pr-0 xl:ml-10">
            <div
              class="w-full h-full px-4 py-40 bg-center bg-no-repeat md:p-10 lg:p-0 2xl:scale-105"
              style={{
                backgroundImage:
                  "url(https://source.unsplash.com/random/1024x620?pc)",
              }}
            >
              <div class="md:ml-20 lg:py-32 lg:-ml-20 xl:-ml-0 xl:pl-20 xl:py-72 2xl:pl-48">
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
          <div class="py-24 overflow-hidden md:py-32 md:px-10 lg:py-32 lg:pl-32 lg:pr-24 xl:py-0 xl:px-0 2xl:pr-0 xl:ml-10">
            <div
              class="w-full h-full px-4 py-40 bg-center bg-no-repeat md:p-10 lg:p-0 2xl:scale-105"
              style={{
                backgroundImage:
                  "url(https://source.unsplash.com/random/1024x620?keyboard)",
              }}
            >
              <div class="md:ml-20 lg:py-32 lg:-ml-20 xl:-ml-0 xl:pl-20 xl:py-72 2xl:pl-48">
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
          <div class="py-24 overflow-hidden md:py-32 md:px-10 lg:py-32 lg:pl-32 lg:pr-24 xl:py-0 xl:px-0 2xl:pr-0 xl:ml-10">
            <div
              class="w-full h-full px-4 py-40 bg-center bg-no-repeat md:p-10 lg:p-0 2xl:scale-105"
              style={{
                backgroundImage:
                  "url(https://source.unsplash.com/random/1024x620?motherboard)",
              }}
            >
              <div class="md:ml-20 lg:py-32 lg:-ml-20 xl:-ml-0 xl:pl-20 xl:py-72 2xl:pl-48">
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
