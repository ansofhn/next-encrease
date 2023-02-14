import React from "react";
import LandingPageLayout from "../layouts/LandingPageLayout";

const about = () => {
  return (
    <div>
      <div className="py-40">
        <div className="p-4 mx-auto lg:px-10 xl:px-0 xl:max-w-screen-xl 2xl:max-w-screen-2xl font-poppins">
          <div className="flex flex-col justify-center gap-y-20">
            <div className="pb-5 space-y-5 text-center">
              <h1 className="text-5xl font-semibold lg:text-6xl text-background">
                About Us
              </h1>
              <h2 className="text-sm font-light md:text-base">
                Learn more about the project and team behind it.
              </h2>
            </div>
            <div className="container">
              <div className="grid grid-cols-1 space-y-10 md:space-y-0 md:gap-10 lg:mx-10 xl:mx-20 md:grid-cols-2">
                <div className="text-4xl font-semibold 2xl:text-5xl text-background/80">
                  Supporting Information System for Entrepreneurial Pioneering
                  School is{" "}
                  <span className="text-background/50">
                    a Web-based Application
                  </span>
                </div>
                <div className="flex items-end text-gray-500 lg:pl-10 2xl:pl-20">
                  To build software that gives customer-facing teams at small-
                  and medium sized businesses the ability to create fruitful and
                  enduring relationships with customers.
                </div>
              </div>
            </div>
            <div className="w-full mt-10 md:px-4 lg:px-10 xl:px-20">
              <div className="grid w-full h-full grid-cols-1 bg-gray-200 lg:grid-cols-2 py-14">
                <div className="order-1 mx-10 my-auto space-y-6 md:mx-12 lg:ml-24 lg:order-1">
                  <h1 className="text-xl font-bold uppercase text-background">
                    Why Choose Us
                  </h1>
                  <h2 className="text-sm font-light lg:text-base">
                    We provide customer support and regular software updates,
                    ensuring that your business always has access to the latest
                    technology. We're committed to providing the best customer
                    experience, and our website is designed with you in mind.
                  </h2>
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
            <div className="container">
              <div className="grid grid-cols-1 space-y-10 md:space-y-0 md:gap-10 lg:mx-10 xl:mx-20 md:grid-cols-2 2xl:pr-36">
                <div className="text-4xl 2xl:text-5xl w-[80%] lg:w-[70%] xl:w-[55%] font-semibold text-background/80">
                  Together we are strong
                </div>
                <div className="space-y-10 text-gray-500 2xl:pr-10">
                  <div className="font-medium text-background">
                    Our crew is always getting bigger, but we all work toward
                    one goal to make this application success not only possible
                    but inevitable for teams everywhere.
                  </div>
                  <div>
                    Since the Covid-19 Pandemic hit Indonesia, the Central
                    Statistics Agency there were around 954.6 thousand people of
                    working age who were forced to be unemployed, with this
                    unemployment rate the Directorate of Vocational High School
                    Development continues to strive to develop entrepreneurship
                    among SMK students.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;

about.getLayout = (page) => (
  <LandingPageLayout title="Encrease - About Us" children={page} />
);
