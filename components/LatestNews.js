import React from "react";

const LatestNews = () => {
  return (
    <div className="container py-20">
      <div className="flex flex-col justify-center gap-y-20">
        <div className="flex flex-col items-center space-y-5 text-center">
          <div className="w-0.5 h-12 bg-background/50 hidden lg:block" />
          <h1 className="text-4xl font-bold md:text-5xl text-background">
            Latest News
          </h1>
          <h2 className="text-sm font-light md:mx-10 lg:mx-64 lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            elementum id metus ac tempus. Praesent ut mauris eget velit volutpat
            posuere
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-10 px-3 md:container md:grid-cols-2 xl:grid-cols-3 lg:px-12">
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
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
