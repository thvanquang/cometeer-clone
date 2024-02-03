import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import classes from "./ProductsRoot.module.css";

import ProductNavbar from "../Components/Products/ProductNavbar";
import Comparament from "../Components/Products/Comparament";
import WhatYouGet from "../Components/Products/WhatYouGet";
import CometeerRecipes from "../Components/Products/CometeerRecipes";
import ReviewCarousel from "../Components/Products/ReviewCarousel";
import CustomerReviews from "../Components/Products/CustomerReviews";
import FAQs from "../Components/Products/FAQs";

const ProductsRootLayout = () => {
  return (
    <div className={classes.background}>
      <Outlet />
      <ProductNavbar />
      <Comparament />
      <WhatYouGet />
      <CometeerRecipes />
      <ReviewCarousel />
      <CustomerReviews />
      <FAQs />
    </div>
  );
};

export default ProductsRootLayout;
