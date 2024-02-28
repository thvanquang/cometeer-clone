import React from "react";

import classes from "./LearnSustainability.module.css";

import Navbar from "../Components/Navbar";
import Header from "../Components/LearnPages/Sustainability/Header";
import CapsuleEcosystem from "../Components/CapsuleEcosystem";
import AboutSustainability from "../Components/LearnPages/Sustainability/AboutSustainability";

import Footer from "../Components/Footer";
import ProductSustainability from "../Components/LearnPages/Sustainability/ProductSustainability";

const LearnSustainabilityPage = () => {
  return (
    <div className={classes.background}>
      <Navbar backgroundTransparentAtTop={true} textWhiteAtTop={true} />
      <Header />
      <div>
        <h2 className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">
          Our capsule ecosystem
        </h2>
        <CapsuleEcosystem />
        <AboutSustainability />
      </div>
      <ProductSustainability />
      <Footer />
    </div>
  );
};

export default LearnSustainabilityPage;
