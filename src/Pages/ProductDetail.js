import React from "react";
import { useParams } from "react-router-dom";

import CuratedBox from "../Components/Products/CuratedBox";
import HalfNDecafBox from "../Components/Products/HalfNDecafBox";

const ProductDetailPage = () => {
  const { productId } = useParams();
  console.log(productId);

  return (
    <div>
      <div className="pt-20">
        {productId === "mixed-roast-box" && <CuratedBox />}
        {productId === "half-caff-box" && <HalfNDecafBox />}
      </div>
    </div>
  );
};

export default ProductDetailPage;
