import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import Service from "../components/Service";
import LandingPageLayout from "../layouts/LandingPageLayout";

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <About />
      <ProductList />
    </div>
  );
};

export default Home;

Home.getLayout = (page) => (
  <LandingPageLayout title="Encrease - Home" children={page} />
);
