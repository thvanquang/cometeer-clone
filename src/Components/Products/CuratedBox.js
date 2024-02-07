import React, { useState } from "react";

import MixedPackage from "../../Assets/Products/MixedPackage.png";
import LightPackage from "../../Assets/Products/LightPackage.png";
import LightNMediumPackage from "../../Assets/Products/LightandMediumPackage.png";
import MediumPackage from "../../Assets/Products/MediumPackage.png";
import MediumNDarkPackage from "../../Assets/Products/MediumandDarkPackage.png";
import DarkPackage from "../../Assets/Products/DarkPackage.png";
import Products from "../../Utilities/Products";

const BOXS = [
  {
    title: "Mixed",
    image: MixedPackage,
    description: [
      "An assortment of out favorites",
      "Perfect for figuring out what you love",
    ],
  },
  {
    title: "Light",
    image: LightPackage,
    description: ["Juicy & Floral", "Best Drunk Black"],
  },
  {
    title: "Light & Medium",
    image: LightNMediumPackage,
    description: [
      "Rotating assortment of light and medium roast coffees",
      "Perfect for enjoying classic black or in milk based drinks",
    ],
  },
  {
    title: "Medium",
    image: MediumPackage,
    description: ["Smooth & Balanced", "Perfect for Every Style"],
  },
  {
    title: "Medium & Dark",
    image: MediumNDarkPackage,
    description: [
      "Rotating assortment of medium and dark roast coffees",
      "Perfect for enjoying classic black, in milk based drinks, or with cream and sugar",
    ],
  },
  {
    title: "Dark",
    image: DarkPackage,
    description: ["Rich & Roasty", "Perfect for Lattes"],
  },
];

const CuratedBox = () => {
  const [boxSelector, setBoxSelector] = useState("Mixed");

  const boxSelected = BOXS.find((box) => box.title === boxSelector);

  return (
    <div>
      <Products boxSelected={boxSelected}>
        <div className="mb-8 flex gap-2 overflow-scroll p-2 text-white sm:overflow-hidden">
          <button
            onClick={() => setBoxSelector("Mixed")}
            autoFocus
            className="relative z-0 h-16 w-16 min-w-16 overflow-hidden rounded-xl border-2 border-white bg-[#8d644c] p-0 outline outline-2 drop-shadow-lg transition-transform ease-out hover:-translate-y-1 focus:outline-black "
          >
            <div className="before:absolute  before:left-0 before:top-[50%] before:-z-10 before:aspect-square before:w-full before:bg-[#422513] before:p-4 before:content-['']">
              <p className="z-10 flex h-fit w-full items-center justify-center bg-[#633921] py-[2px] text-xs font-semibold">
                Mixed
              </p>
            </div>
          </button>
          <button
            onClick={() => setBoxSelector("Light")}
            className="h-16 w-16 min-w-16 rounded-xl border-2 border-white bg-[#8d644c] p-0 outline outline-2 drop-shadow-lg transition-transform ease-out hover:-translate-y-1 focus:outline-black"
          >
            <div>
              <p className="text-center text-xs font-semibold">Light</p>
            </div>
          </button>
          <button
            onClick={() => setBoxSelector("Light & Medium")}
            className="relative z-0 h-16 w-16 min-w-16 overflow-hidden rounded-xl border-2 border-white bg-[#8d644c] p-0 outline outline-2 drop-shadow-lg transition-transform ease-out hover:-translate-y-1 focus:outline-black"
          >
            <div className="before:absolute  before:left-0 before:top-[50%] before:-z-10 before:aspect-square before:w-full before:bg-[#633921] before:p-4 before:content-['']">
              <p className="z-10 flex flex-col text-xs font-semibold">
                <span>Light</span>
                <span>&</span>
                <span>Medium</span>
              </p>
            </div>
          </button>
          <button
            onClick={() => setBoxSelector("Medium")}
            className="h-16 w-16 min-w-16 rounded-xl border-2 border-white bg-[#633921] p-0 outline outline-2 drop-shadow-lg transition-transform ease-out hover:-translate-y-1 focus:outline-black"
          >
            <div>
              <p className="text-center text-xs font-semibold">Medium</p>
            </div>
          </button>
          <button
            onClick={() => setBoxSelector("Medium & Dark")}
            className="relative z-0 h-16 w-16 min-w-16 overflow-hidden rounded-xl border-2 border-white bg-[#633921] p-0 outline outline-2 drop-shadow-lg transition-transform ease-out hover:-translate-y-1 focus:outline-black"
          >
            <div className="before:absolute  before:left-0 before:top-[50%] before:-z-10 before:aspect-square before:w-full before:bg-[#422513] before:p-4 before:content-['']">
              <p className="z-10 flex flex-col text-xs font-semibold">
                <span>Medium</span>
                <span>&</span>
                <span>Dark</span>
              </p>
            </div>
          </button>
          <button
            onClick={() => setBoxSelector("Dark")}
            className="h-16 w-16 min-w-16 rounded-xl border-2 border-white bg-[#422513] p-0 outline outline-2 drop-shadow-lg transition-transform ease-out hover:-translate-y-1 focus:outline-black"
          >
            <div>
              <p className="text-center text-xs font-semibold">Dark</p>
            </div>
          </button>
        </div>
      </Products>
    </div>
  );
};

export default CuratedBox;
