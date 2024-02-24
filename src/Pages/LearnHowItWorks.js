import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/LearnPages/HowItWork/Header";
import ProductInReality from "../Components/LearnPages/HowItWork/ProductInReality";

const LearnHowItWorksPage = () => {
  return (
    <div>
      <Navbar backgroundTransparentAtTop={true} textWhiteAtTop={false} />
      <Header />

      <ProductInReality />
    </div>
  );
};

export default LearnHowItWorksPage;
