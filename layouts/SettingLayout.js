import Head from "next/head";
import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";

const SettingLayout = ({ title, children }) => {
  return (
    <div className="bg-softWhite">
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <div className="pt-32 pb-10 md:pt-24 bg-softWhite">
        <div className="container flex flex-col lg:flex-row gap-x-10 md:py-24">
          <div className="hidden lg:flex flex-col space-y-20 lg:w-[25%] p-10 border-background/60 border-r">
            <Link href={"/profile/1"}>
              <button className="flex items-center gap-4 pl-10 font-semibold text-background">
                <CgProfile className="text-2xl text-center " />
                Profile
              </button>
            </Link>
            <Link href={"/profile/password"}>
              <button className="flex items-center gap-4 pl-10 font-semibold text-background">
                <RiLockPasswordLine className="text-2xl text-center " />
                Password
              </button>
            </Link>
          </div>
          {children}
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default SettingLayout;
