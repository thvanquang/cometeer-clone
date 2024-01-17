import React from "react";

import Bean from "../Assets/Products/bean.png";
import Spaceman from "../Assets/Products/spaceman.png";
import Cup from "../Assets/Products/cup.png";

import DarkPackage from "../Assets/Products/DarkPackage.png";

import DarkCup from "../Assets/Products/DarkCup.png";

import { bean } from "../Assets/icons/icons";

const Products = () => {
  return (
    <div className="gap-4 md:flex">
      <div className="grid grid-cols-4 gap-4 p-8">
        <div className="col-span-3 rounded-lg bg-blue-300">
          <img src={DarkPackage} alt="DarkPackage" />
        </div>

        <div className="flex flex-col items-center justify-between gap-4">
          <div className="aspect-square min-w-24 rounded-lg bg-blue-300 p-8">
            <img
              src={Bean}
              alt="Bean"
              className="max-h-[3rem] lg:max-h-[4rem]"
            />
          </div>
          <div className="aspect-square min-w-24 rounded-lg bg-blue-300 p-8">
            <img
              src={Spaceman}
              alt="Spaceman"
              className="max-h-[3rem] lg:max-h-[4rem]"
            />
          </div>
          <div className="aspect-square min-w-24 rounded-lg bg-blue-300 p-8">
            <img
              src={Cup}
              alt="Cup"
              className="m-auto max-h-[3rem] lg:max-h-[4rem]"
            />
          </div>
        </div>

        <img
          src={DarkCup}
          alt="cup of dark coffee"
          className="col-span-full min-w-[100%] rounded-lg"
        />
      </div>

      <div className="min-w-[50%]">
        <div className="my-4 border-t-[1px] border-[#d0d0d0] text-center">
          <span className="inline-block translate-y-[-14px] bg-[#f3f5e8] px-2">
            SHOP COFFEES
          </span>
        </div>

        <div className="mb-6">
          <h1>Mixed Roast Box</h1>
          <h2>32 Cups Total, 4 Unique Coffees</h2>
        </div>

        <ul>
          <li>
            <i className="mr-2 text-[#f5d577]">{bean}</i>
            An assortment of our favorites
          </li>
          <li>
            <i className="mr-2 text-[#f5d577]">{bean}</i>
            Perfect for figuring out what you love
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Products;
