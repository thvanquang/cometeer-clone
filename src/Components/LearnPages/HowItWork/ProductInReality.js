import React from "react";

import Product0 from "../../../Assets/LearnHowItWorks/product0.png";
import Product1 from "../../../Assets/LearnHowItWorks/product1.png";
import Product2 from "../../../Assets/LearnHowItWorks/product2.png";
import Product3 from "../../../Assets/LearnHowItWorks/product3.png";
import Product4 from "../../../Assets/LearnHowItWorks/product4.png";
import Product5 from "../../../Assets/LearnHowItWorks/product5.png";

const ProductInReality = () => {
  return (
    <div className="p-12">
      <h2 className="text-2xl font-bold md:text-3xl">
        Made by us, melted by you.
      </h2>

      <div className="space-y-4 pt-12">
        <div className="gap-4 md:flex">
          <img
            src={Product0}
            alt="product"
            className="aspect-square w-full rounded-lg object-cover"
          />
          <img
            src={Product1}
            alt="product"
            className="aspect-square w-full rounded-lg object-cover"
          />
          <img
            src={Product2}
            alt="product"
            className="aspect-square w-full rounded-lg object-cover"
          />
        </div>
        <div className="gap-4 md:flex ">
          <img
            src={Product3}
            alt="product"
            className="aspect-square w-full rounded-lg object-cover"
          />
          <img
            src={Product4}
            alt="product"
            className="aspect-square w-full rounded-lg object-cover"
          />
          <img
            src={Product5}
            alt="product"
            className="aspect-square w-full rounded-lg object-cover"
          />
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default ProductInReality;
