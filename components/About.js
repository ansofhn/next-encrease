import React from "react";

const About = () => {
  return (
    <div className="container px-0 py-28">
      <div className="flex flex-col justify-center gap-y-20">
        <div className="flex flex-col items-center space-y-5 text-center">
          <div className="w-0.5 h-12 bg-background/50 hidden lg:block" />
          <h1 className="text-4xl font-bold md:text-5xl text-background">
            About Us
          </h1>
          <h2 className="mx-10 text-sm font-light md:mx-10 lg:mx-64 lg:text-base">
            Learn more about the project and the team behind it.
          </h2>
        </div>
        <div className="w-full mt-10 md:px-4 lg:px-10 xl:px-20">
          <div className="grid w-full h-full grid-cols-1 bg-gray-200 lg:grid-cols-2 py-14">
            <div className="order-1 mx-10 my-auto space-y-6 md:mx-14 lg:ml-24 lg:order-1">
              <h1 className="text-xl font-bold uppercase text-background">
                Why Choose Us
              </h1>
              <h2 className="text-sm font-light lg:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                elementum id metus ac tempus. consectetur adipiscing.
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
  );
};

export default About;
