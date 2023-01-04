import Head from "next/head";
import React from "react";
import Contact from "../components/Contact";
import ScrollToTop from "../components/ScrollToTop";

const contact = () => {
  return (
    <div>
      <Head>
        <title>Encrease - Contact</title>
      </Head>
      <Contact />
      <ScrollToTop />
    </div>
  );
};

export default contact;
