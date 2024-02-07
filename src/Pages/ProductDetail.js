import React from "react";
import { useParams } from "react-router-dom";

import CuratedBox from "../Components/Products/CuratedBox";
import HalfNDecafBox from "../Components/Products/HalfNDecafBox";
import OfficeBox from "../Components/Products/OfficeBox";

const ProductDetailPage = () => {
  const { productId } = useParams();
  console.log(productId);

  return (
    <div>
      <div className="pt-20">
        {productId === "mixed-roast-box" && <CuratedBox />}
        {productId === "half-caff-box" && <HalfNDecafBox />}
        {productId === "office-box-1" && <OfficeBox />}
      </div>
    </div>
  );
};

export default ProductDetailPage;
