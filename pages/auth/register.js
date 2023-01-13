import Image from "next/image";
import Link from "next/link";
import React from "react";
import LoginRegisterLayout from "../../layouts/LoginRegisterLayout";
import signUp from "../../public/assets/signUp.png";

const Register = () => {
  return (
    <div className="flex items-center justify-center w-full h-full bg-gray-800/80">
      <div className="h-[95%] md:h-[450px] lg:h-[550px] xl:h-[650px] 2xl:h-[750px] w-[90%] md:w-[50%] lg:w-[93%] xl:w-[80%] 2xl:w-[70%] bg-softDark/60 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        <div className="p-8 lg:p-10">
          <div className="flex items-center justify-between">
            <div className="text-sm font-bold uppercase xl:text-base text-softWhite">
              Encrease.
            </div>
            <div className="flex items-center gap-8 lg:gap-20">
              <Link href={"/"}>
                <div className="text-xs font-medium text-gray-400 xl:text-sm">
                  Home
                </div>
              </Link>
              <Link href={"/product"}>
                <div className="text-xs font-medium text-gray-400 xl:text-sm">
                  Products
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center h-[97%] space-y-16 md:space-y-8 md:h-auto md:pt-6 lg:pt-16 xl:pt-20 2xl:pt-32 lg:pl-8 xl:pl-10 2xl:pl-12 xl:space-y-10">
            <div className="space-y-1 lg:space-y-2 xl:space-y-3 2xl:space-y-4">
              <div className="text-xs font-semibold text-gray-400 uppercase lg:text-sm xl:text-base">
                Start for free
              </div>
              <div className="text-2xl font-semibold lg:text-3xl xl:text-4xl 2xl:text-5xl text-softWhite">
                Create new account.
              </div>
              <div className="text-xs font-medium text-gray-400 xl:text-sm">
                Already have an account ?
                <span>
                  <Link
                    className="ml-2 duration-300 text-softBlue hover:underline hover:decoration-softBlue"
                    href={"/auth/login"}
                  >
                    Sign In
                  </Link>
                </span>
              </div>
            </div>
            <div className="lg:w-[80%]">
              <form className="space-y-2 xl:space-y-3 2xl:space-y-4">
                <div className="w-full px-3 py-1 rounded-lg xl:px-4 xl:py-2 bg-softGray/10">
                  <label className="text-xs font-medium text-gray-400">
                    Username
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full text-sm bg-transparent text-softWhite focus:outline-none"
                  />
                </div>
                <div className="w-full px-3 py-1 rounded-lg xl:px-4 xl:py-2 bg-softGray/10">
                  <label className="text-xs font-medium text-gray-400">
                    Phone
                  </label>
                  <input
                    type="number"
                    required
                    className="w-full text-sm bg-transparent text-softWhite focus:outline-none"
                  />
                </div>
                <div className="w-full px-3 py-1 rounded-lg xl:px-4 xl:py-2 bg-softGray/10">
                  <label className="text-xs font-medium text-gray-400">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    className="w-full text-sm bg-transparent text-softWhite focus:outline-none"
                  />
                </div>
                <div className="py-2">
                  <button className="w-full px-4 py-2 font-semibold rounded-lg lg:text-sm xl:text-base bg-softBlue text-softWhite">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image src={signUp} className="w-full h-full ml-10" />
        </div>
      </div>
    </div>
  );
};

export default Register;

Register.getLayout = (page) => (
  <LoginRegisterLayout title="Encrease - Register" children={page} />
);
