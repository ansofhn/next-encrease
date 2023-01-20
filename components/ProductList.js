import React from "react";

const ProductList = () => {
  return (
    <div className="container py-28">
      <div className="flex flex-col justify-center gap-y-16">
        <div className="flex flex-col items-center space-y-5 text-center">
          <h1 className="text-4xl font-semibold md:text-5xl text-background">
            View Our Products
          </h1>
          <h2 className="text-sm font-light md:mx-10 lg:mx-64 lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            elementum id metus ac tempus. Praesent ut mauris eget velit volutpat
            posuere
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-10 md:mx-10 lg:grid-cols-2">
          <div className="bg-softWhite">
            <div className="bg-gray-200 lg:mt-40 p-14 h-1/2">
              <div className="w-full h-auto p-8 bg-gray-100 md:p-10">
                <img
                  src="https://source.unsplash.com/random/435x650?monitor"
                  className="w-full transition duration-500 hover:scale-95"
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-200 lg:mb-40">
            <div className="p-14 bg-softWhite h-1/2">
              <div className="w-full h-auto p-8 bg-gray-100 md:p-10">
                <img
                  src="https://source.unsplash.com/random/435x650?keyboard"
                  className="w-full transition duration-500 hover:scale-95"
                />
              </div>
            </div>
          </div>
          <div className="bg-softWhite">
            <div className="bg-gray-200 p-14 h-1/2">
              <div className="w-full h-auto p-8 bg-gray-100 md:p-10">
                <img
                  src="https://source.unsplash.com/random/435x650?mousepad"
                  className="w-full transition duration-500 hover:scale-95"
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-200 lg:mb-40">
            <div className="lg:-mt-40 p-14 bg-softWhite h-1/2">
              <div className="w-full h-auto p-8 bg-gray-100 md:p-10">
                <img
                  src="https://source.unsplash.com/random/435x650?cpu"
                  className="w-full transition duration-500 hover:scale-95"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
