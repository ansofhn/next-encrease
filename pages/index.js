import Head from "next/head";
import React from "react";
import About from "../components/About";
import ProductList from "../components/ProductList";
import ScrollToTop from "../components/ScrollToTop";
import Service from "../components/Service";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Encrease - Home</title>
      </Head>
      <Service />
      <About />
      <ProductList />
      <ScrollToTop />
    </div>
  );
};

export default Home;
