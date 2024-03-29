import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import { authentication } from "../utils/authentication";
import { TokenUtil } from "../utils/token";

const SettingLayout = ({ title, children }) => {
  const [token, setToken] = useState();
  const router = useRouter();
  useEffect(() => {
    TokenUtil.loadToken();
    if (!TokenUtil.access_token) {
      router.push("/auth/login");
    }
    setToken(authentication.isVerified());
  }, []);
  return (
    <div className="bg-softWhite">
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      {token && children}
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default SettingLayout;
