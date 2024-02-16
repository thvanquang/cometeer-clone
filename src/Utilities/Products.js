import React from "react";

import BestBean from "../Assets/ProductsUtility/best-beans.png";
import Spaceman from "../Assets/ProductsUtility/spaceman.png";
import Delivery from "../Assets/ProductsUtility/delivery.png";

import { bean, check } from "../Assets/icons/icons";
import ButtonArrow from "./ButtonArrow";

const Products = ({ children, boxSelected, type }) => {
  let productSubtitle = "32 Cups Total, 4 Unique Coffees";
  let productSelectHeader = "Roast Level: ";
  let typeBox = " Roast Box";

  if (type === "office") {
    productSubtitle = "240 Capsules Total, 4 Unique Coffees";
    productSelectHeader = "Box Type: ";
    typeBox = " Office Box";
  }

  if (type === "halfNDecaf") {
    productSubtitle = "32 Capsules Total";
    productSelectHeader = "Caffeine Level: ";
    if (boxSelected.title === "Half Caff") {
      typeBox = "";
    }
  }

  if (boxSelected.title === "Mixed") {
    productSubtitle =
      "Rotating assortment of 32 capsules of our favorites across all roast levels. Perfect for discovering coffees you love most!";
  }
  return (
    <div className="mx-auto gap-4 p-6">
      <div className="relative min-w-[50%] justify-center gap-4 overflow-y-visible md:grid md:grid-cols-2">
        {/* For larger than mobile screen */}
        <div className="row-span-full mx-[-1rem] mb-4 grid grid-cols-6 lg:space-y-3 [@media(max-width:768px)]:hidden">
          <figure className="col-span-full  justify-self-center p-8">
            <img
              src={boxSelected.image}
              alt={boxSelected.title}
              className="aspect-[3/2] w-full object-cover"
            />
          </figure>

          <div className="col-span-2 flex aspect-square min-w-24 justify-center rounded-lg">
            <img src={BestBean} alt="Bean" className="max-h-[105px]" />
          </div>
          <div className="col-span-2 col-start-3 flex aspect-square min-w-24  justify-center rounded-lg">
            <img src={Spaceman} alt="Spaceman" className="max-h-[105px]" />
          </div>
          <div className="col-span-2 col-start-5 flex aspect-square min-w-24 justify-center rounded-lg">
            <img src={Delivery} alt="Cup" className="max-h-[105px]" />
          </div>
        </div>

        <div className="sticky top-16 ml-4 mt-4">
          <div className="mb-4">
            <h2 className="mb-2 text-[52px] font-extrabold">
              {boxSelected.title + typeBox}
            </h2>
            <h3 className="text-base">{productSubtitle}</h3>
          </div>

          {/* for mobile screen */}
          <div className="mx-[-1rem] mb-4 grid grid-cols-6 md:hidden">
            <figure className="col-span-full justify-center self-center justify-self-center">
              <img
                src={boxSelected.image}
                alt={boxSelected.title}
                className="min-w-auto"
              />
            </figure>
            <div className="col-span-2 flex aspect-square min-w-24 justify-center rounded-lg">
              <img src={BestBean} alt="Bean" className="max-h-[105px]" />
            </div>
            <div className="col-span-2 col-start-3 flex aspect-square min-w-24 justify-center rounded-lg">
              <img src={Spaceman} alt="Spaceman" className="max-h-[105px]" />
            </div>
            <div className="col-span-2 col-start-5 flex aspect-square min-w-24 justify-center rounded-lg">
              <img src={Delivery} alt="Cup" className="max-h-[105px]" />
            </div>
          </div>

          <div className="mb-6">
            <ul className="space-y-2">
              {boxSelected.description.map((des) => (
                <li key={des}>
                  <i className="mr-2 text-[#f5d577]">{bean}</i>
                  {des}
                </li>
              ))}
            </ul>

            <h3 className="mt-6 text-base font-extrabold">
              {productSelectHeader}
              <span className="text-[#494949]">{boxSelected.title}</span>
            </h3>

            {children}

            <div className="max-w-[420px]">
              <div className="mb-2">
                <form action="#">
                  <ButtonArrow
                    buttonStyle={`bg-[#f5d577] px-4 py-3 hover:bg-[#ddbf6d] h-full w-full`}
                  >
                    <p className="mr-3 text-sm font-semibold uppercase">
                      Membership
                    </p>
                    <div className="flex items-center gap-1 text-sm font-semibold">
                      <span
                        className="text-[#8c7c4d]"
                        style={{ textDecoration: "line-through" }}
                      >
                        $84.00
                      </span>
                      <span>$64.00</span>
                    </div>
                  </ButtonArrow>
                </form>

                <ul className="space-y-1 px-2 py-4">
                  <li className="flex items-center gap-2 text-sm">
                    <i>{check}</i>Ships Every 4 Weeks
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <i>{check}</i>Pause or Cancel Anytime
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <i>{check}</i>Variety of Coffees from Award-Winning Roasters
                  </li>
                </ul>
              </div>

              <ButtonArrow
                buttonStyle={
                  "px-4 py-3 h-full w-full text-[#808080] hover:bg-[#2c2b2b] hover:border-0 hover:text-white border-black border-[1px]"
                }
                arrowStyle={"text-[#2c2b2b] group-hover:text-white"}
              >
                <p className="mr-3 text-sm font-semibold uppercase group-hover:text-[#7a7d7d]">
                  One time purchase
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <span className="group-hover:text-[#7a7d7d]">$84.00</span>
                </div>
              </ButtonArrow>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
