import React, { useState } from "react";

import HalfCaff from "../../Assets/HalfNDecafBox/HalfCaff.png";
import Decaf from "../../Assets/HalfNDecafBox/Decaf.png";
import Products from "../../Utilities/Products";

const BOXS = [
  {
    title: "Decaf",
    image: Decaf,
    description: [
      "Assortment of decaf coffees",
      "Perfect for the evening cup or an espresso martini",
    ],
  },
  {
    title: "Half Caff",
    image: HalfCaff,
    description: [
      "Assortment of half-caff coffees",
      "Perfect for maximum flavor and quality with half the caffeine boost",
    ],
  },
];

const HalfNDecafBox = () => {
  const [boxSelector, setBoxSelector] = useState("Decaf");

  const boxSelected = BOXS.find((box) => box.title === boxSelector);
  return (
    <Products type={"halfNDecaf"} boxSelected={boxSelected}>
      <div className="mb-8 flex gap-2 overflow-hidden p-2 text-white">
        <button
          onClick={() => setBoxSelector("Decaf")}
          className="h-16 w-16 min-w-16 rounded-xl border-2 border-white bg-black p-0 outline outline-2 drop-shadow-lg transition-transform ease-out hover:-translate-y-1 focus:outline-black"
        >
          <div>
            <p className="text-center text-xs font-semibold">Decaf</p>
          </div>
        </button>

        <button
          onClick={() => setBoxSelector("Half Caff")}
          className="h-16 w-16 min-w-16 rounded-xl border-2 border-white bg-[#633921] p-0 outline outline-2 drop-shadow-lg transition-transform ease-out hover:-translate-y-1 focus:outline-black"
        >
          <div>
            <p className="text-center text-xs font-semibold">
              Half<span>Caff</span>
            </p>
          </div>
        </button>
      </div>
    </Products>
  );
};

export default HalfNDecafBox;
