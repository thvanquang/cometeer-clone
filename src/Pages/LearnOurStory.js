import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/LearnPages/OurStory/Header";

import classes from "./LearnOurStory.module.css";
import HowItBegan from "../Components/LearnPages/OurStory/HowItBegan";
import ExpInKitchen from "../Components/LearnPages/OurStory/ExpInKitchen";

const LearnOurStoryPage = () => {
  return (
    <div className={classes.background}>
      <Navbar backgroundTransparentAtTop={true} textWhiteAtTop={true} />
      <Header />
      <HowItBegan />
      <ExpInKitchen />
    </div>
  );
};

export default LearnOurStoryPage;
