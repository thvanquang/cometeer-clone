import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import classes from "./ProductsRoot.module.css";

import ProductNavbar from "../Components/ProductNavbar";
import ProductComparament from "../Components/ProductComparament";

const ProductsRootLayout = () => {
  const [postionToFixedNavbar, setPositionToFixedNavbar] = useState();

  return (
    <div className={classes.background}>
      <Outlet context={[postionToFixedNavbar, setPositionToFixedNavbar]} />
      <ProductNavbar postionToFixedNavbar={postionToFixedNavbar} />
      <ProductComparament />
    </div>
  );
};

export default ProductsRootLayout;
