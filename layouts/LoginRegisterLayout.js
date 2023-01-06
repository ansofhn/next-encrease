import Head from "next/head";
import Image from "next/image";
import React from "react";

const LoginRegisterLayout = ({ title, image, altImage, bgColor, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex items-center justify-center h-screen md:p-4">
        <div
          className={`flex items-center justify-center w-full h-screen p-4 overflow-hidden shadow-2xl md:p-0 md:pl-4 md:rounded-md md:max-w-4xl ${bgColor} font-poppins md:h-auto`}
        >
          <div className="flex flex-col items-center justify-between w-full gap-5 md:flex-row-reverse">
            <div className="hidden md:block">
              <Image alt={altImage} src={image} />
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterLayout;
