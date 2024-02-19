import React from "react";
import { Outlet } from "react-router-dom";

import classes from "./RoastersRoot.module.css";

import WhatYouGet from "../Components/WhatYouGet";
import CometeerRecipes from "../Components/CometeerRecipes";
import ReviewCarousel from "../Components/ReviewCarousel";
import CustomerReviews from "../Components/CustomerReviews";
import FAQs from "../Components/FAQs";

const RoastersRootLayout = () => {
  return (
    <div className={classes.background}>
      <Outlet />
      <WhatYouGet />
      <CometeerRecipes />
      <ReviewCarousel />
      <CustomerReviews />
      <FAQs />
    </div>
  );
};

export default RoastersRootLayout;
