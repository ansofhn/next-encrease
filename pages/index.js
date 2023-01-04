import Head from "next/head";
import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import ScrollToTop from "../components/ScrollToTop";
import Service from "../components/Service";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Encrease - Home</title>
      </Head>
      <Hero />
      <Service />
      <About />
      <ProductList />
      <ScrollToTop />
    </div>
  );
};

export default Home;
