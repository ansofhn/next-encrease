import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Head from "next/head";
import NavbarTest from "../components/NavbarTest";

const LandingPageLayout = ({ title, children }) => {
  return (
    <div className="bg-softWhite">
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      {/* <NavbarTest /> */}
      {children}
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default LandingPageLayout;
