import React from "react";
import Contact from "../components/Contact";
import LandingPageLayout from "../layouts/LandingPageLayout";

const contact = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default contact;

contact.getLayout = (page) => (
  <LandingPageLayout title="Encrease - Contact" children={page} />
);
