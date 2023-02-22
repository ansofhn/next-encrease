import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Head from "next/head";
import { useRouter } from "next/router";
import { TokenUtil } from "../utils/token";
import { authentication } from "../utils/authentication";

const LandingPageLayoutVerified = ({ title, children }) => {
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

export default LandingPageLayoutVerified;
