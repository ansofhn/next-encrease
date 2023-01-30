import Link from "next/link";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const LatestNews = () => {
  return (
    <div className="container pt-20 pb-28">
      <div className="flex flex-col justify-center gap-y-20">
        <div className="flex flex-col items-start justify-start space-y-6 text-center mx-7 md:space-y-0 md:space-x-6 md:flex-row 2xl:justify-start lg:space-x-6 lg:mx-8 xl:space-x-20 xl:mx-10">
          <div className="font-medium tracking-widest uppercase w-36 md:pt-3 lg:pt-4">
            Our Product
          </div>
          <h1 className="text-4xl font-semibold text-left w-72 md:w-[75%] lg:w-[90%] xl:w-[70%] 2xl:w-[55%] md:text-5xl text-background">
            Our product with affordable prices and with the best quality
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-10 mx-5 md:mx-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-200 aspect-[4/3] md:aspect-[3/4.9] xl:aspect-[3/4.8]  md:h-auto md:row-span-2 overflow-hidden group relative hover:scale-95 transition-all duration-500">
            <div className="w-full h-full bg-[url('https://source.unsplash.com/random/1024x720?monitor')] bg-cover bg-center absolute group-hover:scale-110 transition-all duration-500">
              <div className="w-full h-full px-8 py-10 space-y-3 xl:space-y-6 bg-gradient-to-br from-softDark to-softDark/50">
                <div className="text-2xl font-medium lg:text-2xl xl:text-3xl 2xl:text-4xl text-softWhite/80">
                  Products suitable for all students
                </div>
                <p className="text-sm xl:text-base 2xl:text-lg text-softWhite/60">
                  We have recommendations products that are suitable for
                  Students thats very cool.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 aspect-[4/3] overflow-hidden group relative hover:scale-95 transition-all duration-500">
            <div className="w-full h-full bg-[url('https://source.unsplash.com/random/1024x720?keyboard')] bg-cover bg-center absolute group-hover:scale-110 transition-all duration-500">
              <div className="w-full h-full px-8 py-10 space-y-3 xl:space-y-6 bg-gradient-to-br from-softDark to-softDark/50">
                <div className="text-2xl font-medium lg:text-2xl xl:text-3xl 2xl:text-4xl text-softWhite/80">
                  10 Best Product for your needs
                </div>
                <p className="text-sm xl:text-base 2xl:text-lg text-softWhite/60">
                  This products is perfect for your needs and make task easier
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 aspect-[4/3] overflow-hidden group relative hover:scale-95 transition-all duration-500">
            <div className="w-full h-full bg-[url('https://source.unsplash.com/random/1024x720?cpu')] bg-cover bg-center absolute group-hover:scale-110 transition-all duration-500">
              <div className="w-full h-full px-8 py-10 space-y-3 xl:space-y-6 bg-gradient-to-br from-softDark to-softDark/50">
                <div className="text-2xl font-medium lg:text-2xl xl:text-3xl 2xl:text-4xl text-softWhite/80">
                  The best product of this week
                </div>
                <p className="text-sm xl:text-base 2xl:text-lg text-softWhite/60">
                  We have the best price deals and the best services for this products
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 aspect-[4/3] overflow-hidden group relative hover:scale-95 transition-all duration-500">
            <div className="w-full h-full bg-[url('https://source.unsplash.com/random/1024x720?mousepad')] bg-cover bg-center absolute group-hover:scale-110 transition-all duration-500">
              <div className="w-full h-full px-8 py-10 space-y-3 xl:space-y-6 bg-gradient-to-br from-softDark to-softDark/50">
                <div className="text-2xl font-medium lg:text-2xl xl:text-3xl 2xl:text-4xl text-softWhite/80">
                  Discount for this week
                </div>
                <p className="text-sm xl:text-base 2xl:text-lg text-softWhite/60">
                  there are many discount for this week, let's choose yours
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center py-8 pl-4 xl:pl-24">
            <Link href={"/product"}>
              <button className="flex items-center gap-3 px-6 py-2.5  text-sm font-semibold uppercase transition duration-300 bg-transparent border-2 rounded-full cursor-pointer text-background border-background hover:bg-background hover:text-softWhite">
                see more
                <HiArrowNarrowRight className="text-xl" />
              </button>
            </Link>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 gap-10 px-3 md:container md:grid-cols-2 xl:grid-cols-3 lg:px-12">
          <div className="bg-gray-200/50">
            <div className="w-full bg-gray-300">
              <img
                src="https://source.unsplash.com/random/1920x1300?student"
                className="w-full"
              />
            </div>
            <div className="space-y-4 p-7">
              <div className="text-xl font-medium">
                Siswa SMK Lulusan Terbaik dan Teladan
              </div>
              <div className="flex items-center gap-10 text-xs">
                <div>by ansofhn</div>
                <div>17 Januari 2023</div>
              </div>
              <div className="text-sm text-background/80">
                Lorem ipsum dolor sit lkjsdfhlasjd alsdkjfa alsdjkf amet,
                consectetur adipiscing elit. Cras elementum id metus ac tempus.
              </div>
              <button className="px-6 py-2 text-sm font-medium bg-background text-softWhite">
                Read More
              </button>
            </div>
          </div>
          <div className="bg-gray-200/50">
            <div className="w-full bg-gray-300">
              <img
                src="https://source.unsplash.com/random/1920x1300?letter"
                className="w-full"
              />
            </div>
            <div className="space-y-4 p-7">
              <div className="text-xl font-medium">
                Dituding Tahan Ijasah Siswa SMKN 1 Cibinong
              </div>
              <div className="flex items-center gap-10 text-xs">
                <div>by anonymous</div>
                <div>17 Januari 2023</div>
              </div>
              <div className="text-sm text-background/80">
                Lorem ipsum dolor sit lkjsdfhlasjd alsdkjfa alsdjkf amet,
                consectetur adipiscing elit. Cras elementum id metus ac tempus.
              </div>
              <button className="px-6 py-2 text-sm font-medium bg-background text-softWhite">
                Read More
              </button>
            </div>
          </div>
          <div className="bg-gray-200/50">
            <div className="w-full bg-gray-300">
              <img
                src="https://source.unsplash.com/random/1920x1300?college"
                className="w-full"
              />
            </div>
            <div className="space-y-4 p-7">
              <div className="text-xl font-medium">
                Wali Murid Keluhkan Sumbangan di Sekolah
              </div>
              <div className="flex items-center gap-10 text-xs">
                <div>by anonymous</div>
                <div>17 Januari 2023</div>
              </div>
              <div className="text-sm text-background/80">
                Lorem ipsum dolor sit lkjsdfhlasjd alsdkjfa alsdjkf amet,
                consectetur adipiscing elit. Cras elementum id metus ac tempus.
              </div>
              <button className="px-6 py-2 text-sm font-medium bg-background text-softWhite">
                Read More
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LatestNews;
