import React from "react";
import Products from "../Components/Products";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { productId } = useParams();
  console.log(productId);

  return (
    <div>
      <div className="pt-20">
        <Products />
      </div>
    </div>
  );
};

export default ProductDetailPage;
