import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import classes from "./ProductsRoot.module.css";

import ProductNavbar from "../Components/Products/ProductNavbar";
import Comparament from "../Components/Products/Comparament";
import WhatYouGet from "../Components/Products/WhatYouGet";
import CometeerRecipes from "../Components/Products/CometeerRecipes";
import ReviewCarousel from "../Components/Products/ReviewCarousel";
import CustomerReviews from "../Components/Products/CustomerReviews";

const ProductsRootLayout = () => {
  const [postionToFixedNavbar, setPositionToFixedNavbar] = useState();

  return (
    <div className={classes.background}>
      <Outlet context={[postionToFixedNavbar, setPositionToFixedNavbar]} />
      <ProductNavbar postionToFixedNavbar={postionToFixedNavbar} />
      <Comparament />
      <WhatYouGet />
      <CometeerRecipes />
      <ReviewCarousel />
      <CustomerReviews />
    </div>
  );
};

export default ProductsRootLayout;
