import React from "react";

import classes from "./LearnOurStory.module.css";

import Navbar from "../Components/Navbar";
import Header from "../Components/LearnPages/OurStory/Header";
import HowItBegan from "../Components/LearnPages/OurStory/HowItBegan";
import ExpInKitchen from "../Components/LearnPages/OurStory/ExpInKitchen";
import CometeerWasBorn from "../Components/LearnPages/OurStory/CometeerWasBorn";
import TheResult from "../Components/LearnPages/OurStory/TheResult";
import Footer from "../Components/Footer";

const LearnOurStoryPage = () => {
  return (
    <div className={classes.background}>
      <Navbar backgroundTransparentAtTop={true} textWhiteAtTop={true} />
      <Header />
      <HowItBegan />
      <ExpInKitchen />
      <CometeerWasBorn />
      <TheResult />
      <Footer />
    </div>
  );
};

export default LearnOurStoryPage;
