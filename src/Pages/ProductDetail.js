import React from "react";
import { useParams } from "react-router-dom";

import CuratedBox from "../Components/Products/CuratedBox";
import HalfNDecafBox from "../Components/Products/HalfNDecafBox";
import GiftCard from "../Components/Products/GiftCard";

const ProductDetailPage = () => {
  const { productId } = useParams();

  return (
    <div>
      <div>
        {productId === "mixed-roast-box" && <CuratedBox />}
        {productId === "half-caff-box" && <HalfNDecafBox />}
        {productId === "gift-card" && <GiftCard />}
      </div>
    </div>
  );
};

export default ProductDetailPage;
