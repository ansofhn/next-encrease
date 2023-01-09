import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Head from "next/head";

const LandingPageLayout = ({ title, children }) => {
  return (
    <div className="bg-softWhite">
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default LandingPageLayout;
