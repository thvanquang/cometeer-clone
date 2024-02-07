import React from "react";
import { useParams } from "react-router-dom";

import CuratedBox from "../Components/Products/CuratedBox";

const ProductDetailPage = () => {
  const { productId } = useParams();
  console.log(productId);

  return (
    <div>
      <div className="pt-20">
        <CuratedBox />
      </div>
    </div>
  );
};

export default ProductDetailPage;
