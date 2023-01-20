import React from "react";

const Service = () => {
  return (
    <div className="container py-28">
      <div className="p-4 mx-auto lg:px-10 xl:px-0 xl:max-w-screen-xl 2xl:max-w-screen-2xl font-poppins">
        <div className="flex flex-col justify-center gap-y-12">
          <div className="flex flex-col items-center justify-center space-y-5 text-center">
            <div className="w-0.5 h-12 bg-background/50 hidden lg:block"/>
            <h1 className="text-4xl font-bold md:text-5xl text-background">
              Our Services
            </h1>
            <h2 className="text-sm font-light lg:text-base">
              Find the product or service you are looking for here
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 mx-10 md:mx-12 lg:mx-0 xl:mx-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center p-6">
              <div className="p-10 m-2 border-2 rounded-full border-softGray">
                <div className="flex items-center w-12 h-12 text-center"></div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-6">
              <div className="p-10 m-2 border-2 rounded-full border-softGray">
                <div className="flex items-center w-12 h-12 text-center"></div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-6">
              <div className="p-10 m-2 border-2 rounded-full border-softGray">
                <div className="flex items-center w-12 h-12 text-center"></div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-6">
              <div className="p-10 m-2 border-2 rounded-full border-softGray">
                <div className="flex items-center w-12 h-12 text-center"></div>
              </div>
            </div>

            <div className="row-start-2 space-y-5 text-center lg:row-start-2">
              <div className="px-10 text-xl font-bold uppercase text-background">
                Corperative Identity
              </div>
              <div className="px-10 text-background/80">
                Quisque with placerat Porttitor nisi felis Congue in & Tempus
              </div>
            </div>
            <div className="row-start-4 space-y-5 text-center md:row-start-2 lg:row-start-2">
              <div className="px-10 text-xl font-bold uppercase text-background">
                Competitive Pricing
              </div>
              <div className="px-10 text-background/80">
                Quisque with placerat Porttitor nisi felis Congue in & Tempus
              </div>
            </div>
            <div className="row-start-6 space-y-5 text-center md:row-start-4 lg:row-start-2">
              <div className="px-10 text-xl font-bold uppercase text-background">
                Report and Analytics
              </div>
              <div className="px-10 text-background/80">
                Quisque with placerat Porttitor nisi felis Congue in & Tempus
              </div>
            </div>
            <div className="space-y-5 text-center">
              <div className="px-10 text-xl font-bold uppercase text-background">
                Social Collaboration
              </div>
              <div className="px-10 text-background/80">
                Quisque with placerat Porttitor nisi felis Congue in & Tempus
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
