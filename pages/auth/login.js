import Image from "next/image";
import Link from "next/link";
import React from "react";
import LoginRegisterLayout from "../../layouts/LoginRegisterLayout";
import macPhoto from "../../public/assets/macPhoto.png";

const Login = () => {
  return (
    // <div className="flex items-center justify-center w-full h-screen p-4 overflow-hidden shadow-2xl md:p-0 md:pl-4 md:rounded-md md:max-w-4xl bg-softGray font-poppins md:h-auto">
    //   <div className="flex flex-col items-center justify-between w-full gap-5 md:flex-row-reverse">
    //     <div className="hidden md:block">
    //       <Image src={macPhoto} className="w-full" />
    //     </div>
    //     <div className="w-full">
    //       <div>
    //         <h1 className="my-10 text-2xl font-semibold text-center text-background">
    //           Sign In
    //         </h1>
    //       </div>
    //       <form>
    //         <div className="py-4">
    //           <input
    //             type="text"
    //             placeholder="Username"
    //             required
    //             className="w-full p-2 text-sm bg-softWhite focus:outline-none"
    //           />
    //         </div>
    //         <div className="py-4">
    //           <input
    //             type="password"
    //             placeholder="Password"
    //             required
    //             className="w-full p-2 text-sm bg-softWhite focus:outline-none"
    //           />
    //         </div>
    //         <div className="py-2 text-softWhite">
    //           <input
    //             type="submit"
    //             value="Submit"
    //             className="w-full p-2 font-medium duration-300 cursor-pointer bg-background hover:bg-softWhite/60 hover:text-background"
    //           />
    //         </div>
    //       </form>
    //       <p className="text-sm text-background">
    //         Don't have an account?{" "}
    // <Link
    //   className="duration-300 text-softBlue hover:text-background hover:underline hover:decoration-background"
    //   href={"/auth/register"}
    // >
    //           Sign Up here
    //         </Link>
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="flex items-center justify-center w-full h-full bg-gray-200">
      <div className="h-[95%] md:h-[450px] lg:h-[550px] xl:h-[650px] 2xl:h-[750px] w-[90%] md:w-[50%] lg:w-[93%] xl:w-[80%] 2xl:w-[70%] bg-softWhite rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        <div className="p-8 lg:p-10">
          <div className="flex items-center justify-between">
            <div className="text-sm font-bold uppercase xl:text-base text-background">
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
          <div className="flex flex-col justify-center h-full space-y-16 md:space-y-8 md:h-auto md:pt-14 lg:pt-28 xl:pt-36 2xl:pt-44 lg:pl-8 xl:pl-10 2xl:pl-12 xl:space-y-10">
            <div className="space-y-1 lg:space-y-2 xl:space-y-3 2xl:space-y-4">
              <div className="text-xs font-semibold text-gray-400 uppercase lg:text-sm xl:text-base">
                Welcome back
              </div>
              <div className="text-2xl font-semibold lg:text-3xl xl:text-4xl 2xl:text-5xl text-background">
                Login to your account.
              </div>
              <div className="text-xs font-medium text-gray-400 xl:text-sm">
                Don't have an account ?
                <span>
                  <Link
                    className="ml-2 duration-300 text-background hover:underline hover:decoration-background"
                    href={"/auth/register"}
                  >
                    Sign Up
                  </Link>
                </span>
              </div>
            </div>
            <div className="lg:w-[80%]">
              <form className="space-y-2 xl:space-y-3 2xl:space-y-4">
                <div className="w-full px-3 py-1 bg-gray-100 rounded-lg xl:px-4 xl:py-2">
                  <label className="text-xs font-medium text-gray-400">
                    Username
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full text-sm bg-transparent text-background focus:outline-none"
                  />
                </div>
                <div className="w-full px-3 py-1 bg-gray-100 rounded-lg xl:px-4 xl:py-2">
                  <label className="text-xs font-medium text-gray-400">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    className="w-full text-sm bg-transparent text-background focus:outline-none"
                  />
                </div>
                <div className="py-2">
                  <button className="w-full px-4 py-2 font-semibold rounded-lg lg:text-sm xl:text-base bg-background text-softWhite">
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image src={macPhoto} className="w-full h-full ml-10" />
        </div>
      </div>
    </div>
  );
};

export default Login;

Login.getLayout = (page) => (
  <LoginRegisterLayout title="Encrease - Login" children={page} />
);
