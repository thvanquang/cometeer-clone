import React from "react";

import classes from "./LearnHowItWorks.module.css";

import Navbar from "../Components/Navbar";
import Header from "../Components/LearnPages/HowItWork/Header";
import ProductInReality from "../Components/LearnPages/HowItWork/ProductInReality";
import AboutCometeer from "../Components/LearnPages/HowItWork/AboutCometeer";

const LearnHowItWorksPage = () => {
  return (
    <div className={classes.background}>
      <Navbar backgroundTransparentAtTop={true} textWhiteAtTop={false} />
      <Header />
      <AboutCometeer />
      <ProductInReality />
    </div>
  );
};

export default LearnHowItWorksPage;
